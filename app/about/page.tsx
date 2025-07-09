import Navigation from "@/components/navigation"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Master Stylist",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Maria Rodriguez",
      role: "Color Specialist",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Emma Chen",
      role: "Nail Artist",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Lisa Thompson",
      role: "Esthetician",
      image: "/placeholder.svg?height=400&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/placeholder.svg?height=1080&width=1920" alt="Salon team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Our Story</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Where artistry meets luxury. Creating beauty experiences that inspire confidence.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Salon interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-pink-300">Our Vision</h2>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Excellence in every detail. Innovation in every service.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">Your beauty journey begins here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-16">Meet Our Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group overflow-hidden bg-black/50 border-pink-500/20">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-pink-300">{member.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="Awards background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-white container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-300 mb-2">2023</div>
              <p className="text-lg">Best Salon Award</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-300 mb-2">5★</div>
              <p className="text-lg">Customer Rating</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-300 mb-2">10+</div>
              <p className="text-lg">Years Excellence</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
