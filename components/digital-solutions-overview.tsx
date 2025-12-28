import { LottiePlayer } from '@/components/ui/lottie-player'

export function DigitalSolutionOverview() {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
                <div className="flex flex-col flex-1 gap-4">
                    <div className="flex gap-2 flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-extralight text-white uppercase mb-3">
                          Solusi Digital & Inovasi
                        </h2>
                        <p className="text-muted-foreground leading-relaxed tracking-tight mb-2">
                          Kami menghadirkan solusi digital dan inovasi teknologi yang dirancang khusus untuk menjawab kebutuhan perusahaan enterprise dalam menghadapi tantangan transformasi digital. Layanan kami mencakup pengembangan aplikasi web modern yang responsif dan berperforma tinggi, dibangun menggunakan teknologi terkini seperti <span className="font-semibold text-white">Next.js</span>, <span className="font-semibold text-white">React</span>, dan <span className="font-semibold text-white">TailwindCSS</span>, guna memastikan pengalaman pengguna yang optimal, aman, dan scalable di berbagai perangkat.
                        </p>
                        <p className="text-muted-foreground leading-relaxed tracking-tight">
                          Selain itu, kami mengembangkan aplikasi mobile native maupun cross-platform untuk <span className="font-semibold text-white">iOS</span> dan <span className="font-semibold text-white">Android</span> menggunakan <span className="font-semibold text-white">React Native</span>, memungkinkan perusahaan menjangkau pengguna secara lebih luas dengan efisiensi pengembangan tanpa mengorbankan kualitas dan stabilitas aplikasi. Untuk kebutuhan yang lebih kompleks, kami berpengalaman dalam membangun aplikasi enterprise berskala besar dengan logika bisnis yang kompleks, arsitektur terstruktur, serta integrasi sistem yang mendalam, baik dengan sistem internal, pihak ketiga, maupun platform legacy.
                        </p>
                    </div>
                </div>
                {/* Lottie Animation */}
                <div className="flex items-center justify-center pl-0 lg:pl-20 flex-1">
                    <LottiePlayer
                        animationPath="/lottie/computer_animation.json"
                        loop={true}
                        autoplay={true}
                        className="w-full max-w-md"
                    />
                </div>
            </div>
        </>
    )
}
