"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/oyo_logo.webp"
                alt="Royal History Museum Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="hidden text-lg font-bold text-amber-800 sm:inline-block">Royal History Museum</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/" className="text-sm font-medium text-gray-900 hover:text-amber-700">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium text-gray-900 hover:text-amber-700">
                About <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/about">Our Story</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/mission">Mission & Vision</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/team">Our Team</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/kingdoms" className="text-sm font-medium text-gray-900 hover:text-amber-700">
              Royal Kingdoms
            </Link>

            <Link href="/archive" className="text-sm font-medium text-gray-900 hover:text-amber-700">
              Digital Archive
            </Link>

            <Link href="/vr-experience" className="text-sm font-medium text-gray-900 hover:text-amber-700">
              VR Experience
            </Link>

            <Link href="/get-involved" className="text-sm font-medium text-gray-900 hover:text-amber-700">
              Get Involved
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-amber-700 hover:bg-amber-800">
              <Link href="/donate">Donate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/kingdoms"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Royal Kingdoms
            </Link>
            <Link
              href="/archive"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Digital Archive
            </Link>
            <Link
              href="/vr-experience"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              VR Experience
            </Link>
            <Link
              href="/get-involved"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Get Involved
            </Link>
            <Link
              href="/donate"
              className="block rounded-md bg-amber-700 px-3 py-2 text-base font-medium text-white hover:bg-amber-800"
              onClick={toggleMenu}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
