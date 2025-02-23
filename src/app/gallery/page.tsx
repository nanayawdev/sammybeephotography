import Navigation from "@/components/navigation"
import GalleryGrid from "@/components/gallery-grid"

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-7xl mx-auto px-8 py-24 pt-32">
        <h1 className="text-5xl md:text-6xl font-bold mb-12">Our Gallery</h1>
        <GalleryGrid />
      </div>
    </main>
  )
} 