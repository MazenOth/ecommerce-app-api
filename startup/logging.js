const winston = require("winston");
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
};
