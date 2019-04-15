import {Component, EventEmitter, Input, NgZone, OnInit, Output} from '@angular/core';
import {User} from '../../model/User';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentication.service';
import {Role} from '../../model/Role';

@Component({
    selector: 'app-headerbar',
    templateUrl: './headerbar.component.html',
    styleUrls: ['./headerbar.component.css']
})
export class HeaderbarComponent implements OnInit {

    @Input()
    currentUser: User;

    @Output()
    changeCurrentUser = new EventEmitter<User>();

    constructor(private router: Router,
                private authenticationService: AuthenticationService) {
        if (this.authenticationService.currentUser) {
            this.authenticationService.currentUser.subscribe(
                x => {
                    console.log('x is ' + JSON.stringify(x));
                    this.currentUser = x;
                    console.log('After equalling to x, the current user is ' + JSON.stringify(this.currentUser));
                });
        }
    }

    ngOnInit() {
    }

    isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Admin;
    }

    isLoggedIn() {
        console.log('inside isloggedin(), the current user is ' + JSON.stringify(this.currentUser));
        console.log('At this time, the current user in authentic service is ' +
            JSON.stringify(this.authenticationService.currentUserValue));
        return this.currentUser !== null;
    }

    logout() {
        console.log('headbar.ts logout() called');
        this.currentUser = null;
        this.changeCurrentUserFunc(this.currentUser);
        this.authenticationService.logout();
    }

    changeCurrentUserFunc(user: User) {
        this.changeCurrentUser.emit(user);
    }

}
