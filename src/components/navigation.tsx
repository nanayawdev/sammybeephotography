"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

// Import the sessions data
const SESSIONS = [
  {
    title: "Wedding Photography",
    category: "Commercial",
    href: "/services/wedding"
  },
  {
    title: "Graduation Photos",
    category: "Commercial",
    href: "/services/graduation"
  },
  {
    title: "Studio Sessions",
    category: "New Build",
    href: "/services/studio"
  },
  {
    title: "Portrait Sessions",
    category: "Commercial",
    href: "/services/portrait"
  },
  {
    title: "Pre-Birthday Shoot",
    category: "Renovation",
    href: "/services/birthday"
  },
  {
    title: "Family Portrait",
    category: "Commercial",
    href: "/services/family"
  },
  {
    title: "Corporate Portrait",
    category: "Commercial",
    href: "/services/corporate"
  },
  {
    title: "Event Coverage",
    category: "Commercial",
    href: "/services/events"
  }
]

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { 
    label: "SERVICES",
    submenus: [
      {
        label: "Wedding & Events",
        image: "/gallery/wedding/1.jpeg",
        items: [
          { label: "Wedding Photography", href: "/services/wedding" },
          { label: "Graduation Photos", href: "/services/graduation" },
          { label: "Event Coverage", href: "/services/events" },
        ]
      },
      {
        label: "Portrait Sessions",
        image: "/gallery/portrait/1.jpeg",
        items: [
          { label: "Studio Sessions", href: "/services/studio" },
          { label: "Portrait Sessions", href: "/services/portrait" },
          { label: "Family Portrait", href: "/services/family" },
          { label: "Corporate Portrait", href: "/services/corporate" },
        ]
      },
      {
        label: "Special Shoots",
        image: "/gallery/birthday/1.jpeg",
        items: [
          { label: "Pre-Birthday Shoot", href: "/services/birthday" },
          { label: "Personal Branding", href: "/services/personal" },
          { label: "Fashion & Model", href: "/services/fashion" },
        ]
      }
    ]
  },
  { label: "GALLERY", href: "/gallery" },
  { label: "CLIENTS", href: "/clients" },
  { label: "BOOKING", href: "/booking" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center">
          <div className="flex gap-6 md:gap-12 items-center">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenus ? (
                  <div className="flex items-center gap-1 text-sm font-rubik tracking-wider text-white/70 hover:text-white cursor-pointer">
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                    
                    {/* Mega Menu Dropdown */}
                    <div className="absolute top-full mt-2 
                      w-[calc(100vw-2rem)] md:w-[800px] bg-black/90 backdrop-blur-sm rounded-lg 
                      invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300
                      p-6 grid grid-cols-1 md:grid-cols-[1fr,2px,1fr,2px,1fr] gap-6
                      max-h-[80vh] md:max-h-none overflow-y-auto md:overflow-visible
                      left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0">
                      {item.submenus.map((submenu, index) => (
                        <div key={submenu.label} className="contents">
                          <div className="space-y-6">
                            {/* Image */}
                            <div className="relative h-40 rounded-lg overflow-hidden">
                              <Image
                                src={submenu.image}
                                alt={submenu.label}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black/30" />
                              <h3 className="absolute bottom-4 left-4 font-medium text-white text-lg">
                                {submenu.label}
                              </h3>
                            </div>
                            
                            {/* Links */}
                            <ul className="space-y-3">
                              {submenu.items.map((subItem) => (
                                <li key={subItem.href}>
                                  <Link
                                    href={subItem.href}
                                    className="block text-sm text-white/70 hover:text-white transition-colors"
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Divider */}
                          {index < item.submenus.length - 1 && (
                            <div className="hidden md:block bg-white/10 w-[2px]" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-rubik tracking-wider
                      ${pathname === item.href 
                        ? "text-white" 
                        : "text-white/70 hover:text-white"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 