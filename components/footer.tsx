import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and About */}
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/oyo_logo.webp"
                alt="Royal History Museum Logo"
                width={40}
                height={40}
                className="h-10 w-10 bg-white rounded-full"
              />
              <span className="text-lg font-bold text-amber-400">Royal History Museum</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Preserving the rich cultural heritage and royal legacy of Oyo State for future generations.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-amber-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/visit" className="text-sm text-gray-400 hover:text-white">
                  Plan Your Visit
                </Link>
              </li>
              <li>
                <Link href="/exhibitions" className="text-sm text-gray-400 hover:text-white">
                  Exhibitions
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-gray-400 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/archive" className="text-sm text-gray-400 hover:text-white">
                  Digital Archive
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-sm text-gray-400 hover:text-white">
                  Support Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-gray-400" />
                <span className="text-sm text-gray-400">Cultural Center Road, Ibadan, Oyo State, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-gray-400" />
                <span className="text-sm text-gray-400">+234 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-gray-400" />
                <span className="text-sm text-gray-400">info@royalmuseumoyo.org</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400">Opening Hours</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-400">
                <span className="font-medium">Tuesday - Friday:</span> 9:00 AM - 5:00 PM
              </li>
              <li className="text-sm text-gray-400">
                <span className="font-medium">Saturday - Sunday:</span> 10:00 AM - 6:00 PM
              </li>
              <li className="text-sm text-gray-400">
                <span className="font-medium">Monday:</span> Closed
              </li>
              <li className="mt-4 text-sm text-gray-400">
                <span className="font-medium">Public Holidays:</span> Please check our calendar
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Royal History Museum of Oyo State. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
