import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {SharedService} from '../../service/shared.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    @ViewChild('f')
    loginForm: NgForm;
    errorFlag: boolean;
    errorMsg: string;
    rememberMe: boolean;

    constructor(private router: Router, private userService: UserService, private sharedService: SharedService) {
    }

    ngOnInit() {
    }

    login() {
        const username = this.loginForm.value.username;
        const password = this.loginForm.value.password;
        const body = {
            username: username,
            password: password
        };
        this.userService.login(body).subscribe(
            (user: any) => {
                // console.log('In login() component, the front end service returns: ' + user);
                this.sharedService.user = user;
                this.router.navigate(['/']);
            }, (error: any) => {
                console.log(error);
            });
    }

    facebookLogin() {
        this.router.navigate(['/facebook/login']);
    }

}
