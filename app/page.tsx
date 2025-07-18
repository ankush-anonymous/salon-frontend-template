"use client"

import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import InstagramGallery from "@/components/instagram-gallery"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      title: "HAIR TREATMENTS",
      subtitle: "RESTORE YOUR HAIR",
      video: "/placeholder-video.mp4",
      image: "/placeholder.svg?height=1080&width=1920",
    },
    {
      title: "FACIAL SERVICES",
      subtitle: "REJUVENATE YOUR SKIN",
      video: "/placeholder-video.mp4",
      image: "/placeholder.svg?height=1080&width=1920",
    },
    {
      title: "HAIRCUTS FOR YOUR ENTIRE FAMILY",
      subtitle: "BE PART OF A COMMUNITY THAT EMPOWERS",
      video: "/placeholder-video.mp4",
      image: "/placeholder.svg?height=1080&width=1920",
      hasButton: true,
    },
    {
      title: "NAIL ARTISTRY",
      subtitle: "PERFECT YOUR STYLE",
      video: "/placeholder-video.mp4",
      image: "/placeholder.svg?height=1080&width=1920",
    },
    {
      title: "MASSAGE THERAPY",
      subtitle: "RELAX AND REJUVENATE",
      video: "/placeholder-video.mp4",
      image: "/placeholder.svg?height=1080&width=1920",
    },
    {
      title: "BRIDAL PACKAGES",
      subtitle: "YOUR PERFECT DAY",
      video: "/placeholder-video.mp4",
      image: "/placeholder.svg?height=1080&width=1920",
    },
  ]

  return (
    <div className="min-h-screen bg-[#FFF8EF]">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection services={services} />
      <TestimonialsSection />
      <InstagramGallery />
      <Footer />

      {/* Back to Top Button */}
      <div className="fixed bottom-8 left-8 z-40">
        <Button
          variant="ghost"
          size="icon"
          className="bg-black/50 text-white hover:bg-black/70 rounded-none w-12 h-12"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
