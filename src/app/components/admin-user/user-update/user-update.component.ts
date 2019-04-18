import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../../model/User';
import {UserService} from '../../../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  @ViewChild('f') userForm: NgForm;
  user: User;
  userId: string;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.user = new User('', '', '', '', '', '', new Date(), '',
        '', '', '', '', '', '', '');
  }

  ngOnInit() {
    this.activatedRoute.params
        .subscribe((params: any) => {
          // console.log(params);
          this.userId = params.userId;
        });
    this.userService.findUserById(this.userId).subscribe(
        user => this.user = user
    );
  }

  updateUser() {
    this.userService.updateUser(this.userId, this.user).subscribe(
        user => this.goBack()
    );

  }
  goBack() {
    this.router.navigate(['/admin/user-management']);
  }

}
