import Navigation from "@/components/navigation"
import InquirySection from "@/components/inquiry-section"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-32">
        <InquirySection />
      </div>
    </main>
  )
} 