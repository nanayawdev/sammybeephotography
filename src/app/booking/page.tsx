import InquirySection from "@/components/inquiry-section"

export default function BookingPage() {
  return (
    <main className="min-h-screen pt-24 bg-black">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Book Your Session</h1>
        <InquirySection />
      </div>
    </main>
  )
} 