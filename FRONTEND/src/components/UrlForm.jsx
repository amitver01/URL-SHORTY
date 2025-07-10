import React, { useState } from 'react';
import axios from 'axios';
import { ArrowRight, Check, Copy } from 'lucide-react';

const UrlForm = () => {
  const [full_url, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/create/", { full_url });
      setShortUrl(res.data); // expects a short code like "in90jwy"
      setCopied(false);
    } catch (err) {
      console.error("Error shortening URL:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`http://localhost:5000/${shortUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 mt-8">
      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-4">
        <input
          type="url"
          placeholder="Paste your long URL here..."
          value={full_url}
          onChange={(e) => setLongUrl(e.target.value)}
          className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-2 min-w-[160px]"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Shortening...
            </>
          ) : (
            <>
              Shorten It
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>

      {shortUrl && (
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex flex-col lg:flex-row items-center gap-4 mb-4">
            <div className="flex-1 bg-white rounded-xl p-4 shadow-sm border border-blue-100">
              <div className="text-sm text-gray-500 mb-1">Your shortened link:</div>
              <div className="font-mono text-lg text-blue-600 font-bold break-all">
                {`http://localhost:5000/${shortUrl}`}
              </div>
            </div>
            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 ${
                copied
                  ? 'bg-green-500 scale-105'
                  : 'bg-green-600 hover:bg-green-700 hover:-translate-y-1 hover:shadow-lg'
              }`}
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlForm;
