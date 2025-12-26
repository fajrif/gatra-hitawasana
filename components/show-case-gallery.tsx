
import { CheckCircle2, CircleDot } from "lucide-react"
import { BackedByICONPlus } from '@/components/ui/backed-by-icon-plus'
import { Gallery } from "@/components/gallery"

export function ShowCaseGallery() {
  const showcaseImages = [
    { src: "/images/show-cases/plncc123-sumbar/plncc123-sumbar-1.jpeg", alt: "PLN Contact Center 123 - Foto 1" },
    { src: "/images/show-cases/plncc123-sumbar/plncc123-sumbar-2.jpeg", alt: "PLN Contact Center 123 - Foto 2" },
    { src: "/images/show-cases/plncc123-sumbar/plncc123-sumbar-3.jpeg", alt: "PLN Contact Center 123 - Foto 3" },
    { src: "/images/show-cases/plncc123-sumbar/plncc123-sumbar-4.jpeg", alt: "PLN Contact Center 123 - Foto 4" },
    { src: "/images/show-cases/plncc123-sumbar/plncc123-sumbar-5.jpeg", alt: "PLN Contact Center 123 - Foto 5" },
    { src: "/images/show-cases/plncc123-sumbar/plncc123-sumbar-6.jpeg", alt: "PLN Contact Center 123 - Foto 6" },
    { src: "/images/show-cases/plncc123-sumbar/plncc123-sumbar-7.jpeg", alt: "PLN Contact Center 123 - Foto 7" },
    { src: "/images/show-cases/plncc123-sumbar/plncc123-sumbar-8.jpeg", alt: "PLN Contact Center 123 - Foto 8" },
  ]

  const showcaseScope = [
    "Pembangunan tempat termasuk Dekorasi Contact Center 123",
    "Pengembangan Aplikasi Monitoring Regu Gangguan yang terintegrasi dengan aplikasi lainnya (APKT & AP2T)",
    "Pengembangan Aplikasi Mobile untuk regu gangguan",
    "Penyediaan GPS tracking untuk regu gangguan",
    "Penyediaan SDM Call Center 123",
  ]

  const showcaseInfo = [
    {
      label: "Klien",
      value: "PT. PLN (Persero) Wilayah Sumatera Barat",
    },
    {
      label: "Tahun",
      value: "2019",
    },
    {
      label: "Modul Terintegrasi",
      value: "5",
    },
    {
      label: "Total Pekerja",
      value: "800+",
    },
  ]

  return (
  <>
    <div className="text-center mb-12">
      <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider mb-2">
        Show Case
      </p>
      <h2 className="text-3xl md:text-4xl font-extralight text-white mb-4 tracking-tight">
        Pembangunan dan Implementasi<br />
        <span className="text-white">Contact Center 123 PLN Sumatera Barat</span>
      </h2>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
      {/* Project Description */}
      <div className="space-y-6">
        <p className="text-white/70 font-light leading-relaxed">
          Pada proyek ini PT. Gatra Hita Wasana dipercaya oleh PLN Icon Plus untuk menyediakan seluruh infrastruktur
          sarana dan pra-sarana pada proyek pembangunan dan layanan PLN Contact Center 123 di Sumatera Barat.
        </p>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-white">Lingkup Pekerjaan:</h3>
          <ul className="space-y-3">
            {showcaseScope.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-muted-foreground font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-4 text-white">
        <BackedByICONPlus />
        <h3 className="text-lg font-medium text-white">Proyek Info:</h3>
        <ul className="space-y-3">
          {showcaseInfo.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CircleDot className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
              <span className="text-white font-medium">{item.label}:</span>
              <span className="text-muted-foreground">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Photo Gallery */}
    <div className="space-y-6">
      <Gallery images={showcaseImages} />
    </div>
  </>
  )
}
