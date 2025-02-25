"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const HERO_SLIDES = [
  {
    image: "/studio-image.jpeg",
    title: "INVEST IN YOUR MEMORIES",
    subtitle: "Professional photography packages tailored to your needs."
  },
  {
    image: "/studio-image2.jpeg",
    title: "CAPTURE THE MOMENTS",
    subtitle: "Premium quality photography services."
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
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] max-h-[600px] bg-black">
        <Image
          src={HERO_SLIDES[activeSlide].image}
          alt="Hero background"
          fill
          className={`object-cover transition-all duration-700 ease-in-out ${
            isChanging ? 'opacity-0 scale-105' : 'opacity-80 scale-100'
          }`}
          priority
        />

        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        <div className="relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-end pb-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {HERO_SLIDES[activeSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              {HERO_SLIDES[activeSlide].subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
              WEDDING PHOTOGRAPHY PACKAGES
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose the perfect package for your special day. All packages include high-resolution digital images and professional editing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Pre-Wedding Package */}
            <div className="group relative h-[800px] w-full max-w-sm mx-auto overflow-hidden rounded-2xl">
              <Image
                src="/gallery/sammybbee1.jpeg"
                alt="Pre-wedding photography"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">PRE-WEDDING SESSION</h3>
                  <p className="text-gray-300 mb-6">
                    Create beautiful memories before your big day with our premium pre-wedding package.
                  </p>
                  <ul className="space-y-3 text-gray-300 mb-8">
                    <li>• 2 hours coverage</li>
                    <li>• 2 outfit changes</li>
                    <li>• 30 edited photos</li>
                    <li>• 10 retouched images</li>
                    <li>• 1 Photographer + 1 Creative Director</li>
                    <li>• 30-minute consultation</li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <p className="text-3xl font-bold text-orange-500">GH₵ 15,000</p>
                    <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg 
                      opacity-0 group-hover:opacity-100 transition-all duration-300 
                      hover:bg-white/20">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Post-Wedding Package */}
            <div className="group relative h-[800px] w-full max-w-sm mx-auto overflow-hidden rounded-2xl">
              <Image
                src="/gallery/sammybbee2.jpeg"
                alt="Post-wedding photography"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">POST-WEDDING SESSION</h3>
                  <p className="text-gray-300 mb-6">
                    Capture your newlywed bliss with our comprehensive post-wedding package.
                  </p>
                  <ul className="space-y-3 text-gray-300 mb-8">
                    <li>• 2 hours coverage</li>
                    <li>• 2 outfit changes</li>
                    <li>• 40 edited photos</li>
                    <li>• 15 retouched images</li>
                    <li>• 1 Photographer + 1 Creative Director</li>
                    <li>• Complimentary Hair & Makeup</li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <p className="text-3xl font-bold text-orange-500">GH₵ 20,000</p>
                    <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg 
                      opacity-0 group-hover:opacity-100 transition-all duration-300 
                      hover:bg-white/20">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 