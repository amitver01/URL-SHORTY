import React, { useEffect, useState } from "react";
import axios from "axios";

const HistoryCard = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/analytics", {
          withCredentials: true,
        });
        setUrls(res.data.urls || []);
      } catch (err) {
        setError("Failed to fetch URL history.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUrls();
  }, []);

  if (loading) {
    return (
      <div className="p-6 bg-white/90 backdrop-blur border border-white/20 shadow-xl rounded-2xl text-gray-500">
        Loading history...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-white/90 backdrop-blur border border-white/20 shadow-xl rounded-2xl text-red-500">
        {error}
      </div>
    );
  }

  if (!urls.length) {
    return (
      <div className="p-6 bg-white/90 backdrop-blur border border-white/20 shadow-xl rounded-2xl text-gray-500">
        No short URLs found yet.
      </div>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur border border-white/20 shadow-xl rounded-2xl p-6 space-y-4">
      <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
        📜 URL History
      </h2>
      <div className="grid gap-4">
        {urls.map((url) => (
          <div
            key={url._id}
            className="rounded-xl p-4 bg-gradient-to-r from-gray-50 to-gray-100 shadow-md hover:shadow-lg transition"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-1">
              <div className="font-medium text-sm text-gray-700">
                <span className="text-gray-500">Short URL:</span>{" "}
                <a
                  href={`http://localhost:5000/${url.short_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  {`http://localhost:5000/${url.short_url}`}
                </a>
              </div>
              <div className="text-sm text-gray-500">
                Clicks: <span className="font-semibold">{url.no_click}</span>
              </div>
            </div>
            <div className="text-sm text-gray-600 break-all">
              Original: {url.full_url}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryCard;
