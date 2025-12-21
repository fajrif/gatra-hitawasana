import { Card } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { format } from "date-fns"

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
    <div className="min-h-screen">
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl space-y-6 mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Media & <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Stay informed with the latest trends, best practices, and insights from the world of IT and digital
              technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article: typeof articles[0]) => (
              <Link key={article.id} href={`/blog/${article.slug}`}>
                <Card className="p-6 h-full hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer group">
                  <div className="space-y-3">
                    <div className="text-xs font-medium text-primary">{article.category.name}</div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{article.short_description}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>
                          {article.published_date
                            ? format(new Date(article.published_date), "MMM d, yyyy")
                            : ""}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>5 min read</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
