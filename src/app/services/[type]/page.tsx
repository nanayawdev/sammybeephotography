import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import { notFound } from "next/navigation"

const SERVICES_DATA = {
  wedding: {
    title: "Wedding Photography",
    description: "Capturing your special day with elegance and style.",
    image: "/gallery/sammybbee1.jpeg",
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
    description: "Celebrate your academic achievements.",
    image: "/gallery/graduation.jpeg",
    features: [
      "2-hour session",
      "Multiple locations",
      "Digital delivery",
      "Professional editing",
      "Quick turnaround"
    ],
    price: "GH₵ 5,000"
  },
  // Add other services with their specific data...
}

export default function ServicePage({ params }: { params: { type: string } }) {
  const serviceData = SERVICES_DATA[params.type as keyof typeof SERVICES_DATA]

  if (!serviceData) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      
      <section className="relative pt-32">
        <div className="relative h-[60vh] min-h-[500px]">
          <Image
            src={serviceData.image}
            alt={serviceData.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          
          <div className="relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-end pb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {serviceData.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              {serviceData.description}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold dark:text-white">What's Included</h2>
              <ul className="space-y-4">
                {serviceData.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-orange-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-8">
                <p className="text-3xl font-bold text-orange-500">{serviceData.price}</p>
                <button className="mt-4 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 