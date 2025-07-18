import UrlForm from "../components/UrlForm"
import Navbar from '../components/NavBar'
import AnalyticsCard from "../components/AnalyticsCard"
import HistoryCard from "../components/HistoryCard"

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 overflow-hidden px-6">
      <h1 className="text-3xl font-bold text-white text-center pt-20">SHORTEN HERE</h1>
      
      <div className="flex justify-center">
        <Navbar />
      </div>

      <div className="pt-5">
        <UrlForm />
        <div className="pt-5">
          <AnalyticsCard />
          <div className="pt-5">
            <HistoryCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
