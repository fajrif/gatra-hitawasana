import React from 'react';
import { Monitor, Smartphone, Database, Globe, Settings } from 'lucide-react';
import { KotlinLogo, SwiftLogo, ViteLogo, ReactLogo, VueLogo, KongLogo, RedisLogo, KafkaLogo } from '@/components/ui/custom-icons';
import { AnimationPath } from '@/components/ui/animation-path';
import AnimatedGlowingBox from '@/components/ui/animated-glowing-box';

export default function EventDrivenArchitecture() {
    return (
        <div className="md:p-6 md:rounded-xl md:border-2 md:border-white/10 md:bg-white/5">
            {/* Top Row: Web Client and Mobile App side by side on larger screens */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Web Client */}
                <AnimatedGlowingBox>
                    <div className="rounded-lg py-4 sm:py-6 px-3 sm:px-4 bg-black border-1 border-white/20 transition-all duration-300">
                        <div className="flex flex-col gap-2 sm:gap-3">
                            <div className="flex flex-row items-start gap-3 sm:gap-4">
                                <Monitor className="w-8 h-8 sm:w-10 sm:h-10 text-white/70 flex-shrink-0" strokeWidth={1} />
                                <div className="text-start flex-1">
                                    <h3 className="text-sm sm:text-base font-regular text-white">Web Client</h3>
                                    <p className="text-xs text-gray-400">Frontend Web Application</p>
                                </div>
                            </div>
                            {/* Tech Stack Container */}
                            <div className="flex flex-row justify-center items-center gap-2">
                                <ViteLogo width={20} height={20} className="opacity-70" />
                                <ReactLogo width={20} height={20} className="opacity-70" />
                                <VueLogo width={20} height={20} className="opacity-70" />
                            </div>
                        </div>
                    </div>
                </AnimatedGlowingBox>

                {/* Mobile App */}
                <AnimatedGlowingBox>
                    <div className="rounded-lg py-4 sm:py-6 px-3 sm:px-4 bg-black border-1 border-white/20 transition-all duration-300">
                        <div className="flex flex-col gap-2 sm:gap-3">
                            <div className="flex flex-row items-start gap-3 sm:gap-4">
                                <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-white/70 flex-shrink-0" strokeWidth={1} />
                                <div className="text-start flex-1">
                                    <h3 className="text-sm sm:text-base font-regular text-white">Mobile App</h3>
                                    <p className="text-xs text-gray-400">iOS / Android Application</p>
                                </div>
                            </div>
                            {/* Tech Stack Container */}
                            <div className="flex flex-row justify-center items-center gap-2">
                                <KotlinLogo width={20} height={20} className="opacity-70" />
                                <SwiftLogo width={20} height={20} className="opacity-70" />
                            </div>
                        </div>
                    </div>
                </AnimatedGlowingBox>
            </div>
            <AnimationPath lineCount={4} />
            {/* API Gateway */}
            <AnimatedGlowingBox>
                <div className="rounded-lg py-4 sm:py-6 px-3 sm:px-4 bg-black border-1 border-white/20 transition-all duration-300">
                    <div className="flex flex-row gap-2 sm:gap-3">
                        <div className="flex flex-row items-center md:items-start gap-3 sm:gap-4">
                            <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-white/70 flex-shrink-0" strokeWidth={1} />
                            <div className="text-start flex-1">
                                <h3 className="text-sm sm:text-base font-regular text-white">API Gateway</h3>
                                <p className="text-xs text-gray-400">Kong</p>
                            </div>
                        </div>
                        {/* Tech Stack Container */}
                        <div className="flex flex-row justify-center items-center gap-2 pl-4 sm:pl-14">
                            <KongLogo width={100} height={50} className="opacity-70" />
                        </div>
                    </div>
                </div>
            </AnimatedGlowingBox>
            <AnimationPath lineCount={4} animationDelay={4} flip={true} />
            {/* Microservices */}
            <div className="grid grid-cols-4 md:grid-cols-4 gap-2 md:gap-4">
                {/* Service 1 */}
                <AnimatedGlowingBox>
                    <div className="rounded-lg py-4 sm:py-6 px-3 sm:px-4 bg-black border-1 border-white/20 transition-all duration-300">
                        <div className="flex flex-col items-center gap-2 md:gap-3">
                            <Settings className="w-5 h-5 md:w-8 md:h-8 text-white/70 flex-shrink-0" strokeWidth={1} />
                            <div className="text-center flex-1">
                                <p className="text-[10px] md:text-xs text-gray-400 mb-1 leading-tight">Order Service</p>
                            </div>
                        </div>
                    </div>
                </AnimatedGlowingBox>

                {/* Service 2 */}
                <AnimatedGlowingBox>
                    <div className="rounded-lg py-4 sm:py-6 px-3 sm:px-4 bg-black border-1 border-white/20 transition-all duration-300">
                        <div className="flex flex-col items-center gap-2 md:gap-3">
                            <Settings className="w-5 h-5 md:w-8 md:h-8 text-white/70 flex-shrink-0" strokeWidth={1} />
                            <div className="text-center flex-1">
                                <p className="text-[10px] md:text-xs text-gray-400 mb-1 leading-tight">Payment Service</p>
                            </div>
                        </div>
                    </div>
                </AnimatedGlowingBox>

                {/* Service 3 */}
                <AnimatedGlowingBox>
                    <div className="rounded-lg py-4 sm:py-6 px-3 sm:px-4 bg-black border-1 border-white/20 transition-all duration-300">
                        <div className="flex flex-col items-center gap-2 md:gap-3">
                            <Settings className="w-5 h-5 md:w-8 md:h-8 text-white/70 flex-shrink-0" strokeWidth={1} />
                            <div className="text-center flex-1">
                                <p className="text-[10px] md:text-xs text-gray-400 mb-1 leading-tight">Shipping Service</p>
                            </div>
                        </div>
                    </div>
                </AnimatedGlowingBox>

                {/* Service 4 */}
                <AnimatedGlowingBox>
                    <div className="rounded-lg py-4 sm:py-6 px-3 sm:px-4 bg-black border-1 border-white/20 transition-all duration-300">
                        <div className="flex flex-col items-center gap-2 md:gap-3">
                            <Settings className="w-5 h-5 md:w-8 md:h-8 text-white/70 flex-shrink-0" strokeWidth={1} />
                            <div className="text-center flex-1">
                                <p className="text-[10px] md:text-xs text-gray-400 mb-1 leading-tight">Inventory Service</p>
                            </div>
                        </div>
                    </div>
                </AnimatedGlowingBox>
            </div>
            <AnimationPath lineCount={4} animationDelay={4} />
            {/* Data Store */}
            <AnimatedGlowingBox>
                <div className="rounded-lg py-4 sm:py-6 px-3 sm:px-4 bg-black border-1 border-white/20 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between">
                        {/* Database */}
                        <div className="flex flex-row items-start gap-3 sm:gap-4">
                            <Database className="w-6 h-6 sm:w-8 sm:h-8 text-white/70 flex-shrink-0" strokeWidth={1} />
                            <div className="text-start flex-1">
                                <h3 className="text-sm sm:text-base font-regular text-white">Database</h3>
                                <p className="text-xs text-gray-400">PostgreSQL / MongoDB / Cassandra</p>
                            </div>
                        </div>
                        {/* Message Broker */}
                        <div className="flex flex-row items-start gap-3 sm:gap-4">
                            <KafkaLogo width={24} height={30} className="w-6 h-7 sm:w-8 sm:h-10 opacity-70 flex-shrink-0" />
                            <div className="text-start flex-1">
                                <h3 className="text-sm sm:text-base font-regular text-white mb-1" style={{ lineHeight: '18px' }}>Message Broker</h3>
                                <p className="text-xs text-gray-400">Kafka</p>
                            </div>
                        </div>
                        {/* Cache */}
                        <div className="flex flex-row items-start gap-3 sm:gap-4">
                            <RedisLogo width={28} height={24} className="w-7 h-6 sm:w-8 sm:h-7 opacity-70 flex-shrink-0" />
                            <div className="text-start flex-1">
                                <h3 className="text-sm sm:text-base font-regular text-white">Cache</h3>
                                <p className="text-xs text-gray-400">Redis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedGlowingBox>
        </div>
    );
}
