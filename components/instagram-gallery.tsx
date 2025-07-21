"use client"

import { motion } from "framer-motion"
import { Instagram } from "lucide-react"

export default function InstagramGallery() {
  const images = [
    "/images/image-1.png",
    "/images/image-2.png",
    "/images/image-3.png",
    "/images/image-4.png",
    "/images/image-5.png",
    "/images/image-6.png",
    "/images/image-7.png",
    "/images/image-8.png",
    "/images/image-9.png",
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#2B1B0C] mb-4">
            <span className="text-[#A76F3E]">Instagram</span> Photo Gallery
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Follow us on Instagram to see our latest work and behind-the-scenes moments
          </p>
          <div className="flex items-center justify-center gap-2 text-[#A76F3E]">
            <Instagram className="h-6 w-6" />
            <span className="font-medium">@luxesalon</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
