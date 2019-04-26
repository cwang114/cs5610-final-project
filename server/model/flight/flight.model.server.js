var mongoose = require('mongoose');
var moment = require('moment');
var flightSchema = require('./flight.schema.server');
var flightModel = mongoose.model('Flight', flightSchema);

// flightService at server side will call this function
flightModel.createFlight = createFlight;
flightModel.findFlightById = findFlightById;
flightModel.findFlightByNumber = findFlightByFlightNumber;
flightModel.findFlightByAirlineCode = findFlightByAirlineCode;
flightModel.findFlightByFlightStatus = findFlightByFlightStatus;
flightModel.findFlightByOrigin = findFlightByOrigin;
flightModel.findFlightByDestination = findFlightByDestination;
flightModel.findFlightByAircraftType = findFlightByAircraftType;
flightModel.findFlightByDepartureTime = findFlightByDepartureTime;
flightModel.findFlightByArrivalTime = findFlightByArrivalTime;
flightModel.findFlightByDepartureAndArrivalTime = findFlightByDepartureAndArrivalTime;
flightModel.updateFlight = updateFlight;
flightModel.deleteFlight = deleteFlight;

module.exports = flightModel;

// functions go here

/**
 * Create a flight in the database.
 * @param flight: the input flight.
 * @returns the newly created flight.
 */

function createFlight(flight) {
    console.log('Mongoose: createFlight() called');
    return flightModel.create(flight);
}

function findFlightById(flightId) {
    console.log('Mongoose: findFlightById() called: ' + flightId);
    return flightModel.findById(flightId);
}

/**
 * Find a flight by its flight number.
 * @param flightNumber: the input flight number.
 * @returns a list of flights with the input flight number.
 */

function findFlightByFlightNumber(flightNumber) {
    return flightModel.find({flightNumber: flightNumber});
}

/**
 * Find a flight by its operating airline code.
 * @param airlineCode: the input airline code. eg: "AA".
 * @returns a list of flights with the input operating airline code.
 */

function findFlightByAirlineCode(airlineCode) {
    return flightModel.find({operatingAirlineCode: airlineCode});
}

/**
 * Find a flight by its flight status.
 * @param flightStatus: the input flight status.
 * @returns a list of flights with the input flight status.
 */

function findFlightByFlightStatus(flightStatus) {
    return flightModel.find({flightStatus: flightStatus});
}

/**
 * Find a flight by its origin airport code.
 * @param originCode: the airport code of origin.
 * @returns a list of flights with the same origin airport code with the input originCode.
 */

function findFlightByOrigin(originCode) {
    return flightModel.find({'origin.airportCode': originCode});
}

/**
 * Find a flight by its destination airport code.
 * @param destinationCode: the airport code of origin.
 * @returns a list of flights with the same destination airport code with the input destinationCode.
 */

function findFlightByDestination(destinationCode) {
    return flightModel.find({'destination.airportCode': destinationCode});
}

/**
 * Find a flight by its aircraft type.
 * @param aircraftType: the input aircraft type in string.
 * @returns a list of flights with the input aircraft type.
 */
function findFlightByAircraftType(aircraftType) {
    return flightModel.find({aircraftType: aircraftType});
}

/**
 * Find flights with a departure time at that departureDay.
 * @param departureDay the departure day in Date.
 * @returns a list of flights within the departure day.
 *
 * eg: departure time = "2019-01-01". The flights returned will have the departure time range from "2019-01-01 00:00" to
 * "2019-01-01 23:59".
 */
function findFlightByDepartureTime(departureDay) {
    const today = moment(departureDay).startOf('day');     // set to 12:00 am today
    return flightModel.find({
        departureTime: {
            $gte: today.toDate(),
            $lte: moment(today).endOf('day').toDate()
        }
    });

}

/**
 * Find flights with an arrival time at that arrivalDay.
 * @param arrivalDay the arrival time in Date.
 * @returns a list of flights within the day arrival time belongs.
 *
 * eg: arrival time = "2019-01-01". The flights returned will have the arrival time range from "2019-01-01 00:00" to
 * "2019-01-01 23:59".
 */
function findFlightByArrivalTime(arrivalDay) {
    const today = moment(arrivalDay).startOf('day');     // set to 12:00 am today
    return flightModel.find({
        arrivalTime: {
            $gte: today.toDate(),
            $lte: moment(today).endOf('day').toDate()
        }
    });
}

/**
 * Find flights with a departure time at that departureDay and an arrival time at that arrivalDay.
 * @param departureDay the day of departure.
 * @param arrivalDay the day of arrival.
 * @returns a list of flights with corresponding departure day and arrival day.
 */

function findFlightByDepartureAndArrivalTime(departureDay, arrivalDay) {
    const dToday = moment(departureDay).startOf('day');     // set to 12:00 am today
    const aToday = moment(arrivalDay).startOf('day');
    return flightModel.find({
        departureTime: {
            $gte: dToday.toDate(),
            $lte: moment(dToday).endOf('day').toDate()
        },
        arrivalDay: {
            $gte: aToday.toDate(),
            $lte: moment(aToday).endOf('day').toDate()
        }
    });
}

/**
 * Update a flight information.
 * @param flightId the id of the flight which needs to be updated.
 * @param flight the new flight.
 * @returns the updated flight.
 */

function updateFlight(flightId, flight) {
    console.log('Mongoose: updateFlight() called');
    return flightModel.updateOne({_id: flightId}, flight);
}

/**
 * Delete a flight.
 * @param flightId the id of the flight which needs to be deleted.
 * @returns {Promise}
 */

function deleteFlight(flightId) {
    console.log('Mongoose: deleteFlight() called');
    return flightModel.deleteOne({_id: flightId}, function (err) {
            if (err) {
                return handleError(err);
            } else {
                return null;
            }
        }
    );

}





