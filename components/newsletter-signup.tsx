"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2 } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")
    }, 1000)
  }

  return (
    <section className="bg-amber-700 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Stay Updated with Our Newsletter</h2>
          <p className="mt-4 text-lg text-amber-100">
            Subscribe to receive updates about new exhibitions, events, and educational programs.
          </p>

          {isSubmitted ? (
            <div className="mt-8 flex items-center justify-center space-x-2 text-white">
              <CheckCircle2 className="h-6 w-6 text-amber-200" />
              <span>Thank you for subscribing! Check your email for confirmation.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 sm:flex sm:max-w-md sm:mx-auto">
              <div className="min-w-0 flex-1">
                <Input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Button type="submit" disabled={isLoading} className="w-full bg-white text-amber-800 hover:bg-amber-50">
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
            </form>
          )}

          <p className="mt-3 text-sm text-amber-200">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
