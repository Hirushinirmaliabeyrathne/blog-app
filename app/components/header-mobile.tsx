"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'


interface NavigationItem {
  path: string
  label: string
}

interface HeaderMobileProps {
  navigationItems: NavigationItem[]
  pathname: string
}

export default function HeaderMobile({ navigationItems, pathname }: HeaderMobileProps) {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSidebarVisible(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("mobile-sidebar")
      const toggleButton = document.getElementById("sidebar-toggle")
      if (
        sidebarVisible &&
        sidebar &&
        !sidebar.contains(event.target as Node) &&
        toggleButton &&
        !toggleButton.contains(event.target as Node)
      ) {
        setSidebarVisible(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [sidebarVisible])

  useEffect(() => {
    if (sidebarVisible) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [sidebarVisible])

  return (
    <>
      {/* Mobile Sidebar Toggle with Glass Effect */}
      <div className="fixed pt-2 right-3 md:right-10 z-50">
        <button
          id="sidebar-toggle"
          className="glass-button relative overflow-hidden w-10 h-10 xs:w-12 xs:h-12 rounded-lg transition-all duration-200 
                    bg-white/5 backdrop-blur-sm border border-white/20 border-r-white/10 border-b-white/10 
                    shadow-[0_20px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 flex items-center justify-center
                    before:content-[''] before:absolute before:block before:w-1/2 before:h-full 
                    before:bg-white/50 before:blur-0 before:transition-all before:duration-400 
                    before:skew-x-45 before:translate-x-[150%] hover:before:-translate-x-[150%]"
          onClick={() => setSidebarVisible(!sidebarVisible)}
          aria-label={sidebarVisible ? "Close menu" : "Open menu"}
        >
          {sidebarVisible ? (
            <CloseIcon className="w-5 h-5 xs:w-6 xs:h-6 text-white opacity-80 relative z-10" />
          ) : (
            <MenuIcon className="w-5 h-5 xs:w-6 xs:h-6 text-white opacity-80 relative z-10" />
          )}
        </button>
      </div>

      {/* Mobile Sidebar with Glass Effect */}
      <div
        id="mobile-sidebar"
        className={`fixed top-0 right-0 w-56 xs:w-64 max-w-[80vw] h-full transition-transform duration-300 z-40 overflow-y-auto
                   bg-white/5 backdrop-blur-md border-l border-white/20 
                   ${sidebarVisible ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Glass background overlay for sidebar */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 via-purple-600/10 to-blue-600/10"></div>
        <div className="absolute top-1/2 right-0 bottom-0 left-0 border-t border-white/20 bg-white/5"></div>
        
        <div className="relative z-10 mt-12 xs:mt-14 sm:mt-16 p-4 xs:p-5">
          <ul className="flex flex-col gap-4 xs:gap-5">
            {navigationItems.map((item, index) => {
              const isActive = pathname === item.path

              return (
                <li key={index}>
                  <Link
                    href={item.path}
                    className={`relative block glass-mobile-link overflow-hidden rounded-lg transition-all duration-200 hover:-translate-y-1
                               bg-white/5 backdrop-blur-sm border border-white/20 border-r-white/10 border-b-white/10 
                               shadow-[0_8px_15px_rgba(0,0,0,0.1)] px-4 py-3 flex items-center justify-between group
                               before:content-[''] before:absolute before:block before:w-1/2 before:h-full 
                               before:bg-white/50 before:blur-0 before:transition-all before:duration-400 
                               before:skew-x-45 before:translate-x-[150%] hover:before:-translate-x-[150%]
                               ${isActive ? "bg-[#8133F1]/20 before:-translate-x-[150%]" : ""}`}
                    onClick={() => setSidebarVisible(false)}
                  >
                    <span className={`relative z-10 text-white text-sm transition-colors opacity-80 hover:opacity-100 ${
                      isActive ? "font-bold text-[#8133F1] opacity-100" : ""
                    }`}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile CTA Button with Glass Effect */}
          <button className="mt-6 xs:mt-8 relative overflow-hidden glass-mobile-cta w-full flex items-center justify-center text-xs xs:text-sm font-semibold text-white 
                           h-[40px] xs:h-[44px] sm:h-[48px] rounded-full p-2 xs:p-3 transition-all duration-200 gap-1.5 xs:gap-2 hover:-translate-y-1
                           bg-white/5 backdrop-blur-sm border border-white/20 border-r-white/10 border-b-white/10 
                           shadow-[0_20px_30px_rgba(0,0,0,0.1)]
                           before:content-[''] before:absolute before:block before:w-1/2 before:h-full 
                           before:bg-white/50 before:blur-0 before:transition-all before:duration-400 
                           before:skew-x-45 before:translate-x-[150%] hover:before:-translate-x-[150%]">
            <span className="opacity-80 relative z-10">GET STARTED</span>
           
          </button>
        </div>
      </div>

      {/* Overlay for Mobile Sidebar */}
      {sidebarVisible && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30" onClick={() => setSidebarVisible(false)}></div>
      )}
    </>
  )
}