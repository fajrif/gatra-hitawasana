import Link from "next/link"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"
import { LinkedInLogo } from "@/components/ui/custom-icons"

export function Footer() {
  return (
    <footer className="relative font-mono bg-sk-sea-shade text-white overflow-hidden">
      {/* Background Wave SVG */}
      <Image
        src="/images/footer_wave_desktop.svg"
        alt="Footer background"
        width={2000}
        height={686}
        className="pointer-events-none absolute bottom-0 left-1/2 h-[686px] w-[2000px] max-w-none -translate-x-1/2 select-none"
        priority={false}
      />

      {/* Content */}
      <div className="flex flex-col justify-between relative container min-h-[500px] md:min-h-[620px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 lg:px-8 md:py-15 border-t border-sk-white-20 text-center md:text-left">
          <div>
            {/* Logo Image */}
            <div className="mb-4 flex flex-col items-center md:items-start">
              <Image
                src="/images/logo-white.png"
                alt="PT Gatra Hita Wasana"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="hidden md:block font-host-grotesk text-gray-300">
              Mitra terpercaya Anda dalam Solusi Digital dan Inovasi.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white uppercase">Perusahaan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Karir
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Media & Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Kontak Kami
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white uppercase">Layanan Bisnis</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/business/telco-infra"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Telekomunikasi & IT Infrastruktur
                </Link>
              </li>
              <li>
                <Link
                  href="/business/digital-solutions"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Solusi Digital & Inovasi
                </Link>
              </li>
              <li>
                <Link
                  href="/business/hr-management"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Human Resource Management
                </Link>
              </li>
              <li>
                <Link
                  href="/business/managed-service"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Managed Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white uppercase">Kontak Kami</h3>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <li>
                <a href="mailto:admin@gatrahitawasana.com" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                  <Mail size={16} />
                  <span>admin@gatrahitawasana.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone size={16} />
                <a href="tel:+6281110127970">
                  +62 811 1012 7970
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a href="https://www.linkedin.com/in/maratul-khoerul-ummah-s-h-895ab5261/" className="text-gray-300 hover:text-white transition-colors">
                  <LinkedInLogo width={30} height={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between border-t border-sk-white-20 py-6 text-xs md:text-sm text-white">
          <p className="text-center md:text-left">&copy; 2025 PT Gatra Hita Wasana. All rights reserved.</p>
          <p className="hidden md:block">PT Gatra Hita Wasana.</p>
        </div>
      </div>
    </footer>
  )
}
