"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Filter, X, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function ArchivePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedKingdom, setSelectedKingdom] = useState("All")
  const [selectedPeriod, setSelectedPeriod] = useState("All")
  const [filtersVisible, setFiltersVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const categories = ["All", "Photographs", "Documents", "Artifacts", "Audio", "Video"]
  const kingdoms = ["All", "Oyo Empire", "Ibadan", "Ogbomoso", "Iseyin", "Saki", "Okeho"]
  const periods = ["All", "Pre-colonial", "Colonial", "Post-independence", "Contemporary"]

  const archiveItems = [
    {
      id: 1,
      title: "Alaafin's Beaded Crown",
      category: "Artifacts",
      kingdom: "Oyo Empire",
      period: "Pre-colonial",
      description: "A sacred beaded crown worn by the Alaafin of Oyo, symbolizing divine authority and royal power.",
      image: "/placeholder.svg?height=500&width=500&text=Royal Crown",
    },
    {
      id: 2,
      title: "Treaty of 1893",
      category: "Documents",
      kingdom: "Ibadan",
      period: "Colonial",
      description:
        "Historical document detailing the agreement between Ibadan authorities and British colonial representatives.",
      image: "/placeholder.svg?height=500&width=500&text=Treaty Document",
    },
    {
      id: 3,
      title: "Royal Drums of Ogbomoso",
      category: "Artifacts",
      kingdom: "Ogbomoso",
      period: "Pre-colonial",
      description:
        "Ceremonial drums used during royal processions and important cultural ceremonies in Ogbomoso Kingdom.",
      image: "/placeholder.svg?height=500&width=500&text=Royal Drums",
    },
    {
      id: 4,
      title: "Coronation of Alaafin Adeyemi III",
      category: "Photographs",
      kingdom: "Oyo Empire",
      period: "Post-independence",
      description: "Rare photographs documenting the coronation ceremony of Alaafin Lamidi Adeyemi III in 1970.",
      image: "/placeholder.svg?height=500&width=500&text=Coronation Photos",
    },
    {
      id: 5,
      title: "Traditional Court Proceedings",
      category: "Audio",
      kingdom: "Iseyin",
      period: "Contemporary",
      description:
        "Audio recordings of traditional court proceedings in the Iseyin Kingdom, showcasing indigenous justice systems.",
      image: "/placeholder.svg?height=500&width=500&text=Audio Recording",
    },
    {
      id: 6,
      title: "Royal Staff of Office",
      category: "Artifacts",
      kingdom: "Saki",
      period: "Colonial",
      description: "A ceremonial staff symbolizing the authority of the traditional ruler of Saki.",
      image: "/placeholder.svg?height=500&width=500&text=Royal Staff",
    },
    {
      id: 7,
      title: "Oral History: Founding of Okeho",
      category: "Audio",
      kingdom: "Okeho",
      period: "Pre-colonial",
      description: "Recorded narratives from royal griots about the founding and early history of Okeho Kingdom.",
      image: "/placeholder.svg?height=500&width=500&text=Oral History",
    },
    {
      id: 8,
      title: "Royal Procession in Ibadan",
      category: "Video",
      kingdom: "Ibadan",
      period: "Contemporary",
      description: "Video footage of a royal procession in Ibadan, showcasing traditional regalia and ceremonies.",
      image: "/placeholder.svg?height=500&width=500&text=Royal Procession",
    },
    {
      id: 9,
      title: "Map of Oyo Empire Territories",
      category: "Documents",
      kingdom: "Oyo Empire",
      period: "Colonial",
      description:
        "Historical map showing the territorial extent of the Oyo Empire at its height, drawn by European explorers.",
      image: "/placeholder.svg?height=500&width=500&text=Historical Map",
    },
    {
      id: 10,
      title: "Royal Jewelry Collection",
      category: "Artifacts",
      kingdom: "Ogbomoso",
      period: "Pre-colonial",
      description: "Collection of gold and beaded jewelry worn by royalty in Ogbomoso Kingdom.",
      image: "/placeholder.svg?height=500&width=500&text=Royal Jewelry",
    },
    {
      id: 11,
      title: "Independence Day Celebration",
      category: "Photographs",
      kingdom: "Ibadan",
      period: "Post-independence",
      description:
        "Photographs showing traditional rulers participating in Nigeria's independence celebrations in 1960.",
      image: "/placeholder.svg?height=500&width=500&text=Independence Photos",
    },
    {
      id: 12,
      title: "Traditional Music of Oyo",
      category: "Audio",
      kingdom: "Oyo Empire",
      period: "Contemporary",
      description: "Recordings of traditional royal court music from the Oyo Kingdom.",
      image: "/placeholder.svg?height=500&width=500&text=Traditional Music",
    },
  ]

  const filteredItems = archiveItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchesKingdom = selectedKingdom === "All" || item.kingdom === selectedKingdom
    const matchesPeriod = selectedPeriod === "All" || item.period === selectedPeriod

    return matchesSearch && matchesCategory && matchesKingdom && matchesPeriod
  })

  const resetFilters = () => {
    setSelectedCategory("All")
    setSelectedKingdom("All")
    setSelectedPeriod("All")
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/placeholder.svg?height=600&width=1920&text=Digital Archive"
          width={1920}
          height={600}
          alt="Digital Archive"
          className="w-full h-[400px] object-cover"
        />
        <div className="container relative z-20 mx-auto px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Digital Archive</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-white/90">
            Explore our extensive collection of historical artifacts, photographs, documents, and recordings
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="sticky top-0 z-30 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search the archive..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                className="flex items-center space-x-2"
                onClick={() => setFiltersVisible(!filtersVisible)}
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${filtersVisible ? "rotate-180" : ""}`} />
              </Button>
              {(selectedCategory !== "All" || selectedKingdom !== "All" || selectedPeriod !== "All") && (
                <Button variant="ghost" onClick={resetFilters} className="text-amber-700">
                  <X className="mr-1 h-4 w-4" />
                  Clear
                </Button>
              )}
            </div>
          </div>

          {filtersVisible && (
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <label className="text-sm font-medium text-gray-700">Category</label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="mt-1 w-full justify-between">
                      {selectedCategory}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    {categories.map((category) => (
                      <DropdownMenuItem
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category ? "bg-amber-50 text-amber-700" : ""}
                      >
                        {category}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Kingdom</label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="mt-1 w-full justify-between">
                      {selectedKingdom}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    {kingdoms.map((kingdom) => (
                      <DropdownMenuItem
                        key={kingdom}
                        onClick={() => setSelectedKingdom(kingdom)}
                        className={selectedKingdom === kingdom ? "bg-amber-50 text-amber-700" : ""}
                      >
                        {kingdom}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Time Period</label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="mt-1 w-full justify-between">
                      {selectedPeriod}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    {periods.map((period) => (
                      <DropdownMenuItem
                        key={period}
                        onClick={() => setSelectedPeriod(period)}
                        className={selectedPeriod === period ? "bg-amber-50 text-amber-700" : ""}
                      >
                        {period}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Archive Items */}
      <section className="py-12 bg-gray-50 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-amber-100 p-3">
                <Search className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">No items found</h3>
              <p className="mt-1 text-gray-500">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <Button onClick={resetFilters} className="mt-4 bg-amber-700 hover:bg-amber-800">
                Reset Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-500">{filteredItems.length} items found</p>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center space-x-2">
                      <span>Sort by: Newest</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Newest</DropdownMenuItem>
                    <DropdownMenuItem>Oldest</DropdownMenuItem>
                    <DropdownMenuItem>A-Z</DropdownMenuItem>
                    <DropdownMenuItem>Z-A</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredItems.map((item) => (
                  <Dialog key={item.id}>
                    <DialogTrigger asChild>
                      <div
                        className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl"
                        onClick={() => setSelectedItem(item)}
                      >
                        <div className="aspect-square overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            width={500}
                            height={500}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center space-x-2">
                            <span className="inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                              {item.category}
                            </span>
                            <span className="inline-block rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800">
                              {item.kingdom}
                            </span>
                          </div>
                          <h3 className="mt-2 text-lg font-medium text-gray-900">{item.title}</h3>
                          <p className="mt-1 line-clamp-2 text-sm text-gray-500">{item.description}</p>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[700px]">
                      <DialogHeader>
                        <DialogTitle>{item.title}</DialogTitle>
                        <DialogDescription>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                              {item.category}
                            </span>
                            <span className="inline-block rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800">
                              {item.kingdom}
                            </span>
                            <span className="inline-block rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800">
                              {item.period}
                            </span>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="aspect-square overflow-hidden rounded-lg">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            width={500}
                            height={500}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium">Description</h4>
                          <p className="mt-2 text-gray-600">{item.description}</p>

                          <div className="mt-6 space-y-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-500">Category</h4>
                              <p>{item.category}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-500">Kingdom</h4>
                              <p>{item.kingdom}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-500">Time Period</h4>
                              <p>{item.period}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-500">Accession Number</h4>
                              <p>RHM-{item.id.toString().padStart(4, "0")}</p>
                            </div>
                          </div>

                          <div className="mt-6">
                            <Button className="w-full bg-amber-700 hover:bg-amber-800">Download High-Resolution</Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-700 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">Support Our Digital Archive</h2>
            <p className="mt-4 text-xl text-amber-100">
              Help us preserve and digitize more historical artifacts and documents
            </p>
            <div className="mt-8">
              <Button asChild className="bg-white text-amber-800 hover:bg-amber-50">
                <Link href="/donate">Make a Donation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
