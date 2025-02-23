export default function ClientsPage() {
  const testimonials = [
    {
      name: "Sarah & John",
      event: "Wedding Photography",
      image: "/testimonials/couple1.jpg",
      quote: "SammyBee captured our special day perfectly. Every photo tells a story and brings back beautiful memories."
    },
    {
      name: "Michael Thompson",
      event: "Corporate Event",
      image: "/testimonials/corporate1.jpg",
      quote: "Professional, punctual, and produced amazing results. Our company events have never looked better."
    },
    {
      name: "The Anderson Family",
      event: "Family Portrait",
      image: "/testimonials/family1.jpg",
      quote: "We love our family portraits! SammyBee was great with the kids and captured our family perfectly."
    }
  ]

  return (
    <main className="min-h-screen pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-12">Our Happy Clients</h1>
        
        {/* Client Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 mr-4" />
                <div>
                  <h3 className="font-bold text-xl">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.event}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>

        {/* Client Logos Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-8">Companies We've Worked With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[3/2] bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 