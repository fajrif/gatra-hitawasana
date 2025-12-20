import { Card } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    title: "The Future of Cloud Computing in Indonesia",
    excerpt: "Exploring the trends and opportunities in cloud adoption across Indonesian enterprises.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Cloud Technology",
  },
  {
    title: "Building Scalable Web Applications with Next.js",
    excerpt: "A comprehensive guide to developing modern, performant web applications using Next.js framework.",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Development",
  },
  {
    title: "IT Infrastructure Best Practices for Growing Businesses",
    excerpt: "Key considerations for businesses looking to scale their IT infrastructure effectively.",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Infrastructure",
  },
  {
    title: "Cybersecurity Essentials for Modern Enterprises",
    excerpt: "Understanding the critical security measures every business needs to implement.",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "Security",
  },
  {
    title: "Digital Transformation: Where to Start",
    excerpt: "A practical roadmap for companies beginning their digital transformation journey.",
    date: "2023-12-20",
    readTime: "6 min read",
    category: "Digital Strategy",
  },
  {
    title: "Managed Services vs In-House IT: Making the Right Choice",
    excerpt: "Comparing the benefits and considerations of managed services versus maintaining an in-house IT team.",
    date: "2023-12-15",
    readTime: "5 min read",
    category: "IT Management",
  },
]

export default function MediaPage() {
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
            {articles.map((article, index) => (
              <Link key={index} href={`/media/${index + 1}`}>
                <Card className="p-6 h-full hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer group">
                  <div className="space-y-3">
                    <div className="text-xs font-medium text-primary">{article.category}</div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>
                          {new Date(article.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
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
