import { PageBanner } from "@/components/ui/page-banner"
import { AnimatedDiv } from "@/components/ui/animated-div"
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { prisma } from "@/lib/prisma"

const employmentTypeLabels: Record<string, string> = {
  FULL_TIME: "Full-time",
  PART_TIME: "Part-time",
  CONTRACT: "Contract",
  INTERNSHIP: "Internship",
}

export default async function CareerPage() {
  // Fetch published careers from database
  const careers = await prisma.career.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { published_date: "desc" },
  })

  return (
    <div className="min-h-screen bg-black">
      {/* Banner Section */}
      <PageBanner
        title="Karir"
        description="Bergabunglah dengan tim dinamis yang membentuk masa depan solusi IT di Indonesia. Kami menawarkan benefit kompetitif, pembelajaran berkelanjutan, dan tantangan menarik."
        breadcrumbs={[{ label: "Karir" }]}
        badge={{ label: "Career", text: "Open Positions" }}
      />

      {/* Careers Grid */}
      <section className="bg-black py-20 px-4">
        <AnimatedDiv id="careers-grid" className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-light text-white mb-8">Posisi Terbuka</h2>
          {careers.length > 0 ? (
            <div className="space-y-4">
              {careers.map((career: typeof careers[0]) => (
                <Link key={career.id} href={`/career/${career.slug}`}>
                  <article className="group rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] p-6 backdrop-blur hover:bg-[rgba(231,236,235,0.12)] transition-all duration-300 mb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="space-y-3 flex-1">
                        <h3 className="text-xl font-light text-white group-hover:text-white/80 transition-colors">
                          {career.title}
                        </h3>
                        <p className="text-white/50 font-light text-sm leading-relaxed line-clamp-2">
                          {career.short_description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-xs text-white/40">
                          <div className="flex items-center gap-1">
                            <Briefcase size={14} />
                            <span>{career.department}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{career.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{employmentTypeLabels[career.employment_type]}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/70 text-sm font-light group-hover:bg-white/10 transition-all">
                          Lihat Detail
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)]">
              <p className="text-white/50 font-light text-lg">
                Belum ada posisi terbuka saat ini. Silakan cek kembali nanti!
              </p>
            </div>
          )}
        </AnimatedDiv>
      </section>

      {/* CTA Section */}
      <section className="bg-sk-sea-shade py-20 px-4">
        <AnimatedDiv id="career-cta-section" className="container mx-auto max-w-4xl text-center" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-extralight text-white mb-4 tracking-tight">
            Tidak Menemukan Posisi yang Cocok?
          </h2>
          <p className="text-white/60 font-light text-lg mb-8 max-w-xl mx-auto">
            Kirimkan CV Anda dan kami akan menghubungi Anda jika ada posisi yang sesuai dengan profil Anda
          </p>
          <a
            href="mailto:career@gatrahs.com"
            className="inline-flex px-6 py-3 rounded-full bg-white text-black font-light hover:bg-white/90 transition-colors"
          >
            Kirim CV
          </a>
        </AnimatedDiv>
      </section>
    </div>
  )
}
