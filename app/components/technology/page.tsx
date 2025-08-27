"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { techArticles } from "@/data/techarticle";

export default function Technology() {
  return (
    <section className="min-h-screen flex justify-center items-center py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4 ">
              Technology
            </h2>

          </div>
          <Link
            href="/categories/travel"
            className="group flex items-center gap-3 bg-gradient-to-r from-black via-gray-800 to-black hover:from-gray-900 hover:via-gray-700 hover:to-gray-900 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-gray-500/25 hover:scale-105"
          >
            View All
            <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Grid Layout - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 cursor-pointer">
          {techArticles.map((article) => (
            <div
              key={article.id}
              className="group relative w-full h-96 overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.2)] rounded-2xl flex justify-center items-center transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.3)]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Sliding Content Panel */}
              <div className="absolute -bottom-40 w-full h-40 flex justify-center items-center z-10 flex-col backdrop-blur-[15px] shadow-[0_-10px_10px_rgba(0,0,0,0.1)] border border-white/20 bg-white/10 transition-all duration-500 delay-700 group-hover:bottom-0 group-hover:delay-0">
                
                {/* Content Box */}
                <div className="contentBx px-4 text-center">
                  <h3 className="text-white uppercase tracking-[2px] font-medium text-xs leading-tight text-center my-2 transition-all duration-500 opacity-0 transform translate-y-[-20px] delay-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-0">
                    {article.title}
                    <br />
                  </h3>
                  
                  <p className="text-white/80 text-[10px] mb-3 px-2 transition-all duration-500 opacity-0 transform translate-y-[-15px] delay-600 group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-100">
                    {article.excerpt}
                  </p>
                </div>

                {/* Social/Action Links */}
                <div className="sci relative -bottom-2 flex gap-2">
                  <div 
                    className="transform translate-y-10 transition-all duration-500 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ transitionDelay: '0.2s' }}
                  >
                    <Link
                      href={`/article/${article.id}`}
                      className="text-white hover:text-[#8133F1] transition-colors duration-300 flex items-center gap-1 text-xs bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20 hover:bg-[#8133F1]/20"
                    >
                      <ChevronRightIcon style={{ fontSize: 14 }} />
                      Read
                    </Link>
                  </div>
                  
                  <div 
                    className="transform translate-y-10 transition-all duration-500 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ transitionDelay: '0.4s' }}
                  >
                    <div className="text-white flex items-center gap-1 text-xs bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                      <AccessTimeIcon style={{ fontSize: 12 }} />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <div 
                    className="transform translate-y-10 transition-all duration-500 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ transitionDelay: '0.6s' }}
                  >
                   
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#8133F1]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}