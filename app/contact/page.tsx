"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Button from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [responseMessage, setResponseMessage] = useState("")
  useEffect(() => {
    if (submitStatus === "success") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle")
        setResponseMessage("")
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [submitStatus])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setResponseMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setResponseMessage("Your message has been sent successfully!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
        setResponseMessage(result.error || "Failed to send message")
      }
    } catch {
      setSubmitStatus("error")
      setResponseMessage("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 text-center">Get in touch with our team</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#8133F1] focus:border-transparent text-white"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#8133F1] focus:border-transparent text-white"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#8133F1] focus:border-transparent text-white"
                placeholder="Your message..."
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#8133F1] hover:bg-[#6a1fc7] text-white px-8 py-3 rounded-full font-semibold transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            {submitStatus === "success" && (
              <div className="mt-4 p-4 bg-green-900/50 border border-green-700 rounded-lg">
                <p className="text-green-400 font-medium">Success!</p>
                <p className="text-green-300 text-sm mt-1">{responseMessage}</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mt-4 p-4 bg-red-900/50 border border-red-700 rounded-lg">
                <p className="text-red-400 font-medium">Error</p>
                <p className="text-red-300 text-sm mt-1">{responseMessage}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
