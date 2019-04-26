import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Airport} from '../model/Airport';
import {User} from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  baseUrl = environment.baseUrl;
  airportApiUrl = '/api/airport/';

  constructor(private http: HttpClient) { }

  findAllAirports() {
    console.log('front airport service findAllAirports() called');
    return this.http.get<Airport[]>(this.baseUrl + '/api/find/airport/all');
  }

  createAirport(airport) {
    console.log('front airport service createAirport() called');
    return this.http.post<Airport>(
        this.baseUrl + this.airportApiUrl,
        airport);
  }

  findAirportById(airportId) {
    console.log('front airport service findairportById() called');
    // Only need to call server's url to get the data.
    return this.http.get<Airport>(this.baseUrl + this.airportApiUrl + airportId);


  }

  updateAirport(airportId, airport) {
    console.log('front airport service updateAirport() called');
    // '/api/website/:websiteId/airport/:airportId'
    return this.http.put<Airport>(this.baseUrl + this.airportApiUrl + airportId, airport);
  }

  deleteAirport(airportId) {
    console.log('front airport service deleteAirport() called');
    // '/api/website/:websiteId/airport/:airportId'
    return this.http.delete<Airport>(this.baseUrl + this.airportApiUrl + airportId);
  }

  findAirportByCode(airportCode) {
    console.log('front airport service findAirportByCode() called');
    return this.http.get<Airport>(this.baseUrl + this.airportApiUrl + 'airport-code/' + airportCode);
  }
}
