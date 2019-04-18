import {AfterViewInit, Component, OnInit} from '@angular/core';
import {User} from '../../../model/User';
import {UserService} from '../../../service/user.service';
import {AuthenticationService} from '../../../service/authentication.service';
import {first} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit, OnInit {

  currentUserObservable: Observable<User>;
  currentUser: User;
  userFromApi: User;

  constructor(private userService: UserService,
              private authenticationService: AuthenticationService) {
    console.log('main constructor: ' + JSON.stringify(this.authenticationService.currentUserValue));
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    console.log('called main ngOnInit');
  }

  ngAfterViewInit(): void {
    if (this.currentUser !== null) {
      this.userService.findUserById(this.currentUser._id).pipe(first()).subscribe(user => {
        this.userFromApi = user;
      });
    }
  }

  onChangedUser(user: User) {
    this.currentUser = user;
  }

}
