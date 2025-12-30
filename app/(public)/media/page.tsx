import { PageBanner } from "@/components/ui/page-banner"
import { AnimatedDiv } from "@/components/ui/animated-div"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { format } from "date-fns"
import { id } from "date-fns/locale"

export default async function MediaPage() {
  // Fetch published articles from database
  const articles = await prisma.article.findMany({
    where: { status: "PUBLISHED" },
    include: {
      category: { select: { name: true } },
    },
    orderBy: { published_date: "desc" },
  })

  return (
    <div className="min-h-screen bg-black">
      {/* Banner Section */}
      <PageBanner
        title="Media & Insights"
        description="Tetap terinformasi dengan tren terbaru, best practices, dan insights dari dunia IT dan teknologi digital."
        breadcrumbs={[{ label: "Media" }]}
        badge={{ label: "Blog", text: "Terbaru" }}
      />

      {/* Articles Grid */}
      <section className="bg-black py-20 px-4">
        <AnimatedDiv id="articles-grid" className="container mx-auto max-w-6xl">
          {articles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article: typeof articles[0]) => (
                <Link key={article.id} href={`/media/${article.slug}`}>
                  <article className="group h-full rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] p-6 backdrop-blur hover:bg-[rgba(231,236,235,0.12)] transition-all duration-300">
                    <div className="flex flex-col h-full">
                      {/* Category Badge */}
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/60">
                          {article.category.name}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-light text-white mb-3 group-hover:text-white/80 transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/50 font-light text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                        {article.short_description}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-4 text-xs text-white/40">
                          <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            <span>
                              {article.published_date
                                ? format(new Date(article.published_date), "d MMM yyyy", { locale: id })
                                : ""}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={12} />
                            <span>5 min</span>
                          </div>
                        </div>
                        <ArrowRight size={16} className="text-white/40 group-hover:text-white/70 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-white/50 font-light text-lg">Belum ada artikel yang dipublikasikan.</p>
            </div>
          )}
        </AnimatedDiv>
      </section>

      {/* Subscribe/CTA Section */}
      <section className="bg-sk-sea-shade py-20 px-4">
        <AnimatedDiv id="subscribe-section" className="container mx-auto max-w-4xl text-center" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-extralight text-white mb-4 tracking-tight">
            Tetap Update
          </h2>
          <p className="text-white/60 font-light text-lg mb-8 max-w-xl mx-auto">
            Dapatkan insights terbaru tentang teknologi dan solusi digital langsung di inbox Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email Anda"
              className="flex-1 px-4 py-3 rounded-full border border-white/20 bg-white/5 text-white placeholder:text-white/40 font-light focus:outline-none focus:border-white/40 transition-colors"
            />
            <button className="px-6 py-3 rounded-full bg-white text-black font-light hover:bg-white/90 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </AnimatedDiv>
      </section>
    </div>
  )
}
