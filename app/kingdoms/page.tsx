import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function KingdomsPage() {
  const kingdoms = [
    {
      id: "oyo-empire",
      name: "Oyo Empire",
      period: "17th - 19th Century",
      description:
        "One of the most powerful Yoruba states in pre-colonial Nigeria, known for its military prowess and political organization.",
      image: "/placeholder.svg?height=500&width=800&text=Oyo Empire",
    },
    {
      id: "ibadan",
      name: "Ibadan Kingdom",
      period: "19th Century - Present",
      description: "A warrior city-state that rose to prominence in the 19th century after the fall of the Oyo Empire.",
      image: "/placeholder.svg?height=500&width=800&text=Ibadan Kingdom",
    },
    {
      id: "ogbomoso",
      name: "Ogbomoso Kingdom",
      period: "17th Century - Present",
      description: "A significant Yoruba kingdom with a rich cultural heritage and traditions.",
      image: "/placeholder.svg?height=500&width=800&text=Ogbomoso Kingdom",
    },
    {
      id: "iseyin",
      name: "Iseyin Kingdom",
      period: "18th Century - Present",
      description: "Known for its textile industry and cultural festivals, Iseyin has a rich royal history.",
      image: "/placeholder.svg?height=500&width=800&text=Iseyin Kingdom",
    },
    {
      id: "saki",
      name: "Saki Kingdom",
      period: "18th Century - Present",
      description: "A border town with a unique blend of cultures and a strong royal tradition.",
      image: "/placeholder.svg?height=500&width=800&text=Saki Kingdom",
    },
    {
      id: "okeho",
      name: "Okeho Kingdom",
      period: "19th Century - Present",
      description: "A kingdom with a fascinating history of resistance and cultural preservation.",
      image: "/placeholder.svg?height=500&width=800&text=Okeho Kingdom",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=600&width=1920&text=Royal Kingdoms"
          width={1920}
          height={600}
          alt="Royal Kingdoms of Oyo State"
          className="w-full h-[400px] object-cover"
        />
        <div className="container relative z-20 mx-auto px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Royal Kingdoms of Oyo State</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-white/90">
            Explore the history and cultural significance of the royal kingdoms that have shaped Oyo State's rich
            heritage
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">A Rich Royal Heritage</h2>
            <p className="mt-6 text-lg text-gray-600">
              Oyo State is home to numerous royal kingdoms, each with its own unique history, traditions, and cultural
              significance. These kingdoms have played crucial roles in shaping the political, social, and cultural
              landscape of the region for centuries.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              From the powerful Oyo Empire that once dominated West Africa to the vibrant kingdoms that continue to
              thrive today, explore the fascinating stories of royal heritage that define Oyo State.
            </p>
          </div>
        </div>
      </section>

      {/* Kingdoms List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {kingdoms.map((kingdom, index) => (
              <div
                key={kingdom.id}
                className={`grid grid-cols-1 gap-12 lg:grid-cols-2 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                    {kingdom.period}
                  </div>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">{kingdom.name}</h2>
                  <p className="mt-4 text-lg text-gray-600">{kingdom.description}</p>
                  <div className="mt-6 space-y-4">
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <h3 className="font-medium text-amber-800">Key Features</h3>
                      <ul className="mt-2 space-y-1 text-gray-600">
                        <li>• Royal lineage and succession</li>
                        <li>• Political structure and governance</li>
                        <li>• Cultural traditions and festivals</li>
                        <li>• Historical achievements and challenges</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild className="bg-amber-700 hover:bg-amber-800">
                      <Link href={`/kingdoms/${kingdom.id}`} className="inline-flex items-center">
                        Explore {kingdom.name} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div
                  className={`relative h-80 overflow-hidden rounded-xl shadow-xl ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <Image
                    src={kingdom.image || "/placeholder.svg"}
                    alt={kingdom.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Interactive Map</h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore the geographical distribution of royal kingdoms across Oyo State
            </p>
          </div>

          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=800&width=1200&text=Interactive Map of Oyo State Kingdoms"
              alt="Interactive Map of Oyo State Kingdoms"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <p className="text-white text-xl">Interactive Map Coming Soon</p>
            </div>
          </div>

          <p className="mt-4 text-center text-gray-500 text-sm">
            Click on a kingdom on the map to learn more about its history and cultural significance.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Historical Timeline</h2>
            <p className="mt-4 text-lg text-gray-600">Key events in the history of Oyo State's royal kingdoms</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-amber-200" />

            <div className="space-y-12">
              {[
                {
                  year: "17th Century",
                  title: "Rise of the Oyo Empire",
                  description: "The Oyo Empire emerges as a dominant force in West Africa under Alaafin Obalokun.",
                },
                {
                  year: "1730s",
                  title: "Oyo Empire at its Peak",
                  description:
                    "Under Alaafin Abiodun, the Oyo Empire reaches its greatest territorial extent and influence.",
                },
                {
                  year: "Early 19th Century",
                  title: "Decline of Oyo Empire",
                  description:
                    "Internal conflicts and external pressures lead to the gradual decline of the Oyo Empire.",
                },
                {
                  year: "1830s",
                  title: "Rise of Ibadan",
                  description: "Ibadan emerges as a powerful city-state following the collapse of the Old Oyo Empire.",
                },
                {
                  year: "1893",
                  title: "Colonial Era Begins",
                  description: "The British establish control over the region, altering traditional power structures.",
                },
                {
                  year: "1976",
                  title: "Creation of Oyo State",
                  description: "Oyo State is created as an administrative division in modern Nigeria.",
                },
                {
                  year: "Present Day",
                  title: "Living Heritage",
                  description:
                    "Royal kingdoms continue to play important cultural and traditional roles in modern Oyo State.",
                },
              ].map((event, index) => (
                <div key={index} className="relative flex items-center justify-between">
                  <div className="hidden w-5/12 pr-8 text-right md:block">
                    {index % 2 === 0 ? (
                      <>
                        <h3 className="text-xl font-bold text-amber-800">{event.year}</h3>
                        <h4 className="text-lg font-medium text-gray-900">{event.title}</h4>
                        <p className="text-gray-600">{event.description}</p>
                      </>
                    ) : (
                      <div className="h-4 w-4" />
                    )}
                  </div>

                  <div className="absolute left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-amber-700 shadow">
                    <div className="h-3 w-3 rounded-full bg-white" />
                  </div>

                  <div className="w-5/12 pl-8 md:w-5/12">
                    {index % 2 === 1 || true ? (
                      <>
                        <h3 className="text-xl font-bold text-amber-800 md:hidden">{event.year}</h3>
                        <h4 className="text-lg font-medium text-gray-900 md:hidden">{event.title}</h4>
                        <p className="text-gray-600 md:hidden">{event.description}</p>
                      </>
                    ) : null}

                    {index % 2 === 1 ? (
                      <>
                        <h3 className="hidden text-xl font-bold text-amber-800 md:block">{event.year}</h3>
                        <h4 className="hidden text-lg font-medium text-gray-900 md:block">{event.title}</h4>
                        <p className="hidden text-gray-600 md:block">{event.description}</p>
                      </>
                    ) : (
                      <div className="hidden h-4 w-4 md:block" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-700 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">Explore Our Digital Archive</h2>
            <p className="mt-4 text-xl text-amber-100">
              Discover historical photographs, documents, and artifacts from Oyo State's royal kingdoms
            </p>
            <div className="mt-8">
              <Button asChild className="bg-white text-amber-800 hover:bg-amber-50">
                <Link href="/archive">Browse the Archive</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
