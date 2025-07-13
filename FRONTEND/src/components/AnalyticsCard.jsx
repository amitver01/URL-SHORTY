import  { useEffect, useState } from "react";
import axios from "axios";

const AnalyticsCard = () => {
  const [data, setData] = useState({
    totalLinks: 0,
    totalClicks: 0,
    avgClicks: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/analytics", {
          withCredentials: true, 
        });

        setData(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch analytics.");
        console.error(err);
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="p-6 bg-white/90 rounded-2xl shadow-xl text-gray-500">
        Loading analytics...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-white/90 rounded-2xl shadow-xl text-red-500">
        {error}
      </div>
    );
  }
  console.log(data);
  const { totalLinks, totalClicks, avgClicks } = data;

  return (
    <div className="bg-white/90 backdrop-blur border border-white/20 shadow-xl rounded-2xl p-6 space-y-6">
      <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
        📊 Analytics Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl p-4 text-center text-white bg-gradient-to-r from-rose-500 to-pink-500 transform transition hover:scale-105">
          <p className="text-3xl font-bold">{totalLinks}</p>
          <p className="text-sm opacity-90">Total Links</p>
        </div>

        <div className="rounded-xl p-4 text-center text-white bg-gradient-to-r from-teal-400 to-emerald-400 transform transition hover:scale-105">
          <p className="text-3xl font-bold">
            {Number(totalClicks).toLocaleString()}
          </p>
          <p className="text-sm opacity-90">Total Clicks</p>
        </div>

        <div className="rounded-xl p-4 text-center text-white bg-gradient-to-r from-sky-500 to-cyan-400 transform transition hover:scale-105">
          <p className="text-3xl font-bold">{avgClicks}</p>
          <p className="text-sm opacity-90">Avg Clicks</p>
        </div>
      </div>

      <div className="h-64 flex flex-col items-center justify-center rounded-xl bg-gradient-to-r from-gray-50 to-gray-100">
        <h3 className="text-lg font-semibold text-gray-700">📈 Click Analytics</h3>
        <p className="text-gray-500">Interactive chart goes here</p>
      </div>
    </div>
  );
};

export default AnalyticsCard;
