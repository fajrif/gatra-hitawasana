import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function CTASection() {
    return (
        <>
            {/* CTA Section */}
            < section className="bg-sk-sea-shade py-20 px-4" >
                <div className="container mx-auto max-w-4xl">
                    <Card className="p-12 bg-gradient-to-br from-primary/10 via-background to-accent/5 border-primary/20">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Business?</h2>
                            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                                Let's discuss how our IT solutions can help you achieve your goals
                            </p>
                            <div className="pt-4">
                                <Link href="/contact">
                                    <Button size="lg" className="rounded-full gap-2">
                                        Contact Our Team <ArrowRight size={16} />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Card>
                </div>
            </section >
        </>
    )
}