import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#2B1B0C]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-section-banner.png"
          alt="Financial services background"
          fill
          priority
          className="object-cover object-[60%_top]"
        />
        {/* Optional dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ✅ Foreground Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Skilled <span className="text-[#A76F3E]">Craftsmen</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-4xl font-light mb-8 text-[#A76F3E]"
            >
              Barbershop
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl leading-relaxed mb-8 text-gray-300 max-w-lg"
            >
              A barber is a person whose occupation is mainly to cut, dress,
              groom, style and shave men's and boys' hair. A barber's place of
              work is known as a "barbershop" or a "barber's".
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/book">
                <Button className="bg-[#A76F3E] hover:bg-[#A76F3E]/90 text-white px-8 py-4 text-lg font-medium">
                  Book An Appointment
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockups */}
          {/*
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="flex gap-6 justify-center">
            
              <div className="relative">
                <div className="w-64 h-96 bg-black rounded-3xl p-2 shadow-2xl transform rotate-6">
                  <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden">
                    <img
                      src="/placeholder.svg?height=400&width=300&text=Barber+Service"
                      alt="Barber Service"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="relative -mt-8">
                <div className="w-64 h-96 bg-black rounded-3xl p-2 shadow-2xl transform -rotate-6">
                  <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden">
                    <img
                      src="/placeholder.svg?height=400&width=300&text=Hair+Styling"
                      alt="Hair Styling"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          */}
        </div>
      </div>
    </section>
  );
}
