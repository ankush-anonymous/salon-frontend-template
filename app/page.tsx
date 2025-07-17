"use client"

import Navigation from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Star,
  Phone,
  Mail,
  MapPin,
  Scissors,
  Sparkles,
  Users,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const services = [
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Hair Cutting",
      description: "Professional haircuts tailored to your style and personality.",
      price: "From $35",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Hair Styling",
      description: "Expert styling for special occasions and everyday looks.",
      price: "From $45",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Beard Grooming",
      description: "Complete beard trimming and grooming services.",
      price: "From $25",
    },
  ]

  const testimonials = [
    {
      name: "David Johnson",
      title: "Business Executive",
      rating: 5,
      comment:
        "I feel so fortunate to have worked with incredible experts in the fields of health, mindfulness and training so I thought, why not share this?",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Smith",
      title: "Creative Director",
      rating: 5,
      comment:
        "Exceptional service and skilled craftsmen. The attention to detail is remarkable and I always leave feeling confident and refreshed.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Robert Wilson",
      title: "Marketing Manager",
      rating: 5,
      comment:
        "Best barbershop experience I've ever had. The team is professional, friendly, and truly understands modern men's grooming needs.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "James Brown",
      title: "Entrepreneur",
      rating: 5,
      comment:
        "Amazing atmosphere and top-notch service. They've transformed my look and boosted my confidence. Highly recommend to anyone.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const galleryImages = [
    "/placeholder.svg?height=300&width=300&text=Barber+at+work",
    "/placeholder.svg?height=300&width=300&text=Hair+cutting",
    "/placeholder.svg?height=300&width=300&text=Client+styling",
    "/placeholder.svg?height=300&width=300&text=Beard+trimming",
    "/placeholder.svg?height=300&width=300&text=Salon+interior",
    "/placeholder.svg?height=300&width=300&text=Hair+washing",
    "/placeholder.svg?height=300&width=300&text=Professional+cut",
    "/placeholder.svg?height=300&width=300&text=Styling+session",
    "/placeholder.svg?height=300&width=300&text=Final+result",
  ]

  const stats = [
    { number: "1992", label: "Founded" },
    { number: "15", label: "Awards" },
    { number: "25+", label: "Salons" },
    { number: "1600+", label: "Happy Customers" },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#2D1E0E]">
      <Navigation />

      {/* Hero Section with Custom Shape */}
      <section id="banner" className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-[#A4713E]"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 80px) 0, 100% 80px, 100% calc(100% - 80px), calc(100% - 80px) 100%, 80px 100%, 0 calc(100% - 80px), 0 80px)",
          }}
        />

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Skilled Craftsmen</h1>
              <h2 className="text-3xl md:text-4xl font-light mb-6 text-[#2D1E0E]">Barbershop</h2>
              <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed max-w-md">
                A barber is a person whose occupation is mainly to cut, dress, groom, style and shave men's and boy's
                hair or beards. A barber's place of work is known as a "barbershop" or a "barber's".
              </p>
              <Button
                size="lg"
                className="bg-[#7c5836] hover:bg-[#2D1E0E] text-white px-8 py-4 text-lg font-medium rounded-sm transition-all duration-300"
              >
                Book An Appointment
              </Button>
            </div>

            {/* Right Images */}
             {/* Left Side - Overlapping Images */}
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Background Image */}
                <div className="relative h-96 w-80 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=500&width=400"
                    alt="Bearded man"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlapping Image */}
                <div className="absolute top-16 right-0 h-64 w-56 rounded-lg overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src="/placeholder.svg?height=350&width=300"
                    alt="Barber cutting hair"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Overlapping Images */}
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Background Image */}
                <div className="relative h-96 w-80 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=500&width=400"
                    alt="Bearded man"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlapping Image */}
                <div className="absolute top-16 right-0 h-64 w-56 rounded-lg overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src="/placeholder.svg?height=350&width=300"
                    alt="Barber cutting hair"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content and Stats */}
            <div>
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8 mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-[#A4713E] mb-2">{stat.number}</div>
                    <div className="text-[#2D1E0E]/60 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* About Us Content */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#A4713E] mb-6">About Us</h2>
                <p className="text-[#2D1E0E]/80 mb-6 leading-relaxed">
                  In medieval times, the term "barber" is used both as a professional title and to refer to tradesmen
                  who specialize in men's hair. Traditionally, all hairdressers were considered barbers. In the 20th
                  century, the profession of cosmetology branched off from barbering, and today hairdressers may be
                  licensed as either barbers or cosmetologists.
                </p>
                <p className="text-[#2D1E0E]/80 mb-8 leading-relaxed">
                  Barbers differ with respect to where they work, which services they are licensed to provide, and what
                  name they use to refer to themselves. Part of the terminology difference depends on the regulations in
                  a given location.
                </p>
                <Button
                  variant="outline"
                  className="border-2 border-[#A4713E] text-[#A4713E] hover:bg-[#A4713E] hover:text-white px-8 py-3 rounded-none transition-all duration-300 bg-transparent"
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#2D1E0E] relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 transform rotate-45">
            <Scissors className="h-32 w-32 text-[#A4713E]" />
          </div>
          <div className="absolute bottom-20 left-20 transform -rotate-12">
            <svg className="h-24 w-24 text-[#A4713E]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9M15 11.5C15.8 11.5 16.5 12.2 16.5 13S15.8 14.5 15 14.5 13.5 13.8 13.5 13 14.2 11.5 15 11.5M5 7V9L11 8.5V7H5ZM11 11.5C11.8 11.5 12.5 12.2 12.5 13S11.8 14.5 11 14.5 9.5 13.8 9.5 13 10.2 11.5 11 11.5Z" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Barber <span className="text-[#A4713E] font-outline">Service</span>
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Barbers trim, cut, shape, and taper hair using scissors, razors, clippers, and combs. They also often
              provide facial hair maintenance, custom shaves, and a number of grooming services, such as shampooing,
              styling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Hair Cutting Style */}
            <Card className="bg-white border-none hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-[#A4713E]/10 group-hover:bg-[#A4713E]/20 transition-colors duration-300">
                    <Scissors className="h-12 w-12 text-[#A4713E]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#2D1E0E] mb-4">Hair Cutting Style</h3>
                <p className="text-[#2D1E0E]/70 leading-relaxed text-sm">
                  Everyone promises healthy hair growth and boost the spread of split ends through the strands.
                </p>
              </CardContent>
            </Card>

            {/* Multi Hair Colors */}
            <Card className="bg-[#A4713E] border-none hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-300">
                    <svg className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Multi Hair Colors</h3>
                <p className="text-white/90 leading-relaxed text-sm">
                  Black is the most common hair color worldwide. Estimates say anywhere from 75% of the world.
                </p>
              </CardContent>
            </Card>

            {/* Hair Washing */}
            <Card className="bg-white border-none hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-[#A4713E]/10 group-hover:bg-[#A4713E]/20 transition-colors duration-300">
                    <svg className="h-12 w-12 text-[#A4713E]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,3C13.11,3 14.08,3.5 14.71,4.3L15,5H17A2,2 0 0,1 19,7V8H5V7A2,2 0 0,1 7,5H9L9.29,4.3C9.92,3.5 10.89,3 12,3M5,10H19V19A2,2 0 0,1 17,21H7A2,2 0 0,1 5,19V10M8,12V18H10V12H8M14,12V18H16V12H14Z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#2D1E0E] mb-4">Hair Washing</h3>
                <p className="text-[#2D1E0E]/70 leading-relaxed text-sm">
                  Shampoo helps water remove dirt, debris, and odors. Shampoo can also remove oil.
                </p>
              </CardContent>
            </Card>

            {/* Beauty & Spa */}
            <Card className="bg-white border-none hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-[#A4713E]/10 group-hover:bg-[#A4713E]/20 transition-colors duration-300">
                    <svg className="h-12 w-12 text-[#A4713E]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.5,2A1.5,1.5 0 0,1 20,3.5V5H22V7H20V18.5A1.5,1.5 0 0,1 18.5,20H5.5A1.5,1.5 0 0,1 4,18.5V7H2V5H4V3.5A1.5,1.5 0 0,1 5.5,2H18.5M18,7H6V18H18V7M8,9H10V16H8V9M12,9H14V16H12V9M16,9H18V16H16V9Z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#2D1E0E] mb-4">Beauty & Spa</h3>
                <p className="text-[#2D1E0E]/70 leading-relaxed text-sm">
                  A beauty spa is a business that offers treatments such as manicures, pedicures, and facials.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D1E0E] mb-6">What Our Clients Say</h2>
            <p className="text-xl text-[#2D1E0E]/80 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="bg-gradient-to-br from-[#A4713E] to-[#9E7146] border-none text-white mx-4">
                      <CardContent className="p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                          <div>
                            <div className="text-6xl text-white/30 mb-4">"</div>
                            <div className="flex mb-4">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <p className="text-lg leading-relaxed mb-6 text-white/95">{testimonial.comment}</p>
                            <div>
                              <h4 className="font-bold text-xl text-white">{testimonial.name}</h4>
                              <p className="text-white/80">{testimonial.title}</p>
                            </div>
                          </div>
                          <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                              <img
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                className="w-64 h-64 rounded-2xl object-cover shadow-2xl"
                              />
                              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 border-[#A4713E] text-[#A4713E] hover:bg-[#A4713E] hover:text-white rounded-full w-12 h-12"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 border-[#A4713E] text-[#A4713E] hover:bg-[#A4713E] hover:text-white rounded-full w-12 h-12"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? "bg-[#A4713E]" : "bg-[#A4713E]/30"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Photo Gallery */}
      <section className="py-20 bg-[#2D1E0E]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#A4713E] mb-6">
              Instagram <span className="text-white">Photo Gallery</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Follow us on Instagram for daily updates and behind-the-scenes content
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
                {index === 4 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Instagram className="h-12 w-12 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-medium">
              <Instagram className="h-5 w-5 mr-2" />
              Follow @luxesalon
            </Button>
          </div>
        </div>
      </section>

      {/* Amazing Contact Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D1E0E] mb-6">Get In Touch</h2>
            <p className="text-xl text-[#2D1E0E]/80 max-w-2xl mx-auto">
              Ready for your next grooming session? Contact us to book an appointment or ask any questions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#A4713E] to-[#9E7146] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-white/90">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-white/90">info@luxesalon.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-white/90">123 Main Street, City, State 12345</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="font-bold mb-4">Business Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-2 border-[#A4713E]/20 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#2D1E0E] mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-[#2D1E0E] font-medium">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        className="mt-2 border-2 border-[#A4713E]/20 focus:border-[#A4713E] focus:ring-[#A4713E] rounded-lg"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-[#2D1E0E] font-medium">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        className="mt-2 border-2 border-[#A4713E]/20 focus:border-[#A4713E] focus:ring-[#A4713E] rounded-lg"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-[#2D1E0E] font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="mt-2 border-2 border-[#A4713E]/20 focus:border-[#A4713E] focus:ring-[#A4713E] rounded-lg"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-[#2D1E0E] font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="mt-2 border-2 border-[#A4713E]/20 focus:border-[#A4713E] focus:ring-[#A4713E] rounded-lg"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-[#2D1E0E] font-medium">
                      Service Interested In
                    </Label>
                    <select
                      id="service"
                      className="mt-2 w-full border-2 border-[#A4713E]/20 focus:border-[#A4713E] focus:ring-[#A4713E] rounded-lg px-3 py-2"
                    >
                      <option value="">Select a service</option>
                      <option value="haircut">Hair Cutting Style</option>
                      <option value="coloring">Multi Hair Colors</option>
                      <option value="washing">Hair Washing</option>
                      <option value="spa">Beauty & Spa</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#2D1E0E] font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      className="mt-2 border-2 border-[#A4713E]/20 focus:border-[#A4713E] focus:ring-[#A4713E] rounded-lg resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#A4713E] to-[#9E7146] hover:from-[#9E7146] hover:to-[#A4713E] text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Attractive Footer */}
      <footer className="bg-[#2D1E0E] text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold text-[#A4713E] mb-6">Luxe Salon</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Your premier destination for professional grooming and styling. We combine traditional craftsmanship
                with modern techniques.
              </p>
              <div className="flex space-x-4">
                <div className="bg-[#A4713E] p-2 rounded-full hover:bg-[#9E7146] transition-colors cursor-pointer">
                  <Facebook className="h-5 w-5" />
                </div>
                <div className="bg-[#A4713E] p-2 rounded-full hover:bg-[#9E7146] transition-colors cursor-pointer">
                  <Instagram className="h-5 w-5" />
                </div>
                <div className="bg-[#A4713E] p-2 rounded-full hover:bg-[#9E7146] transition-colors cursor-pointer">
                  <Twitter className="h-5 w-5" />
                </div>
                <div className="bg-[#A4713E] p-2 rounded-full hover:bg-[#9E7146] transition-colors cursor-pointer">
                  <Youtube className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-[#A4713E] mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#banner" className="text-white/80 hover:text-[#A4713E] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white/80 hover:text-[#A4713E] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/80 hover:text-[#A4713E] transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-white/80 hover:text-[#A4713E] transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/80 hover:text-[#A4713E] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold text-[#A4713E] mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li className="text-white/80">Hair Cutting & Styling</li>
                <li className="text-white/80">Beard Trimming</li>
                <li className="text-white/80">Hair Coloring</li>
                <li className="text-white/80">Hair Washing</li>
                <li className="text-white/80">Beauty & Spa</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-[#A4713E] mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-[#A4713E] mr-3" />
                  <span className="text-white/80 text-sm">123 Main Street, City, State 12345</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-[#A4713E] mr-3" />
                  <span className="text-white/80 text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-[#A4713E] mr-3" />
                  <span className="text-white/80 text-sm">info@luxesalon.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#A4713E]/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60 text-sm">© 2024 Luxe Salon. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-white/60 hover:text-[#A4713E] text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/60 hover:text-[#A4713E] text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-white/60 hover:text-[#A4713E] text-sm transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
