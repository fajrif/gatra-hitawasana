"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    // Check initial scroll position
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={isScrolled ? "/images/logo.png" : "/images/logo-white.png"}
              alt="PT Gatra Hita Wasana"
              width={180}
              height={50}
              className="h-12 w-auto transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${isScrolled ? "text-black hover:text-primary" : "text-white hover:text-white/80"
                }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${isScrolled ? "text-black hover:text-primary" : "text-white hover:text-white/80"
                }`}
            >
              About Us
            </Link>
            <Link
              href="/business"
              className={`text-sm font-medium transition-colors ${isScrolled ? "text-black hover:text-primary" : "text-white hover:text-white/80"
                }`}
            >
              Business
            </Link>
            <Link
              href="/media"
              className={`text-sm font-medium transition-colors ${isScrolled ? "text-black hover:text-primary" : "text-white hover:text-white/80"
                }`}
            >
              Media
            </Link>
          </div>
          <div className="hidden md:block">
            <Link href="/contact">
              <Button
                size="sm"
                className={`rounded-full px-6 transition-all ${isScrolled
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm"
                  }`}
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${isScrolled ? "text-black" : "text-white"}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4 bg-white shadow-lg rounded-b-lg p-4">
            <Link
              href="/"
              className="block text-sm font-medium transition-colors text-black hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium transition-colors text-black hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/business"
              className="block text-sm font-medium transition-colors text-black hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Business
            </Link>
            <Link
              href="/media"
              className="block text-sm font-medium transition-colors text-black hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Media
            </Link>
            <Link href="/contact" className="block" onClick={() => setIsOpen(false)}>
              <Button
                size="sm"
                className="rounded-full w-full bg-primary text-white hover:bg-primary/90"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

