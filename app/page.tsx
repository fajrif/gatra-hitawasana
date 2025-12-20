import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Server, Code, Users, Settings } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5 -z-10" />
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
              IT Solutions that
              <span className="text-primary block mt-2">Transform Business</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              PT Gatra Hita Wasana delivers comprehensive IT infrastructure, digital solutions, and expert human
              resources to drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full gap-2">
                  Get Started <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/business">
                <Button size="lg" variant="outline" className="rounded-full bg-transparent">
                  Explore Services
                </Button>
              </Link>
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
      <section className="py-20 px-4">
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
