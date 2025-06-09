"use client"

import Image from "next/image"
import { useState } from "react"
import Technology from "./components/Technology"
import Travel from "./components/Travel"
import LifeStyle from "./components/Lifestyle"
import FoodPage from "./components/Food"
import Header from "./components/header"

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

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

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>

        {/* Additional Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Loading Indicator */}
        {!videoLoaded && !videoError && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8133F1]"></div>
          </div>
        )}

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen pt-20 lg:pt-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="text-white space-y-6 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  Discover Your
                  <span className="block text-[#8133F1] bg-gradient-to-r from-[#8133F1] to-purple-400 bg-clip-text text-transparent">
                    Next Adventure
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
                  Explore curated content across technology, travel, lifestyle, and culinary experiences. Your journey
                  to discovery starts here.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button className="group relative overflow-hidden bg-gradient-to-r from-[#8133F1] to-purple-600 hover:from-[#6a1fc7] hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#8133F1]/25">
                    <span className="relative z-10">Start Exploring</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <button className="group relative overflow-hidden border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                    <span className="relative z-10">Learn More</span>
                  </button>
                </div>
              </div>

              {/* Right Side - Featured Image with Description */}
              <div className="flex justify-center lg:justify-end animate-fade-in-up animation-delay-300">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-md border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                  <div className="relative h-64 w-full mb-4 rounded-xl overflow-hidden group">
                    <Image
                      src="/images/girlwithbook.jpg"
                      alt="Girl reading book"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2 text-gradient bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                      Knowledge & Learning
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      Dive into a world of endless possibilities. Our carefully curated content helps you expand your
                      horizons and discover new perspectives across various topics that matter to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative z-10 bg-white">
        <Technology />
        <Travel />
        <LifeStyle />
        <FoodPage />
      </div>
    </div>
  )
}
