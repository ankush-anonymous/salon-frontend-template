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
    <section className="py-20 bg-[#FFF8EF]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2B1B0C] mb-6">Our Barber Services</h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
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
