export default function RateCardPage() {
  const rates = [
    {
      category: "Wedding Photography",
      packages: [
        {
          name: "Half Day",
          price: "799",
          duration: "4 hours",
          deliverables: "150+ edited photos"
        },
        {
          name: "Full Day",
          price: "1499",
          duration: "8 hours",
          deliverables: "300+ edited photos"
        }
      ]
    },
    {
      category: "Portrait Sessions",
      packages: [
        {
          name: "Basic",
          price: "299",
          duration: "1 hour",
          deliverables: "20 edited photos"
        },
        {
          name: "Premium",
          price: "499",
          duration: "2 hours",
          deliverables: "40 edited photos"
        }
      ]
    },
    {
      category: "Event Coverage",
      packages: [
        {
          name: "Standard",
          price: "599",
          duration: "3 hours",
          deliverables: "100+ edited photos"
        },
        {
          name: "Extended",
          price: "999",
          duration: "6 hours",
          deliverables: "200+ edited photos"
        }
      ]
    }
  ]

  return (
    <main className="min-h-screen pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-12">Rate Card</h1>
        <div className="space-y-16">
          {rates.map((category) => (
            <div key={category.category}>
              <h2 className="text-3xl font-bold mb-8">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.packages.map((pkg) => (
                  <div key={pkg.name} className="bg-gray-50 p-8 rounded-xl">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-4xl font-bold text-orange-500 mb-6">${pkg.price}</p>
                    <div className="space-y-2 text-gray-600">
                      <p>Duration: {pkg.duration}</p>
                      <p>Includes: {pkg.deliverables}</p>
                    </div>
                    <button className="w-full mt-8 bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition-colors">
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 