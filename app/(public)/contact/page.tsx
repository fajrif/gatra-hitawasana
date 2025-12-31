"use client"

import type React from "react"
import { PageBanner } from "@/components/ui/page-banner"
import { AnimatedDiv } from "@/components/ui/animated-div"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { useState } from "react"

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
        description="Siap memulai proyek Anda atau memiliki pertanyaan? Kami senang mendengar dari Anda."
        breadcrumbs={[{ label: "Kontak" }]}
      />

      {/* Contact Section */}
      <section className="bg-black py-20 px-4">
        <AnimatedDiv id="contact-section" className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-light text-white mb-6">Informasi Kontak</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] backdrop-blur">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="text-white/70" size={20} />
                    </div>
                    <div>
                      <div className="text-white/50 text-sm mb-1">Email</div>
                      <a
                        href="mailto:admin@gatrahitawasana.com"
                        className="text-white font-light hover:text-white/80 transition-colors"
                      >
                        admin@gatrahitawasana.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] backdrop-blur">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="text-white/70" size={20} />
                    </div>
                    <div>
                      <div className="text-white/50 text-sm mb-1">Telepon</div>
                      <a href="tel:+622181993333" className="text-white font-light hover:text-white/80 transition-colors">
                        +62 21 8199 3333
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] backdrop-blur">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-white/70" size={20} />
                    </div>
                    <div>
                      <div className="text-white/50 text-sm mb-1">Kantor</div>
                      <p className="text-white font-light">Gedung Aditarina Lt.2 Jl. Bangka Raya Jakarta Selatan</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] backdrop-blur">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="text-white/60" size={20} />
                  <h3 className="text-white font-light">Jam Operasional</h3>
                </div>
                <p className="text-white/60 font-light text-sm leading-relaxed">
                  Senin - Jumat: 09:00 - 18:00 WIB
                  <br />
                  Sabtu - Minggu: Tutup
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] p-8 backdrop-blur">
              <h2 className="text-2xl font-light text-white mb-6">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-light text-white/70 mb-2">
                    Nama *
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder:text-white/40 font-light focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-light text-white/70 mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="email@perusahaan.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder:text-white/40 font-light focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-light text-white/70 mb-2">
                    Perusahaan
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Nama perusahaan Anda"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder:text-white/40 font-light focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-light text-white/70 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    placeholder="Ceritakan tentang proyek atau pertanyaan Anda..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder:text-white/40 font-light focus:outline-none focus:border-white/40 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white text-black font-light hover:bg-white/90 transition-colors"
                >
                  <Send size={18} />
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </AnimatedDiv>
      </section>

    </div>
  )
}
