"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm text-gray-500 font-rubik tracking-wider">— Our Passion</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                THE ESSENCE OF
                <br />
                <span className="text-gray-400">PHOTOGRAPHY</span>
              </h2>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              Capturing moments that tell stories, creating memories that last forever. Our passion for photography goes beyond just taking pictures - it's about preserving emotions, celebrating life's beautiful moments, and turning fleeting instances into timeless art.
            </p>

            <button 
              className="group inline-flex items-center bg-black text-white rounded-none px-8 py-4 text-sm font-medium 
                transition-all duration-300 
                hover:bg-gray-900
                active:scale-95
                font-rubik"
            >
              LEARN MORE
              <ArrowUpRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>

          {/* Right Image */}
          <div className="relative w-full min-h-[500px]">
            <Image
              src="/film-roll.png"
              alt="Film roll with red splash"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
} 