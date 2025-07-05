import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Smartphone, Laptop, Headset, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function VRExperiencePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <Image
          src="/placeholder.svg?height=600&width=1920&text=VR Experience"
          width={1920}
          height={600}
          alt="VR Experience"
          className="w-full h-[500px] object-cover"
        />
        <div className="container relative z-20 mx-auto px-4 py-32 text-center sm:px-6 lg:px-8">
          <div className="inline-block rounded-full bg-amber-700 px-4 py-1 text-sm font-medium text-white">
            Coming Soon
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Virtual Reality Experience
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-white/90">
            Step back in time with our immersive VR and AR experiences. Walk through historical palaces, witness royal
            ceremonies, and interact with artifacts in ways never before possible.
          </p>
          <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <Button size="lg" className="bg-amber-700 hover:bg-amber-800">
              Join the Waitlist
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">The Future of Cultural Heritage</h2>
            <p className="mt-6 text-lg text-gray-600">
              We're developing cutting-edge virtual reality and augmented reality experiences that will transform how
              visitors engage with Oyo State's royal heritage. Our VR/AR initiative aims to make historical sites,
              artifacts, and cultural practices accessible to everyone, regardless of physical location or mobility.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Through immersive technology, we're preserving cultural heritage for future generations while creating
              engaging educational experiences that bring history to life.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Experience Features</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our VR/AR experiences will offer unprecedented access to Oyo State's royal heritage
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Virtual Palace Tours",
                description: "Walk through historically accurate reconstructions of royal palaces and compounds.",
                icon: <Headset className="h-10 w-10 text-amber-700" />,
              },
              {
                title: "Interactive Artifacts",
                description: "Examine and interact with 3D models of precious artifacts from our collection.",
                icon: <Smartphone className="h-10 w-10 text-amber-700" />,
              },
              {
                title: "Historical Reenactments",
                description: "Witness important historical events and royal ceremonies through immersive reenactments.",
                icon: <Clock className="h-10 w-10 text-amber-700" />,
              },
              {
                title: "Educational Narratives",
                description: "Learn about royal history through engaging storytelling and expert commentary.",
                icon: <Laptop className="h-10 w-10 text-amber-700" />,
              },
              {
                title: "AR Museum Guide",
                description:
                  "Use augmented reality to enhance your in-person museum visit with additional information.",
                icon: <Smartphone className="h-10 w-10 text-amber-700" />,
              },
              {
                title: "Remote Access",
                description: "Experience the museum's collections from anywhere in the world through virtual tours.",
                icon: <Laptop className="h-10 w-10 text-amber-700" />,
              },
            ].map((feature, index) => (
              <div key={index} className="rounded-lg bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Preview: The Alaafin's Palace</h2>
              <p className="mt-4 text-lg text-gray-600">
                Our first VR experience will take you on a journey through the historic palace of the Alaafin of Oyo,
                one of the most significant royal residences in Yoruba history.
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-lg bg-amber-50 p-4">
                  <h3 className="font-medium text-amber-800">Experience Highlights</h3>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• Tour the palace grounds and royal chambers</li>
                    <li>• Witness a traditional royal court session</li>
                    <li>• Explore the sacred shrines within the palace</li>
                    <li>• Learn about the architectural significance of the structure</li>
                    <li>• Interact with 3D models of royal regalia</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <Button asChild className="bg-amber-700 hover:bg-amber-800">
                  <Link href="/vr-experience/waitlist" className="inline-flex items-center">
                    Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800&text=VR Palace Preview"
                alt="VR Palace Preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Watch Preview
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Development Timeline</h2>
            <p className="mt-4 text-lg text-gray-600">Our roadmap for bringing virtual experiences to life</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-amber-200" />

            <div className="space-y-12">
              {[
                {
                  phase: "Phase 1: Research & Planning",
                  date: "Completed",
                  description: "Historical research, architectural documentation, and technology assessment.",
                },
                {
                  phase: "Phase 2: 3D Modeling",
                  date: "In Progress",
                  description: "Creating detailed 3D models of palaces, artifacts, and environments.",
                },
                {
                  phase: "Phase 3: Experience Development",
                  date: "Q3 2023",
                  description: "Building interactive VR experiences with educational content and narratives.",
                },
                {
                  phase: "Phase 4: Beta Testing",
                  date: "Q4 2023",
                  description: "Limited release to select users for feedback and refinement.",
                },
                {
                  phase: "Phase 5: Public Launch",
                  date: "Q1 2024",
                  description: "Official launch of our first VR experience: The Alaafin's Palace.",
                },
                {
                  phase: "Phase 6: Expansion",
                  date: "Q2 2024 onwards",
                  description: "Development of additional VR experiences featuring other royal kingdoms.",
                },
              ].map((phase, index) => (
                <div key={index} className="relative flex items-center justify-between">
                  <div className="hidden w-5/12 pr-8 text-right md:block">
                    {index % 2 === 0 ? (
                      <>
                        <h3 className="text-xl font-bold text-amber-800">{phase.phase}</h3>
                        <div className="mt-1 text-sm font-medium text-gray-500">{phase.date}</div>
                        <p className="mt-2 text-gray-600">{phase.description}</p>
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
                        <h3 className="text-xl font-bold text-amber-800 md:hidden">{phase.phase}</h3>
                        <div className="mt-1 text-sm font-medium text-gray-500 md:hidden">{phase.date}</div>
                        <p className="mt-2 text-gray-600 md:hidden">{phase.description}</p>
                      </>
                    ) : null}

                    {index % 2 === 1 ? (
                      <>
                        <h3 className="hidden text-xl font-bold text-amber-800 md:block">{phase.phase}</h3>
                        <div className="hidden mt-1 text-sm font-medium text-gray-500 md:block">{phase.date}</div>
                        <p className="hidden mt-2 text-gray-600 md:block">{phase.description}</p>
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

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">Learn more about our virtual reality initiative</p>
          </div>

          <div className="mx-auto max-w-3xl divide-y divide-gray-200">
            {[
              {
                question: "What equipment will I need to experience the VR tours?",
                answer:
                  "Our VR experiences will be compatible with major VR headsets including Oculus Quest, HTC Vive, and Valve Index. We're also developing a simplified version that can be experienced on smartphones and computers without VR equipment.",
              },
              {
                question: "Will the VR experiences be available remotely or only at the museum?",
                answer:
                  "Both! We'll have dedicated VR stations at the museum for visitors, but we're also developing versions that can be accessed remotely through our website or dedicated apps.",
              },
              {
                question: "How historically accurate are the virtual reconstructions?",
                answer:
                  "We work closely with historians, archaeologists, and traditional knowledge keepers to ensure our reconstructions are as historically accurate as possible, based on available evidence and oral traditions.",
              },
              {
                question: "Will the VR experiences be suitable for children?",
                answer:
                  "Yes, we're designing experiences for various age groups. Our main experiences will be suitable for children aged 8 and above, and we'll have specially designed experiences for younger children.",
              },
              {
                question: "How can I support this initiative?",
                answer:
                  "You can support our VR/AR initiative by joining our waitlist, making a donation to the museum, or volunteering your expertise if you have skills in 3D modeling, VR development, or historical research.",
              },
              {
                question: "Will the experiences be accessible to people with disabilities?",
                answer:
                  "Accessibility is a priority for us. We're designing our experiences to accommodate various disabilities, including options for seated experiences, audio descriptions, and alternative navigation methods.",
              },
            ].map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-700 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">Be Among the First to Experience</h2>
            <p className="mt-4 text-xl text-amber-100">
              Join our waitlist to receive updates and early access to our VR experiences
            </p>
            <div className="mt-8">
              <Button asChild className="bg-white text-amber-800 hover:bg-amber-50">
                <Link href="/vr-experience/waitlist">Join the Waitlist</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
