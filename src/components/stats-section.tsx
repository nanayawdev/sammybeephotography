"use client"

const STATS_ITEMS = [
  {
    number: "200+",
    label: "Happy Couples"
  },
  {
    number: "10+",
    label: "Years Capturing Moments"
  },
  {
    number: "20+",
    label: "Awards Won"
  },
  {
    number: "98%",
    label: "Client Satisfaction"
  }
]

export default function StatsSection() {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top Section - Title and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
            Capturing Moments That Last Forever
          </h2>
          <div className="space-y-6">
            <p className="text-gray-600 text-lg">
              Our passion for photography drives us to create timeless memories. Every shot tells a unique story, every frame captures a precious moment that will be cherished for generations.
            </p>
            <a 
              href="/gallery" 
              className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
            >
              View Gallery
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS_ITEMS.map((stat) => (
            <div 
              key={stat.number}
              className="bg-gray-50 p-8 lg:p-12"
            >
              <div className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-medium">
                  {stat.number}
                </h3>
                <p className="text-gray-500">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 