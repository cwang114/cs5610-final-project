import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {User} from '../../model/User';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;
  currentUser: User;
  user: User;

  constructor(private userService: UserService,
              private router: Router,
              private authenticationService: AuthenticationService) {
    this.currentUser = null;
    this.user = new User('', '', '', '', '', '', new Date(), '',
        '', '', '', '', '', '', 'User');
  }

  ngOnInit() {
  }

  createUser() {
    const address1 = this.registerForm.value.addressLine1;
    const address2 = this.registerForm.value.addressLine2;
    const address = address1 + ', ' + address2;
    this.user.address = address;

    const day = this.registerForm.value.dobDay;
    const month = this.registerForm.value.dobMonth;
    const year = this.registerForm.value.dobYear;
    this.user.dateOfBirth = new Date(year, month, day);

    console.log(this.user);
    this.userService.register(this.user)
        .subscribe(
            (user: any) => {
              // console.log(data);
              this.router.navigate(['/login']);
              return;
            },
            (error: any) => {
              // this.error = error._body;
              console.log(error);
            }
        );

  }

}
