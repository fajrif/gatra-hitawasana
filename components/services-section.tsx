import TelcoInfraServices from "./services/telco-infra"
import DigitalSolutionServices from "./services/digital-solution"
import HumanResourceServices from "./services/human-resources"

const BentoCard = ({ title, description, Component }) => (
  <div className="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative">
    {/* Background with blur effect */}
    <div
      className="absolute inset-0 rounded-2xl"
      style={{
        background: "rgba(231, 236, 235, 0.08)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    />
    {/* Additional subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

    <div className="self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
        <p className="self-stretch text-white text-lg font-normal leading-7">
          {title} <br />
          <span className="text-muted-foreground">{description}</span>
        </p>
      </div>
    </div>
    <div className="self-stretch h-72 relative -mt-0.5 z-10">
      <Component />
    </div>
  </div>
)

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
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-white text-3xl md:text-5xl font-semibold leading-tight md:leading-[66px]">
              Layanan Bisnis Teknologi
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-lg font-medium">
              Kami menghadirkan solusi `end-to-end` mulai dari penyediaan infrastruktur telekomunikasi dan jaringan, pengembangan aplikasi bisnis, hingga penyediaan tenaga ahli profesional.
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {cards.map((card) => (
            <BentoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </div>
  )
}
