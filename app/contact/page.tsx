import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const locations = [
    {
      name: "Downtown Location",
      address: "123 Main Street, Downtown",
      city: "City, State 12345",
      phone: "+1 (555) 123-4567",
      email: "downtown@luxesalon.com",
      hours: "Mon-Fri: 9AM-8PM, Sat-Sun: 10AM-6PM",
    },
    {
      name: "Uptown Branch",
      address: "456 Oak Avenue, Uptown",
      city: "City, State 12346",
      phone: "+1 (555) 234-5678",
      email: "uptown@luxesalon.com",
      hours: "Mon-Fri: 9AM-8PM, Sat-Sun: 10AM-6PM",
    },
    {
      name: "Westside Studio",
      address: "789 Pine Road, Westside",
      city: "City, State 12347",
      phone: "+1 (555) 345-6789",
      email: "westside@luxesalon.com",
      hours: "Mon-Fri: 9AM-8PM, Sat-Sun: 10AM-6PM",
    },
  ]

  return (
    <div className="min-h-screen bg-[#FFF8EF]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#2B1B0C]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contact <span className="text-[#A76F3E]">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with us to book an appointment or ask any questions about our services
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="bg-white border-none shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-[#2B1B0C] mb-6">Send us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-[#2B1B0C] font-medium">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          className="mt-2 border-gray-300 focus:border-[#A76F3E] focus:ring-[#A76F3E]"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-[#2B1B0C] font-medium">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          className="mt-2 border-gray-300 focus:border-[#A76F3E] focus:ring-[#A76F3E]"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-[#2B1B0C] font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        className="mt-2 border-gray-300 focus:border-[#A76F3E] focus:ring-[#A76F3E]"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-[#2B1B0C] font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        className="mt-2 border-gray-300 focus:border-[#A76F3E] focus:ring-[#A76F3E]"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service" className="text-[#2B1B0C] font-medium">
                        Service Interest
                      </Label>
                      <select
                        id="service"
                        className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:border-[#A76F3E] focus:ring-[#A76F3E] focus:outline-none"
                      >
                        <option value="">Select a service</option>
                        <option value="haircut">Classic Haircut</option>
                        <option value="shave">Hot Towel Shave</option>
                        <option value="beard">Beard Grooming</option>
                        <option value="premium">Premium Package</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-[#2B1B0C] font-medium">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        rows={5}
                        className="mt-2 border-gray-300 focus:border-[#A76F3E] focus:ring-[#A76F3E]"
                        placeholder="Tell us about your grooming needs or any questions you have..."
                      />
                    </div>
                    <Button className="w-full bg-[#A76F3E] hover:bg-[#A76F3E]/90 text-white py-3">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#2B1B0C] mb-6">Get in Touch</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We'd love to hear from you. Whether you have questions about our services, want to book an
                  appointment, or just want to say hello, don't hesitate to reach out.
                </p>
              </div>

              {/* Quick Contact Info */}
              <Card className="bg-[#A76F3E] border-none text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5" />
                      <span>info@luxesalon.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5" />
                      <span>Mon-Fri: 9AM-8PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="bg-white border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#2B1B0C] mb-4">Why Choose Luxe Salon?</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#A76F3E] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Expert craftsmen with 15+ years experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#A76F3E] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Premium products and traditional techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#A76F3E] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Personalized service for every client</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#A76F3E] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Convenient locations across the city</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2B1B0C] mb-4">
              Our <span className="text-[#A76F3E]">Locations</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Visit any of our convenient locations for the same exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card
                key={index}
                className="bg-[#FFF8EF] border-none shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#2B1B0C] mb-4">{location.name}</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[#A76F3E] mt-0.5 flex-shrink-0" />
                      <div>
                        <p>{location.address}</p>
                        <p>{location.city}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-[#A76F3E] flex-shrink-0" />
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-[#A76F3E] flex-shrink-0" />
                      <span>{location.email}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-[#A76F3E] mt-0.5 flex-shrink-0" />
                      <span>{location.hours}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-[#A76F3E] hover:bg-[#A76F3E]/90 text-white">Get Directions</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#2B1B0C]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Find <span className="text-[#A76F3E]">Us</span>
            </h2>
            <p className="text-gray-300 text-lg">We're conveniently located throughout the city</p>
          </div>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="h-16 w-16 mx-auto mb-4" />
              <p className="text-lg">Interactive Map Coming Soon</p>
              <p className="text-sm">Use the addresses above for navigation</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
