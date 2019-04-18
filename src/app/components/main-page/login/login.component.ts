import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../../../service/authentication.service';

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

    constructor(private router: Router, private authenticationService: AuthenticationService) {
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
        this.authenticationService.login(body).subscribe(
            (user: any) => {
                this.router.navigate(['/']);
            }, (error: any) => {
                console.log(error);
            });
    }

    facebookLogin() {
        this.router.navigate(['/facebook/login']);
    }

}
