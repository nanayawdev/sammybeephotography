"use client"

import Link from "next/link"
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { BsTiktok } from "react-icons/bs"
import { ForwardRefExoticComponent, RefAttributes } from "react"
import { LucideProps } from "lucide-react"

type FooterLink = {
  label: string;
  href: string;
  icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}

const FOOTER_LINKS: Record<string, FooterLink[]> = {
  Support: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Booking", href: "/booking" },
    { label: "Rate Card", href: "/ratecard" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "FAQ", href: "/faq" },
  ],
  Contact: [
    { 
      label: "info@sammybee.com",
      href: "mailto:info@sammybee.com",
      icon: Mail 
    },
    { 
      label: "+233 123 456 789",
      href: "tel:+233123456789",
      icon: Phone 
    },
    { 
      label: "123 Photography Street, Accra, Ghana",
      href: "#",
      icon: MapPin 
    },
  ]
}

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-black dark:text-white">SammyBee Photography</h2>
            <p className="text-gray-900 dark:text-white max-w-sm">
              Capturing life&apos;s precious moments with artistic precision and professional excellence.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white hover:text-black dark:hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white hover:text-black dark:hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white hover:text-black dark:hover:text-white transition-colors"
              >
                <BsTiktok className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white hover:text-black dark:hover:text-white transition-colors"
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
                      className="text-gray-900 dark:text-white hover:text-black dark:hover:text-white transition-colors flex items-center gap-2"
                    >
                      {'icon' in link && link.icon && <link.icon className="w-4 h-4" />}
                      <span className={link.icon ? "break-words" : ""}>
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-black/10 dark:border-white/10">
          <p className="text-gray-900 dark:text-white text-sm text-center">
            © {new Date().getFullYear()} SammyBee Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 