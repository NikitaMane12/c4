const socketIo = require("socket.io");
let io;
const init = (server) => {
  io = socketIo(server);
  io.on("connection", (socket) => {
    console.log("A user is connected");
    socket.on("disconnected", () => {
      console.log("a user id disconnected");
    });
  });
};
const notifyOrderChanged = (order) => {
  io.emit("oredrchanged", order);
};
module.exports = { init, notifyOrderChanged };
