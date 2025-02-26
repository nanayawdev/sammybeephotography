import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | SammyBbee Photography',
  description: 'Find answers to common questions about our photography services, booking process, and what to expect during your session.',
}

// FAQ data organized by categories
const faqData = {
  general: {
    title: "General Questions",
    questions: [
      {
        q: "How do I book a photography session?",
        a: "You can book a session by clicking the 'Book Now' button on any of our service pages, or by contacting us directly through our contact form. We'll get back to you within 24 hours to discuss your needs and schedule your session."
      },
      {
        q: "What forms of payment do you accept?",
        a: "We accept various payment methods including bank transfers, mobile money, and credit/debit cards. A 50% deposit is required to secure your booking, with the remaining balance due before or on the day of the shoot."
      },
      {
        q: "How far in advance should I book?",
        a: "We recommend booking at least 2-3 weeks in advance for regular sessions, and 2-3 months ahead for weddings and major events to ensure availability. However, we do try to accommodate last-minute bookings when possible."
      }
    ]
  },
  session: {
    title: "Session & Preparation",
    questions: [
      {
        q: "What should I wear to my photo session?",
        a: "We recommend wearing solid colors and avoiding busy patterns. For group shots, coordinate colors but don't match exactly. We'll provide a detailed styling guide before your session with specific recommendations based on your chosen package."
      },
      {
        q: "How long does a typical session last?",
        a: "Session duration varies by package: Basic sessions typically last 1-2 hours, while Premium packages can extend to 4-8 hours. Wedding coverage can span an entire day. Check your specific package details for exact timing."
      },
      {
        q: "Can I bring outfit changes?",
        a: "Yes! Most of our packages include multiple outfit changes. Basic packages typically allow 2-3 changes, while Premium packages may include up to 4-6 changes. We'll help you plan your outfits to maximize shooting time."
      }
    ]
  },
  delivery: {
    title: "Photos & Delivery",
    questions: [
      {
        q: "How long until I receive my photos?",
        a: "Digital previews are typically available within 48-72 hours. Fully edited photos are delivered within 1-2 weeks for regular sessions, and 3-4 weeks for weddings and major events. Rush delivery is available for an additional fee."
      },
      {
        q: "How will I receive my photos?",
        a: "Your edited photos will be delivered through a private online gallery where you can download high-resolution images, share with family and friends, and order prints. The gallery remains active for 6 months."
      },
      {
        q: "Do you provide raw/unedited files?",
        a: "We don't provide RAW or unedited files as part of our service. Each image we deliver is professionally edited to ensure it meets our quality standards and represents our signature style."
      }
    ]
  },
  rights: {
    title: "Rights & Usage",
    questions: [
      {
        q: "Can I print my photos anywhere?",
        a: "Yes, you receive full printing rights with your digital images. However, we recommend using our professional printing services to ensure the highest quality and color accuracy."
      },
      {
        q: "Can I share my photos on social media?",
        a: "Absolutely! We encourage you to share your photos on social media. We just ask that you credit 'SammyBbee Photography' when posting and avoid applying additional filters or edits."
      },
      {
        q: "Do you keep backup copies of the photos?",
        a: "Yes, we maintain backup copies of all delivered photos for 12 months after delivery. However, we recommend you download and backup your photos promptly upon receiving them."
      }
    ]
  }
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 h-[50vh]">
          <Image
            src="/gallery/faq-hero.jpeg"
            alt="Frequently Asked Questions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        <div className="relative min-h-[50vh] max-w-7xl mx-auto px-8">
          <div className="absolute bottom-20 left-8 right-8">
            <div className="max-w-3xl">
              <h4 className="text-orange-500 font-medium mb-4">got questions?</h4>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Find answers to common questions about our photography services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-8">
          {Object.values(faqData).map((section, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">
                {section.title}
              </h2>
              
              <div className="space-y-6">
                {section.questions.map((item, qIndex) => (
                  <details
                    key={qIndex}
                    className="group bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <h3 className="text-lg font-medium text-black dark:text-white pr-8">
                        {item.q}
                      </h3>
                      <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 dark:text-white">
                        <svg
                          className="w-5 h-5 rotate-0 group-open:rotate-180 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}

          {/* Contact Section */}
          <div className="mt-16 p-8 bg-black/5 dark:bg-white/5 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
              Still have questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Can&apos;t find what you&apos;re looking for? Feel free to reach out to us directly.
            </p>
            <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg
              hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 