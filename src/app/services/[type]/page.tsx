import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Metadata } from "next"

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
    packages: {
      basic: {
        title: "PRE-WEDDING SESSION",
        description: "Create beautiful memories before your big day with our premium pre-wedding package.",
        image: "/gallery/sammybbee1.jpeg",
        features: [
          "2 hours coverage",
          "2 outfit changes",
          "30 images, 10 retouched images",
          "1 Photographer + 1 Creative Director",
          "A 30-minute consultation with the creative team"
        ],
        price: "GH₵ 3,000"
      },
      premium: {
        title: "POST-WEDDING SESSION",
        description: "Capture your newlywed bliss with our comprehensive post-wedding package.",
        image: "/gallery/sammybbee2.jpeg",
        features: [
          "2 hours coverage",
          "2 outfit changes",
          "40 edited photos",
          "15 retouched images",
          "1 Photographer + 1 Creative Director",
          "Complimentary Hair & Makeup"
        ],
        price: "GH₵ 4,500"
      }
    }
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
    packages: {
      basic: {
        title: "SOLO SESSION",
        description: "Perfect for individual graduation portraits.",
        image: "/gallery/graduation/2.jpeg",
        features: [
          "1 hour coverage",
          "2 outfit changes",
          "20 edited photos",
          "Campus locations",
          "Digital delivery"
        ],
        price: "GH₵ 2,500"
      },
      premium: {
        title: "GROUP SESSION",
        description: "Ideal for friends and family graduation celebrations.",
        image: "/gallery/graduation/3.jpeg",
        features: [
          "2 hours coverage",
          "Multiple group shots",
          "Individual portraits",
          "40 edited photos",
          "Multiple campus locations",
          "Same-day preview images"
        ],
        price: "GH₵ 3,500"
      }
    }
  },
  studio: {
    title: "Studio Sessions",
    description: "Professional studio photography with premium lighting and backdrops.",
    image: "/gallery/studio/1.jpeg",
    packages: {
      basic: {
        title: "CLASSIC STUDIO",
        description: "Perfect for professional headshots and portraits.",
        image: "/gallery/studio/2.jpeg",
        features: [
          "1 hour session",
          "2 outfit changes",
          "15 edited photos",
          "Basic retouching",
          "Digital delivery"
        ],
        price: "GH₵ 2,000"
      },
      premium: {
        title: "PREMIUM STUDIO",
        description: "Comprehensive studio session with multiple setups.",
        image: "/gallery/studio/3.jpeg",
        features: [
          "2 hours session",
          "4 outfit changes",
          "Multiple backgrounds",
          "30 edited photos",
          "Advanced retouching",
          "Same-day previews"
        ],
        price: "GH₵ 3,500"
      }
    }
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
    packages: {
      basic: {
        title: "STANDARD PORTRAIT",
        description: "Classic portrait session in a single location.",
        image: "/gallery/portrait/2.jpeg",
        features: [
          "1 hour session",
          "2 outfit changes",
          "Indoor/Outdoor options",
          "15 edited photos",
          "Basic retouching"
        ],
        price: "GH₵ 2,000"
      },
      premium: {
        title: "SIGNATURE PORTRAIT",
        description: "Premium portrait experience with multiple locations.",
        image: "/gallery/portrait/3.jpeg",
        features: [
          "2 hours session",
          "3 outfit changes",
          "Multiple locations",
          "25 edited photos",
          "Advanced retouching",
          "Style consultation"
        ],
        price: "GH₵ 3,500"
      }
    }
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
    packages: {
      basic: {
        title: "FAMILY ESSENTIALS",
        description: "Perfect for small family groups up to 5 people.",
        image: "/gallery/family/2.jpeg",
        features: [
          "1 hour session",
          "Single location",
          "20 edited photos",
          "Group & individual shots",
          "Digital delivery"
        ],
        price: "GH₵ 3,000"
      },
      premium: {
        title: "EXTENDED FAMILY",
        description: "Ideal for larger family groups and multiple combinations.",
        image: "/gallery/family/3.jpeg",
        features: [
          "2 hours session",
          "Multiple locations",
          "40 edited photos",
          "Extended group shots",
          "Individual family units",
          "Print package included"
        ],
        price: "GH₵ 5,000"
      }
    }
  },
  corporate: {
    title: "Corporate Portrait",
    description: "Professional headshots and corporate photography services.",
    image: "/gallery/corporate/1.jpeg",
    packages: {
      basic: {
        title: "BUSINESS ESSENTIALS",
        description: "Professional headshots for individuals and small teams.",
        image: "/gallery/corporate/2.jpeg",
        features: [
          "2 hours session",
          "Basic retouching",
          "Individual headshots",
          "2 outfit changes",
          "Digital delivery"
        ],
        price: "GH₵ 3,000"
      },
      premium: {
        title: "CORPORATE COMPLETE",
        description: "Comprehensive corporate photography package.",
        image: "/gallery/corporate/3.jpeg",
        features: [
          "Full day session",
          "Team photos",
          "Individual headshots",
          "Multiple backgrounds",
          "Advanced retouching",
          "Company branding alignment",
          "Same-day previews"
        ],
        price: "GH₵ 6,000"
      }
    }
  },
  events: {
    title: "Event Coverage",
    description: "Comprehensive coverage for all your special events.",
    image: "/gallery/events/1.jpeg",
    packages: {
      basic: {
        title: "EVENT STANDARD",
        description: "Essential event photography coverage.",
        image: "/gallery/events/2.jpeg",
        features: [
          "4 hours coverage",
          "One photographer",
          "100 edited photos",
          "Online gallery",
          "Quick turnaround"
        ],
        price: "GH₵ 5,000"
      },
      premium: {
        title: "EVENT PREMIUM",
        description: "Complete event documentation with enhanced coverage.",
        image: "/gallery/events/3.jpeg",
        features: [
          "8 hours coverage",
          "Two photographers",
          "200 edited photos",
          "Highlight reel",
          "Same-day previews",
          "Drone coverage",
          "Premium photo album"
        ],
        price: "GH₵ 8,000"
      }
    }
  },
  birthday: {
    title: "Pre-Birthday Shoot",
    description: "Make your birthday special with a custom photo session.",
    image: "/gallery/birthday/1.jpeg",
    packages: {
      basic: {
        title: "BIRTHDAY CLASSIC",
        description: "Perfect for capturing your birthday memories.",
        image: "/gallery/birthday/2.jpeg",
        features: [
          "2 hours session",
          "2 locations",
          "3 outfit changes",
          "30 edited photos",
          "Basic props included"
        ],
        price: "GH₵ 2,500"
      },
      premium: {
        title: "BIRTHDAY DELUXE",
        description: "Create an unforgettable birthday photo experience.",
        image: "/gallery/birthday/3.jpeg",
        features: [
          "4 hours session",
          "Multiple locations",
          "5 outfit changes",
          "50 edited photos",
          "Premium props",
          "Makeup artist",
          "Same-day preview"
        ],
        price: "GH₵ 4,000"
      }
    }
  },
  personal: {
    title: "Personal Branding",
    description: "Build your professional image with our personal branding photography.",
    image: "/gallery/personal/1.jpeg",
    packages: {
      basic: {
        title: "BRAND STARTER",
        description: "Essential personal branding photography package.",
        image: "/gallery/personal/2.jpeg",
        features: [
          "2 hours session",
          "2 outfit changes",
          "1 location",
          "20 edited photos",
          "Social media kit"
        ],
        price: "GH₵ 3,500"
      },
      premium: {
        title: "BRAND PREMIUM",
        description: "Comprehensive personal branding solution.",
        image: "/gallery/personal/3.jpeg",
        features: [
          "4 hours session",
          "4 outfit changes",
          "Multiple locations",
          "40 edited photos",
          "Advanced retouching",
          "Brand consultation",
          "Content calendar planning"
        ],
        price: "GH₵ 6,000"
      }
    }
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
    packages: {
      basic: {
        title: "PORTFOLIO STARTER",
        description: "Essential fashion portfolio session.",
        image: "/gallery/fashion/2.jpeg",
        features: [
          "2 hours session",
          "3 outfit changes",
          "Studio setup",
          "20 edited photos",
          "Basic retouching"
        ],
        price: "GH₵ 4,000"
      },
      premium: {
        title: "FASHION EDITORIAL",
        description: "Complete fashion editorial experience.",
        image: "/gallery/fashion/3.jpeg",
        features: [
          "4 hours session",
          "6 outfit changes",
          "Studio & Location",
          "40 edited photos",
          "Advanced retouching",
          "Styling assistance",
          "Makeup artist included"
        ],
        price: "GH₵ 7,000"
      }
    }
  }
}

// Define the params type for generateMetadata
type Props = {
  params: {
    type: string
  }
}

// Update metadata generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const serviceData = SERVICES_DATA[params.type as keyof typeof SERVICES_DATA]
  
  return {
    title: serviceData ? `${serviceData.title} | SammyBbee Photography` : 'Service Not Found',
    description: serviceData?.description
  }
}

export default async function ServicePage({
  params,
}: Props) {
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
      {serviceData.packages ? (
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
      ) : null}

      <Footer />
    </main>
  )
} 