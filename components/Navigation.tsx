"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, FileText } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

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
        <div className={cn(
          "flex items-center justify-between transition-all duration-300",
          isScrolled ? "h-16" : "h-20"
        )}>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={isScrolled ? "/images/logo.png" : "/images/logo-white.png"}
              alt="PT Gatra Hita Wasana"
              width={180}
              height={50}
              className={cn(
                "w-auto transition-all duration-300",
                isScrolled ? "h-8 md:h-10" : "h-10 md:h-12"
              )}
              unoptimized
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={cn(
                      "uppercase transition-all font-medium text-sm px-3 py-2 rounded-md",
                      isScrolled
                        ? "text-black hover:text-primary hover:bg-black/5 focus:text-primary focus:bg-black/5"
                        : "text-white hover:text-white/80 hover:bg-white/10 focus:text-white/80 focus:bg-white/10"
                    )}
                  >
                    Beranda
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className={cn(
                      "uppercase transition-all font-medium text-sm px-3 py-2 rounded-md",
                      isScrolled
                        ? "text-black hover:text-primary hover:bg-black/5 focus:text-primary focus:bg-black/5"
                        : "text-white hover:text-white/80 hover:bg-white/10 focus:text-white/80 focus:bg-white/10"
                    )}
                  >
                    Tentang Kami
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "uppercase transition-all font-medium px-3 py-2 rounded-md bg-transparent",
                    isScrolled
                      ? "text-black hover:text-primary hover:bg-black/5 focus:text-primary focus:bg-black/5 data-[state=open]:bg-black/5"
                      : "text-white hover:text-white/80 hover:bg-white/10 focus:text-white/80 focus:bg-white/10 data-[state=open]:bg-white/10"
                  )}
                >
                  Layanan Bisnis
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-4">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/business/telco-infra#ruijie-section"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md relative overflow-hidden p-4 no-underline outline-none focus:shadow-md group"
                        >
                          {/* Background Image */}
                          <div className="absolute inset-0 z-0">
                            <Image
                              src="/images/ruijie-networks/ruijie-home-1.jpg"
                              alt="Ruijie Networks"
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                          </div>

                          {/* Content */}
                          <div className="relative z-10">
                            <div className="mb-1 mt-4">
                              {/* Ruijie Logo */}
                              <Image
                                src="/images/ruijie.svg"
                                alt="Ruijie Networks"
                                width={100}
                                height={40}
                              />
                            </div>
                            <p className="text-xs leading-tight text-white/90">
                              Partner resmi Ruijie Networks untuk solusi jaringan enterprise.
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/business/telco-infra" title="Telekomunikasi & IT Infrastruktur">
                      Pengadaan infrastruktur telekomunikasi dan IT enterprise-grade
                    </ListItem>
                    <ListItem href="/business/digital-solutions" title="Solusi Digital & Inovasi">
                      Pengembangan kustom perangkat lunak
                    </ListItem>
                    <ListItem href="/business/hr-management" title="Human Resource Management">
                      Kami menyediakan profesional terampil di berbagai bidang
                    </ListItem>
                    <ListItem href="/business/managed-service" title="Managed Service">
                      Layanan manajemen dan dukungan IT komprehensif
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/media"
                    className={cn(
                      "uppercase transition-all font-medium text-sm px-3 py-2 rounded-md",
                      isScrolled
                        ? "text-black hover:text-primary hover:bg-black/5 focus:text-primary focus:bg-black/5"
                        : "text-white hover:text-white/80 hover:bg-white/10 focus:text-white/80 focus:bg-white/10"
                    )}
                  >
                    Media
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden md:block">
            <Link
              href="/files/Company-Profile-PT-Gatra-Hita-Wasana-2025.pdf"
              target="_blank"
              className={cn(
                "flex items-center gap-2 rounded-sm border border-white/10 px-5 text-sm font-light text-white tracking-tight transition-all focus:outline-none duration-300 backdrop-blur-sm",
                isScrolled
                  ? "bg-primary hover:bg-primary/90 focus:bg-primary/90 py-2"
                  : "bg-white/10 hover:bg-white/20 focus:bg-white/20 py-3"
              )}
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
            <div className="md:hidden pb-4 space-y-3 font-mono bg-black text-white shadow-lg rounded-b-lg p-4 mb-4">
              <Link
                href="/"
                className="block uppercase transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </Link>
              <Link
                href="/about"
                className="block uppercase transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Tentang Kami
              </Link>

              {/* Layanan Bisnis Section */}
              <div className="space-y-2">
                <div className="uppercase font-semibold">
                  Layanan Bisnis
                </div>
                <div className="space-y-2 pl-4 border-l-2 border-[rgba(62,162,255,0.7)]">
                  <Link
                    href="/business/telco-infra"
                    className="block text-sm transition-colors text-white/80 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Telekomunikasi & IT Infrastruktur
                  </Link>
                  <Link
                    href="/business/digital-solutions"
                    className="block text-sm transition-colors text-white/80 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Solusi Digital & Inovasi
                  </Link>
                  <Link
                    href="/business/hr-management"
                    className="block text-sm transition-colors text-white/80 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Human Resource Management
                  </Link>
                  <Link
                    href="/business/managed-service"
                    className="block text-sm transition-colors text-white/80 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    Managed Service
                  </Link>
                </div>
              </div>

              <Link
                href="/media"
                className="block uppercase transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Media
              </Link>
              <Link
                href="/career"
                className="block uppercase transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Karir
              </Link>
              <Link
                href="/contact"
                className="block uppercase transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Kontak Kami
              </Link>
              <div className="block py-4 border-t border-gray-200">
                <Link
                  href="/files/Company-Profile-PT-Gatra-Hita-Wasana-2025.pdf"
                  target="_blank"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-primary"
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
