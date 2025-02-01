const mongoose = require("mongoose");

const FaqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  translations: {
    question_hi: String,
    question_bn: String,
    answer_hi: String,
    answer_bn: String,
  },
});

module.exports = mongoose.model("Faq", FaqSchema);
