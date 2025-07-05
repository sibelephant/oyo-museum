import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=600&width=1920&text=About Us"
          width={1920}
          height={600}
          alt="About the Royal History Museum"
          className="w-full h-[400px] object-cover"
        />
        <div className="container relative z-20 mx-auto px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">About the Museum</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-white/90">
            Preserving the rich cultural heritage and royal legacy of Oyo State
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Story</h2>
              <div className="mt-6 space-y-6 text-lg text-gray-600">
                <p>
                  The Royal History Museum of Oyo State was established in 2010 with the mission to preserve, document,
                  and showcase the rich cultural heritage and royal legacy of Oyo State for future generations.
                </p>
                <p>
                  What began as a small collection of royal artifacts has grown into a comprehensive museum that houses
                  thousands of historical items, documents, photographs, and multimedia exhibits that tell the story of
                  Oyo State's royal kingdoms and their cultural significance.
                </p>
                <p>
                  Through collaborations with traditional rulers, cultural institutions, historians, and the local
                  community, we have created a dynamic space that serves as both an educational resource and a
                  celebration of our shared heritage.
                </p>
              </div>
            </div>
            <div className="relative h-96 overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Museum Building"
                alt="Museum Building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Mission & Vision</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-amber-800">Our Mission</h3>
                <p className="mt-4 text-gray-600">
                  To collect, preserve, research, and exhibit the material culture and historical narratives of Oyo
                  State's royal kingdoms, making them accessible to diverse audiences for education, inspiration, and
                  enjoyment.
                </p>
              </div>
              <div className="rounded-xl bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-amber-800">Our Vision</h3>
                <p className="mt-4 text-gray-600">
                  To be a world-class cultural institution that serves as the foremost repository of Oyo State's royal
                  heritage, fostering cultural understanding, pride, and identity among present and future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Values</h2>
            <p className="mt-4 text-lg text-gray-600">The principles that guide our work and relationships</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Cultural Integrity",
                description:
                  "We are committed to the accurate representation and respectful treatment of cultural heritage.",
              },
              {
                title: "Accessibility",
                description:
                  "We strive to make our collections and programs accessible to all visitors, regardless of background or ability.",
              },
              {
                title: "Education",
                description:
                  "We believe in the power of education to foster understanding, appreciation, and preservation of cultural heritage.",
              },
              {
                title: "Community Engagement",
                description:
                  "We actively involve local communities in our work, recognizing them as key stakeholders and partners.",
              },
              {
                title: "Innovation",
                description:
                  "We embrace innovative approaches to museum practice, including digital technologies and interactive experiences.",
              },
              {
                title: "Sustainability",
                description:
                  "We are committed to sustainable practices in all aspects of our operations, ensuring the museum's long-term viability.",
              },
            ].map((value, index) => (
              <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-amber-800">{value.title}</h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Team</h2>
            <p className="mt-4 text-lg text-gray-600">Meet the dedicated professionals who bring the museum to life</p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Dr. Adebayo Ogunlesi",
                role: "Museum Director",
                image: "/placeholder.svg?height=300&width=300&text=Director",
              },
              {
                name: "Prof. Folake Adeyemi",
                role: "Chief Curator",
                image: "/placeholder.svg?height=300&width=300&text=Curator",
              },
              {
                name: "Mr. Oluwaseun Johnson",
                role: "Education Coordinator",
                image: "/placeholder.svg?height=300&width=300&text=Education",
              },
              {
                name: "Ms. Amina Bakare",
                role: "Digital Archives Manager",
                image: "/placeholder.svg?height=300&width=300&text=Archives",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50">
              <Link href="/about/team" className="inline-flex items-center">
                View Full Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners & Supporters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Partners & Supporters</h2>
            <p className="mt-4 text-lg text-gray-600">
              We are grateful for the support of these organizations and institutions
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {[1, 2, 3, 4, 5, 6].map((partner) => (
              <div key={partner} className="flex items-center justify-center">
                <Image
                  src={`/placeholder.svg?height=100&width=150&text=Partner ${partner}`}
                  alt={`Partner ${partner}`}
                  width={150}
                  height={100}
                  className="max-h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-700 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">Join Us in Preserving Our Heritage</h2>
            <p className="mt-4 text-xl text-amber-100">
              Support our mission through donations, volunteering, or partnerships
            </p>
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
              <Button asChild className="bg-white text-amber-800 hover:bg-amber-50">
                <Link href="/donate">Make a Donation</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
