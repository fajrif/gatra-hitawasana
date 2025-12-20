import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Clock, TrendingUp, Headphones } from "lucide-react"
import Link from "next/link"

export default function ManagedServicePage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl space-y-6 mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Managed <span className="text-primary">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Comprehensive IT management and support services to keep your systems running at peak performance. Focus
              on your business while we handle the technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Monitoring</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Round-the-clock infrastructure monitoring to detect and resolve issues proactively.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Server performance monitoring</li>
                <li>• Network uptime tracking</li>
                <li>• Application health checks</li>
                <li>• Automated alert systems</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Shield className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Security Management</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Comprehensive security services to protect your infrastructure and data.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Firewall management</li>
                <li>• Patch management</li>
                <li>• Security audits</li>
                <li>• Threat detection & response</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center mb-4">
                <TrendingUp className="text-chart-2" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Continuous optimization to ensure your systems deliver peak performance.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Capacity planning</li>
                <li>• Performance tuning</li>
                <li>• Resource optimization</li>
                <li>• Scalability planning</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-lg bg-chart-4/10 flex items-center justify-center mb-4">
                <Headphones className="text-chart-4" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Technical Support</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Expert support when you need it, with guaranteed response times.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Incident response</li>
                <li>• Problem resolution</li>
                <li>• Change management</li>
                <li>• Documentation & reporting</li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/10 via-background to-accent/5 mb-12">
            <h2 className="text-2xl font-bold mb-6">Service Level Agreements</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-sm text-muted-foreground">Uptime Guarantee</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">&lt;15min</div>
                <p className="text-sm text-muted-foreground">Response Time</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-chart-2 mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Support Coverage</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary/10 via-background to-accent/5">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Let Us Manage Your IT</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Contact us to learn more about our managed service packages
              </p>
              <Link href="/contact">
                <Button className="rounded-full">Get Started</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
