"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"

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
        label: "Wedding",
        items: [
          { label: "Pre-Wedding", href: "/services/pre-wedding" },
          { label: "Wedding Day", href: "/services/wedding" },
          { label: "Post-Wedding", href: "/services/post-wedding" },
        ]
      },
      {
        label: "Portrait",
        items: [
          { label: "Studio Sessions", href: "/services/studio" },
          { label: "Outdoor Sessions", href: "/services/outdoor" },
          { label: "Family Portrait", href: "/services/family" },
        ]
      },
      {
        label: "Events",
        items: [
          { label: "Corporate Events", href: "/services/corporate" },
          { label: "Birthday Parties", href: "/services/birthday" },
          { label: "Graduation", href: "/services/graduation" },
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
                  // Menu with submenu
                  <div className="flex items-center gap-1 text-sm font-rubik tracking-wider text-white/70 hover:text-white cursor-pointer">
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                    
                    {/* Mega Menu Dropdown */}
                    <div className="absolute top-full left-0 mt-2 w-[480px] bg-black/90 backdrop-blur-sm rounded-lg 
                      invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300
                      grid grid-cols-3 gap-4 p-6">
                      {item.submenus.map((submenu) => (
                        <div key={submenu.label} className="space-y-3">
                          <h3 className="font-medium text-white">{submenu.label}</h3>
                          <ul className="space-y-2">
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
                      ))}
                    </div>
                  </div>
                ) : (
                  // Regular menu item
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