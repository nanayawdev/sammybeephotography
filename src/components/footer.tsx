"use client"

import Link from "next/link"
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { BsTiktok } from "react-icons/bs"

const FOOTER_LINKS = {
  Services: [
    { label: "Wedding Photography", href: "/services/wedding" },
    { label: "Portrait Sessions", href: "/services/portrait" },
    { label: "Event Coverage", href: "/services/events" },
    { label: "Studio Sessions", href: "/services/studio" },
    { label: "Graduation Photos", href: "/services/graduation" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Booking", href: "/booking" },
    { label: "Rate Card", href: "/ratecard" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "FAQ", href: "/faq" },
  ]
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">SammyBee Photography</h2>
            <p className="text-gray-400 max-w-sm">
              Capturing life's precious moments with artistic precision and professional excellence.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <BsTiktok className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold mb-6">{title}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h3 className="font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@sammybee.com"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  info@sammybee.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+233123456789"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +233 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <address className="not-italic">
                  123 Photography Street,<br />
                  Accra, Ghana
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} SammyBee Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 