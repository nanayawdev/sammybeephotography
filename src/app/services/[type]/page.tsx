import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import { notFound } from "next/navigation"

const SERVICES_DATA = {
  wedding: {
    title: "Wedding Photography",
    description: "Capturing your special day with elegance and style.",
    image: "/gallery/wedding/1.jpeg",
    features: [
      "Full day coverage",
      "Two photographers",
      "High-resolution images",
      "Online gallery",
      "Premium photo album"
    ],
    price: "GH₵ 15,000"
  },
  graduation: {
    title: "Graduation Photography",
    description: "Celebrate your academic achievements with professional photos.",
    image: "/gallery/graduation/1.jpeg",
    features: [
      "2-hour session",
      "Multiple locations",
      "Digital delivery",
      "Professional editing",
      "Quick turnaround"
    ],
    price: "GH₵ 5,000"
  },
  studio: {
    title: "Studio Sessions",
    description: "Professional studio photography with premium lighting and backdrops.",
    image: "/gallery/studio/1.jpeg",
    features: [
      "1-hour session",
      "Multiple backgrounds",
      "Professional lighting",
      "3 outfit changes",
      "Retouched images"
    ],
    price: "GH₵ 3,000"
  },
  portrait: {
    title: "Portrait Sessions",
    description: "Capture your personality with our professional portrait photography.",
    image: "/gallery/portrait/1.jpeg",
    features: [
      "Indoor/Outdoor options",
      "Natural lighting",
      "Style consultation",
      "Digital delivery",
      "Basic retouching"
    ],
    price: "GH₵ 2,500"
  },
  family: {
    title: "Family Portrait",
    description: "Create lasting memories with beautiful family portraits.",
    image: "/gallery/family/1.jpeg",
    features: [
      "Group photography",
      "Location flexibility",
      "Multiple poses",
      "Digital gallery",
      "Print options"
    ],
    price: "GH₵ 4,000"
  },
  corporate: {
    title: "Corporate Portrait",
    description: "Professional headshots and corporate photography services.",
    image: "/gallery/corporate/1.jpeg",
    features: [
      "Professional headshots",
      "Company branding",
      "Quick delivery",
      "Team photos",
      "LinkedIn optimization"
    ],
    price: "GH₵ 3,500"
  },
  events: {
    title: "Event Coverage",
    description: "Comprehensive coverage for all your special events.",
    image: "/gallery/events/1.jpeg",
    features: [
      "Full event coverage",
      "Multiple angles",
      "Candid shots",
      "Same-day previews",
      "Event highlight reel"
    ],
    price: "GH₵ 8,000"
  },
  birthday: {
    title: "Pre-Birthday Shoot",
    description: "Make your birthday special with a custom photo session.",
    image: "/gallery/birthday/1.jpeg",
    features: [
      "Themed shoots",
      "Multiple locations",
      "Props included",
      "Digital delivery",
      "Social media ready"
    ],
    price: "GH₵ 2,000"
  },
  personal: {
    title: "Personal Branding",
    description: "Build your professional image with our personal branding photography.",
    image: "/gallery/personal/1.jpeg",
    features: [
      "Brand consultation",
      "Multiple outfit changes",
      "Various locations",
      "Social media kit",
      "Professional retouching"
    ],
    price: "GH₵ 4,500"
  },
  fashion: {
    title: "Fashion & Model",
    description: "Create stunning fashion portfolios and model composites.",
    image: "/gallery/fashion/1.jpeg",
    features: [
      "Professional styling",
      "Multiple looks",
      "Studio & Location",
      "High-end retouching",
      "Portfolio preparation"
    ],
    price: "GH₵ 5,500"
  }
}

export default function ServicePage({ params }: { params: { type: string } }) {
  const serviceData = SERVICES_DATA[params.type as keyof typeof SERVICES_DATA]

  if (!serviceData) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 h-[85vh]">
          <Image
            src={serviceData.image}
            alt={serviceData.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative min-h-[85vh] max-w-7xl mx-auto px-8">
          <div className="h-full flex flex-col justify-center pt-24">
            <div className="max-w-3xl">
              <h4 className="text-orange-500 font-medium mb-4">our services.</h4>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {serviceData.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                {serviceData.description}
              </p>
              <button className="mt-8 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg
                hover:bg-white/20 transition-all duration-300">
                Book This Service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-black dark:text-white">
            PHOTOGRAPHY PACKAGES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Basic Package */}
            <div className="group relative h-[600px] overflow-hidden rounded-2xl">
              <Image
                src="/gallery/sammybbee1.jpeg"
                alt="Basic package"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">BASIC SESSION</h3>
                  <p className="text-gray-300 mb-6">
                    Perfect for those looking for essential coverage with professional quality.
                  </p>
                  <ul className="space-y-3 text-gray-300 mb-8">
                    {serviceData.features.slice(0, 3).map(feature => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <p className="text-3xl font-bold text-orange-500">
                      {serviceData.price}
                    </p>
                    <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg 
                      opacity-0 group-hover:opacity-100 transition-all duration-300 
                      hover:bg-white/20">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Package */}
            <div className="group relative h-[600px] overflow-hidden rounded-2xl">
              <Image
                src="/gallery/sammybbee2.jpeg"
                alt="Premium package"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">PREMIUM SESSION</h3>
                  <p className="text-gray-300 mb-6">
                    Our comprehensive package with additional features and premium services.
                  </p>
                  <ul className="space-y-3 text-gray-300 mb-8">
                    {serviceData.features.map(feature => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <p className="text-3xl font-bold text-orange-500">
                      {parseInt(serviceData.price.replace(/[^\d]/g, '')) * 1.5} GH₵
                    </p>
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