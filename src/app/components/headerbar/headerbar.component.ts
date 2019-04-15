import {Component, OnInit} from '@angular/core';
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

    currentUser: User;

    constructor(private router: Router,
                private authenticationService: AuthenticationService) {
        if (this.authenticationService.currentUser) {
            this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        }
    }

    ngOnInit() {
    }

    get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Admin;
    }

    get isLoggedIn() {
        return this.currentUser !== null;
    }

    logout() {
        console.log('headbar.ts logout() called');
        this.authenticationService.logout();
        this.currentUser = null;
        this.router.navigate(['/']);
    }

}
