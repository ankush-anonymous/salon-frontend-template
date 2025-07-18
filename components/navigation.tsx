"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <>
      {/* Fixed Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#2B1B0C]/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 flex items-center gap-2 md:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-4 w-4" />
              <span className="text-sm font-light">MENU</span>
            </Button>

            {/* Logo */}
            <Link href="/" className="text-white">
              <div className="w-12 h-12 rounded-full bg-[#A76F3E] flex items-center justify-center">
                <span className="text-lg font-bold">LS</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href ? "text-[#A76F3E]" : "text-white hover:text-[#A76F3E]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Book Appointment Button */}
            <Link href="/book">
              <Button className="bg-[#A76F3E] hover:bg-[#A76F3E]/90 text-white px-6 py-2 text-sm">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Fixed Social Icons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4">
        <Facebook className="h-6 w-6 text-[#A76F3E] cursor-pointer hover:text-white transition-colors" />
        <Instagram className="h-6 w-6 text-[#A76F3E] cursor-pointer hover:text-white transition-colors" />
        <div className="h-6 w-6 text-[#A76F3E] cursor-pointer hover:text-white transition-colors">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z" />
          </svg>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Left Side - Menu */}
          <div className="w-full bg-[#2B1B0C]/95 backdrop-blur-md p-8 flex flex-col justify-between">
            {/* Close Button */}
            <div className="flex justify-between items-start">
              <span className="text-white/50 text-sm font-light">MENU</span>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Main Navigation */}
            <div className="flex-1 flex flex-col justify-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-3xl font-light transition-colors ${
                    pathname === link.href ? "text-[#A76F3E]" : "text-white hover:text-[#A76F3E]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book"
                className="text-3xl font-light text-white hover:text-[#A76F3E] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>

            {/* Bottom Section */}
            <div className="space-y-8">
              {/* Social Media */}
              <div>
                <p className="text-white text-sm font-light mb-4">FOLLOW US</p>
                <div className="flex gap-6">
                  <Facebook className="h-6 w-6 text-white hover:text-[#A76F3E] cursor-pointer" />
                  <Instagram className="h-6 w-6 text-white hover:text-[#A76F3E] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
