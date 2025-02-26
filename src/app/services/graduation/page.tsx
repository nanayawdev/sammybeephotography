import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import { Metadata } from "next"
import { SERVICES_DATA } from "@/app/lib/services-data"

export const metadata: Metadata = {
  title: `${SERVICES_DATA.graduation.title} | SammyBbee Photography`,
  description: SERVICES_DATA.graduation.description,
}

export default function GraduationPage() {
  const serviceData = SERVICES_DATA.graduation

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
          <div className="absolute bottom-20 left-8 right-8">
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
                Read Our FAQ
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
            <div className="group bg-black/5 dark:bg-white/5 rounded-2xl overflow-hidden">
              {/* Image Container */}
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src={serviceData.packages.basic.image}
                  alt={serviceData.packages.basic.title}
                  fill
                  className="object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Content Container */}
              <div className="p-8 space-y-6 bg-black text-white">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {serviceData.packages.basic.title}
                  </h3>
                  <p className="text-gray-300">
                    {serviceData.packages.basic.description}
                  </p>
                </div>
                
                <ul className="space-y-3 text-gray-300">
                  {serviceData.packages.basic.features.map(feature => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <p className="text-3xl font-bold text-orange-500">
                    {serviceData.packages.basic.price}
                  </p>
                  <button className="bg-white text-black px-6 py-3 rounded-lg 
                    hover:bg-gray-200 transition-all duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Premium Package */}
            <div className="group bg-black/5 dark:bg-white/5 rounded-2xl overflow-hidden">
              {/* Image Container */}
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src={serviceData.packages.premium.image}
                  alt={serviceData.packages.premium.title}
                  fill
                  className="object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Content Container */}
              <div className="p-8 space-y-6 bg-black text-white">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {serviceData.packages.premium.title}
                  </h3>
                  <p className="text-gray-300">
                    {serviceData.packages.premium.description}
                  </p>
                </div>
                
                <ul className="space-y-3 text-gray-300">
                  {serviceData.packages.premium.features.map(feature => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <p className="text-3xl font-bold text-orange-500">
                    {serviceData.packages.premium.price}
                  </p>
                  <button className="bg-white text-black px-6 py-3 rounded-lg 
                    hover:bg-gray-200 transition-all duration-300">
                    Book Now
                  </button>
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