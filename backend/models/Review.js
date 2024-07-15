const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
  content: { type: String, required: true },
});
const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;
