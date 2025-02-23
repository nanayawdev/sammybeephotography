import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import StoriesSection from "@/components/stories-section"
import StatsSection from "@/components/stats-section"
import BookUsSection from "@/components/book-us-section"
import InquirySection from "@/components/inquiry-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <StoriesSection />
      <StatsSection />
      <BookUsSection />
      <InquirySection />
    </main>
  )
}