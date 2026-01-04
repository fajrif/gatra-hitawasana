import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GradientCard } from "@/components/ui/gradient-card"

export function CTASection() {
    return (
        <>
            {/* CTA Section */}
            <section className="bg-sk-sea-shade py-20 px-4">
                <div className="container mx-auto max-w-4xl flex items-center justify-center">
                    <GradientCard
                        width="100%"
                        height="auto"
                        className="max-w-4xl"
                        gradientColors={{
                            primary: "rgba(255, 255, 255, 1)",
                            secondary: "rgba(20, 114, 254, 1)",
                            accent: "rgba(9, 111, 255, 0.85)",
                            borderGlow: "rgba(255, 255, 255, 1)"
                        }}
                    >
                        <div className="text-center space-y-6 flex flex-col items-center justify-center h-full p-0 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-medium text-white mb-3">
                                Siap Mendukung Transformasi Digital Perusahaan Anda
                            </h2>
                            <p className="text-base md:text-lg mx-auto text-muted-foreground mb-4">
                                Diskusikan kebutuhan IT Anda bersama tim profesional kami untuk merancang solusi yang sesuai dengan standar dan kebutuhan organisasi Anda.
                            </p>
                            <div className="pt-4">
                                <Link href="/contact">
                                    <Button size="lg"
                                        className="rounded-2xl gap-2 bg-white text-black hover:bg-gray-100 text-sm py-3 cursor-pointer"
                                    >
                                        Hubungi Tim Kami
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </GradientCard>
                </div>
            </section>
        </>
    )
}
