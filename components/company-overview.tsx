import { CompanyGrowthChart } from "@/components/ui/company-growth-chart"
import { ClientsCloud } from "@/components/clients-cloud"

export function CompanyOverview() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extralight text-white tracking-tight uppercase">
            Mitra Teknologi Terpercaya
          </h2>
          <p className="text-white/70 font-light leading-relaxed">
            PT Gatra Hita Wasana adalah perusahaan penyedia solusi teknologi informasi yang telah
            berpengalaman melayani berbagai perusahaan besar dan instansi pemerintahan di Indonesia.
          </p>
          <p className="text-white/70 font-light leading-relaxed">
            Dengan tim profesional yang berpengalaman dan didukung oleh kemitraan strategis dengan
            vendor teknologi terkemuka, kami siap membantu transformasi digital bisnis Anda.
          </p>
        </div>
        <CompanyGrowthChart />
      </div>
      {/* Clients Cloud */}
      <div className="container mx-auto max-w-6xl">
        <ClientsCloud title={false} />
      </div>
    </>
  )
}
