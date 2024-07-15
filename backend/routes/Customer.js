const express = require("express");
const Customer = require("../models/customer");
const customerRouter = express.Router();
customerRouter.get("/", async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

customerRouter.post("/", async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
module.exports = customerRouter;
