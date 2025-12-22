import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Server, Code, Users, Settings } from "lucide-react"
import Link from "next/link"
import { NeuralNetworkBackground } from "@/components/ui/neural-network-background"
import { AnimatedHeroContent } from "@/components/ui/animated-hero-content"
import { LogoCloud } from "@/components/ui/logo-cloud"
import { BackedByICONPlus } from '@/components/ui/backed-by-icon-plus'
import { ShinyButton } from '@/components/ui/shiny-button'

const clientLogos = [
  { src: "/images/clients/icon-green-logo.png", alt: "Our Clients" },
  { src: "/images/clients/icon-plus-logo.png", alt: "Our Clients" },
  { src: "/images/clients/kai-logo.png", alt: "Our Clients" },
  { src: "/images/clients/kemensos-logo.png", alt: "Our Clients" },
  { src: "/images/clients/kominfo-logo.png", alt: "Our Clients" },
  { src: "/images/clients/pertamina-logo.png", alt: "Our Clients" },
  { src: "/images/clients/poltekkes-logo.png", alt: "Our Clients" },
]

export default function Home() {
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
            badgeText="Solar Cell Energy"
            badgeLabel="Terbaru"
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

      {/* Logo Cloud Section */}
      <section className="bg-black text-white py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-5 text-center font-medium text-xl tracking-tight md:text-2xl">
            <span className="text-muted-foreground">Kami Bermitra Dengan Beragam Perusahaan.</span>
            <br />
            <span className="font-semibold">Dipercaya Oleh Berbagai Institusi di Tanah Air.</span>
          </h2>
          <div className="mx-auto my-5 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

          <LogoCloud logos={clientLogos} />

          <div className="mt-5 h-px bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
        </div>
        <div className="container mx-auto py-15">
          <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
            <div className="bg-muted rounded-md w-full h-full flex-1">
              <img
                src="/images/pln-icon-plus-building.png"
                alt="PLN Icon Plus Head Office"
                className="w-full h-full grayscale hover:grayscale-50 transition-all duration-300 cursor-pointer object-cover rounded-md"
              />
            </div>
            <div className="flex gap-4 pl-0 lg:pl-20 flex-col flex-1">
              <div className="flex gap-2 flex-col">
                <BackedByICONPlus />
                <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left mb-3">
                  Mitra Utama Kami
                </h2>
                <p className="text-muted-foreground leading-relaxed tracking-tight text-left mb-2">
                  Sejak mulai berdiri 2003 sebagai badan hukum. PT. Gatra Hita Wasana telah bermitra dan melakukan kerjasama dengan banyak mitra baik perusahaan swasta dan perusahaan dalam negri salah satu nya adalah PT. Indonesia Comnets Plus sebagai salah satu perusahaan pengembang teknologi informasi terkemuka di Indonesia.
                </p>
                <p className="text-muted-foreground leading-relaxed tracking-tight text-left mb-4">
                  PLN Icon Plus merupakan Entitas Anak PT PLN (Persero) yang berfokus di bidang industri jaringan telekomunikasi serta penyedia Solusi Teknologi Informasi. Selama lebih dari dua dekade telah mengembangkan dan melayani berbagai macam kebutuhan serta pelayanan yang diberikan baik entitas induk perusahaan ( PT. PLN Persero ) dan dengan berbagai macam perusahaan lainnya.
                </p>
                <div>
                  <ShinyButton
                    href="/about"
                    className="text-muted-foreground hover:text-white rounded-2xl text-sm py-3"
                  >
                    Pelajari Lebih Lanjut
                  </ShinyButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              End-to-end IT solutions tailored to meet your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/business/telco-hardware">
              <Card className="p-8 hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Server className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Telco & IT Hardware Procurement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Enterprise-grade hardware solutions with seamless procurement and deployment services.
                </p>
                <div className="mt-4 flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={16} />
                </div>
              </Card>
            </Link>

            <Link href="/business/digital-solutions">
              <Card className="p-8 hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Code className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Digital Solutions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Custom web applications, mobile apps, and digital platforms built with modern technology.
                </p>
                <div className="mt-4 flex items-center gap-2 text-accent group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={16} />
                </div>
              </Card>
            </Link>

            <Link href="/business/hr-management">
              <Card className="p-8 hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center mb-4 group-hover:bg-chart-2/20 transition-colors">
                  <Users className="text-chart-2" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Human Resource Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Access top technical talent and expertise for your projects with our resource management.
                </p>
                <div className="mt-4 flex items-center gap-2 text-chart-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={16} />
                </div>
              </Card>
            </Link>

            <Link href="/business/managed-service">
              <Card className="p-8 hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-chart-4/10 flex items-center justify-center mb-4 group-hover:bg-chart-4/20 transition-colors">
                  <Settings className="text-chart-4" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Managed Service</h3>
                <p className="text-muted-foreground leading-relaxed">
                  24/7 infrastructure management and support to keep your systems running smoothly.
                </p>
                <div className="mt-4 flex items-center gap-2 text-chart-4 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={16} />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-sk-sea-shade py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 bg-gradient-to-br from-primary/10 via-background to-accent/5 border-primary/20">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Business?</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Let's discuss how our IT solutions can help you achieve your goals
              </p>
              <div className="pt-4">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full gap-2">
                    Contact Our Team <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
