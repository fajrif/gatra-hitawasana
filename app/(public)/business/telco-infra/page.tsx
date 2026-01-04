import { PageBanner } from "@/components/ui/page-banner"
import { AnimatedDiv } from "@/components/ui/animated-div"
import { Shield, ShieldCheck, Zap, PlugZap } from "lucide-react"
import VendorLogo from "@/components/vendor-logo"
import { RuijieSection } from "@/components/ruijie-section"
import { InfrastructureSection } from "@/components/infrastructure-section"
import { WhyChooseUs } from "@/components/why-choose-us"

export default function TelcoInfraPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Banner Section */}
      <PageBanner
        title="Telekomunikasi & IT Infrastruktur"
        description="Solusi perangkat keras enterprise-grade dari produsen terkemuka. Kami menangani pengadaan perangkat, installasi, serta integrasi infrastruktur telekomunikasi dan Teknologi Informasi."
        breadcrumbs={[
          { label: "Layanan", href: "/business" },
          { label: "Telco & IT Infrastruktur" }
        ]}
        badge={{ label: "Enterprise", text: "Hardware" }}
      />

      <VendorLogo />

      {/* Ruijie Section */}
      <section id="ruijie-section" className="bg-black text-white px-4">
        <AnimatedDiv id="ruijie-section-div" className="container mx-auto w-full max-w-6xl pb-15" delay={0.1}>
          <RuijieSection />
        </AnimatedDiv>
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure-section" className="bg-black text-white px-4">
        <AnimatedDiv id="infrastructure-section-div" className="container mx-auto w-full max-w-6xl pb-15" delay={0.2}>
          <InfrastructureSection />
        </AnimatedDiv>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

    </div>
  )
}
