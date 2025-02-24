"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight, Instagram, Facebook, Youtube } from "lucide-react"
import { BsTiktok } from "react-icons/bs"
import Image from "next/image"
import Navigation from "./navigation"

const CAROUSEL_ITEMS = [
  {
    image:
      "/studio-image2.jpeg",
    title: "SAMMYBBEE\nPHOTOS",
    hasGradient: true
  },
  {
    image: "/studio-image.jpeg",
    title: "CAPTURE THE\nMOMENTS",
    hasGradient: false
  },
  {
    image: "/studio-image4.jpeg",
    title: "CREATING\nLASTING MEMORIES",
    hasGradient: false
  },
]

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isChanging, setIsChanging] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsChanging(true)
      setTimeout(() => {
        setActiveSlide((current) => (current + 1) % CAROUSEL_ITEMS.length)
        setIsChanging(false)
      }, 300)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-black">
      {/* Add Navigation */}
      <Navigation />

      {/* Background Image with smooth transition */}
      <Image
        src={CAROUSEL_ITEMS[activeSlide].image || "/placeholder.svg"}
        alt="Hero background"
        fill
        className={`object-cover transition-all duration-700 ease-in-out ${
          isChanging ? 'opacity-0 scale-105' : 'opacity-80 scale-100'
        }`}
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-end min-h-screen p-8 pb-12 max-w-7xl mx-auto">
        {/* Main Text with animation */}
        <div className="mb-12 transition-all duration-700 ease-out transform">
          <h1 className={`text-5xl md:text-7xl font-bold text-white max-w-4xl leading-tight tracking-tight whitespace-pre-line transition-all duration-500 ${
            isChanging ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            {CAROUSEL_ITEMS[activeSlide].title.split("\n").map((line, i) => (
              <span key={i} className="block animate-fadeIn">
                {CAROUSEL_ITEMS[activeSlide].hasGradient && i === 1 ? (
                  <span className="bg-gradient-to-r from-orange-400 to-orange-500 text-transparent bg-clip-text">
                    {line}
                  </span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>
        </div>

        {/* Divider with animation */}
        <div className={`w-full h-px bg-white/10 mb-6 transition-all duration-500 ${
          isChanging ? 'scale-x-0' : 'scale-x-100'
        }`} />

        {/* Bottom Section */}
        <div className={`flex justify-between items-center transition-all duration-500 ${
          isChanging ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          {/* Carousel Controls with hover effect */}
          <div className="flex gap-2">
            {CAROUSEL_ITEMS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsChanging(true)
                  setTimeout(() => {
                    setActiveSlide(index)
                    setIsChanging(false)
                  }, 300)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeSlide 
                    ? "bg-white scale-100" 
                    : "bg-white/30 scale-75 hover:scale-90 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Right Side Elements */}
          <div className="flex items-center gap-6">
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 bg-black/20 backdrop-blur-sm rounded-xl px-5 py-3 h-[42px]">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <BsTiktok className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Enhanced CTA Button - Hidden on mobile */}
            <button 
              className="hidden md:inline-flex group items-center bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-xl px-5 py-3 text-sm font-medium h-[42px]
                transition-all duration-300 
                hover:shadow-lg hover:shadow-orange-500/20 
                hover:brightness-110 hover:scale-105 
                active:scale-95
                font-rubik
                relative overflow-hidden"
            >
              <span className="relative z-10">Explore Our Gallery</span>
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 ml-2 p-1 bg-orange-100/10 rounded-lg transition-all duration-300 group-hover:bg-orange-100/20">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

