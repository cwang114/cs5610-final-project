module.exports = function (app){


  // separate the test restful call into another file and pass 'app' to that file.
  // Just include the 'test' file by 'require' word
  require("./services/airport.service.server")(app);
  require("./services/flight.service.server")(app);
  require("./services/route.service.server")(app);
  require("./services/user.service.server")(app);

};
