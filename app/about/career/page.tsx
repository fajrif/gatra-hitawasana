import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, MapPin, Clock } from "lucide-react"

const jobOpenings = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Jakarta",
    type: "Full-time",
    description: "Build scalable web applications using Next.js, React, and Node.js",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Jakarta",
    type: "Full-time",
    description: "Manage cloud infrastructure and CI/CD pipelines",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Jakarta / Remote",
    type: "Full-time",
    description: "Create beautiful and intuitive user experiences",
  },
  {
    title: "IT Project Manager",
    department: "Operations",
    location: "Jakarta",
    type: "Full-time",
    description: "Lead IT implementation projects and coordinate with clients",
  },
]

export default function CareerPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl space-y-6 mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Join Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Be part of a dynamic team that's shaping the future of IT solutions in Indonesia. We offer competitive
              benefits, continuous learning, and exciting challenges.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
            {jobOpenings.map((job, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-muted-foreground">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Briefcase size={16} />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="rounded-full md:self-start">Apply Now</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
