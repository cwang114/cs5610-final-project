import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AirportService} from '../service/airport.service';
import {Airport} from '../model/Airport';

@Component({
  selector: 'app-airport-new',
  templateUrl: './airport-new.component.html',
  styleUrls: ['./airport-new.component.css']
})
export class AirportNewComponent implements OnInit {

  @ViewChild('f') airportForm: NgForm;

  constructor(private airportService: AirportService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  saveAirport() {
    const airportCode = this.airportForm.value.airportCode;
    const airportName = this.airportForm.value.airportName;
    const cityCode = this.airportForm.value.cityCode;
    const cityName = this.airportForm.value.cityName;
    const airport = new Airport(airportCode, airportName, cityCode, cityName);
    this.airportService.createAirport(airport).subscribe(
        airport => this.goBack()
    );

  }
  goBack() {
    this.router.navigate(['/admin/airport-management']);
  }

}
