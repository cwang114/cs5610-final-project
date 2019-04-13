var mongoose = require('mongoose');
var airportSchema = require('../airport/airport.schema.server');
var flightSchema = require('../flight/flight.schema.server');
var routeSchema = new mongoose.Schema({

    /**
     * origin: the starting airport.
     */
    origin: airportSchema,

    /**
     * destination: the ending airport.
     */
    destination: airportSchema,

    /**
     * numberOfStops: the number of transfers of this route.
     * If no need to transfer, the numberOfStops = 0. There is 1 flight in legs array.
     * If there are 2 transfers, numberOfStops = 2. There are 3 flights in legs array.
     */
    numberOfStops: Number,

    /**
     * mileage: the total distance of all the fights in this route.
     */
    mileage: Number,

    /**
     * legs: the flights on this route.
     */
    legs: [flightSchema]

}, {
    collection: 'route'         // In the database, the collection name is 'route'.
});

module.exports = routeSchema;
