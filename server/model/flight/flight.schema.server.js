var mongoose = require('mongoose');
var airportSchema = require('../airport/airport.schema.server');
var flightSchema = new mongoose.Schema({

    /**
     * flightNumber: the flight number. eg: "0868".
     */
    flightNumber: String,

    /**
     * operatingAirlineCode: the airline code of operating airline. eg: "AA".
     */
    operatingAirlineCode: String,

    /**
     * operatingAirlineName: the name of operating airline. eg: "American Airline".
     */
    operatingAirlineName: String,

    /**
     * marketingAirlineCode: the airline code of marketing airline. eg: "AA".
     */
    marketingAirlineCode: String,

    /**
     * marketingAirlineName: the name of marketing airline. eg: "American Airline".
     */
    marketingAirlineName: String,

    /**
     * isFlightRenumbered: whether this flight is renumbered.
     */
    isFlightRenumbered: Boolean,

    /**
     * isFlightRerouted: whether this flight is rerouted.
     */
    isFlightRerouted: Boolean,

    /**
     * flightStatus: there are three status for a single future flight: on time delayed or cancelled.
     */
    flightStatus: {
        type: String,
        enum : ['On time', 'Delayed', 'Cancelled']
    },

    /**
     * origin: the starting airport.
     */
    origin: airportSchema,

    /**
     * destination: the ending airport.
     */
    destination: airportSchema,

    /**
     * distance: the distance in mile.
     */
    distance: Number,

    /**
     * scheduledDepartureTime: the date when the flight departures from origin in LOCAL TIME.
     * eg: "2019-03-29T19:24:34.775".
     */
    scheduledDepartureTime: Date,

    /**
     * scheduledArrivalTime: the date when the flight arrives at destination in LOCAL TIME.
     * eg: "2019-03-29T19:24:34.775".
     */
    scheduledArrivalTime: Date,

    /**
     * duration: the calculated result of arrival time - departure time, and the result is represented in String.
     * eg: "2h53m".
     */
    duration: String,

    /**
     * arrivalDayIndicator: 'N' for next day, 'P' for previous day, 'S' for same day.
     */
    arrivalDayIndicator: {
        type: String,
        enum : ['N', 'P', 'S']
    },

    /**
     * aircraftType: the aircraft type IATA code. eg: "738" stands for model 737-800.
     */
    aircraftType: String,

    /**
     * mealCode: the meal options in this flight.
     */
    mealCode: {
        type: String,
        enum : ['Meal', 'Cold Meal', 'Hot Meal', 'Meals for purchase', 'Snack', 'Snacks for purchase',
        'Alcohol for purchase', 'Alcohol complimentary']
    },

}, {
    collection: 'flight'         // In the database, the collection name is 'flight'.
});

module.exports = flightSchema;
