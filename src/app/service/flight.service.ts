import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Flight} from '../model/Flight';
import {User} from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  baseUrl = environment.baseUrl;
  flightApiUrl = '/api/flight/';

  constructor(private http: HttpClient) { }

  findAllFlights() {
    console.log('front flight service findAllFlights() called');
    return this.http.get<Flight[]>(this.baseUrl + '/api/find/flight/all');
  }

  createFlight(flight) {
    console.log('front flight service createFlight() called');
    return this.http.post<Flight>(
        this.baseUrl + this.flightApiUrl,
        flight);
  }

  findFlightById(flightId) {
    console.log('front flight service findflightById() called');
    // Only need to call server's url to get the data.
    return this.http.get<Flight>(this.baseUrl + this.flightApiUrl + flightId);


  }

  updateFlight(flightId, flight) {
    console.log('front flight service updateFlight() called');
    // '/api/website/:websiteId/flight/:flightId'
    return this.http.put<Flight>(this.baseUrl + this.flightApiUrl + flightId, flight);
  }

  deleteFlight(flightId) {
    console.log('front flight service deleteFlight() called');
    // '/api/website/:websiteId/flight/:flightId'
    return this.http.delete<Flight>(this.baseUrl + this.flightApiUrl + flightId);
  }
}
