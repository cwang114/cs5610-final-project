var mongoose = require('mongoose');
var airportSchema = require('./airport.schema.server');
var airportModel = mongoose.model('Airport', airportSchema);

// airportService at server side will call this function
airportModel.createAirport = createAirport;
airportModel.findAirportById = findAirportById;
airportModel.findByAirportCode = findByAirportCode;
airportModel.findByAirportName = findByAirportName;
airportModel.findByCityName = findByCityName;
airportModel.findByCityCode = findByCityCode;
airportModel.updateAirport = updateAirport;
airportModel.deleteAirport = deleteAirport;

module.exports = airportModel;

// functions go here
function createAirport(airport) {
    console.log('Mongoose: createAirport() called');
    return airportModel.create(airport);
}

function findAirportById(airportId) {
    console.log('Mongoose: findAirportById() called: ' + airportId);
    return airportModel.findById(airportId);
}
function findByAirportCode(airportCode) {
    console.log('Mongoose: findAirportByAirportCode() called: ' + airportCode);
    return airportModel.findOne({airportCode: airportCode});
}

function findByAirportName(airportName) {
    console.log('Mongoose: findAirportByAirportName() called' + airportName);
    return airportModel.findOne({airportName: airportName});
}

function findByCityCode(cityCode) {
    console.log('Mongoose: findAirportByCityCode() called: ' + cityCode);
    return airportModel.find({cityCode: cityCode});
}

function findByCityName(cityName) {
    console.log('Mongoose: findAirportByCityName() called' + cityName);
    return airportModel.find({cityName: cityName});
}

function updateAirport(airportId, airport) {
    console.log('Mongoose: updateAirport() called');
    return airportModel.updateOne({_id: airportId}, airport);
}

function deleteAirport(airportId) {
    console.log('Mongoose: deleteAirport() called');
    return airportModel.deleteOne({_id: airportId}, function (err) {
            if (err) {
                return handleError(err);
            } else {
                return null;
            }
        }
    );

}





