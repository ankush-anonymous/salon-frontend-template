"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Scissors, Baby, RadarIcon as Razor, Sparkles, Droplets, Crown } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Scissors,
      title: "Adult Haircut",
      description: "Our Barber Service comprehensive range, including stylish hair your grooming experience",
    },
    {
      icon: Baby,
      title: "Kids Haircut",
      description: "Our Barber Service comprehensive range, including stylish hair your grooming experience",
    },
    {
      icon: Razor,
      title: "Beard Trim",
      description: "Our Barber Service comprehensive range, including stylish hair your grooming experience",
    },
    {
      icon: Sparkles,
      title: "Neck Shave",
      description: "Our Barber Service comprehensive range, including stylish hair your grooming experience",
    },
    {
      icon: Droplets,
      title: "Scalp Moisturizing",
      description: "Our Barber Service comprehensive range, including stylish hair your grooming experience",
    },
    {
      icon: Crown,
      title: "Beard Grooming",
      description: "Our Barber Service comprehensive range, including stylish hair your grooming experience",
    },
  ]

  return (

    
<section
  id="services"
  className="py-20 bg-[#2D1E0E] relative overflow-hidden bg-[url('/images/services-bg.png')] bg-cover bg-center"
>        {/* Background Decorative Elements */}
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
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#A76F3E] text-sm uppercase tracking-widest mb-4">SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFF8EF] mb-6">Our Barber Services</h2>
          <p className="text-[#805530] text-lg max-w-4xl mx-auto leading-relaxed">
            Our Barber Services offer a comprehensive range, including stylish haircuts, rejuvenating hair treatments,
            therapeutic massages, and thorough hair cleaning, all designed to enhance your grooming experience and leave
            you feeling refreshed and renewed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 group cursor-pointer h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <service.icon className="h-12 w-12 text-[#2B1B0C] group-hover:text-[#A76F3E] transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2B1B0C] mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-1 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
