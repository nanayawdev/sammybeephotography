import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import StoriesSection from "@/components/stories-section"
import GalleryGrid from "@/components/gallery-grid"
import StatsSection from "@/components/stats-section"
import BookUsSection from "@/components/book-us-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <StoriesSection />
      <GalleryGrid />
      <StatsSection />
      <BookUsSection />
    </main>
  )
}