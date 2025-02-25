"use client"

import { useRef } from "react"
import Image from "next/image"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"

const SESSIONS = [
  {
    title: "Wedding Photography",
    category: "Commercial",
    image: "/sessions/wedding.jpeg",
    href: "/services/wedding"
  },
  {
    title: "Graduation Photos",
    category: "Commercial",
    image: "/sessions/graduation.jpeg",
    href: "/services/graduation"
  },
  {
    title: "Studio Sessions",
    category: "New Build",
    image: "/sessions/studio.jpeg",
    href: "/services/studio"
  },
  {
    title: "Portrait Sessions",
    category: "Commercial",
    image: "/sessions/portrait.jpeg",
    href: "/services/portrait"
  },
  {
    title: "Pre-Birthday Shoot",
    category: "Renovation",
    image: "/sessions/birthday.jpeg",
    href: "/services/birthday"
  },
  {
    title: "Family Portrait",
    category: "Commercial",
    image: "/sessions/family.jpeg",
    href: "/services/family"
  },
  {
    title: "Corporate Portrait",
    category: "Commercial",
    image: "/sessions/corporate.jpeg",
    href: "/services/corporate"
  },
  {
    title: "Event Coverage",
    category: "Commercial",
    image: "/sessions/event.jpeg",
    href: "/services/events"
  },
  {
    title: "Personal Branding",
    category: "Commercial",
    image: "/sessions/personal.jpeg",
    href: "/services/personal"
  },
  {
    title: "Fashion & Model",
    category: "Commercial",
    image: "/sessions/fashion.jpeg",
    href: "/services/fashion"
  }
]

export default function SessionsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-white dark:bg-black py-24">
      <div className="max-w-[1920px] mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          <p className="text-orange-500 font-medium mb-2">our sessions.</p>
          <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white">
            PHOTOGRAPHY SESSIONS
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Projects Grid with Horizontal Scroll */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {SESSIONS.map((session) => (
              <a
                key={session.title}
                href={session.href}
                className="relative min-w-[400px] h-[600px] group overflow-hidden"
              >
                {/* Background Image */}
                <Image
                  src={session.image || ''}
                  alt={session.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white">
                      {session.title}
                    </h3>
                    <div className="flex items-center gap-4">
                      <span className="px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                        {session.category}
                      </span>
                      <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2 mt-8">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 bg-black dark:bg-white flex items-center justify-center hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors"   
            >
              <ChevronLeft className="w-6 h-6 text-white dark:text-black" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 bg-black dark:bg-white flex items-center justify-center hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white dark:text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 