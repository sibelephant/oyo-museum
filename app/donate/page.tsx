"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState("100")
  const [customAmount, setCustomAmount] = useState("")
  const [donorName, setDonorName] = useState("")
  const [donorEmail, setDonorEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=600&width=1920&text=Donate"
          width={1920}
          height={600}
          alt="Donate to the Royal History Museum"
          className="w-full h-[400px] object-cover"
        />
        <div className="container relative z-20 mx-auto px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Support Our Mission</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-white/90">
            Your donation helps preserve the royal heritage of Oyo State for future generations
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Make a Donation</h2>
              <p className="mt-4 text-lg text-gray-600">
                Your support enables us to preserve artifacts, create educational programs, and share the rich royal
                heritage of Oyo State with the world.
              </p>

              <div className="mt-8 space-y-6">
                <div className="rounded-lg bg-amber-50 p-6">
                  <h3 className="text-lg font-medium text-amber-800">Your Impact</h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-700">•</span>
                      <span>
                        <strong>₦5,000</strong> helps fund educational materials for school visits
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-700">•</span>
                      <span>
                        <strong>₦20,000</strong> helps restore a historical palace
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-amber-700">•</span>
                      <span>
                        <strong>₦50,000</strong> supports a year-long cultural festival
                      </span>
                    </li>
                  </ul>
                </div>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-4">
                    <Label htmlFor="amount">Choose a Donation Amount</Label>
                    <RadioGroup value={donationAmount} onValueChange={setDonationAmount}>
                      <div className="flex items-center space-x-4">
                        <RadioGroupItem value="100" id="amount-1" />
                        <Label htmlFor="amount-1">₦100</Label>
                      </div>
                      <div className="flex items-center space-x-4">
                        <RadioGroupItem value="500" id="amount-2" />
                        <Label htmlFor="amount-2">₦500</Label>
                      </div>
                      <div className="flex items-center space-x-4">
                        <RadioGroupItem value="1000" id="amount-3" />
                        <Label htmlFor="amount-3">₦1,000</Label>
                      </div>
                      <div className="flex items-center space-x-4">
                        <RadioGroupItem value="custom" id="amount-4" />
                        <Label htmlFor="amount-4">Custom Amount</Label>
                        <Input
                          type="number"
                          id="custom-amount"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="ml-4"
                          disabled={donationAmount !== "custom"}
                        />
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" value={donorName} onChange={(e) => setDonorName(e.target.value)} />
                  </div>
                  <div className="space-y-4">
                    <Label htmlFor="email">Your Email</Label>
                    <Input id="email" type="email" value={donorEmail} onChange={(e) => setDonorEmail(e.target.value)} />
                  </div>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Donate"}
                  </Button>
                </form>
              </div>
            </div>
            <div>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center space-y-4">
                  <CheckCircle2 className="h-16 w-16 text-green-500" />
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">Thank You for Your Donation!</h2>
                  <p className="text-lg text-gray-600">
                    Your support is greatly appreciated and will help us continue our mission to preserve and share the
                    rich royal heritage of Oyo State.
                  </p>
                  <Link href="/" className="mt-8 text-blue-600 hover:text-blue-800">
                    Back to Home
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center space-y-4">
                  <Image
                    src="/placeholder.svg?height=400&width=400&text=Donation"
                    width={400}
                    height={400}
                    alt="Donation Illustration"
                    className="w-full h-full object-cover"
                  />
                  <p className="text-lg text-gray-600">
                    Your donation will make a significant impact on our ability to continue preserving and sharing the
                    rich royal heritage of Oyo State.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
