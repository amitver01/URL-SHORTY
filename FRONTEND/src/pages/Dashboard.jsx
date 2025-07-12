
import UrlForm from "../components/UrlForm"
import Navbar from '../components/NavBar'
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
    </div>
    </div>
    </>
  )
}

export default Dashboard