import Image from "next/image"
import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { AnimatedDiv } from "@/components/ui/animated-div"
import { ArrowRight } from "lucide-react"

export async function LatestNewsSection() {
  const article = await prisma.article.findUnique({
    where: { id: "0c85f77b-f9c7-4d3d-a989-bb672aff94ca" },
  })

  if (!article) return null

  return (
    <section className="bg-black py-16 md:py-24 px-4 border-t border-white/5">
      <AnimatedDiv className="container mx-auto max-w-6xl" delay={0.15}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Image */}
          {article.image && (
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Right: Text */}
          <div className="text-white space-y-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 mb-4">
                Berita Terbaru
              </span>
            </div>
            <h2 className="text-2xl font-bold leading-tight">
              {article.title}
            </h2>
            {article.short_description && (
              <p className="text-white/70 leading-relaxed">
                {article.short_description}
              </p>
            )}
            <Link
              href={`/media/${article.slug}`}
              className="inline-flex items-center gap-2 text-white font-medium hover:text-white/70 transition-colors group"
            >
              Baca Selengkapnya
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </AnimatedDiv>
    </section>
  )
}
