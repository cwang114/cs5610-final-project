import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Flight} from '../../../model/Flight';
import {ActivatedRoute, Router} from '@angular/router';
import {FlightService} from '../../../service/flight.service';
import 'datatables.net';
@Component({
  selector: 'app-flight-management',
  templateUrl: './flight-management.component.html',
  styleUrls: ['./flight-management.component.css']
})
export class FlightManagementComponent implements AfterViewInit, OnDestroy, OnInit {

  flights: Flight[];
  dataTable: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private flightService: FlightService,
              private chRef: ChangeDetectorRef) { }


  ngOnInit() {
    console.log('on init called');
  }
  ngAfterViewInit() {
    console.log('after view init called');
    this.flightService.findAllFlights().subscribe(
        flights => {
          this.flights = flights;

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

  createFlight() {
    this.router.navigate(['admin', 'flight-new']);
  }
  updateFlight(flightId) {
    this.router.navigate(['admin', 'flight-update', flightId]);
  }
  deleteFlight(flightId) {
    this.flightService.deleteFlight(flightId).subscribe(
        () => {
          this.flightService.findAllFlights().subscribe(
              flights => {
                this.flights = flights;
                this.reInitDatatable();
              }
          );
        }
    );
  }

    parseDate(oldDate: Date) {
        // console.log('date get full year is: ' + date.getFullYear());
      const date = new Date(oldDate);
      const year = date.getFullYear().toString();
      const month = date.getMonth().toString();
      const day = date.getDate().toString();
      let hour = date.getHours().toString();
      hour = (hour.length < 2) ? '0' + hour : hour;
      let minute = date.getMinutes().toString();
      minute = (minute.length < 2) ? '0' + minute : minute;
      return year + '/' + month + '/' + day + ', ' + hour + ':' + minute;
    }
}

