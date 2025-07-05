import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function FeaturedExhibition() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
            Featured Exhibition
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Royal Regalia: Symbols of Power
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore the magnificent royal regalia that symbolize power, authority, and cultural identity in Yoruba
            kingdoms.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=600&width=800&text=Royal Regalia Exhibition"
              alt="Royal Regalia Exhibition"
              width={800}
              height={600}
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4 text-amber-300" />
                  <span className="text-sm">June 12 - August 30, 2023</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4 text-amber-300" />
                  <span className="text-sm">9:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600">
              This exhibition showcases the exquisite craftsmanship and cultural significance of royal regalia from
              various kingdoms in Oyo State. From beaded crowns and ceremonial swords to royal staffs and drums, these
              artifacts tell the story of power, authority, and divine kingship in Yoruba tradition.
            </p>

            <div className="space-y-4">
              <div className="rounded-lg bg-amber-50 p-4">
                <h3 className="font-medium text-amber-800">Exhibition Highlights</h3>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>• The sacred Ade crown of the Alaafin of Oyo</li>
                  <li>• Royal beaded footwear and garments</li>
                  <li>• Ceremonial swords and staffs of office</li>
                  <li>• Royal drums and musical instruments</li>
                  <li>• Historical photographs of coronation ceremonies</li>
                </ul>
              </div>

              <div className="rounded-lg bg-amber-50 p-4">
                <h3 className="font-medium text-amber-800">Special Programs</h3>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li>• Curator-led tours every Saturday at 11:00 AM</li>
                  <li>• Traditional drumming performances on Sundays</li>
                  <li>• Children's workshop: Create your own royal crown</li>
                  <li>• Lecture series on Yoruba kingship traditions</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild className="bg-amber-700 hover:bg-amber-800">
                <Link href="/exhibitions/royal-regalia">Learn More</Link>
              </Button>
              <Button asChild variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50">
                <Link href="/tickets" className="inline-flex items-center">
                  Book Tickets <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
