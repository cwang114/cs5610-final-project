import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Airport} from '../../model/Airport';
import {ActivatedRoute, Router} from '@angular/router';
import {AirportService} from '../../service/airport.service';
import 'datatables.net';
@Component({
  selector: 'app-airport-management',
  templateUrl: './airport-management.component.html',
  styleUrls: ['./airport-management.component.css']
})
export class AirportManagementComponent implements AfterViewInit, OnDestroy, OnInit {

  airports: Airport[];
  dataTable: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private airportService: AirportService,
              private chRef: ChangeDetectorRef) { }


  ngOnInit() {
    console.log('on init called');
  }
  ngAfterViewInit() {
    console.log('after view init called');
    this.airportService.findAllAirports().subscribe(
        airports => {
          this.airports = airports;

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

  createAirport() {
    this.router.navigate(['admin', 'airport-new']);
  }
  deleteAirport(airportId) {
    this.airportService.deleteAirport(airportId).subscribe(
        () => {
          this.airportService.findAllAirports().subscribe(
              airports => {
                this.airports = airports;
                this.reInitDatatable();
              }
          );
        }
    );
  }

}
