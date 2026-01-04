"use client"

import type React from "react"
import { PageBanner } from "@/components/ui/page-banner"
import { AnimatedDiv } from "@/components/ui/animated-div"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { StatsSection } from "@/components/stats-section"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Banner Section */}
      <PageBanner
        title="Hubungi Kami"
        description="Siap memulai proyek Anda atau memiliki pertanyaan? Silahkan mengirimkan pesan singkat anda atau hubungi Kami di email dan nomor tujuan, Kami sangat senang mendengar dari Anda."
        breadcrumbs={[{ label: "Kontak Kami" }]}
        className="pb-0 md:pb-16"
      />

      {/* Contact Section */}
      <section className="relative pt-10 pb-20 px-4 overflow-hidden">
        {/* Base black gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(180deg, #000000 0%, #0e131f 100%)"
          }}
        />

        {/* Blue glow at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-2/3 z-10"
          style={{
            background: `
              radial-gradient(ellipse at bottom right, rgba(255, 255, 255, 0.7) -10%, transparent 70%),
              radial-gradient(ellipse at bottom left, rgba(20, 114, 254, 0.7) -10%, transparent 70%)
            `,
            filter: "blur(40px)"
          }}
        />

        {/* Central blue glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-2/3 z-11"
          style={{
            background: "radial-gradient(circle at bottom center, rgba(9, 111, 255, 0.5) -20%, transparent 60%)",
            filter: "blur(45px)"
          }}
        />

        {/* Bottom border glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px] z-13"
          style={{
            background: "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.8) 100%)",
            boxShadow: "0 0 15px 3px rgb(238 238 238 / 80%), 0 0 25px 5px rgb(156 167 182 / 60%), 0 0 35px 7px rgba(56, 189, 248, 0.4)"
          }}
        />

        <AnimatedDiv id="contact-section" className="container mx-auto max-w-6xl relative z-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-medium text-white mb-6">Informasi Kontak</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl border border-white/20 bg-[rgba(231,236,235,0.08)] backdrop-blur hover:border-white/50">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="text-white/70" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm mb-1">Email</div>
                      <a
                        href="mailto:admin@gatrahitawasana.com"
                        className="text-white/80 font-light hover:text-white/80 transition-colors"
                      >
                        admin@gatrahitawasana.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl border border-white/20 bg-[rgba(231,236,235,0.08)] backdrop-blur hover:border-white/50">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="text-white/70" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm mb-1">Telepon</div>
                      <a href="tel:+6281110127970" className="text-white/80 font-light hover:text-white/80 transition-colors">
                        +62 811 1012 7970
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl border border-white/20 bg-[rgba(231,236,235,0.08)] backdrop-blur hover:border-white/50">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-white/70" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-medium mb-1">Kantor</div>
                      <p className="text-white/80 font-light">
                        Gedung Aditarina Lt.2
                        <br />
                        Jl. Bangka Raya No.33A, Pela Mampang
                        <br />
                        Mampang Prapatan, Jakarta Selatan
                        <br />
                        12720
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl border border-white/20 bg-[rgba(231,236,235,0.08)] backdrop-blur hover:border-white/50">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Clock className="text-white/60" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm mb-1">Jam Operasional</div>
                      <p className="text-white/80 font-light">
                        Senin - Jumat: 09:00 - 18:00 WIB
                        <br />
                        Sabtu - Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              className="rounded-xl border border-white/20 bg-[#e7eceb2b] py-8 px-4 md:px-8 backdrop-blur hover:border-white/50 hover:bg-[#e7eceb33]"
              whileHover={{ y: -8 }}
              whileFocus={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h2 className="text-2xl font-medium text-white mb-6">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    id="name"
                    type="text"
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder:text-white/80 font-light focus:outline-none focus:border-white/50 hover:border-white/50 transition-colors"
                  />
                </div>

                <div>
                  <input
                    id="email"
                    type="email"
                    placeholder="email@perusahaan.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder:text-white/80 font-light focus:outline-none focus:border-white/50 hover:border-white/50 transition-colors"
                  />
                </div>

                <div>
                  <input
                    id="company"
                    type="text"
                    placeholder="Nama perusahaan Anda"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder:text-white/80 font-light focus:outline-none focus:border-white/50 hover:border-white/50 transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    placeholder="Ceritakan tentang proyek atau pertanyaan Anda..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder:text-white/80 font-light focus:outline-none focus:border-white/50 hover:border-white/50 transition-colors resize-none"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 px-6 has-[>svg]:px-4 rounded-2xl gap-2 bg-white text-black hover:bg-gray-100 text-sm py-3 cursor-pointer"
                  >
                    Kirim Pesan
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </AnimatedDiv>
      </section>

      <StatsSection darkMode={true} />

    </div>
  )
}
