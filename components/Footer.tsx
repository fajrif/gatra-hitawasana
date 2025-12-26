import Link from "next/link"
import Image from "next/image"
import { Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-sk-sea-shade text-white overflow-hidden">
      {/* Background Wave SVG */}
      <Image
        src="/images/footer_wave_desktop.svg"
        alt="Footer background"
        width={2000}
        height={686}
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-[686px] w-[2000px] max-w-none -translate-x-1/2 select-none md:block"
        priority={false}
      />

      {/* Content */}
      <div className="flex flex-col justify-between relative container min-h-[620px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:px-8 py-15 border-t border-sk-white-20">
          <div>
            {/* Logo Image */}
            <div className="mb-4">
              <Image
                src="/images/logo-white.png"
                alt="PT Gatra Hita Wasana"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300">
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
                  Media & Wawasan
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
                  Manajemen Sumber Daya Manusia
                </Link>
              </li>
              <li>
                <Link
                  href="/business/managed-service"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Penyedia Layanan Terkelola
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white uppercase">Kontak Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail size={16} />
                <span>admin@gatrahitawasana.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone size={16} />
                <span>+62 21 8199 3333</span>
              </li>
              <li className="flex items-center gap-2">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between border-t border-sk-white-20 py-6 text-sm text-white">
          <p>&copy; 2025 PT Gatra Hita Wasana. All rights reserved.</p>
          <p>PT Gatra Hita Wasana.</p>
        </div>
      </div>
    </footer>
  )
}
