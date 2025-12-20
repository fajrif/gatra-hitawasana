import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[70vh]">
      <Image
        src="/images/hero.jpg"
        alt="Company Hero"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center">
        <div className="container mx-auto text-white">
          <h1 className="text-4xl font-bold">Solusi Terbaik untuk Bisnis Anda</h1>
        </div>
      </div>
    </section>
  );
}
