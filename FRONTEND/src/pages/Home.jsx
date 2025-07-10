
import { Link, BarChart3, Zap, Palette, Star, Shield, ArrowRight } from 'lucide-react';
import UrlForm from '../components/UrlForm';
import Navbar from '../components/NavBar';
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
       <Navbar />
      {/* Hero Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 backdrop-blur-md rounded-full p-4">
            <Link className="w-12 h-12 text-white" />
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Shorten Your
          <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Links Instantly
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Create powerful short links with advanced analytics. Track performance, customize URLs, and boost your marketing campaigns.
        </p>
        <UrlForm />

        {/* Free Trial CTA */}
        <div className="max-w-5xl mx-auto mt-20">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-2xl"></div>

            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="bg-white/20 backdrop-blur-md rounded-full p-3">
                  <Star className="w-8 h-8 text-yellow-300 fill-yellow-300" />
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4">🎉 Start Your Free Trial</h2>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                No credit card required. Get 100 free links, advanced analytics, and premium features for 14 days.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition duration-300 transform hover:scale-105 flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2 text-white/80">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">No commitment • Cancel anytime</span>
                </div>
              </div>

              {/* Feature Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <Link className="w-8 h-8 text-white" />,
                    title: "100 Free Links",
                    desc: "Create unlimited short links during your trial",
                  },
                  {
                    icon: <BarChart3 className="w-8 h-8 text-white" />,
                    title: "Advanced Analytics",
                    desc: "Track clicks, geography, and user behavior",
                  },
                  {
                    icon: <Zap className="w-8 h-8 text-white" />,
                    title: "Lightning Fast",
                    desc: "99.9% uptime with global CDN coverage",
                  },
                  {
                    icon: <Palette className="w-8 h-8 text-white" />,
                    title: "Custom Branding",
                    desc: "Branded domains and custom short URLs",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-white/15 backdrop-blur-md rounded-2xl hover:bg-white/25 transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-white/80 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
