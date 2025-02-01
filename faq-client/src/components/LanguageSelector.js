import React from "react";
import '../index.css';

const LanguageSelector = ({ setLanguage }) => {
  return (
    <div className="flex justify-center">
      <select
        onChange={(e) => setLanguage(e.target.value)}
        className="block w-full max-w-xs px-4 py-2 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="bn">Bengali</option>
      </select>
    </div>
  );
};

export default LanguageSelector;