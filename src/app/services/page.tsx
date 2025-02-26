import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { SERVICES_DATA } from "@/app/lib/services-data"

export const metadata = {
  title: 'Our Services | SammyBbee Photography',
  description: 'Explore our range of professional photography services.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 h-[50vh]">
          <Image
            src="/gallery/services-hero.jpeg"
            alt="Our Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        <div className="relative min-h-[50vh] max-w-7xl mx-auto px-8">
          <div className="absolute bottom-20 left-8 right-8">
            <div className="max-w-3xl">
              <h4 className="text-orange-500 font-medium mb-4">our services.</h4>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Photography Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Explore our range of professional photography services tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(SERVICES_DATA).map(([key, service]) => (
              <Link 
                href={`/services/${key}`} 
                key={key}
                className="group bg-black/5 dark:bg-white/5 rounded-2xl overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="relative p-8">
                  <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-orange-500">
                    View Packages
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 