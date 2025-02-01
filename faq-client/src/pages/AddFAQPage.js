import React from "react";
import AddFAQ from "../components/AddFAQ";
import '../index.css';

const AddFAQPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Add a New FAQ
        </h1>
        <AddFAQ />
      </div>
    </div>
  );
};

export default AddFAQPage;