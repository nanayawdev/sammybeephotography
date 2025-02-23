"use client"

const STATS_ITEMS = [
  {
    number: "200+",
    label: "Successful projects"
  },
  {
    number: "10+",
    label: "Years of experience"
  },
  {
    number: "20+",
    label: "Senior designers"
  },
  {
    number: "98%",
    label: "Client Satisfaction Rate"
  }
]

export default function StatsSection() {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Title and Description */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
              Building Websites That Drive Impact and Results
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Our mission is to combine creativity and strategy to deliver exceptional websites that elevate brands, engage audiences, and achieve measurable success.
            </p>
            <a 
              href="/about" 
              className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
            >
              View all
              <span className="ml-2">→</span>
            </a>
          </div>

          {/* Right Side - Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {STATS_ITEMS.map((stat) => (
              <div 
                key={stat.number}
                className="bg-gray-50 p-8 lg:p-12"
              >
                <div className="space-y-2">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium">
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
      </div>
    </section>
  )
} 