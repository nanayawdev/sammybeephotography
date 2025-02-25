import Navigation from "@/components/navigation"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const GALLERY_SECTIONS = [
  {
    title: "Wedding Photography",
    description: "Beautiful moments from wedding ceremonies",
    images: [
      "/gallery/wedding/1.jpeg",
      "/gallery/wedding/2.jpeg",
      "/gallery/wedding/3.jpeg",
      "/gallery/wedding/4.jpeg",
    ]
  },
  {
    title: "Graduation Photos",
    description: "Academic celebration captures",
    images: [
      "/gallery/graduation/1.jpeg",
      "/gallery/graduation/2.jpeg",
      "/gallery/graduation/3.jpeg",
      "/gallery/graduation/4.jpeg",
    ]
  },
  {
    title: "Studio Sessions",
    description: "Professional studio photography",
    images: [
      "/gallery/studio/1.jpeg",
      "/gallery/studio/2.jpeg",
      "/gallery/studio/3.jpeg",
      "/gallery/studio/4.jpeg",
    ]
  },
  {
    title: "Portrait Sessions",
    description: "Personal and professional portraits",
    images: [
      "/gallery/portrait/1.jpeg",
      "/gallery/portrait/2.jpeg",
      "/gallery/portrait/3.jpeg",
      "/gallery/portrait/4.jpeg",
    ]
  },
  {
    title: "Pre-Birthday Shoot",
    description: "Special birthday celebration photos",
    images: [
      "/gallery/birthday/1.jpeg",
      "/gallery/birthday/2.jpeg",
      "/gallery/birthday/3.jpeg",
      "/gallery/birthday/4.jpeg",
    ]
  },
  {
    title: "Family Portrait",
    description: "Capturing family moments",
    images: [
      "/gallery/family/1.jpeg",
      "/gallery/family/2.jpeg",
      "/gallery/family/3.jpeg",
      "/gallery/family/4.jpeg",
    ]
  },
  {
    title: "Corporate Portrait",
    description: "Professional business photography",
    images: [
      "/gallery/corporate/1.jpeg",
      "/gallery/corporate/2.jpeg",
      "/gallery/corporate/3.jpeg",
      "/gallery/corporate/4.jpeg",
    ]
  },
  {
    title: "Event Coverage",
    description: "Special events and occasions",
    images: [
      "/gallery/events/1.jpeg",
      "/gallery/events/2.jpeg",
      "/gallery/events/3.jpeg",
      "/gallery/events/4.jpeg",
    ]
  }
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <div className="pt-32">
        {GALLERY_SECTIONS.map((section) => (
          <section key={section.title} className="py-24 first:pt-0">
            <div className="max-w-7xl mx-auto px-8">
              {/* Section Header */}
              <div className="flex flex-col items-start mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {section.description}
                </p>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.images.map((image, i) => (
                  <div 
                    key={image} 
                    className="group relative aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-900"
                  >
                    <Image
                      src={image}
                      alt={`${section.title} image ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-2">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  )
} 