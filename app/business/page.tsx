import { Card } from "@/components/ui/card"
import { Server, Code, Users, Settings, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Server,
    title: "Telco & IT Hardware Procurement",
    description:
      "Comprehensive hardware solutions from leading vendors, including servers, networking equipment, storage systems, and telecommunications infrastructure.",
    href: "/business/telco-hardware",
    color: "primary",
  },
  {
    icon: Code,
    title: "Digital Solutions",
    description:
      "Custom software development including web applications, mobile apps, and enterprise systems built with modern frameworks like Next.js, React, and React Native.",
    href: "/business/digital-solutions",
    color: "accent",
  },
  {
    icon: Users,
    title: "Human Resource Management",
    description:
      "Access to skilled technical professionals including developers, system administrators, network engineers, and IT consultants for your projects.",
    href: "/business/hr-management",
    color: "chart-2",
  },
  {
    icon: Settings,
    title: "Managed Service",
    description:
      "24/7 monitoring, maintenance, and support for your IT infrastructure, ensuring optimal performance and minimal downtime.",
    href: "/business/managed-service",
    color: "chart-4",
  },
]

export default function BusinessPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl space-y-6 mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Our <span className="text-primary">Business Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Comprehensive IT solutions designed to meet the evolving needs of modern enterprises. From infrastructure
              to applications, we've got you covered.
            </p>
          </div>

          <div className="grid gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link key={index} href={service.href}>
                  <Card className="p-8 hover:shadow-xl transition-all hover:scale-[1.01] cursor-pointer group">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div
                        className={`w-16 h-16 rounded-xl bg-${service.color}/10 flex items-center justify-center shrink-0 group-hover:bg-${service.color}/20 transition-colors`}
                      >
                        <Icon className={`text-${service.color}`} size={32} />
                      </div>
                      <div className="flex-1 space-y-3">
                        <h2 className="text-2xl font-bold">{service.title}</h2>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                        <div
                          className={`flex items-center gap-2 text-${service.color} group-hover:gap-3 transition-all pt-2`}
                        >
                          Learn more <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
