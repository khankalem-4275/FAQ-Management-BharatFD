import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Plus, Home as HomeIcon } from 'lucide-react';
import Home from './pages/Home.js';
import AddFAQPage from './pages/AddFAQPage.js';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex space-x-8">
                <Link
                  to="/"
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600"
                >
                  <HomeIcon className="w-5 h-5 mr-2" />
                  Home
                </Link>
                <Link
                  to="/add"
                  className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Add FAQ
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddFAQPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App