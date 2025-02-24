"use client"

import { useState } from "react"
import { X } from "lucide-react"

const SERVICE_OPTIONS = [
  "Wedding Photography",
  "Portrait Session",
  "Event Coverage",
  "Family Session",
  "Commercial Photography"
]

export default function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [agreed, setAgreed] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-black rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Book a Session</h3>
              <p className="text-gray-600 dark:text-gray-300">Fill in the details and we&apos;ll get back to you shortly.</p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name *"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 
                  bg-white dark:bg-gray-900 
                  text-gray-900 dark:text-white 
                  placeholder:text-gray-500 dark:placeholder:text-gray-400
                  focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 
                  bg-white dark:bg-gray-900 
                  text-gray-900 dark:text-white 
                  placeholder:text-gray-500 dark:placeholder:text-gray-400
                  focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <input
              type="email"
              placeholder="Email Address *"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 
                bg-white dark:bg-gray-900 
                text-gray-900 dark:text-white 
                placeholder:text-gray-500 dark:placeholder:text-gray-400
                focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />

            <select
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 
                bg-white dark:bg-gray-900 
                text-gray-900 dark:text-white 
                focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="" className="text-gray-500 dark:text-gray-400">Select Service Type *</option>
              {SERVICE_OPTIONS.map((service) => (
                <option 
                  key={service} 
                  value={service}
                  className="text-gray-900 dark:text-white"
                >
                  {service}
                </option>
              ))}
            </select>

            <input
              type="date"
              placeholder="Preferred Date *"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 
                bg-white dark:bg-gray-900 
                text-gray-900 dark:text-white 
                placeholder:text-gray-500 dark:placeholder:text-gray-400
                focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />

            <textarea
              placeholder="Additional Details"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 
                bg-white dark:bg-gray-900 
                text-gray-900 dark:text-white 
                placeholder:text-gray-500 dark:placeholder:text-gray-400
                focus:outline-none focus:ring-2 focus:ring-orange-500 
                resize-none"
            />

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="privacy-modal"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="rounded border-gray-300 dark:border-gray-600 
                  text-orange-500 
                  focus:ring-orange-500 
                  bg-white dark:bg-gray-900"
              />
              <label htmlFor="privacy-modal" className="text-sm text-gray-600 dark:text-gray-300">
                I agree to the{" "}
                <a href="/privacy" className="text-orange-500 hover:text-orange-600 underline">
                  privacy policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white rounded-lg px-8 py-4 font-medium 
                transition-all duration-300 
                hover:bg-orange-600
                disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!agreed}
            >
              Submit Booking Request
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 