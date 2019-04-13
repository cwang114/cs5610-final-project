var mongoose = require('mongoose');
var airportSchema = new mongoose.Schema({

    /**
     * The code of airport. eg: "SEA" for Seattle-Tacoma Intl.
     */
    airportCode: String,

    /**
     * The name of airport. eg: "Seattle-Tacoma Intl."
     */
    airportName: String,

    /**
     * The code of city. eg: "SEA" for Seattle.
     */
    cityCode: String,

    /**
     * The name of city. eg: "Seattle".
     */
    cityName: String

}, {
    collection: 'airport'         // In the database, the collection name is 'airport'.
});

module.exports = airportSchema;
