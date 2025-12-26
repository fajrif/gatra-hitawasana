import TelcoInfraServices from "./services/telco-infra"
import DigitalSolutionServices from "./services/digital-solution"
import HumanResourceServices from "./services/human-resources"
import ManagedServices from "./services/managed-services"
import { BentoCard } from "./ui/bento-card"
import { ShinyButton } from "./ui/shiny-button"

export function ServicesSection() {
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
  ]

  return (
    <div className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0 pointer-events-none" />
        <div className="self-stretch pb-8 md:pb-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-white text-3xl md:text-5xl font-extralight uppercase leading-tight md:leading-[66px]">
              Layanan Bisnis Teknologi
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-lg">
              Kami menghadirkan solusi `end-to-end` mulai dari penyediaan infrastruktur telekomunikasi dan jaringan, pengembangan aplikasi bisnis, hingga penyediaan tenaga ahli profesional.
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {cards.map((card) => (
            <BentoCard key={card.title} {...card} />
          ))}
        </div>

        {/* Full-width Managed Services Card */}
        <div className="self-stretch max-w-4xl mx-auto mt-6 z-10">
          <BentoCard
            title="Managed Services"
            description="Layanan pengelolaan infrastruktur IT profesional dengan monitoring 24/7, maintenance rutin, dan dukungan teknis berkelanjutan untuk menjaga sistem Anda tetap optimal."
            Component={ManagedServices}
          />
        </div>

        {/* CTA Button */}
        <div className="self-stretch flex justify-center items-center mt-8 z-10">
          <ShinyButton
            href="/business"
            className="text-muted-foreground hover:text-white rounded-2xl text-sm py-3"
            style={{
                '--shiny-cta-bg-subtle': 'rgba(120,252,214,0.24)',
                '--shiny-cta-highlight': '#78fcd6',
                '--shiny-cta-highlight-subtle': '#78f5d1'
            } as React.CSSProperties}
          >
            Lihat Layanan
          </ShinyButton>
        </div>
      </div>
    </div>
  )
}
