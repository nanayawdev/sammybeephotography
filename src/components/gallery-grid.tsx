"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

const GALLERY_ITEMS = [
  {
    image: "/gallery/sammybbee.jpeg",
    category: "Portrait",
    orientation: "portrait",
    size: "normal"
  },
  {
    image: "/gallery/sammybbee.jpeg",
    category: "Wedding",
    orientation: "landscape",
    size: "wide"
  },
  {
    image: "/gallery/sammybbee.jpeg",
    category: "Portrait",
    orientation: "portrait",
    size: "tall"
  },
  {
    image: "/gallery/sammybbee.jpeg",
    category: "Fashion",
    orientation: "landscape",
    size: "normal"
  },
  {
    image: "/gallery/sammybbee.jpeg",
    category: "Portrait",
    orientation: "portrait",
    size: "normal"
  },
  {
    image: "/gallery/sammybbee.jpeg",
    category: "Abstract",
    orientation: "landscape",
    size: "wide"
  },
  {
    image: "/gallery/sammybbee.jpeg",
    category: "Portrait",
    orientation: "portrait",
    size: "tall"
  },
  {
    image: "/gallery/sammybbee.jpeg",
    category: "Fashion",
    orientation: "landscape",
    size: "normal"
  },
  {
    image: "/gallery/sammybbee.jpeg",
    category: "Abstract",
    orientation: "portrait",
    size: "normal"
  },
  {
    image: "/gallery/sammybbee.jpeg",
    category: "Portrait",
    orientation: "landscape",
    size: "wide"
  },
  {
    image: "/gallery/sammybbee.jpeg",
    category: "Fashion",
    orientation: "portrait",
    size: "tall"
  },
  {
    image: "/gallery/sammybbee.jpeg",
    category: "Portrait",
    orientation: "landscape",
    size: "normal"
  }
]

export default function GalleryGrid() {
  const [currentImage, setCurrentImage] = useState(-1)

  return (
    <section className="relative bg-white py-24">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-12 max-w-7xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Latest Work
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Explore our diverse portfolio of stunning photography, capturing life&apos;s beautiful moments with artistic precision.
            </p>
          </div>
          <button 
            onClick={() => setCurrentImage(0)}
            className="hidden md:inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
          >
            View All Work
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`group relative cursor-pointer overflow-hidden
                ${item.orientation === 'landscape' && item.size === 'wide' ? 'col-span-2' : ''}
                ${item.orientation === 'portrait' && item.size === 'tall' ? 'row-span-2' : ''}
              `}
            >
              <Image
                src={item.image}
                alt={item.category}
                fill
                className={`object-cover transition-transform duration-700 group-hover:scale-110
                  ${item.orientation === 'landscape' ? 'object-[center_30%]' : 'object-[center_center]'}
                `}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium mb-2">{item.category}</p>
                  <div className="w-8 h-px bg-orange-500 mx-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <button 
            onClick={() => setCurrentImage(0)}
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
          >
            View All Work
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={currentImage >= 0}
          index={currentImage}
          close={() => setCurrentImage(-1)}
          slides={GALLERY_ITEMS.map(item => ({ src: item.image }))}
        />
      </div>
    </section>
  )
} 