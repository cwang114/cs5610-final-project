import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FlightService} from '../../../service/flight.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Flight} from '../../../model/Flight';
import {Airport} from '../../../model/Airport';
import {AirportService} from '../../../service/airport.service';

@Component({
    selector: 'app-flight-new',
    templateUrl: './flight-new.component.html',
    styleUrls: ['./flight-new.component.css']
})
export class FlightNewComponent implements OnInit {

    @ViewChild('f') flightForm: NgForm;
    originAirport: Airport;
    destinationAirport: Airport;

    constructor(private flightService: FlightService,
                private airportService: AirportService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
    }

    saveFlight() {
        const origin = this.flightForm.value.origin;
        const destination = this.flightForm.value.destination;
        this.airportService.findAirportByCode(origin).subscribe(
            airport => {
                this.originAirport = airport;
                this.airportService.findAirportByCode(destination).subscribe(
                    des => {
                        this.destinationAirport = des;
                        const flightNumber = this.flightForm.value.flightNumber;
                        const operatingAirLineCode = this.flightForm.value.operatingAirlineCode;
                        const operatingAirLineName = this.flightForm.value.operatingAirlineName;
                        const marketingAirLineCode = this.flightForm.value.marketingAirlineCode;
                        const marketingAirLineName = this.flightForm.value.marketingAirlineName;
                        const flightStatus = this.flightForm.value.flightStatus;
                        const distance = this.flightForm.value.distance;
                        const scheduledDepartureTime = this.flightForm.value.scheduledDepartureTime;
                        const scheduledArrivalTime = this.flightForm.value.scheduledArrivalTime;
                        const duration = this.flightForm.value.duration;
                        const arrivalDayIndicator = this.flightForm.value.arrivalDayIndicator;
                        const aircraftType = this.flightForm.value.aircraftType;
                        const mealCode = this.flightForm.value.mealCode;
                        const flight = new Flight(flightNumber, operatingAirLineCode, operatingAirLineName, marketingAirLineCode,
                            marketingAirLineName, flightStatus, this.originAirport, this.destinationAirport, distance,
                            scheduledDepartureTime, scheduledArrivalTime, duration,
                            arrivalDayIndicator, aircraftType, mealCode);
                        this.flightService.createFlight(flight).subscribe(
                            flight => this.goBack()
                        );
                    }
                );
            });


    }

    goBack() {
        this.router.navigate(['/admin/flight-management']);
    }

}
