"use client"

import { useState, useEffect } from "react"

import Travel from "./components/Travel"
import LifeStyle from "./components/Lifestyle"
import FoodPage from "./components/Food"
import Header from "./components/header"
import Technology from "./components/technology/page"
import ContactPage from "./contact/page"

// Seeded random function for consistent hydration
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}


const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: seededRandom(i * 2.5) * 100,
    top: seededRandom(i * 3.7) * 100,
    animationDelay: seededRandom(i * 1.8) * 5,
    animationDuration: 3 + seededRandom(i * 4.2) * 4,
  }));
};

const PARTICLES = generateParticles(20);

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div>
      {/* Fixed Header - overlaid on video */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Hero Section with Video Background */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Video Background */}
        <video
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded && !videoError ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
          onCanPlay={() => setVideoLoaded(true)}
        >
          <source src="/video/mainbackground.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Fallback Background Image */}
        <div
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            !videoLoaded || videoError ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: "url('/images/hero-fallback.jpg')",
          }}
        />

        {/* Creative Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-purple-500/30"></div>

        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-lg animate-bounce"></div>
          <div 
            className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-indigo-400/15 to-purple-400/15 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
          <div 
            className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-xl animate-bounce"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        {/* Floating Particles Effect */}
        {mounted && (
          <div className="absolute inset-0">
            {PARTICLES.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-1 h-1 bg-white/30 rounded-full animate-ping"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.animationDelay}s`,
                  animationDuration: `${particle.animationDuration}s`,
                }}
              ></div>
            ))}
          </div>
        )}

        {/* Loading Indicator */}
        {!videoLoaded && !videoError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-200/30 border-t-purple-400"></div>
              <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-4 border-purple-400/20"></div>
            </div>
          </div>
        )}

        {/* Main Content - Centered */}
        <div className="relative z-10 flex items-center justify-center min-h-screen pt-20 lg:pt-24">
          <div className="container  px-4 lg:px-8 text-start">
            <div className="max-w-4xlspace-y-8">
              {/* Blog Title with Creative Typography */}
              <div className="space-y-4 opacity-0 animate-pulse" style={{ animation: 'fadeInUp 1s ease-out 0.3s forwards' }}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                  <span className="block text-white mb-2">Stories That</span>
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                    Inspire & Inform
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <div className="opacity-0" style={{ animation: 'fadeInUp 1s ease-out 0.6s forwards' }}>
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl text-start">
                  Discover thought-provoking articles, insights, and stories across technology, lifestyle, travel, and
                  beyond.
                  <span className="block mt-2 text-purple-300">Your daily dose of inspiration awaits.</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="opacity-0" style={{ animation: 'fadeInUp 1s ease-out 0.9s forwards' }}>
                <div className="flex flex-col sm:flex-row gap-6 justify-start pt-8">
                  <button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                    <span className="relative z-10 flex items-center justify-center gap-2">📚 Start Reading</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <button className="group relative overflow-hidden border-2 border-white/50 text-white hover:bg-white hover:text-purple-900 px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                    <span className="relative z-10 flex items-center justify-center gap-2">🔍 Explore Topics</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10">
        <Technology/>
        <Travel />
        <LifeStyle />
        <FoodPage />
        <ContactPage/>
      </div>

      {/* Add CSS for custom animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}