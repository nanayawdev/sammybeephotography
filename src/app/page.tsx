import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import StoriesSection from "@/components/stories-section"
import SessionsSection from "@/components/sessions-section"
import GalleryGrid from "@/components/gallery-grid"
import StatsSection from "@/components/stats-section"
import BookUsSection from "@/components/book-us-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <StoriesSection />
      <SessionsSection />
      <GalleryGrid />
      <StatsSection />
      <BookUsSection />
      <Footer />
    </main>
  )
}