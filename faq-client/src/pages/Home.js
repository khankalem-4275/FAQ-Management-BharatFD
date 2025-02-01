import React, { useState } from "react";
import LanguageSelector from "../components/LanguageSelector";
import FAQList from "../components/FAQList";
import '../index.css';

const Home = () => {
  const [language, setLanguage] = useState("en");

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Multilingual FAQ Management
        </h1>
        <div className="mb-8">
          <LanguageSelector setLanguage={setLanguage} />
        </div>
        <FAQList language={language} />
      </div>
    </div>
  );
};

export default Home;