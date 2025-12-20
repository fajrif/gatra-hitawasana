import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Code2, Network, Wrench } from "lucide-react"
import Link from "next/link"

export default function HRManagementPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl space-y-6 mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Human Resource <span className="text-primary">Management</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Access to top-tier technical talent for your projects. We provide skilled professionals across various IT
              disciplines to augment your team or deliver complete solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code2 className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Software Developers</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Full-stack, frontend, and backend developers proficient in modern frameworks.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Next.js / React developers</li>
                <li>• Node.js engineers</li>
                <li>• Mobile app developers</li>
                <li>• Database specialists</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Network className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Infrastructure Experts</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                System administrators and network engineers for infrastructure management.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Linux/Windows administrators</li>
                <li>• Network engineers</li>
                <li>• DevOps specialists</li>
                <li>• Security experts</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center mb-4">
                <Users className="text-chart-2" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Project Managers</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Experienced IT project managers to lead your technology initiatives.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Agile/Scrum masters</li>
                <li>• Technical project managers</li>
                <li>• Business analysts</li>
                <li>• Product owners</li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-lg bg-chart-4/10 flex items-center justify-center mb-4">
                <Wrench className="text-chart-4" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Technical Support</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Help desk and technical support professionals for end-user assistance.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• IT support specialists</li>
                <li>• Help desk technicians</li>
                <li>• Technical trainers</li>
                <li>• Documentation specialists</li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/10 via-background to-accent/5">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Need Technical Resources?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Tell us about your requirements and we'll match you with the right talent
              </p>
              <Link href="/contact">
                <Button className="rounded-full">Request Resources</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
