export default function PricingPage() {
  const packages = [
    {
      name: "Essential",
      price: "599",
      features: [
        "4 Hours Coverage",
        "100 Digital Photos",
        "Online Gallery",
        "Basic Editing",
        "Digital Download"
      ]
    },
    {
      name: "Premium",
      price: "999",
      features: [
        "8 Hours Coverage",
        "300 Digital Photos",
        "Online Gallery",
        "Advanced Editing",
        "Digital Download",
        "Printed Photo Album",
        "2 Photographers"
      ]
    },
    {
      name: "Luxury",
      price: "1499",
      features: [
        "Full Day Coverage",
        "500+ Digital Photos",
        "Online Gallery",
        "Premium Editing",
        "Digital Download",
        "Deluxe Photo Album",
        "2 Photographers",
        "Engagement Session",
        "Same Day Preview"
      ]
    }
  ]

  return (
    <main className="min-h-screen pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-12">Investment</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.name} className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-2">{pkg.name}</h2>
              <p className="text-4xl font-bold text-orange-500 mb-6">${pkg.price}</p>
              <ul className="space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <span className="mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition-colors">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 