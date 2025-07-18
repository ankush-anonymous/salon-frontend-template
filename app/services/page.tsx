import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scissors, RadarIcon as Razor, Sparkles, Crown, Clock, Star } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Scissors,
      title: "Classic Haircut",
      description: "Traditional and modern haircuts tailored to your face shape and style preferences",
      price: "$25",
      duration: "30 mins",
      features: ["Consultation", "Wash & Cut", "Styling", "Finishing"],
    },
    {
      icon: Razor,
      title: "Hot Towel Shave",
      description: "Luxurious traditional shave with hot towels and premium products",
      price: "$35",
      duration: "45 mins",
      features: ["Hot Towel Treatment", "Premium Shave", "Face Massage", "Aftercare"],
    },
    {
      icon: Sparkles,
      title: "Beard Grooming",
      description: "Complete beard trimming, shaping, and conditioning service",
      price: "$20",
      duration: "25 mins",
      features: ["Beard Trim", "Shape & Style", "Conditioning", "Mustache Trim"],
    },
    {
      icon: Crown,
      title: "Premium Package",
      description: "Complete grooming experience combining all our premium services",
      price: "$75",
      duration: "90 mins",
      features: ["Haircut", "Hot Towel Shave", "Beard Grooming", "Hair Styling"],
    },
  ]

  return (
    <div className="min-h-screen bg-[#FFF8EF]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#2B1B0C]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-[#A76F3E]">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience premium grooming services crafted by skilled professionals using the finest techniques and
            products
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-[#A76F3E] rounded-full flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-[#2B1B0C]">{service.title}</h3>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-[#A76F3E]">{service.price}</div>
                          <div className="text-sm text-gray-500 flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {service.duration}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-[#2B1B0C] mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-600">
                              <Star className="h-4 w-4 text-[#A76F3E] fill-current" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link href="/book">
                        <Button className="w-full bg-[#A76F3E] hover:bg-[#A76F3E]/90 text-white">
                          Book This Service
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#2B1B0C]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience <span className="text-[#A76F3E]">Excellence?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book your appointment today and discover why we're the preferred choice for discerning gentlemen
          </p>
          <Link href="/book">
            <Button className="bg-[#A76F3E] hover:bg-[#A76F3E]/90 text-white px-8 py-4 text-lg">
              Book Appointment Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
