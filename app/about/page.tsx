import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, MapPin } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { icon: Clock, value: "1992", label: "Founded" },
    { icon: Award, value: "15", label: "Awards Won" },
    { icon: MapPin, value: "25+", label: "Locations" },
    { icon: Users, value: "1600+", label: "Happy Customers" },
  ]

  const team = [
    {
      name: "Marcus Johnson",
      role: "Master Barber & Owner",
      image: "/placeholder.svg?height=300&width=250&text=Marcus",
      experience: "15+ years",
    },
    {
      name: "David Rodriguez",
      role: "Senior Stylist",
      image: "/placeholder.svg?height=300&width=250&text=David",
      experience: "12+ years",
    },
    {
      name: "James Wilson",
      role: "Beard Specialist",
      image: "/placeholder.svg?height=300&width=250&text=James",
      experience: "8+ years",
    },
    {
      name: "Michael Brown",
      role: "Hair Stylist",
      image: "/placeholder.svg?height=300&width=250&text=Michael",
      experience: "10+ years",
    },
  ]

  return (
    <div className="min-h-screen bg-[#FFF8EF]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#2B1B0C]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-[#A76F3E]">Us</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Since 1992, we've been dedicated to providing exceptional grooming services that combine traditional
                craftsmanship with modern techniques.
              </p>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600&text=Barbershop+Interior"
                alt="Barbershop interior"
                className="w-full h-80 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white border-none shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#A76F3E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[#2B1B0C] mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm uppercase tracking-wide">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/placeholder.svg?height=300&width=250&text=Vintage+Tools"
                  alt="Vintage barber tools"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="/placeholder.svg?height=400&width=250&text=Master+at+Work"
                  alt="Master barber at work"
                  className="w-full h-80 object-cover rounded-lg shadow-lg mt-8"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#2B1B0C] mb-6">
                Our <span className="text-[#A76F3E]">Story</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Founded in 1992 by master barber Marcus Johnson, Luxe Salon began as a small neighborhood barbershop
                with a simple mission: to provide exceptional grooming services that honor traditional craftsmanship
                while embracing modern techniques.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Over three decades, we've grown from a single location to 25+ salons, but our commitment to quality and
                personal service remains unchanged. Each of our skilled craftsmen undergoes rigorous training to ensure
                every client receives the premium experience they deserve.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, we're proud to serve over 1600 satisfied customers who trust us with their grooming needs, making
                us the premier destination for discerning gentlemen who appreciate quality and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2B1B0C] mb-4">
              Meet Our <span className="text-[#A76F3E]">Team</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our skilled craftsmen bring years of experience and passion to every service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-[#2B1B0C] mb-2">{member.name}</h3>
                    <p className="text-[#A76F3E] font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.experience}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
