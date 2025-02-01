const express = require("express");
const { getFaqs, addFaq } = require("../controllers/faqController");

const router = express.Router();

router.get("/", getFaqs);
router.post("/", addFaq);

module.exports = router;
