const express = require("express");
const Order = require("../models/Order");
const Customer = require("../models/customer");
const Orderroutes = express.Router();
Orderroutes.get("/customer/:customerId", async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: { CustomerId: req.params.customerId },
      include: [Customer],
    });
    res.json(orders);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
module.exports = Orderroutes;
