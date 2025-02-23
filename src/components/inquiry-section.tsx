"use client"

import { useState } from "react"
import { Send } from "lucide-react"

const SERVICE_OPTIONS = [
  "Wedding Photography",
  "Portrait Session",
  "Event Coverage",
  "Family Session",
  "Commercial Photography"
]

export default function InquirySection() {
  const [agreed, setAgreed] = useState(false)
  const [selectedService, setSelectedService] = useState("")

  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2">
      {/* Left Image */}
      <div className="relative h-[300px] lg:h-auto">
        <img
          src="/studio-image.jpeg"
          alt="Photography contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right Form Section */}
      <div className="bg-black px-8 py-16 lg:px-16 lg:py-24">
        <div className="max-w-lg">
          <div className="mb-12">
            <p className="text-sm text-orange-500 font-medium mb-2">CONTACT US</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              HAVE QUESTIONS?
              <br />
              GET IN TOUCH!
            </h2>
          </div>

          <form className="space-y-6">
            {/* Two Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Name *"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-orange-500 transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-orange-500 transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address *"
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-orange-500 transition-colors"
                required
              />
            </div>

            <div>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                required
              >
                <option value="" disabled selected className="text-gray-500">Type of Service *</option>
                {SERVICE_OPTIONS.map((service) => (
                  <option key={service} value={service} className="text-black">
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <input
                type="date"
                placeholder="Date of Shoot/Event *"
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-orange-500 transition-colors"
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-orange-500 transition-colors resize-none"
              />
            </div>

            {/* Privacy Policy Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="privacy"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="rounded border-white/20 bg-transparent text-orange-500 focus:ring-orange-500"
              />
              <label htmlFor="privacy" className="text-sm text-white/70">
                I agree to the{" "}
                <a href="/privacy" className="text-orange-500 hover:text-orange-400 underline">
                  privacy policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group inline-flex items-center bg-orange-500 text-white rounded-xl px-8 py-4 text-sm font-medium 
                transition-all duration-300 
                hover:bg-orange-600
                disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!agreed}
            >
              GET IN TOUCH
              <Send className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
} 