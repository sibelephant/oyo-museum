import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Clock, MapPin, Calendar, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import FeaturedExhibition from "@/components/featured-exhibition"
import NewsletterSignup from "@/components/newsletter-signup"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1920"
          width={1920}
          height={800}
          alt="Royal artifacts from Oyo State"
          className="w-full h-[600px] object-cover"
          priority
        />
        <div className="container relative z-20 mx-auto px-4 py-32 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Royal History Museum of Oyo State
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-xl text-white/90">
              Preserving the rich cultural heritage and royal legacy of Oyo State for future generations
            </p>
            <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
              <Button size="lg" className="bg-amber-700 hover:bg-amber-800">
                Plan Your Visit
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Explore Collections
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Museum Info */}
      <section className="bg-amber-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex items-center space-x-4 rounded-lg bg-white p-4 shadow-sm">
              <Clock className="h-10 w-10 text-amber-700" />
              <div>
                <h3 className="font-medium">Opening Hours</h3>
                <p className="text-sm text-muted-foreground">Tue-Sun: 9am - 5pm</p>
                <p className="text-sm text-muted-foreground">Closed on Mondays</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 rounded-lg bg-white p-4 shadow-sm">
              <MapPin className="h-10 w-10 text-amber-700" />
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-sm text-muted-foreground">Cultural Center Road</p>
                <p className="text-sm text-muted-foreground">Ibadan, Oyo State</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 rounded-lg bg-white p-4 shadow-sm">
              <Calendar className="h-10 w-10 text-amber-700" />
              <div>
                <h3 className="font-medium">Upcoming Events</h3>
                <p className="text-sm text-muted-foreground">Royal Artifacts Exhibition</p>
                <p className="text-sm text-muted-foreground">June 12 - August 30</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Welcome to the Royal History Museum
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover the rich cultural heritage and royal legacy of Oyo State. Our museum houses a vast collection of
              artifacts, historical documents, and multimedia exhibits that showcase the splendor of Yoruba royalty
              through the ages.
            </p>
            <div className="mt-8">
              <Link href="/about" className="inline-flex items-center text-amber-700 hover:text-amber-800">
                Learn more about our mission <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Exhibition */}
      <FeaturedExhibition />

      {/* Royal Kingdoms Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Royal Kingdoms of Oyo State</h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore the history and cultural significance of the royal kingdoms that have shaped Oyo State's rich
              heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Oyo Empire",
                description:
                  "The historical Oyo Empire, one of the most powerful Yoruba states in pre-colonial Nigeria.",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Ibadan Kingdom",
                description: "The warrior city-state that rose to prominence in the 19th century.",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Ogbomoso Kingdom",
                description: "A significant Yoruba kingdom with a rich cultural heritage and traditions.",
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((kingdom, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl"
              >
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <Image
                    src={kingdom.image || "/placeholder.svg"}
                    alt={kingdom.title}
                    width={600}
                    height={400}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{kingdom.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{kingdom.description}</p>
                  <Link
                    href={`/kingdoms/${kingdom.title.toLowerCase().replace(" ", "-")}`}
                    className="mt-4 inline-flex items-center text-amber-300 hover:text-amber-200"
                  >
                    Explore history <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50">
              <Link href="/kingdoms">View All Royal Kingdoms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Digital Archive Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Digital Archive</h2>
              <p className="mt-4 text-lg text-gray-600">
                Explore our extensive digital collection of historical artifacts, photographs, documents, and recordings
                that showcase the royal heritage of Oyo State.
              </p>
              <p className="mt-4 text-gray-600">
                Our digital archive provides unprecedented access to rare historical items, making cultural heritage
                accessible to researchers, students, and enthusiasts worldwide.
              </p>
              <div className="mt-8">
                <Button asChild className="bg-amber-700 hover:bg-amber-800">
                  <Link href="/archive">Browse the Archive</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Artifact ${item}`}
                    alt={`Museum artifact ${item}`}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VR/AR Experience Preview */}
      <section className="relative py-16 bg-gray-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/placeholder.svg?height=800&width=1920&text=VR Background"
            alt="VR Experience Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block rounded-full bg-amber-700 px-4 py-1 text-sm font-medium">Coming Soon</div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Virtual Reality Experience</h2>
            <p className="mt-4 text-lg text-white/80">
              Step back in time with our immersive VR and AR experiences. Walk through historical palaces, witness royal
              ceremonies, and interact with artifacts in ways never before possible.
            </p>
            <div className="mt-8">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Join the Waitlist
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get Involved</h2>
            <p className="mt-4 text-lg text-gray-600">
              Support the preservation and promotion of Oyo State's royal heritage through donations, partnerships, and
              volunteer opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Donate</h3>
              <p className="mt-2 text-gray-600">
                Your contributions help us preserve artifacts, create new exhibits, and develop educational programs.
              </p>
              <div className="mt-4">
                <Button asChild className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/donate">Make a Donation</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Volunteer</h3>
              <p className="mt-2 text-gray-600">
                Join our team of dedicated volunteers who help with tours, events, and behind-the-scenes work.
              </p>
              <div className="mt-4">
                <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-50">
                  <Link href="/volunteer">Become a Volunteer</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Partner With Us</h3>
              <p className="mt-2 text-gray-600">
                Explore partnership opportunities for businesses, educational institutions, and cultural organizations.
              </p>
              <div className="mt-4">
                <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-50">
                  <Link href="/partnerships">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  )
}
