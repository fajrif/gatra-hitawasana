import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Server, Network, HardDrive, Cpu } from "lucide-react"
import Link from "next/link"

export default function TelcoHardwarePage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl space-y-6 mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Telco & IT Hardware <span className="text-primary">Procurement</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Enterprise-grade hardware solutions from leading manufacturers. We handle procurement, deployment, and
              integration of telecommunications and IT infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Server className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Server Infrastructure</h3>
              <p className="text-muted-foreground leading-relaxed">
                High-performance servers for data centers, cloud infrastructure, and enterprise computing needs.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Network className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Network Equipment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Routers, switches, firewalls, and wireless solutions from top-tier networking vendors.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center mb-4">
                <HardDrive className="text-chart-2" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Storage Systems</h3>
              <p className="text-muted-foreground leading-relaxed">
                SAN, NAS, and cloud storage solutions for data backup, archival, and disaster recovery.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-lg bg-chart-4/10 flex items-center justify-center mb-4">
                <Cpu className="text-chart-4" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Telco Infrastructure</h3>
              <p className="text-muted-foreground leading-relaxed">
                Telecommunications equipment including PBX systems, VoIP, and unified communications.
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/10 via-background to-accent/5">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Need Hardware Solutions?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Contact us to discuss your infrastructure requirements
              </p>
              <Link href="/contact">
                <Button className="rounded-full">Get in Touch</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
