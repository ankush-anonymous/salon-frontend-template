"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { MapPin, User, CreditCard, Check, ChevronRight } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

type BookingStep = "location" | "professional" | "service" | "time" | "details" | "payment" | "confirmation"

interface Location {
  id: string
  name: string
  address: string
  city: string
}

interface Professional {
  id: string
  name: string
  image: string
  availability: string
}

interface Service {
  id: string
  name: string
  duration: string
  price: number
  category: string
}

interface TimeSlot {
  time: string
  available: boolean
}

export default function BookPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<BookingStep>("location")
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null)
  const [selectedServices, setSelectedServices] = useState<Service[]>([])
  const [selectedDate, setSelectedDate] = useState<string>("Jul 9th")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("")
  const [showCancellationPolicy, setShowCancellationPolicy] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [tipPercentage, setTipPercentage] = useState(5)

  const locations: Location[] = [
    {
      id: "1",
      name: "Queen Street East",
      address: "205 Queen St. E, Unit D",
      city: "Brampton, ON L6W2B4",
    },
    {
      id: "2",
      name: "Hurontario Street",
      address: "3662 Hurontario St, Unit 1",
      city: "Mississauga, ON L5B1P3",
    },
    {
      id: "3",
      name: "Marine Parade Drive",
      address: "MP3, Unit 160 Marine Parade Dr",
      city: "Etobicoke, ON M8V 4G1",
    },
  ]

  const professionals: Professional[] = [
    { id: "1", name: "Mike", image: "/placeholder.svg?height=100&width=100", availability: "Available Today" },
    { id: "2", name: "Harman", image: "/placeholder.svg?height=100&width=100", availability: "Available Tomorrow" },
    { id: "3", name: "Shiv", image: "/placeholder.svg?height=100&width=100", availability: "Available Today" },
    { id: "4", name: "Bobby", image: "/placeholder.svg?height=100&width=100", availability: "Available Today" },
    { id: "5", name: "Dharam", image: "/placeholder.svg?height=100&width=100", availability: "Available Today" },
    {
      id: "6",
      name: "Nayan",
      image: "/placeholder.svg?height=100&width=100",
      availability: "Available Sunday, Jul 13",
    },
  ]

  const services: Service[] = [
    { id: "1", name: "Men's Haircut ($5 Saving)", duration: "30 mins", price: 28, category: "Hair" },
    { id: "2", name: "Men's Head Shave ($5 Saving)", duration: "30 mins", price: 28, category: "Hair" },
    { id: "3", name: "Men's Hot Towel Shave", duration: "30 mins", price: 33, category: "Shave" },
    { id: "4", name: "Men's Hairwash (Short/Medium Hair Length)", duration: "15 mins", price: 10, category: "Hair" },
    { id: "5", name: "Men's Senior Haircut ($4 Saving)", duration: "30 mins", price: 20, category: "Hair" },
    { id: "6", name: "Boy's Haircut ($4 Saving)", duration: "30 mins", price: 20, category: "Hair" },
    { id: "7", name: "Men's Hairstyle", duration: "15 mins", price: 10, category: "Hair" },
    { id: "8", name: "Men's Steam Face Shave", duration: "30 mins", price: 33, category: "Shave" },
    { id: "9", name: "Men's Beard Trim", duration: "15 mins", price: 24, category: "Beard" },
    { id: "10", name: "Men's Beard Line Up", duration: "15 mins", price: 15, category: "Beard" },
  ]

  const timeSlots: TimeSlot[] = [
    { time: "3:30pm", available: true },
    { time: "3:45pm", available: true },
    { time: "4:00pm", available: true },
    { time: "4:15pm", available: true },
    { time: "4:30pm", available: true },
    { time: "4:45pm", available: false },
    { time: "5:00pm", available: false },
    { time: "5:15pm", available: true },
    { time: "5:30pm", available: true },
    { time: "5:45pm", available: true },
    { time: "6:00pm", available: true },
    { time: "6:15pm", available: true },
    { time: "6:30pm", available: true },
    { time: "6:45pm", available: true },
    { time: "7:00pm", available: true },
    { time: "7:15pm", available: true },
  ]

  const calculateSubtotal = () => {
    return selectedServices.reduce((total, service) => total + service.price, 0)
  }

  const calculateTip = () => {
    return Math.round((calculateSubtotal() * tipPercentage) / 100)
  }

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTip()
  }

  const handleServiceToggle = (service: Service) => {
    setSelectedServices((prev) => {
      const exists = prev.find((s) => s.id === service.id)
      if (exists) {
        return prev.filter((s) => s.id !== service.id)
      } else {
        return [...prev, service]
      }
    })
  }

  const handleBookingConfirm = () => {
    setShowConfirmation(true)
  }

  const handleStepNavigation = (step: BookingStep) => {
    // Only allow navigation to completed steps
    const stepOrder: BookingStep[] = ["location", "professional", "service", "time", "details", "payment"]
    const currentIndex = stepOrder.indexOf(currentStep)
    const targetIndex = stepOrder.indexOf(step)

    if (targetIndex <= currentIndex || (targetIndex === currentIndex + 1 && canProceedToNextStep())) {
      setCurrentStep(step)
    }
  }

  const canProceedToNextStep = () => {
    switch (currentStep) {
      case "location":
        return selectedLocation !== null
      case "professional":
        return selectedProfessional !== null
      case "service":
        return selectedServices.length > 0
      case "time":
        return selectedDate && selectedTime
      case "details":
        return customerDetails.name && customerDetails.email && customerDetails.phone
      case "payment":
        return selectedPaymentMethod !== ""
      default:
        return false
    }
  }

  const getNextStep = (): BookingStep | null => {
    const stepOrder: BookingStep[] = ["location", "professional", "service", "time", "details", "payment"]
    const currentIndex = stepOrder.indexOf(currentStep)
    return currentIndex < stepOrder.length - 1 ? stepOrder[currentIndex + 1] : null
  }

  const handleContinue = () => {
    const nextStep = getNextStep()
    if (nextStep) {
      setCurrentStep(nextStep)
    } else if (currentStep === "payment") {
      setShowCancellationPolicy(true)
    }
  }

  const renderBreadcrumb = () => {
    const steps = [
      { key: "location", label: "Location" },
      { key: "professional", label: "Professional" },
      { key: "service", label: "Service" },
      { key: "time", label: "Time" },
      { key: "details", label: "Details" },
      { key: "payment", label: "Payment" },
    ]

    return (
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        {steps.map((step, index) => (
          <div key={step.key} className="flex items-center gap-2">
            <button
              onClick={() => handleStepNavigation(step.key as BookingStep)}
              className={`${
                currentStep === step.key ? "text-black font-medium" : "hover:text-gray-700 cursor-pointer"
              }`}
            >
              {step.label}
            </button>
            {index < steps.length - 1 && <ChevronRight className="h-4 w-4" />}
          </div>
        ))}
      </div>
    )
  }

  const renderOrderSummary = () => {
    if (!selectedLocation) return null

    return (
      <div className="fixed bottom-0 right-0 w-80 bg-white border-l border-t shadow-lg z-40">
        <Card className="bg-gray-50 rounded-none border-0">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Your order</h3>
            <p className="text-gray-600 mb-4">{selectedLocation.name}</p>

            {selectedProfessional && (
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={selectedProfessional.image || "/placeholder.svg"}
                  alt={selectedProfessional.name}
                  className="w-10 h-10 rounded-full bg-gray-200"
                />
                <span className="font-medium">{selectedProfessional.name}</span>
              </div>
            )}

            {selectedServices.length > 0 && (
              <div className="space-y-2 mb-4">
                {selectedServices.map((service) => (
                  <div key={service.id} className="flex justify-between">
                    <span className="text-sm">{service.name}</span>
                    <span className="text-sm">${service.price}</span>
                  </div>
                ))}
              </div>
            )}

            {selectedDate && selectedTime && (
              <div className="mb-4">
                <p className="text-sm">
                  {selectedDate} at {selectedTime}
                </p>
                <p className="text-sm text-gray-600">1 hr 45 mins</p>
              </div>
            )}

            {currentStep === "time" && selectedServices.length > 0 && (
              <div className="mb-4">
                <p className="text-sm font-medium mb-2">Tip</p>
                <div className="flex gap-2 mb-2">
                  {[5, 10, 15, 20].map((percentage) => (
                    <Button
                      key={percentage}
                      variant={tipPercentage === percentage ? "default" : "outline"}
                      size="sm"
                      onClick={() => setTipPercentage(percentage)}
                      className={tipPercentage === percentage ? "bg-black text-white" : ""}
                    >
                      {percentage}%
                    </Button>
                  ))}
                  <Button variant="outline" size="sm">
                    Custom
                  </Button>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Tip</span>
                  <span className="text-sm">${calculateTip()}</span>
                </div>
              </div>
            )}

            {selectedServices.length > 0 && (
              <div className="border-t pt-4 mb-4">
                <div className="flex justify-between font-semibold">
                  <span>Subtotal</span>
                  <span>${calculateTotal()}</span>
                </div>
              </div>
            )}

            {canProceedToNextStep() && (
              <Button className="w-full bg-black text-white" onClick={handleContinue}>
                {currentStep === "payment" ? "Book" : "Continue"}
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => router.push("/")} className="text-2xl font-bold">
            Luxe Salon
          </button>
          <div className="flex gap-8">
            <button onClick={() => router.push("/")} className="text-gray-600 hover:text-black">
              Services
            </button>
            <button onClick={() => router.push("/about")} className="text-gray-600 hover:text-black">
              About
            </button>
            <button className="text-black font-medium">Book Now</button>
          </div>
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="container mx-auto max-w-6xl">
          {renderBreadcrumb()}

          <div className={selectedLocation ? "pr-80" : ""}>
            {/* Location Selection */}
            {currentStep === "location" && (
              <div>
                <div className="relative mb-8">
                  <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=300&width=800"
                      alt="Salon locations"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <h1 className="text-4xl font-bold text-white">Choose a location</h1>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mb-6">
                  <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                    <MapPin className="h-4 w-4" />
                    Nearby
                  </Button>
                  <Button variant="outline">Search</Button>
                </div>

                <div className="space-y-4">
                  {locations.map((location) => (
                    <Card
                      key={location.id}
                      className="cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => {
                        setSelectedLocation(location)
                        setCurrentStep("professional")
                      }}
                    >
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center text-white font-bold">
                          MK
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{location.name}</h3>
                          <p className="text-gray-600">{location.address}</p>
                          <p className="text-gray-600">{location.city}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Professional Selection */}
            {currentStep === "professional" && (
              <div>
                <h1 className="text-3xl font-bold mb-8">Choose a professional</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9M15 11.5C15.8 11.5 16.5 12.2 16.5 13S15.8 14.5 15 14.5 13.5 13.8 13.5 13 14.2 11.5 15 11.5M5 7V9L11 8.5V7H5ZM11 11.5C11.8 11.5 12.5 12.2 12.5 13S11.8 14.5 11 14.5 9.5 13.8 9.5 13 10.2 11.5 11 11.5Z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold mb-2">Choose a service first</h3>
                      <p className="text-sm text-gray-600">Book with any professional</p>
                    </CardContent>
                  </Card>
                  {professionals.map((professional) => (
                    <Card
                      key={professional.id}
                      className="cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => {
                        setSelectedProfessional(professional)
                        setCurrentStep("service")
                      }}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-lg flex items-center justify-center text-white font-bold">
                          MK
                        </div>
                        <h3 className="font-semibold mb-2">{professional.name}</h3>
                        <p className="text-sm text-gray-600">{professional.availability}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Service Selection */}
            {currentStep === "service" && (
              <div>
                <h1 className="text-3xl font-bold mb-8">Choose a service</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {services.map((service) => {
                    const isSelected = selectedServices.find((s) => s.id === service.id)
                    return (
                      <Card
                        key={service.id}
                        className={`cursor-pointer transition-all ${
                          isSelected ? "bg-black text-white" : "hover:shadow-md"
                        }`}
                        onClick={() => handleServiceToggle(service)}
                      >
                        <CardContent className="p-4">
                          {isSelected && (
                            <div className="flex justify-end mb-2">
                              <Check className="h-5 w-5" />
                            </div>
                          )}
                          <h3 className="font-semibold mb-2">{service.name}</h3>
                          <p className={`text-sm mb-2 ${isSelected ? "text-gray-300" : "text-gray-600"}`}>
                            {service.duration}
                          </p>
                          <p className="font-bold">${service.price}</p>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Time Selection */}
            {currentStep === "time" && (
              <div>
                <h1 className="text-3xl font-bold mb-8">Choose a time</h1>

                {/* Date Selection */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-lg font-medium">July 2025</span>
                    <Button variant="outline" size="sm">
                      Today
                    </Button>
                  </div>
                  <div className="flex gap-2 mb-6">
                    {[9, 10, 11, 12, 13, 14, 15, 16].map((day) => (
                      <Button
                        key={day}
                        variant={selectedDate === `Jul ${day}th` ? "default" : "outline"}
                        className={`w-12 h-12 rounded-full ${selectedDate === `Jul ${day}th` ? "bg-black text-white" : ""}`}
                        onClick={() => setSelectedDate(`Jul ${day}th`)}
                      >
                        {day}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Professional Info */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={selectedProfessional?.image || "/placeholder.svg"}
                      alt={selectedProfessional?.name}
                      className="w-10 h-10 rounded-full bg-gray-200"
                    />
                    <div>
                      <h3 className="font-semibold">{selectedProfessional?.name}</h3>
                      <p className="text-sm text-gray-600">{selectedServices[0]?.name}</p>
                    </div>
                  </div>
                </div>

                {/* Time Slots */}
                <div className="grid grid-cols-5 gap-3">
                  {timeSlots.map((slot) => (
                    <Button
                      key={slot.time}
                      variant={selectedTime === slot.time ? "default" : "outline"}
                      disabled={!slot.available}
                      className={`${selectedTime === slot.time ? "bg-black text-white" : ""} ${
                        !slot.available ? "opacity-50" : ""
                      }`}
                      onClick={() => setSelectedTime(slot.time)}
                    >
                      {slot.time}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Customer Details */}
            {currentStep === "details" && (
              <div>
                <h1 className="text-3xl font-bold mb-8">Your details</h1>
                <Card className="max-w-md">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={customerDetails.name}
                          onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
                          className="mt-2 border-gray-300 focus:border-black focus:ring-black"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={customerDetails.email}
                          onChange={(e) => setCustomerDetails({ ...customerDetails, email: e.target.value })}
                          className="mt-2 border-gray-300 focus:border-black focus:ring-black"
                          placeholder="Enter your email address"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={customerDetails.phone}
                          onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                          className="mt-2 border-gray-300 focus:border-black focus:ring-black"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Payment */}
            {currentStep === "payment" && (
              <div>
                <h1 className="text-3xl font-bold mb-8">Payment Method</h1>
                <div className="space-y-4 max-w-md">
                  <Card
                    className={`cursor-pointer transition-all ${selectedPaymentMethod === "card" ? "border-2 border-black" : "hover:shadow-md"}`}
                    onClick={() => setSelectedPaymentMethod("card")}
                  >
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                        <CreditCard className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-medium">Card or bank account</span>
                      {selectedPaymentMethod === "card" && <Check className="h-5 w-5 ml-auto" />}
                    </CardContent>
                  </Card>
                  <Card
                    className={`cursor-pointer transition-all ${selectedPaymentMethod === "person" ? "border-2 border-black" : "hover:shadow-md"}`}
                    onClick={() => setSelectedPaymentMethod("person")}
                  >
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-medium">Pay in person</span>
                      {selectedPaymentMethod === "person" && <Check className="h-5 w-5 ml-auto" />}
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Order Summary Sidebar */}
      {renderOrderSummary()}

      {/* Cancellation Policy Modal */}
      <Dialog open={showCancellationPolicy} onOpenChange={setShowCancellationPolicy}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Cancellation policy</DialogTitle>
          </DialogHeader>
          <div className="py-6">
            <div className="bg-black text-white rounded-lg p-4 mb-4 text-center">
              <div className="text-2xl font-bold">1:45 PM</div>
              <div className="text-sm">EDT</div>
              <div className="text-sm">July 9</div>
            </div>
            <div className="mb-4">
              <div className="h-2 bg-blue-500 rounded-full mb-2"></div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>NOW</span>
                <span>APPOINTMENT</span>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-6">
              You have time until <strong>1:45PM EDT on July 9, 2025</strong> to cancel this appointment without being
              charged.
            </p>
            <Button className="w-full bg-black text-white" onClick={handleBookingConfirm}>
              I agree
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Confirmation Modal */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="max-w-md">
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-4">Your appointment has been successfully booked.</p>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="font-semibold">{selectedLocation?.name}</p>
              <p className="text-sm text-gray-600">
                {selectedDate} at {selectedTime}
              </p>
              <p className="text-sm text-gray-600">with {selectedProfessional?.name}</p>
            </div>
            <Button
              className="w-full bg-black text-white"
              onClick={() => {
                setShowConfirmation(false)
                router.push("/")
              }}
            >
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
