import Image from "next/image"

export function MissionVisionDirectors() {
  return (
    <>
      {/* Message from Directors */}
      <div className="text-center mb-12">
        <p className="text-sm md:text-base text-muted font-medium uppercase">
          Pesan Dari Direksi
        </p>
      </div>
      <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-center mb-10">
        {/* Director Photo */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-2 border-white/20">
              <Image
                src="/images/umar.jpg"
                alt="Umar Salim Balbeid - Direktur Utama"
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
          </div>
        </div>
        {/* Quote */}
        <div className="space-y-6">
          <blockquote className="relative pl-4 md:pl-0 border-l-2 md:border-l-0 border-[rgba(237,30,38,1)]">
            <p className="text-xl font-light leading-relaxed">
              &ldquo;Kami percaya bahwa teknologi adalah kunci untuk membuka potensi bisnis yang tak terbatas.
              Dengan dedikasi dan inovasi, kami berkomitmen untuk menjadi mitra terpercaya dalam
              perjalanan transformasi digital Anda.&rdquo;
            </p>
          </blockquote>
          <div className="pt-4 pl-4 md:pl-0">
            <p className="text-xl font-medium">Umar Salim Balbeid, BBS</p>
            <p className="text-sm text-gray-500">Direktur Utama</p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="text-center mb-12">
        <p className="text-sm md:text-base text-muted font-medium uppercase">
          Visi & Misi Perusahaan
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-center">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 leading-tight uppercase mb-2">
            Visi
          </h3>
          <p>
            Menjadi mitra solusi IT paling terpercaya di Indonesia, diakui atas keunggulan dalam
            penyampaian teknologi, pelayanan pelanggan, dan inovasi berkelanjutan.
          </p>
        </div>
        <div className="hidden md:block w-px h-24 bg-gray-300" />
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 leading-tight uppercase mb-2">
            Misi
          </h3>
          <p>
            Menyediakan solusi dan layanan IT komprehensif yang memungkinkan klien kami mencapai
            tujuan bisnis melalui teknologi inovatif, sumber daya ahli, dan infrastruktur yang andal.
          </p>
        </div>
      </div>
    </>
  )
}
