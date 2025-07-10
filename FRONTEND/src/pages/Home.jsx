import React from 'react'
import UrlForm from '../components/UrlForm'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-xl px-10 py-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">URL Shortener</h1>
        <UrlForm />
      </div>
    </div>
  )
}

export default Home
