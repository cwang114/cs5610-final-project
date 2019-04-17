import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {User} from '../../model/User';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import { Subject } from 'rxjs';
import {DataTableDirective} from 'angular-datatables';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  users: User[];


  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private userService: UserService) { }


  ngOnInit() {
    this.userService.findAllUsers().subscribe(
        users => {
          this.users = users;
        });
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  deleteUser(userId) {
    this.userService.deleteUser(userId).subscribe(
        () => this.refresh()
    );
  }

  refresh() {
    this.router.navigate(['/admin/user-management']);
  }
  rerender(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

}
