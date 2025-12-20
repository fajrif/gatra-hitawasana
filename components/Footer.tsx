import Link from "next/link"
import { Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">GHW</span>
              </div>
              <span className="font-semibold">PT Gatra Hita Wasana</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner in IT solutions and digital innovation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about/career"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Media
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/business/telco-hardware"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Telco & IT Hardware
                </Link>
              </li>
              <li>
                <Link
                  href="/business/digital-solutions"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Digital Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/business/hr-management"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  HR Management
                </Link>
              </li>
              <li>
                <Link
                  href="/business/managed-service"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Managed Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} />
                <span>info@ghw.co.id</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} />
                <span>+62 21 xxxx xxxx</span>
              </li>
              <li className="flex items-center gap-2">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PT Gatra Hita Wasana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
