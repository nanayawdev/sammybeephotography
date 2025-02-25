"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { 
    label: "RATECARD", 
    href: "/ratecard",
    dropdown: [
      { label: "Wedding Photography", href: "/services/wedding" },
      { label: "Graduation Photos", href: "/services/graduation" },
      { label: "Studio Sessions", href: "/services/studio" },
      { label: "Portrait Sessions", href: "/services/portrait" },
      { label: "Pre-Birthday Shoot", href: "/services/birthday" },
      { label: "Family Portrait", href: "/services/family" },
      { label: "Corporate Portrait", href: "/services/corporate" },
      { label: "Event Coverage", href: "/services/events" },
    ]
  },
  { label: "GALLERY", href: "/gallery" },
  { label: "CLIENTS", href: "/clients" },
  { label: "BOOKING", href: "/booking" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
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
      <div className="max-w-7xl mx-auto px-4 md:px-8 overflow-x-auto">
        <div className="flex items-center justify-center min-w-max">
          <div className="flex gap-6 md:gap-12 items-center px-4">
            {NAV_ITEMS.map((item) => (
              <div 
                key={item.label} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-rubik tracking-wider transition-all duration-300 relative group whitespace-nowrap flex items-center gap-1
                    ${pathname === item.href 
                      ? "text-white" 
                      : "text-white/70 hover:text-white"
                    }
                  `}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-sm rounded-lg overflow-hidden">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 