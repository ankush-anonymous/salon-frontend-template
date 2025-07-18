"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "John Smith",
      role: "Business Executive",
      image: "/placeholder.svg?height=100&width=100&text=JS",
      rating: 5,
      text: "I feel so fortunate to have connected with incredible experts in the field of beauty, mindfulness and coaching! I thought, why not share this?",
    },
    {
      name: "Mike Johnson",
      role: "Creative Director",
      image: "/placeholder.svg?height=100&width=100&text=MJ",
      rating: 5,
      text: "Exceptional service and attention to detail. The team here truly understands what it means to provide a premium grooming experience.",
    },
    {
      name: "David Wilson",
      role: "Entrepreneur",
      image: "/placeholder.svg?height=100&width=100&text=DW",
      rating: 5,
      text: "Been coming here for years and never disappointed. The craftsmanship and professionalism is unmatched in the city.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-[#FFF8EF]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2B1B0C] mb-4">
            What Our <span className="text-[#A76F3E]">Clients Say</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-white border-none shadow-xl">
                  <CardContent className="p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      <div className="lg:col-span-2">
                        <div className="flex mb-4">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-[#A76F3E] fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                          "{testimonials[currentIndex].text}"
                        </blockquote>
                        <div>
                          <div className="font-bold text-[#2B1B0C] text-lg">{testimonials[currentIndex].name}</div>
                          <div className="text-[#A76F3E] text-sm">{testimonials[currentIndex].role}</div>
                        </div>
                      </div>
                      <div className="flex justify-center lg:justify-end">
                        <img
                          src={testimonials[currentIndex].image || "/placeholder.svg"}
                          alt={testimonials[currentIndex].name}
                          className="w-32 h-32 rounded-lg object-cover shadow-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="border-[#A76F3E] text-[#A76F3E] hover:bg-[#A76F3E] hover:text-white bg-transparent"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="border-[#A76F3E] text-[#A76F3E] hover:bg-[#A76F3E] hover:text-white bg-transparent"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-[#A76F3E]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
