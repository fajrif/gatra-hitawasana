import { NeuralNetworkBackground } from "@/components/ui/neural-network-background"
import { AnimatedHeroContent } from "@/components/ui/animated-hero-content"
import { ClientsCloud } from "@/components/clients-cloud"
import { ClientPrimary } from "@/components/client-primary"
import { AnimatedDiv } from "@/components/ui/animated-div"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import TelcoInfraServices from "@/components/services/telco-infra"
import DigitalSolutionServices from "@/components/services/digital-solution"
import HumanResourceServices from "@/components/services/human-resources"
import ManagedServices from "@/components/services/managed-services"

export default function Home() {
  const cards = [
    {
      title: "Telekomunikasi & IT Infrastruktur",
      description: "Penyediaan perangkat telekomunikasi dan infrastruktur jaringan yang andal untuk mendukung konektivitas dan operasional bisnis secara optimal.",
      Component: TelcoInfraServices,
    },
    {
      title: "Solusi Digital & Inovasi",
      description: "Pengembangan aplikasi dan solusi digital yang inovatif untuk meningkatkan efisiensi, produktivitas, dan daya saing bisnis.",
      Component: DigitalSolutionServices,
    },
    {
      title: "Human Resource Management",
      description: "Penyediaan dan pengelolaan SDM profesional yang kompeten dan siap mendukung kebutuhan bisnis Anda.",
      Component: HumanResourceServices,
    },
    {
      title: "Managed Services",
      description: "Layanan pengelolaan infrastruktur IT profesional dengan monitoring 24/7, maintenance rutin, dan dukungan teknis berkelanjutan untuk menjaga sistem Anda tetap optimal.",
      Component: ManagedServices,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Neural Network Background */}
      <NeuralNetworkBackground
        colorScheme={{
          primary: '#011b41',    // Deep blue (brand)
          secondary: '#2775fd',  // Sky-blue
          accent: '#fdaed1'      // pink-500
        }}
        intensity={0.6}
      >
        <div className="relative h-screen w-screen overflow-hidden">
          <AnimatedHeroContent
            title="Mitra Terpercaya dalam Solusi Digital dan Inovasi"
            description="PT Gatra Hita Wasana menyediakan solusi teknologi informasi terkini untuk kebutuhan bisnis Anda. Dari infrastruktur IT hingga transformasi digital."
            badgeText="PT. Gatra Hita Wasana"
            ctaButtons={[
              { text: "Hubungi Kami", href: "/contact", primary: true },
              { text: "Lihat Layanan", href: "/business" }
            ]}
            microDetails={[
              "Solusi Profesional",
              "Tim Berpengalaman",
              "Dukungan 24/7"
            ]}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </NeuralNetworkBackground>

      {/* Clients Logo Cloud Section */}
      <section id="clients-section" className="bg-black text-white py-10 px-4">
        <AnimatedDiv id="clients-section-div" className="container mx-auto max-w-6xl" delay={0.1}>
          <ClientsCloud />
        </AnimatedDiv>
        <AnimatedDiv id="primary-clients-section-div" className="container mx-auto py-15" delay={0.2}>
          <ClientPrimary />
        </AnimatedDiv>
      </section>

      <section id="features-section" className="bg-sk-sea-shade">
        <AnimatedDiv id="features-section-div" className="relative z-10 max-w-[1320px] mx-auto" delay={0.3}>
          <ServicesSection cards={cards} />
        </AnimatedDiv>
      </section>

      {/* Stats Section */}
      <StatsSection />

    </div>
  )
}
