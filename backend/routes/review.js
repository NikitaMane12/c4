const express = require("express");
const Review = require("../models/Review");
const routerReview = express.Router();
routerReview.get("/book/:bookId", async (req, res) => {
  try {
    const reviews = await Review.find({ book: req.params.bookId }).populate(
      "book"
    );
    res.json(reviews);
  } catch (error) {
    res.status(500).send(error.meassage);
  }
});
module.exports = routerReview;
