"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { name: "Banner", href: "#banner" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      setIsScrolled(window.scrollY > heroHeight - 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Initial Transparent Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "translate-y-[-100%]" : "translate-y-0"
        }`}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-white text-2xl font-bold">
              Luxe Salon
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-white/80 transition-colors duration-300 font-light text-lg"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Floating Navigation (appears on scroll) */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ${
          isScrolled ? "translate-y-0" : "translate-y-[-100%]"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-[#2D1E0E] text-2xl font-bold">
              Luxe Salon
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#2D1E0E] hover:text-[#A4713E] transition-colors duration-300 font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/book" >

              <Button className="bg-[#A4713E] hover:bg-[#9E7146] text-white px-6 py-2 rounded-none">Book Now</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[#2D1E0E] hover:bg-[#A4713E]/10"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-80 bg-[#2D1E0E] p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[#A4713E] text-2xl font-bold">Luxe Salon</span>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-[#A4713E]/20"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-white hover:text-[#A4713E] transition-colors duration-300 text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full bg-[#A4713E] hover:bg-[#9E7146] text-white py-3 rounded-none mt-8">
                Book Now
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
