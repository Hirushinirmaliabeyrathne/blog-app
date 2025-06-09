"use client"

import Link from "next/link"
import { motion } from "framer-motion"


interface NavigationItem {
  path: string
  label: string
}

interface HeaderDesktopProps {
  navigationItems: NavigationItem[]
  pathname: string
}

export default function HeaderDesktop({ navigationItems, pathname }: HeaderDesktopProps) {
  

  return (
    <>
      {/* Desktop Navigation with Glass Effect */}
      <nav>
        <ul className="flex flex-row gap-2">
          {navigationItems.map((item, index) => {
            const isActive = pathname === item.path

            return (
              <li key={index}>
                <motion.div
                  className="relative overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1
                       w-[90px] sm:w-[100px] md:w-[110px] lg:w-[120px] 
                       h-[36px] sm:h-[40px] md:h-[44px] lg:h-[48px] 
                       rounded-full flex items-center justify-center
                       bg-white/5 backdrop-blur-sm border border-white/20 border-r-white/10 border-b-white/10
                       shadow-[0_8px_15px_rgba(0,0,0,0.1)]
                       before:content-[''] before:absolute before:block before:w-1/2 before:h-full 
                       before:bg-white/50 before:blur-0 before:transition-all before:duration-400 
                       before:skew-x-45 before:translate-x-[150%] hover:before:-translate-x-[150%]
                       ${isActive ? 'bg-[#8133F1]/20' : ''}"
                 
                >
                  <Link
                    href={item.path}
                    className={`
                    relative z-10 text-white text-[11px] sm:text-xs md:text-sm font-medium px-2 
                    flex items-center justify-center w-full h-full transition-all duration-200
                    ${isActive ? "font-bold text-[#8133F1] opacity-100" : "opacity-80 hover:opacity-100"}
                  `}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Desktop CTA Button with Glass Effect */}
      <button
        className="glass-cta-button relative overflow-hidden flex items-center justify-center text-xs sm:text-sm md:text-base font-semibold text-white 
                       w-[110px] md:w-[130px] lg:w-[170px] h-[36px] sm:h-[40px] md:h-[44px] lg:h-[52px] 
                       rounded-full p-2 transition-all duration-200 gap-1 sm:gap-2 flex-shrink-0 hover:-translate-y-1
                       bg-white/5 backdrop-blur-sm border border-white/20 border-r-white/10 border-b-white/10 
                       shadow-[0_20px_30px_rgba(0,0,0,0.1)]
                       before:content-[''] before:absolute before:block before:w-1/2 before:h-full 
                       before:bg-white/50 before:blur-0 before:transition-all before:duration-400 
                       before:skew-x-45 before:translate-x-[150%] hover:before:-translate-x-[150%]"
      >
        <span className="whitespace-nowrap opacity-80 relative z-10">GET STARTED</span>
      </button>
    </>
  )
}
