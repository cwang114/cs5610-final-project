import {Airport} from './Airport';

export class Flight {
    _id: string;
    flightNumber: string;
    operatingAirlineCode: string;
    operatingAirlineName: string;
    marketingAirlineCode: string;
    marketingAirlineName: string;
    flightStatus: string;
    origin: Airport;
    destination: Airport;
    distance: number;
    scheduledDepartureTime: Date;
    scheduledArrivalTime: Date;
    duration: string;
    arrivalDayIndicator: string;
    aircraftType: string;
    mealCode: string;

    constructor(flightNumber: string, operatingAirlineCode: string, operatingAirlineName: string, marketingAirlineCode: string,
                marketingAirlineName: string, flightStatus: string, origin: Airport, destination: Airport, distance: number,
                scheduledDepartureTime: Date, scheduledArrivalTime: Date, duration: string, arrivalDayIndicator: string,
                aircraftType: string, mealCode: string) {
        this.flightNumber = flightNumber;
        this.operatingAirlineCode = operatingAirlineCode;
        this.operatingAirlineName = operatingAirlineName;
        this.marketingAirlineCode = marketingAirlineCode;
        this.marketingAirlineName = marketingAirlineName;
        this.flightStatus = flightStatus;
        this.origin = origin;
        this.destination = destination;
        this.distance = distance;
        this.scheduledDepartureTime = scheduledDepartureTime;
        this.scheduledArrivalTime = scheduledArrivalTime;
        this.duration = duration;
        this.arrivalDayIndicator = arrivalDayIndicator;
        this.aircraftType = aircraftType;
        this.mealCode = mealCode;
    }
}
