"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { AnimatedDiv } from "@/components/ui/animated-div"
import { PlayIcon } from "lucide-react"

export function RenewableEnergySection() {
  return (
    <section className="bg-black pt-16 md:pt-24 px-4">
      <AnimatedDiv className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Text */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
              GATRA ENERGI TERBARUKAN
            </h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                <strong>PT Gatra Hita Wasana</strong> memiliki solusi
                pengolahan sampah yang dapat dimanfaatkan untuk energi terbarukan melalui teknologi <strong className="text-white">Community-Based Waste to Energy (TOSS)</strong> dan{" "}
                <strong className="text-white">Distributed Hybrid Renewable Energy for Community Solutions (DHYRECS)</strong>.
              </p>
              <p>
                Saat ini solusi teknologi ini sudah digunakan di berbagai tempat baik di instansi pemerintah maupun swasta.
                Inisiatif ini dimulai dari Indonesia, negara kepulauan terbesar
                di dunia yang memiliki posisi strategis dalam mengurangi emisi
                gas rumah kaca, sekaligus menjadi hub industrialisasi global
                yang mencakup produksi, distribusi, dan konsumsi.
              </p>
            </div>
          </div>

          {/* Right: Image with Video Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="relative group w-full aspect-video rounded-xl overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                <Image
                  src="/images/hqdefault.jpg"
                  alt="Gatra Energi Terbarukan - Video"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <PlayIcon className="w-6 h-6 md:w-7 md:h-7 text-black ml-1" />
                  </div>
                </div>
              </button>
            </DialogTrigger>
            <DialogContent
              className="max-w-4xl w-[95vw] bg-black border-white/10 p-0 sm:p-0 overflow-hidden"
              showCloseButton
            >
              <div className="relative aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/ZPbbQB-ZWnw?autoplay=1"
                  title="Gatra Energi Terbarukan - Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </AnimatedDiv>
    </section>
  )
}
