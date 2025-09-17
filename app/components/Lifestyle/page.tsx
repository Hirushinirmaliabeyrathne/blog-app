"use client"

import Image from "next/image"
import Link from "next/link"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { lifestyleArticles } from "@/data/lifestyle"


export default function LifeStyle() {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden cursor-pointer">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gray-500/5 to-gray-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-gray-300/5 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
              Lifestyle
            </h2>
          </div>
          <Link
            href="/categories/lifestyle"
            className="group flex items-center gap-3 bg-gradient-to-r from-black via-gray-800 to-black hover:from-gray-900 hover:via-gray-700 hover:to-gray-900 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-gray-500/25 hover:scale-105 backdrop-blur-sm border border-white/10"
          >
            View All
            <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
          {lifestyleArticles.map((article, index) => (
            <div
              key={article.id}
              className="group relative transform-gpu transition-all duration-700 hover:scale-105"
              style={{
                transformStyle: "preserve-3d",
                animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`,
              }}
            >
              {/* Main Card */}
              <div className="relative flex flex-col md:flex-row bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl group-hover:shadow-gray-500/20 transition-all duration-700 overflow-hidden h-full">
                {/* Image Container */}
                <div className="relative w-full md:w-2/5 h-48 md:h-auto min-h-[200px] overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                </div>

                {/* Content Section */}
                <div className="p-6 w-full md:w-3/5 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors duration-300 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">{article.excerpt}</p>
                  </div>

                  {/* Action Link */}
                  <Link
                   href={`/lifestyle/${article.id}`} 
                    className="group/link inline-flex items-center gap-2 text-white hover:text-gray-200 font-medium transition-all duration-300 bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-gray-700/60 hover:to-gray-600/60 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 w-fit"
                  >
                    Read More
                    <ChevronRightIcon
                      style={{ fontSize: 16 }}
                      className="group-hover/link:translate-x-1 transition-transform duration-300"
                    />
                  </Link>
                </div>

                {/* 3D Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-400/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* 3D Shadow/Depth Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-black/20 rounded-3xl transform translate-z-[-10px] scale-95 opacity-50 group-hover:opacity-70 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px) rotateX(10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }
      `}</style>
    </section>
  )
}