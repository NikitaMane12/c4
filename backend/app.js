const express = require("express");
// const { swaggerUi, swaggerDocs } = require("./swagger");
const { setup } = require("swagger-ui-express");
const bodyParser = require("body-parser");
const { loggers } = require("winston");
const Orderroutes = require("./routes/order");
const routerReview = require("./routes/review");
const customerRouter = require("./routes/Customer");
const BookRouter = require("./routes/book");
const socketIo = require("socket.io");
const http = require("http");

const sequelize = require("./confilg/database.js");
const mongoose = require("mongoose");

const { myEmitter, notifyOrderChanged } = require("./services/eventEmitter");
const app = express();
// app.use("/api-docs", swaggerUi.serve, setup(swaggerDocs));
app.use(bodyParser.json());
app.use((req, res, next) => {
  loggers.info(`request:${req.method} ${req.url}`);
  next();
});
app.use("/routerOrders", Orderroutes);
app.use("/review", routerReview);
app.use("customer", customerRouter);
app.use("/book", BookRouter);

app.use((err, req, res, next) => {
  logger.error(`Error:${err.message}`);
  res.status(500).send(err.message);
});

const server = http.createServer(app);
const io = socketIo(server);
io.on("connection", (soket) => {
  console.log("A user is connected");
  soket.on("diconnected", () => {
    console.log("A user is disconnected");
  });
});

myEmitter.on("orderPlaced", (order) => {
  io.emit("orderchanged", order);
});
sequelize.sync().then(() => {
  console.log("Sequlize models sync");
  mongoose.Connection.once("open", () => {
    console.log("connected database");
    server.listen(3001, () => {
      console.log(`server is running in ${3001}`);
    });
  });
});
module.exports = app;
