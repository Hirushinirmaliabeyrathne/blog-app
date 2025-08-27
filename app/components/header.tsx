

"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import HeaderDesktop from "./header-desktop"
import HeaderMobile from "./header-mobile"

export default function Header() {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { path: "/", label: "HOME" },
    { path: "/categories", label: "CATEGORIES" },
    { path: "/about", label: "ABOUT" },
    { path: "/contact", label: "CONTACT" },
  ]

  return (
    <motion.header 
      className={`w-full text-white transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/5 backdrop-blur-md border-b border-white/20 py-2' 
          : 'bg-transparent lg:pt-10 md:pt-10'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-[60px] xs:h-[65px] sm:h-[80px] w-full">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-white font-bold text-xl">Blog</span>
          </div>

          {/* Conditional Rendering based on screen size */}
          {isMobile ? (
            <HeaderMobile 
              navigationItems={navigationItems} 
              pathname={pathname} 
            />
          ) : (
            <HeaderDesktop 
              navigationItems={navigationItems} 
              pathname={pathname} 
            />
          )}
        </div>
      </div>
    </motion.header>
  )
}