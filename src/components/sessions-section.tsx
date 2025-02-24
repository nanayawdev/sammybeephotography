"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const SESSIONS = [
  {
    title: "Weddings",
    description: "Your special day captured with elegance and style",
    image: "/sessions/wedding.jpg",
    href: "/services/wedding"
  },
  {
    title: "Graduations",
    description: "Celebrate your academic achievements",
    image: "/sessions/graduation.jpg",
    href: "/services/graduation"
  },
  {
    title: "Events",
    description: "Professional coverage for all your special occasions",
    image: "/sessions/events.jpg",
    href: "/services/events"
  },
  {
    title: "Engagement",
    description: "Beautiful pre-wedding photography sessions",
    image: "/sessions/engagement.jpg",
    href: "/services/engagement"
  },
  {
    title: "Studio Shoot",
    description: "Professional studio photography with perfect lighting",
    image: "/sessions/studio.jpg",
    href: "/services/studio"
  },
  {
    title: "Portraits",
    description: "Capture your personality in stunning portraits",
    image: "/sessions/portrait.jpg",
    href: "/services/portrait"
  },
  {
    title: "Pre-Birthday",
    description: "Make your birthday celebration extra special",
    image: "/sessions/birthday.jpg",
    href: "/services/birthday"
  },
  {
    title: "Commercial",
    description: "Professional photography for your business needs",
    image: "/sessions/commercial.jpg",
    href: "/services/commercial"
  }
]

export default function SessionsSection() {
  return (
    <section className="bg-white dark:bg-black py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Photography Sessions</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose from our wide range of professional photography services tailored to capture your special moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SESSIONS.map((session) => (
            <a
              key={session.title}
              href={session.href}
              className="group block bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={session.image}
                  alt={session.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{session.title}</h3>
                  <p className="text-white/80 text-sm">{session.description}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
} 