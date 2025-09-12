"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import { travelDestinations } from "../../../data/travelDestinations"; // Assuming you have this file path

// The interface and data should be in a separate file, e.g., src/data/travelDestinations.ts
// export interface TravelDestination { ... }
// export const travelDestinations: TravelDestination[] = [ ... ];

export default function Travel() {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden cursor-pointer">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
              Travel
            </h2>
          </div>
          <Link
            href="/categories/travel"
            className="group flex items-center gap-3 bg-gradient-to-r from-black via-gray-800 to-black hover:from-gray-900 hover:via-gray-700 hover:to-gray-900 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-gray-500/25 hover:scale-105"
          >
            View All
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {travelDestinations.map((destination, index) => (
            <div
              key={destination.id}
              className="group relative transform-gpu transition-all duration-700 hover:scale-105"
              style={{
                transformStyle: "preserve-3d",
                animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Main Card */}
              <div className="relative w-full h-[480px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-700 overflow-hidden">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  {/* 3D Floating Icon */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
                      {destination.title}
                    </h3>
                    <p className="text-gray-300 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      {destination.location}
                    </p>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{destination.description}</p>
                  {/* Action Button: Corrected href here */}
                  <Link
                    href={`/${destination.category.toLowerCase()}/${destination.id}`}
                    className="group/btn w-full flex items-center justify-center gap-2 bg-gradient-to-r from-black via-gray-800 to-black hover:from-gray-900 hover:via-gray-700 hover:to-gray-900 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-gray-500/30 hover:scale-105 mt-6"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
                {/* 3D Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* 3D Shadow/Depth Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-3xl transform translate-z-[-10px] scale-95 opacity-50 group-hover:opacity-70 transition-opacity duration-500 -z-10"></div>
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
  );
}