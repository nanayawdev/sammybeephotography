"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "RATECARD", href: "/ratecard" },
  { label: "GALLERY", href: "/gallery" },
  { label: "CLIENTS", href: "/clients" },
  { label: "BOOKING", href: "/booking" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-center">
          <div className="flex gap-12 items-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-rubik tracking-wider transition-all duration-300 relative group
                  ${item.label === "HOME" 
                    ? "text-white" 
                    : "text-white/70 hover:text-white"
                  }
                `}
              >
                {item.label}
                {/* Animated underline effect */}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 
                  ${item.label === "HOME" 
                    ? "scale-x-100" 
                    : "scale-x-0 group-hover:scale-x-100"
                  }
                `} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 