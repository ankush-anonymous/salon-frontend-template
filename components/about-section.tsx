"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function AboutSection() {
  const stats = [
    { year: "1992", label: "Founded", value: "1992" },
    { number: "15", label: "Awards", value: "15" },
    { number: "25+", label: "Salons", value: "25+" },
    { number: "1600+", label: "Happy Customers", value: "1600+" },
  ]

  return (
    <section className="py-20 bg-[#FFF8EF]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/placeholder.svg?height=300&width=250&text=Barber+Work"
                  alt="Barber at work"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="/placeholder.svg?height=200&width=250&text=Salon+Interior"
                  alt="Salon interior"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-8">
                <img
                  src="/placeholder.svg?height=400&width=250&text=Professional+Service"
                  alt="Professional service"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-[#A76F3E] text-lg font-medium mb-2">1992</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2B1B0C] mb-6">
                About <span className="text-[#A76F3E]">Us</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                In modern times, the term "barber" is used both as a professional title and to refer to hairdressers who
                specialize in men's hair. Historically, all hairdressers were considered barbers. In the 20th century,
                the profession of cosmetology branched off from barbering, and barbing and hairdressing were the
                foremost of what became known as cosmetology.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Barbers often also engage in other hair work, which includes being employed by people, and while some
                may also be employed by themselves. Part of this hairstyling difference depends on the regulations in a
                given location.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-[#A76F3E] mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <Link href="/about">
              <Button
                variant="outline"
                className="border-[#A76F3E] text-[#A76F3E] hover:bg-[#A76F3E] hover:text-white px-8 py-3 bg-transparent"
              >
                Read More
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
