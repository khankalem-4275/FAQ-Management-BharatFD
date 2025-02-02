const Faq = require("../models/Faq");
const redis = require("redis");
const axios = require("axios");
require("dotenv").config();

// const client = redis.createClient();
// client.connect();


const client = redis.createClient({
  url: process.env.REDIS_URL,
});
client.connect()
  .then(() => console.log("Connected to Redis"))
  .catch(err => console.error("Redis connection error:", err));


// const client = createClient({
//   url: process.env.REDIS_URL,
//   socket: {
//     tls: true, // Ensure secure connection (Upstash requires TLS)
//     rejectUnauthorized: false, // Allow self-signed certs (optional)
//   },
// });

// client.on('error', (err) => console.error('Redis Error:', err));

// (async () => {
//   await client.connect();
//   console.log('Connected to Upstash Redis!');
// })();

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

    redis.flushdb().then(() => console.log("Cache cleared"));

    res.status(201).json(newFaq);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getFaqs, addFaq };
