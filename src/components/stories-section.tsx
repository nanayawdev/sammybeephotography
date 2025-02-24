"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const STORY_ITEMS = [
  {
    title: "Adu Gyamfi and Ama",
    image: "/stories/portrait.jpeg",
    href: "/gallery/portrait"
  },
  {
    title: "Sammy and Belinda",
    image: "/stories/wedding.jpeg",
    href: "/gallery/wedding"
  },
  {
    title: "Benjamin and Tina",
    image: "/stories/bride-smiling.jpeg",
    href: "/gallery/events"
  },
  {
    title: "Fabrice and Fidelia",
    image: "/stories/bride.jpeg",
    href: "/gallery/commercial"
  }
]

export default function StoriesSection() {
  return (
    <section className="relative bg-black">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4">
          {STORY_ITEMS.map((item) => (
            <a 
              key={item.title}
              href={item.href}
              className="group relative h-screen md:h-[80vh] overflow-hidden"
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 25vw"
                priority
              />
              
              {/* Permanent Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/90" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform transition-all duration-500">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center text-white/70 text-sm font-medium overflow-hidden">
                    <div className="transform translate-y-8 transition-transform duration-500 group-hover:translate-y-0 flex items-center">
                      <span className="mr-2">View Gallery</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
} 