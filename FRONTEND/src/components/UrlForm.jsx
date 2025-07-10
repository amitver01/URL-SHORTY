import React, { useState } from 'react';
import axios from 'axios';

const UrlForm = () => {
  const [full_url, setLongUrl] = useState('https://www.google.com');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/create/", { full_url });
      setShortUrl(res.data); // backend sends "in90jwy"
      //console.log(res);
    } catch (err) {
      console.error("Error shortening URL:", err);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-8 flex flex-col gap-4"
      >
        <input
          type="url"
          placeholder="https://example.com"
          value={full_url}
          onChange={(e) => setLongUrl(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Shorten URL
        </button>
      </form>

      {shortUrl && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded-md text-center">
          <p className="text-sm text-gray-700">Your shortened URL:</p>
          <a
            href={`http://localhost:5000/${shortUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline font-semibold break-all"
          >
            {`http://localhost:5000/${shortUrl}`}
          </a>
        </div>
      )}
    </div>
  );
};

export default UrlForm;
