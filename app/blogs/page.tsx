import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function BlogsPage() {
  const blogs = [
    {
      title: "The Art of Traditional Wet Shaving",
      excerpt:
        "Discover the timeless techniques and benefits of traditional wet shaving that every gentleman should know.",
      image:"/images/image-1.png"
,
      author: "Marcus Johnson",
      date: "December 15, 2024",
      category: "Grooming Tips",
    },
    {
      title: "Choosing the Right Haircut for Your Face Shape",
      excerpt:
        "Learn how to select the perfect haircut that complements your unique facial features and personal style.",
      image:"/images/image-2.png",
      author: "David Rodriguez",
      date: "December 10, 2024",
      category: "Style Guide",
    },
    {
      title: "Beard Care Essentials: A Complete Guide",
      excerpt: "Everything you need to know about maintaining a healthy, well-groomed beard from start to finish.",
      image:"/images/image-4.png",
      author: "James Wilson",
      date: "December 5, 2024",
      category: "Beard Care",
    },
    {
      title: "The Evolution of Men's Grooming",
      excerpt:
        "A journey through the history of men's grooming and how modern techniques have evolved from traditional practices.",
      image:"/images/image-5.png",
      author: "Michael Brown",
      date: "November 28, 2024",
      category: "History",
    },
    {
      title: "Seasonal Hair Care Tips",
      excerpt: "Adapt your hair care routine to the changing seasons and keep your hair healthy year-round.",
      image:"/images/image-6.png",
      author: "Marcus Johnson",
      date: "November 20, 2024",
      category: "Hair Care",
    },
    {
      title: "Professional Grooming vs. DIY: What You Need to Know",
      excerpt: "Understanding when to visit a professional and what you can effectively manage at home.",
      image:"/images/image-7.png",
      author: "David Rodriguez",
      date: "November 15, 2024",
      category: "Tips",
    },
  ]

  return (
    <div className="min-h-screen bg-[#FFF8EF]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#2B1B0C]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-[#A76F3E]">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert insights, grooming tips, and the latest trends in men's style and barbering
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="bg-white border-none shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <img
                src={blogs[0].image || "/placeholder.svg"}
                alt={blogs[0].title}
                className="w-full h-64 lg:h-full object-cover"
              />
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-[#A76F3E] mb-4">
                  <span className="bg-[#A76F3E]/10 px-3 py-1 rounded-full">{blogs[0].category}</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {blogs[0].date}
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-[#2B1B0C] mb-4">{blogs[0].title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{blogs[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="h-4 w-4" />
                    {blogs[0].author}
                  </div>
                  <Button className="bg-[#A76F3E] hover:bg-[#A76F3E]/90 text-white">
                    Read More <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(1).map((blog, index) => (
              <Card
                key={index}
                className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-[#A76F3E] mb-3">
                    <span className="bg-[#A76F3E]/10 px-2 py-1 rounded-full text-xs">{blog.category}</span>
                    <div className="flex items-center gap-1 text-xs">
                      <Calendar className="h-3 w-3" />
                      {blog.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#2B1B0C] mb-3 line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      {blog.author}
                    </div>
                    <Button variant="ghost" className="text-[#A76F3E] hover:text-[#A76F3E]/80 p-0">
                      Read More <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#2B1B0C]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay <span className="text-[#A76F3E]">Updated</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest grooming tips, style guides, and exclusive offers
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#A76F3E]"
            />
            <Button className="bg-[#A76F3E] hover:bg-[#A76F3E]/90 text-white px-6">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
