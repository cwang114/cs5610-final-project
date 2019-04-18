import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../../model/User';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../service/user.service';
import 'datatables.net';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements AfterViewInit, OnDestroy, OnInit {

  users: User[];
  dataTable: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private chRef: ChangeDetectorRef) { }


  ngOnInit() {
    console.log('on init called');
  }
  ngAfterViewInit() {
    console.log('after view init called');
    this.userService.findAllUsers().subscribe(
        users => {
          this.users = users;

          // You'll have to wait that changeDetection occurs and projects data into
          // the HTML template, you can ask Angular to that for you ;-)
          this.chRef.detectChanges();

          this.initDatatable();
        });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.destroyDataTable();
  }

  private initDatatable(): void {
    // Now you can use jQuery DataTables :
    const table: any = $('table');
    this.dataTable = table.DataTable({
      select: true
    });
  }

  private reInitDatatable(): void {
    this.destroyDataTable();
    setTimeout(() => this.initDatatable(), 0);
  }

  private destroyDataTable(): void {
    if (this.dataTable) {
      this.dataTable.destroy();
      this.dataTable = null;
    }
  }

  deleteUser(userId) {
    this.userService.deleteUser(userId).subscribe(
        () => {
          this.userService.findAllUsers().subscribe(
              users => {
                this.users = users;
                this.reInitDatatable();
              }
          );
        }
    );
  }

}
