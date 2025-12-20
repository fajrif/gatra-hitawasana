import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Users, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              About <span className="text-primary">PT Gatra Hita Wasana</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              We are a leading IT solutions company committed to delivering innovative technology solutions that empower
              businesses to thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide comprehensive IT solutions and services that enable our clients to achieve their business
                objectives through innovative technology, expert resources, and reliable infrastructure.
              </p>
            </Card>

            <Card className="p-8">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <TrendingUp className="text-accent" size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted IT solutions partner in Indonesia, recognized for excellence in technology
                delivery, customer service, and innovation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Award className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                We strive for excellence in every solution we deliver
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                <Users className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Working together with clients to achieve shared success
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="text-chart-2" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Embracing cutting-edge technology to solve complex challenges
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            We're always looking for talented individuals to join our growing team
          </p>
          <Link href="/about/career">
            <Button size="lg" className="rounded-full">
              View Open Positions
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
