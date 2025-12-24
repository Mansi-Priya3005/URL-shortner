import React, { useState } from "react";
import { createShortUrl } from "../api/shortUrl.api";
import { useSelector } from "react-redux";
import { queryClient } from "../main";

const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [customSlug, setCustomSlug] = useState("");
  const [shortUrl, setShortUrl] = useState(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { isAuthenticated } = useSelector((state) => state.auth);

  const isValidUrl = (value) => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async () => {
    if (!isValidUrl(url)) {
      setError("Please enter a valid URL.");
      return;
    }

    try {
      setLoading(true);
      const response = await createShortUrl(url, customSlug);
      setShortUrl(response);
      setError(null);
      queryClient.invalidateQueries({ queryKey: ["userUrls"] });
    } catch (err) {
      setError(err.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* URL Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Enter your URL
        </label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Custom Slug */}
      {isAuthenticated && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Custom URL (optional)
          </label>
          <input
            type="text"
            value={customSlug}
            onChange={(e) => setCustomSlug(e.target.value)}
            placeholder="my-custom-link"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      )}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50"
      >
        {loading ? "Generating..." : "Shorten URL"}
      </button>

      {/* Error */}
      {error && (
        <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}

      {/* Result */}
      {shortUrl && (
        <div className="mt-4">
          <p className="text-sm font-medium mb-1">Your shortened URL</p>
          <div className="flex">
            <input
              readOnly
              value={shortUrl}
              className="flex-1 p-2 border rounded-l-md bg-gray-50"
            />
            <button
              onClick={handleCopy}
              className={`px-4 rounded-r-md ${
                copied
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlForm;
