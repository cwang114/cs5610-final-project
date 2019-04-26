module.exports = function (app) {
    
    const airportModel = require('../model/airport/airport.model.server');

    app.post('/api/airport', createAirport);
    app.get('/api/airport/:airportId', findAirportById);
    app.get('/api/airport/airport-code/:airportCode', findAirportByCode);
    app.put('/api/airport/:airportId', updateAirport);
    app.delete('/api/airport/:airportId', deleteAirport);
    app.get('/api/find/airport/all', findAllAirports);     // only for testing

    // function list
    function findAllAirports(req, res) {
        airportModel.find().exec(
            function (err, airports) {
                if (err) {
                    return res.status(400).send(err);
                }
                return res.json(airports);
            }
        );
    }

    function createAirport(req, res) {
        var airport = req.body;

        airportModel.createAirport(airport)
            .then(function (airport) {
                    res.status(200).send(airport);
                    return airport;  // must return airport here, in order to prevent further asynchronous calls.
                },
                function (err) {
                    console.log('create airport error! ' + err);
                    res.sendStatus(400);
                    return err;

                });
    }


    function findAirportById(req, res){
        var airportId = req.params['airportId'];
        airportModel.findAirportById(airportId).exec(
            function (err, airport) {
                if (err) {
                    return res.status(400).send(err);
                }
                if (airport == null) {
                    return res.sendStatus(404);
                }
                return res.status(200).send(airport);
            }
        );

    }

    function findAirportByCode(req, res){
        var airportCode = req.params['airportCode'];
        airportModel.findByAirportCode(airportCode).exec(
            function (err, airport) {
                if (err) {
                    return res.status(400).send(err);
                }
                if (airport == null) {
                    return res.sendStatus(404);
                }
                return res.status(200).send(airport);
            }
        );

    }

    function updateAirport(req, res) {
        var airportId = req.params['airportId'];
        var airport = req.body;

        airportModel.updateAirport(airportId, airport).exec(
            function (err, airport) {
                if (err) {
                    return res.status(400).send(err);
                }
                return res.status(200).send(airport);
            }
        );
    }

    function deleteAirport(req, res) {
        var airportId = req.params['airportId'];
        airportModel.deleteAirport(airportId).exec(
            function (err, airport) {
                if (err) {
                    return res.status(400).send(err);
                } else {
                    return res.status(200).send(airport);
                }

            }
        );
    }
};
