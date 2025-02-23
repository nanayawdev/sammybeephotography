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
    }, 3000)
    return () => clearInterval(timer)
  }, [])

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

      {/* Packages Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          {/* Wedding Packages */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              PRE AND POST WEDDING PHOTOGRAPHY PACKAGES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            {/* Pre-Wedding Package */}
            <div className="space-y-8">
              <Image
                src="/gallery/sammybbee1.jpeg"
                alt="Pre-wedding photography"
                width={600}
                height={400}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">PRE-WEDDING SESSION</h3>
                <p className="text-gray-600 mb-6">
                  Looking to create beautiful images in anticipation of your big day? This Package is your best bet!
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>2 hours + 2 looks</p>
                  <p>30 images, 10 retouched images</p>
                  <p>1 Photographer + 1 Creative Director</p>
                  <p>A 30-minute consultation with the creative team.</p>
                </div>
                <p className="text-2xl font-bold mt-6">$ 3000.00</p>
              </div>
            </div>

            {/* Post-Wedding Package */}
            <div className="space-y-8">
              <Image
                src="/gallery/sammybbee2.jpeg"
                alt="Post-wedding photography"
                width={600}
                height={400}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">POST-WEDDING SESSION</h3>
                <p className="text-gray-600 mb-6">
                  This package is tailored to meet the needs of both newlyweds and other married couples.
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>2 hours + 2 looks</p>
                  <p>40 images, 15 Retouched images</p>
                  <p>1 Photographer + 1 Creative Director</p>
                  <p>Complimentary Hair & Makeup</p>
                  <p>1-hour consultation with the creative team.</p>
                </div>
                <p className="text-2xl font-bold mt-6">$ 4500.00</p>
              </div>
            </div>
          </div>

          {/* Additional Categories */}
          <div className="space-y-24">
            {/* Engagement Sessions */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">ENGAGEMENT SESSIONS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl text-center">
                  <h4 className="text-xl font-bold mb-4">Classic Session</h4>
                  <p className="text-4xl font-bold text-orange-500 mb-6">$1500</p>
                  <div className="space-y-2 text-gray-600">
                    <p>1.5 hours coverage</p>
                    <p>25 edited photos</p>
                    <p>1 location</p>
                    <p>Online gallery</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl text-center">
                  <h4 className="text-xl font-bold mb-4">Premium Session</h4>
                  <p className="text-4xl font-bold text-orange-500 mb-6">$2500</p>
                  <div className="space-y-2 text-gray-600">
                    <p>3 hours coverage</p>
                    <p>50 edited photos</p>
                    <p>2 locations</p>
                    <p>Online gallery</p>
                    <p>Complimentary styling</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Portrait Sessions */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">PORTRAIT SESSIONS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl text-center">
                  <h4 className="text-xl font-bold mb-4">Personal Branding</h4>
                  <p className="text-4xl font-bold text-orange-500 mb-6">$800</p>
                  <div className="space-y-2 text-gray-600">
                    <p>1 hour session</p>
                    <p>15 edited photos</p>
                    <p>Professional styling tips</p>
                    <p>Commercial usage rights</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl text-center">
                  <h4 className="text-xl font-bold mb-4">Family Portraits</h4>
                  <p className="text-4xl font-bold text-orange-500 mb-6">$1200</p>
                  <div className="space-y-2 text-gray-600">
                    <p>2 hours session</p>
                    <p>30 edited photos</p>
                    <p>Multiple poses & groupings</p>
                    <p>Location consultation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 