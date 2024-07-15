const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
const notifyOrderplaced = (order) => {
  myEmitter.on("orderPlaced", order);
};
module.exports = { myEmitter, notifyOrderplaced };
