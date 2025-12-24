"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, FileText } from "lucide-react"

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
        ? "bg-sk-gold shadow-md"
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
          <div className="hidden md:flex items-center gap-8 font-semibold">
            <Link
              href="/"
              className={`uppercase transition-colors ${isScrolled ? "text-black hover:text-primary" : "text-white hover:text-white/80"
                }`}
            >
              Beranda
            </Link>
            <Link
              href="/about"
              className={`uppercase transition-colors ${isScrolled ? "text-black hover:text-primary" : "text-white hover:text-white/80"
                }`}
            >
              Tentang Kami
            </Link>
            <Link
              href="/business"
              className={`uppercase transition-colors ${isScrolled ? "text-black hover:text-primary" : "text-white hover:text-white/80"
                }`}
            >
              Layanan Bisnis
            </Link>
            <Link
              href="/media"
              className={`uppercase transition-colors ${isScrolled ? "text-black hover:text-primary" : "text-white hover:text-white/80"
                }`}
            >
              Media
            </Link>
          </div>
          <div className="hidden md:block">
            <Link
              href="/files/manual-book-aplikasi-cusol.pdf"
              target="_blank"
              className={`flex items-center gap-2 rounded-sm border border-white/10 px-5 py-3 text-sm font-light text-white tracking-tight transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 duration-300 backdrop-blur-sm ${isScrolled
                ? "bg-primary hover:bg-primary/90"
                : "bg-white/10 hover:bg-white/20"
                }`}
            >
              <FileText className="w-4 h-4" />
              Download
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
          <>
            <div className="md:hidden pb-4 space-y-4 bg-white shadow-lg rounded-b-lg p-4 mb-4">
              <Link
                href="/"
                className="block uppercase font-mono transition-colors text-black hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block uppercase font-mono transition-colors text-black hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/business"
                className="block uppercase font-mono transition-colors text-black hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Business
              </Link>
              <Link
                href="/media"
                className="block uppercase font-mono transition-colors text-black hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Media
              </Link>
              <div className="block">
                <Link
                  href="/files/manual-book-aplikasi-cusol.pdf"
                  target="_blank"
                  className="flex items-center gap-2 uppercase font-mono transition-colors text-black hover:text-primary"
                >
                  <FileText className="w-4 h-4" />
                  Download Profil Perusahaan
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}

