import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2B1B0C] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#A76F3E] flex items-center justify-center">
                <span className="text-lg font-bold">LS</span>
              </div>
              <span className="text-xl font-bold">Luxe Salon</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Experience the finest grooming services with our skilled craftsmen. Where tradition meets modern style.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-6 w-6 text-[#A76F3E] cursor-pointer hover:text-white transition-colors" />
              <Instagram className="h-6 w-6 text-[#A76F3E] cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#A76F3E]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#A76F3E] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#A76F3E] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#A76F3E] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-300 hover:text-[#A76F3E] transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#A76F3E] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#A76F3E]">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Hair Cutting</li>
              <li className="text-gray-300">Beard Trimming</li>
              <li className="text-gray-300">Hair Styling</li>
              <li className="text-gray-300">Hot Towel Shave</li>
              <li className="text-gray-300">Premium Package</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#A76F3E]">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#A76F3E] mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Main Street</p>
                  <p>Downtown, City 12345</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#A76F3E] flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#A76F3E] flex-shrink-0" />
                <span className="text-gray-300">info@luxesalon.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#A76F3E] mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
                  <p>Sat - Sun: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Luxe Salon. All rights reserved. | Designed with passion for excellence.
          </p>
        </div>
      </div>
    </footer>
  )
}
