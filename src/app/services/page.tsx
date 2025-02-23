import Navigation from "@/components/navigation"

export default function ServicesPage() {
  const services = [
    {
      title: "Wedding Photography",
      description: "Capturing your special day with elegance and style. From intimate ceremonies to grand celebrations."
    },
    {
      title: "Portrait Sessions",
      description: "Professional portraits that capture your personality. Perfect for individuals, families, and corporate headshots."
    },
    {
      title: "Event Coverage",
      description: "Comprehensive coverage of your events, ensuring no special moment goes uncaptured."
    },
    {
      title: "Commercial Photography",
      description: "High-quality commercial photography for your business needs, from product shots to corporate events."
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-7xl mx-auto px-8 py-24 pt-32">
        <h1 className="text-5xl md:text-6xl font-bold mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 