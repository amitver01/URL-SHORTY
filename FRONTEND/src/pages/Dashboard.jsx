
import UrlForm from "../components/UrlForm"
import Navbar from '../components/NavBar'
import AnalyticsCard from "../components/AnalyticsCard"
import HistoryCard from "../components/HistoryCard"
const Dashboard = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 overflow-hidden">
      <h1 className="text-3xl font-bold text-white text-centre pt-20 flex justify-center">SHORTEN HERE</h1>
      <div className="flex justify-center">
    <Navbar/>
    
      </div>
      <div className="pt-5">
    <UrlForm/>
    <div className="pt-5">
      <AnalyticsCard 
    totalLinks={14}
        totalClicks={2000}
        avgClicks={50}
    />
     </div>
    </div>
    </div>
    </>
  )
}

export default Dashboard