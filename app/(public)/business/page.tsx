import { PageBanner } from "@/components/ui/page-banner"
import { AnimatedDiv } from "@/components/ui/animated-div"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import TelcoInfraServices from "@/components/services/telco-infra"
import DigitalSolutionServices from "@/components/services/digital-solution"
import HumanResourceServices from "@/components/services/human-resources"
import ManagedServices from "@/components/services/managed-services"

export default function BusinessPage() {
  const cards = [
    {
      title: "Telekomunikasi & IT Infrastruktur",
      description: "Penyediaan perangkat telekomunikasi dan infrastruktur jaringan yang andal untuk mendukung konektivitas dan operasional bisnis secara optimal.",
      Component: TelcoInfraServices,
      link_href: "/business/telco-infra",
    },
    {
      title: "Solusi Digital & Inovasi",
      description: "Pengembangan aplikasi dan solusi digital yang inovatif untuk meningkatkan efisiensi, produktivitas, dan daya saing bisnis.",
      Component: DigitalSolutionServices,
      link_href: "/business/digital-solutions",
    },
    {
      title: "Human Resource Management",
      description: "Penyediaan dan pengelolaan SDM profesional yang kompeten dan siap mendukung kebutuhan bisnis Anda.",
      Component: HumanResourceServices,
      link_href: "/business/hr-management",
    },
    {
      title: "Managed Services",
      description: "Layanan pengelolaan infrastruktur IT profesional dengan monitoring 24/7, maintenance rutin, dan dukungan teknis berkelanjutan untuk menjaga sistem Anda tetap optimal.",
      Component: ManagedServices,
      link_href: "/business/managed-service",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Banner Section */}
      <PageBanner
        title="Layanan Bisnis Kami"
        description="Solusi IT komprehensif yang dirancang untuk memenuhi kebutuhan perusahaan modern. Dari infrastruktur hingga aplikasi, kami siap membantu."
        breadcrumbs={[{ label: "Layanan" }]}
        badge={{ label: "Enterprise", text: "Solutions" }}
      />

      {/* Services Grid */}
      <section id="features-section" className="bg-black">
        <AnimatedDiv id="features-section-div" className="relative z-10 max-w-[1320px] mx-auto" delay={0.3}>
          <ServicesSection cards={cards} hideTitle={true} hideAllButton={true} />
        </AnimatedDiv>
      </section>

      {/* Stats Section */}
      <StatsSection />
    </div>
  )
}
