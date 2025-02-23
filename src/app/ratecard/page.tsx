"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const HERO_SLIDES = [
  {
    image: "/hero-image.jpg",
    title: "CREATIVITY AT IT'S FINEST",
    subtitle: "INVEST IN YOUR MEMORIES."
  },
  {
    image: "/hero-image2.jpg",
    title: "CAPTURING TIMELESS MOMENTS",
    subtitle: "EVERY DETAIL MATTERS."
  },
  {
    image: "/hero-image3.jpg",
    title: "PROFESSIONAL EXCELLENCE",
    subtitle: "CREATING LASTING IMPRESSIONS."
  }
]

export default function RateCardPage() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isChanging, setIsChanging] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsChanging(true)
      setTimeout(() => {
        setActiveSlide((current) => (current + 1) % HERO_SLIDES.length)
        setIsChanging(false)
      }, 300)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const rates = [
    {
      category: "Wedding Photography",
      packages: [
        {
          name: "Half Day",
          price: "799",
          duration: "4 hours",
          deliverables: "150+ edited photos"
        },
        {
          name: "Full Day",
          price: "1499",
          duration: "8 hours",
          deliverables: "300+ edited photos"
        }
      ]
    },
    {
      category: "Portrait Sessions",
      packages: [
        {
          name: "Basic",
          price: "299",
          duration: "1 hour",
          deliverables: "20 edited photos"
        },
        {
          name: "Premium",
          price: "499",
          duration: "2 hours",
          deliverables: "40 edited photos"
        }
      ]
    },
    {
      category: "Event Coverage",
      packages: [
        {
          name: "Standard",
          price: "599",
          duration: "3 hours",
          deliverables: "100+ edited photos"
        },
        {
          name: "Extended",
          price: "999",
          duration: "6 hours",
          deliverables: "200+ edited photos"
        }
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-black">
        {/* Background Image with smooth transition */}
        <Image
          src={HERO_SLIDES[activeSlide].image}
          alt="Hero background"
          fill
          className={`object-cover transition-all duration-700 ease-in-out ${
            isChanging ? 'opacity-0 scale-105' : 'opacity-80 scale-100'
          }`}
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-end pb-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {HERO_SLIDES[activeSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {HERO_SLIDES[activeSlide].subtitle}
            </p>
            <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">
              READ FAQ BEFORE BOOKING
            </button>
          </div>

          {/* Slide Counter */}
          <div className="absolute bottom-8 right-8 text-white/70">
            <span className="text-2xl font-medium">0{activeSlide + 1}</span>
            <span className="mx-2">/</span>
            <span>0{HERO_SLIDES.length}</span>
          </div>
        </div>
      </section>

      {/* Rates Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="space-y-16">
            {rates.map((category) => (
              <div key={category.category}>
                <h2 className="text-3xl font-bold mb-8">{category.category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.packages.map((pkg) => (
                    <div key={pkg.name} className="bg-gray-50 p-8 rounded-xl">
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <p className="text-4xl font-bold text-orange-500 mb-6">${pkg.price}</p>
                      <div className="space-y-2 text-gray-600">
                        <p>Duration: {pkg.duration}</p>
                        <p>Includes: {pkg.deliverables}</p>
                      </div>
                      <button className="w-full mt-8 bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition-colors">
                        Book Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 