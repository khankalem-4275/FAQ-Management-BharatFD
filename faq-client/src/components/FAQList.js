import React, { useEffect, useState } from "react";
import axios from "axios";
import '../index.css';

const FAQList = ({ language }) => {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    axios
      .get(`https://faq-management-bharatfd-2.onrender.com/api/faqs?lang=${language}`)
      .then((res) => setFaqs(res.data))
      .catch((err) => console.error(err));
  }, [language]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">FAQs</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
            <span className="ml-6 flex-shrink-0">
              <svg
                className={`w-6 h-6 transform ${
                  activeIndex === index ? "rotate-180" : ""
                } transition-transform duration-200`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </button>
          {activeIndex === index && (
            <div className="px-6 py-4 border-t border-gray-200">
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          )}
        </div>
      ))}
      {faqs.length === 0 && (
        <p className="text-center text-gray-500 py-8">No FAQs available</p>
      )}
    </div>
  );
};

export default FAQList;