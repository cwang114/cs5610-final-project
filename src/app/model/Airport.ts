export class Airport {
    _id: string;
    airportCode: string;
    airportName: string;
    cityCode: string;
    cityName: string;


    constructor(airportCode: string, airportName: string, cityCode: string, cityName: string) {
        this.airportCode = airportCode;
        this.airportName = airportName;
        this.cityCode = cityCode;
        this.cityName = cityName;
    }
}
