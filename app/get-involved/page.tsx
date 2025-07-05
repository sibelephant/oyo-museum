import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Users, Handshake, GraduationCap, Gift } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function GetInvolvedPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=600&width=1920&text=Get Involved"
          width={1920}
          height={600}
          alt="Get Involved"
          className="w-full h-[400px] object-cover"
        />
        <div className="container relative z-20 mx-auto px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Get Involved</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-white/90">
            Support the preservation and promotion of Oyo State's royal heritage
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Join Our Mission</h2>
            <p className="mt-6 text-lg text-gray-600">
              The Royal History Museum of Oyo State relies on the support of individuals, organizations, and communities
              to fulfill our mission of preserving and promoting the rich cultural heritage of Oyo State's royal
              kingdoms.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              There are many ways to get involved and make a difference. Whether through donations, volunteering,
              partnerships, or educational programs, your contribution helps ensure that our royal heritage continues to
              inspire and educate future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Ways to Get Involved</h2>
            <p className="mt-4 text-lg text-gray-600">Discover how you can support our mission and make a difference</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                <Gift className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Donate</h3>
              <p className="mt-2 text-gray-600">
                Your financial contributions help us preserve artifacts, create new exhibits, develop educational
                programs, and maintain our facilities.
              </p>
              <div className="mt-6">
                <Button asChild className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/donate">Make a Donation</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                <Users className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Volunteer</h3>
              <p className="mt-2 text-gray-600">
                Join our team of dedicated volunteers who help with tours, events, research, and behind-the-scenes work
                at the museum.
              </p>
              <div className="mt-6">
                <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-50">
                  <Link href="/volunteer">Become a Volunteer</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                <Handshake className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Partner With Us</h3>
              <p className="mt-2 text-gray-600">
                Explore partnership opportunities for businesses, educational institutions, cultural organizations, and
                community groups.
              </p>
              <div className="mt-6">
                <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-50">
                  <Link href="/partnerships">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                <GraduationCap className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Educational Programs</h3>
              <p className="mt-2 text-gray-600">
                Participate in or support our educational initiatives for schools, universities, and community groups.
              </p>
              <div className="mt-6">
                <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-50">
                  <Link href="/education">Explore Programs</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                <Heart className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Membership</h3>
              <p className="mt-2 text-gray-600">
                Become a member to enjoy special benefits while supporting our ongoing work to preserve royal heritage.
              </p>
              <div className="mt-6">
                <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-50">
                  <Link href="/membership">Join as Member</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                <Gift className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Artifact Donations</h3>
              <p className="mt-2 text-gray-600">
                Contribute to our collection by donating historical artifacts, documents, photographs, or recordings.
              </p>
              <div className="mt-6">
                <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-50">
                  <Link href="/artifact-donations">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Make a Donation</h2>
              <p className="mt-4 text-lg text-gray-600">
                Your financial support is crucial to our mission of preserving and promoting the royal heritage of Oyo
                State. Donations of any size make a significant difference in our ability to:
              </p>
              <ul className="mt-6 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-amber-700">•</span>
                  Preserve and restore historical artifacts
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-700">•</span>
                  Create new exhibits and educational programs
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-700">•</span>
                  Digitize our collections for broader access
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-700">•</span>
                  Develop our VR/AR experiences
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-amber-700">•</span>
                  Support community outreach initiatives
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild className="bg-amber-700 hover:bg-amber-800">
                  <Link href="/donate" className="inline-flex items-center">
                    Donate Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg bg-amber-50 p-8">
              <h3 className="text-xl font-bold text-amber-800">Donation Options</h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="font-medium">One-Time Donation</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Make a single contribution of any amount to support our work.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="font-medium">Monthly Giving</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Set up a recurring monthly donation to provide sustained support.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="font-medium">Corporate Sponsorship</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Partner with us as a corporate sponsor for specific exhibits or programs.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="font-medium">Legacy Giving</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Include the museum in your estate planning to create a lasting legacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-96 overflow-hidden rounded-xl shadow-xl lg:order-last">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Volunteers"
                alt="Museum Volunteers"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Volunteer Opportunities</h2>
              <p className="mt-4 text-lg text-gray-600">
                Our volunteers are the heart of our museum community. They bring passion, expertise, and dedication that
                enhances every aspect of our work. Volunteering is also a wonderful way to learn more about royal
                heritage, gain museum experience, and connect with like-minded people.
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <h3 className="font-medium text-amber-800">Volunteer Roles</h3>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• Tour Guides & Docents</li>
                    <li>• Event Assistants</li>
                    <li>• Collections & Archives Assistants</li>
                    <li>• Education Program Facilitators</li>
                    <li>• Administrative Support</li>
                    <li>• Digital Media & Technology Support</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <Button asChild className="bg-amber-700 hover:bg-amber-800">
                  <Link href="/volunteer" className="inline-flex items-center">
                    Volunteer With Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Partnership Opportunities</h2>
            <p className="mt-4 text-lg text-gray-600">
              We collaborate with various organizations to enhance our impact and reach
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Educational Institutions</h3>
              <p className="mt-2 text-gray-600">
                We partner with schools, universities, and research institutions to develop educational programs,
                research initiatives, and student internships.
              </p>
              <div className="mt-6">
                <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-50">
                  <Link href="/partnerships/education">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Corporate Partners</h3>
              <p className="mt-2 text-gray-600">
                Businesses can support our mission through sponsorships, in-kind donations, employee volunteer programs,
                and collaborative projects.
              </p>
              <div className="mt-6">
                <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-50">
                  <Link href="/partnerships/corporate">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Cultural Organizations</h3>
              <p className="mt-2 text-gray-600">
                We collaborate with other museums, cultural institutions, and heritage organizations on joint
                exhibitions, research, and cultural exchange programs.
              </p>
              <div className="mt-6">
                <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-50">
                  <Link href="/partnerships/cultural">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Government Agencies</h3>
              <p className="mt-2 text-gray-600">
                We work with local, state, and federal government agencies on heritage preservation, tourism
                development, and cultural policy initiatives.
              </p>
              <div className="mt-6">
                <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-50">
                  <Link href="/partnerships/government">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Community Groups</h3>
              <p className="mt-2 text-gray-600">
                We engage with community organizations, traditional institutions, and local groups to ensure our work is
                relevant and accessible to diverse audiences.
              </p>
              <div className="mt-6">
                <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-50">
                  <Link href="/partnerships/community">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Media Partners</h3>
              <p className="mt-2 text-gray-600">
                We collaborate with media organizations to share stories about royal heritage and promote awareness of
                our collections and programs.
              </p>
              <div className="mt-6">
                <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-50">
                  <Link href="/partnerships/media">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">What Our Supporters Say</h2>
            <p className="mt-4 text-lg text-gray-600">
              Hear from the individuals and organizations who support our mission
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "Volunteering at the Royal History Museum has been a rewarding experience. I've learned so much about our cultural heritage while helping to share it with others.",
                name: "Adebola Johnson",
                role: "Museum Volunteer",
                image: "/placeholder.svg?height=100&width=100&text=AJ",
              },
              {
                quote:
                  "Our partnership with the museum has allowed us to provide our students with unique educational experiences that bring history to life in ways textbooks never could.",
                name: "Dr. Folake Adeyemi",
                role: "History Professor, University of Ibadan",
                image: "/placeholder.svg?height=100&width=100&text=FA",
              },
              {
                quote:
                  "Supporting the museum's digital archive project has been a perfect alignment with our corporate values of preserving cultural heritage through technology.",
                name: "Oluwaseun Oladipo",
                role: "CEO, TechNigeria Solutions",
                image: "/placeholder.svg?height=100&width=100&text=OO",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="h-12 w-12 rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-gray-600">"{testimonial.quote}"</p>
                    <div className="mt-4">
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-700 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">Ready to Get Involved?</h2>
            <p className="mt-4 text-xl text-amber-100">
              Join us in preserving and promoting the royal heritage of Oyo State
            </p>
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
              <Button asChild className="bg-white text-amber-800 hover:bg-amber-50">
                <Link href="/donate">Make a Donation</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
