import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AirportService} from '../../../service/airport.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Airport} from '../../../model/Airport';

@Component({
  selector: 'app-airport-update',
  templateUrl: './airport-update.component.html',
  styleUrls: ['./airport-update.component.css']
})
export class AirportUpdateComponent implements OnInit {

  @ViewChild('f') airportForm: NgForm;
  airport: Airport;
  airportId: string;

  constructor(private airportService: AirportService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.airport = new Airport('', '', '', '');
  }

  ngOnInit() {
    this.activatedRoute.params
        .subscribe((params: any) => {
          // console.log(params);
          this.airportId = params.airportId;
        });
    this.airportService.findAirportById(this.airportId).subscribe(
        airport => this.airport = airport
    );
  }

  updateAirport() {
    const airportCode = this.airportForm.value.airportCode;
    const airportName = this.airportForm.value.airportName;
    const cityCode = this.airportForm.value.cityCode;
    const cityName = this.airportForm.value.cityName;
    const airport = new Airport(airportCode, airportName, cityCode, cityName);
    this.airportService.updateAirport(this.airportId, airport).subscribe(
        airport => this.goBack()
    );

  }
  goBack() {
    this.router.navigate(['/admin/airport-management']);
  }


}
