const winston = require("winston");
var {Loggly} = require('winston-loggly-bulk');
require("express-async-errors");
require("winston-mongodb");

module.exports = function () {
  process.on("uncaughtException", (ex) => {
    winston.error(ex.message);
  });

  process.on("unhandledRejection", (ex) => {
    winston.error(ex.message);
  });

  winston.add(new winston.transports.File({ filename: "logfile.log" }));
  winston.add(
    new winston.transports.MongoDB({ db: "mongodb://127.0.0.1/E-commerceApi" })
  );

  winston.add(new Loggly({
    token: "05b32c5a-e107-44a0-a2c3-d93ce3245c80",
    subdomain: "mazenothman",
    tags: ["Winston-NodeJS-ECommerce"],
    json: true
}));
};
