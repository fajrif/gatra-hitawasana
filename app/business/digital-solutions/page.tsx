import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Database, Cloud } from "lucide-react"
import Link from "next/link"

export default function DigitalSolutionsPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl space-y-6 mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Digital <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Custom software development that transforms your business. We build scalable web applications, mobile
              apps, and enterprise systems using cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Web Applications</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Modern, responsive web applications built with Next.js, React, and TailwindCSS for optimal performance.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• E-commerce platforms</li>
                <li>• Business management systems</li>
                <li>• Customer portals</li>
                <li>• Content management systems</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Smartphone className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile Applications</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Native and cross-platform mobile apps for iOS and Android using React Native.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Consumer apps</li>
                <li>• Enterprise mobile solutions</li>
                <li>• Field service applications</li>
                <li>• IoT companion apps</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center mb-4">
                <Database className="text-chart-2" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Systems</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Large-scale enterprise applications with complex business logic and integrations.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• ERP systems</li>
                <li>• CRM platforms</li>
                <li>• Workflow automation</li>
                <li>• Data analytics dashboards</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-lg bg-chart-4/10 flex items-center justify-center mb-4">
                <Cloud className="text-chart-4" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud Solutions</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cloud-native applications and migration services for scalability and reliability.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Cloud architecture design</li>
                <li>• Application migration</li>
                <li>• Serverless applications</li>
                <li>• API development</li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/10 via-background to-accent/5">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Ready to Build Your Solution?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Let's discuss your project and bring your ideas to life
              </p>
              <Link href="/contact">
                <Button className="rounded-full">Start a Project</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
