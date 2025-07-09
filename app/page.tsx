"use client"

import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
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
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src="/placeholder-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-light mb-4 tracking-wider">LUXE SALON</h1>
          <p className="text-xl md:text-2xl font-light tracking-widest">BEAUTY REDEFINED</p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
          <div className="animate-bounce">
            <ChevronUp className="h-6 w-6 rotate-180" />
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <section key={index} className="relative h-screen flex items-center overflow-hidden">
          {/* Background Video/Image */}
          <div className="absolute inset-0">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src={service.video} type="video/mp4" />
            </video>
            {/* Fallback image */}
            <img
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 tracking-wider leading-tight">
                {service.title}
              </h2>
              <p className="text-lg md:text-xl text-white/90 font-light tracking-widest mb-8">{service.subtitle}</p>

              {service.hasButton && (
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-lg font-light tracking-widest"
                >
                  SERVICES
                </Button>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Final Call to Action */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src="/placeholder-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h2 className="text-5xl md:text-7xl font-light mb-8 tracking-wider">READY TO TRANSFORM?</h2>
          <Link href="/book">
            <Button
              size="lg"
              className="bg-pink-600 hover:bg-pink-700 text-white px-12 py-6 text-xl font-light tracking-widest border-0"
            >
              BOOK NOW
            </Button>
          </Link>
        </div>
      </section>

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
