const { model } = require("mongoose");
const { format } = require("sequelize/lib/utils");
const { createLogger, transports } = require("winston");

const logger = createLogger({
  level: "info",
  format: format.combine(format.timestamp(), format.json()),
  transports: [new transports.File({ filename: "loges/combines.log" })],
  transports: [
    new transports.File({ filename: "logs/error.log", level: "error" }),
  ],
});
model.exports = logger;
