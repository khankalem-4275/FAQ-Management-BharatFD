const Faq = require("../models/Faq");
const redis = require("redis");
const axios = require("axios");

const client = redis.createClient();
client.connect();

const translateText = async (text, targetLang) => {
  try {
    const res = await axios.get(`https://translate.googleapis.com/translate_a/single`, {
      params: {
        client: "gtx",
        sl: "en",
        tl: targetLang,
        dt: "t",
        q: text,
      },
    });
    return res.data[0][0][0];
  } catch (err) {
    console.error("Translation error:", err);
    return text;
  }
};

const getFaqs = async (req, res) => {
  try {
    const lang = req.query.lang || "en";
    const cachedFaqs = await client.get(`faqs_${lang}`);

    if (cachedFaqs) {
      console.log("Cache hit successfull");
      return res.json(JSON.parse(cachedFaqs));
    }

    const faqs = await Faq.find();
    const translatedFaqs = faqs.map((faq) => ({
      question: faq.translations[`question_${lang}`] || faq.question,
      answer: faq.translations[`answer_${lang}`] || faq.answer,
    }));

    await client.set(`faqs_${lang}`, JSON.stringify(translatedFaqs), { EX: 3600 });

    res.json(translatedFaqs);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const addFaq = async (req, res) => {
  try {
    const { question, answer } = req.body;

    const translations = {
      question_hi: await translateText(question, "hi"),
      question_bn: await translateText(question, "bn"),
      answer_hi: await translateText(answer, "hi"),
      answer_bn: await translateText(answer, "bn"),
    };

    const newFaq = new Faq({ question, answer, translations });
    await newFaq.save();

    res.status(201).json(newFaq);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getFaqs, addFaq };
