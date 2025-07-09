"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Search, MapPin, Phone, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Fixed Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-transparent">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 flex items-center gap-2"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-4 w-4" />
              <span className="text-sm font-light">MENU</span>
            </Button>

            {/* Logo */}
            <Link href="/" className="text-white">
              <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-xl font-bold">MK</span>
              </div>
            </Link>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4 text-white">
              <Search className="h-5 w-5 cursor-pointer hover:text-pink-300" />
              <span className="text-sm font-light">SERVICES</span>
              <span className="text-sm font-light">BOOK NOW</span>
              <MapPin className="h-5 w-5 cursor-pointer hover:text-pink-300" />
              <Phone className="h-5 w-5 cursor-pointer hover:text-pink-300" />
            </div>
          </div>
        </div>
      </nav>

      {/* Fixed Social Icons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4">
        <Facebook className="h-6 w-6 text-white cursor-pointer hover:text-pink-300 transition-colors" />
        <Instagram className="h-6 w-6 text-white cursor-pointer hover:text-pink-300 transition-colors" />
        <div className="h-6 w-6 text-white cursor-pointer hover:text-pink-300 transition-colors">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z" />
          </svg>
        </div>
        <div className="h-6 w-6 text-white cursor-pointer hover:text-pink-300 transition-colors">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </div>
      </div>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Left Side - Menu */}
          <div className="w-1/2 bg-black/90 backdrop-blur-md p-8 flex flex-col justify-between">
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
              <Link
                href="/"
                className="text-white text-4xl font-light hover:text-pink-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link
                href="/book"
                className="text-white text-4xl font-light hover:text-pink-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                BOOK NOW
              </Link>
            </div>

            {/* Bottom Section */}
            <div className="space-y-8">
              {/* Social Media */}
              <div>
                <p className="text-white text-sm font-light mb-4">FOLLOW US</p>
                <div className="flex gap-6">
                  <Facebook className="h-6 w-6 text-white hover:text-pink-300 cursor-pointer" />
                  <Instagram className="h-6 w-6 text-white hover:text-pink-300 cursor-pointer" />
                  <div className="h-6 w-6 text-white hover:text-pink-300 cursor-pointer">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z" />
                    </svg>
                  </div>
                  <div className="h-6 w-6 text-white hover:text-pink-300 cursor-pointer">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* App Store Buttons */}
              <div className="flex gap-4">
                <div className="bg-black rounded-lg px-4 py-2 border border-white/20">
                  <div className="text-white text-xs">Download on the</div>
                  <div className="text-white text-sm font-semibold">App Store</div>
                </div>
                <div className="bg-black rounded-lg px-4 py-2 border border-white/20">
                  <div className="text-white text-xs">GET IT ON</div>
                  <div className="text-white text-sm font-semibold">Google Play</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Blurred Background */}
          <div
            className="w-1/2 bg-cover bg-center relative"
            style={{
              backgroundImage: "url('/placeholder.svg?height=1080&width=960')",
            }}
          >
            <div className="absolute inset-0 backdrop-blur-sm bg-black/20" />
          </div>
        </div>
      )}
    </>
  )
}
