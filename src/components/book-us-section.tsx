"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function BookUsSection() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <Image
        src="/studio-image.jpeg"
        alt="Studio background"
        fill
        className="object-cover opacity-20"
        priority
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6">
            Let&apos;s Create Your Story Together
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl">
            Every moment is unique, and we&apos;re here to capture yours. Whether it&apos;s your wedding day, 
            a special celebration, or professional portraits, we&apos;ll help you preserve these precious memories forever.
          </p>

          {/* CTA Button */}
          <button 
            className="group inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-8 py-4 text-lg font-medium 
              transition-all duration-300 
              hover:shadow-lg hover:shadow-orange-500/20"
          >
            Book a Session
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
} 