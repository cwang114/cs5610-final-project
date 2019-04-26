module.exports = function (app) {

    const flightModel = require('../model/flight/flight.model.server');

    app.post('/api/flight', createFlight);
    app.get('/api/flight/:flightId', findFlightById);
    app.put('/api/flight/:flightId', updateFlight);
    app.delete('/api/flight/:flightId', deleteFlight);
    app.get('/api/find/flight/all', findAllFlights);     // only for testing

    // function list
    function findAllFlights(req, res) {
        flightModel.find().exec(
            function (err, flights) {
                if (err) {
                    return res.status(400).send(err);
                }
                return res.json(flights);
            }
        );
    }

    function createFlight(req, res) {
        var flight = req.body;

        flightModel.createFlight(flight)
            .then(function (flight) {
                    res.status(200).send(flight);
                    return flight;  // must return flight here, in order to prevent further asynchronous calls.
                },
                function (err) {
                    console.log('create flight error! ' + err);
                    res.sendStatus(400);
                    return err;

                });
    }


    function findFlightById(req, res){
        var flightId = req.params['flightId'];
        flightModel.findFlightById(flightId).exec(
            function (err, flight) {
                if (err) {
                    return res.status(400).send(err);
                }
                if (flight == null) {
                    return res.sendStatus(404);
                }
                return res.status(200).send(flight);
            }
        );

    }

    function updateFlight(req, res) {
        var flightId = req.params['flightId'];
        var flight = req.body;

        flightModel.updateFlight(flightId, flight).exec(
            function (err, flight) {
                if (err) {
                    return res.status(400).send(err);
                }
                return res.status(200).send(flight);
            }
        );
    }

    function deleteFlight(req, res) {
        var flightId = req.params['flightId'];
        flightModel.deleteFlight(flightId).exec(
            function (err, flight) {
                if (err) {
                    return res.status(400).send(err);
                } else {
                    return res.status(200).send(flight);
                }

            }
        );
    }
};
