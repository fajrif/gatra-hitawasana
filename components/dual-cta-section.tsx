import { BentoCard } from "@/components/ui/bento-card"
import TelcoInfraServices from "@/components/services/telco-infra"
import MediaCard from "@/components/cards/media-card"
import CareerCard from "@/components/cards/career-card"

export function DualCTASection() {
  const cards = [
    {
      title: "Jelajahi Layanan Kami",
      description: "Temukan solusi teknologi komprehensif untuk mendukung transformasi digital bisnis Anda.",
      link_href: "/business",
      Component: TelcoInfraServices,
    },
    {
      title: "Media & Insights dari dunia IT",
      description: "Temukan analisis, tren, dan wawasan terpercaya seputar dunia IT dan teknologi digital.",
      link_href: "/media",
      Component: MediaCard,
    },
    {
      title: "Bergabung Bersama Kami",
      description: "Kembangkan karir Anda bersama tim profesional kami yang berdedikasi tinggi.",
      link_href: "/career",
      Component: CareerCard,
    },
  ]

  return (
    <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-6 z-10">
      {cards.map((card) => (
        <BentoCard key={card.title} {...card} />
      ))}
    </div>
  )
}
