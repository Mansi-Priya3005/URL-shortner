import React from "react";
import UrlForm from "../components/UrlForm";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col items-center justify-center px-4">
      
      {/* Card */}
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">
        
        {/* Brand */}
        <h1 className="text-3xl font-extrabold text-center text-indigo-600">
          Shortify
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6 text-sm">
          Instantly shorten long URLs into clean, shareable links
        </p>

        {/* URL Form */}
        <UrlForm />

        {/* Divider */}
        <div className="mt-6 border-t pt-4 text-center text-xs text-gray-400">
          Fast • Secure • Minimal
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-6 text-xs text-gray-500">
        Built with ❤️ using React & Node.js
      </footer>
    </div>
  );
};

export default HomePage;
