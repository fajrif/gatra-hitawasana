import React from 'react';
import { Monitor, Smartphone, Server, Database } from 'lucide-react';
import { KotlinLogo, SwiftLogo, ViteLogo, ReactLogo, VueLogo, NodejsLogo, GolangLogo, RailsLogo, PostgreSQLLogo, MariaDBLogo, MySQLLogo } from '@/components/ui/custom-icons';

export default function SmallScaleArchitecture() {
    return (
        <div className="space-y-4 sm:space-y-6">
            {/* Top Row: Web Client and Mobile App side by side on larger screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Web Client */}
                <div className="border-2 border-dashed border-blue-500/30 rounded-lg py-4 sm:py-6 px-3 sm:px-4 bg-transparent hover:bg-blue-500/10 transition-all duration-300">
                    <div className="flex flex-col gap-2 sm:gap-3">
                        <div className="flex flex-row items-start gap-3 sm:gap-4">
                            <Monitor className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500/50 flex-shrink-0" strokeWidth={1.5} />
                            <div className="text-start flex-1">
                                <h3 className="text-sm sm:text-base font-regular text-white">Web Client</h3>
                                <p className="text-xs text-gray-400">Frontend Web Application</p>
                            </div>
                        </div>
                        {/* Tech Stack Container */}
                        <div className="flex flex-row items-center gap-2 pl-0 sm:pl-14">
                            <ViteLogo width={20} height={20} className="opacity-70" />
                            <ReactLogo width={20} height={20} className="opacity-70" />
                            <VueLogo width={20} height={20} className="opacity-70" />
                        </div>
                    </div>
                </div>

                {/* Mobile App */}
                <div className="border-2 border-dashed border-green-500/30 rounded-lg py-4 sm:py-6 px-3 sm:px-4 bg-transparent hover:bg-green-500/10 transition-all duration-300">
                    <div className="flex flex-col gap-2 sm:gap-3">
                        <div className="flex flex-row items-start gap-3 sm:gap-4">
                            <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-green-500/50 flex-shrink-0" strokeWidth={1.5} />
                            <div className="text-start flex-1">
                                <h3 className="text-sm sm:text-base font-regular text-white">Mobile App</h3>
                                <p className="text-xs text-gray-400">iOS / Android Application</p>
                            </div>
                        </div>
                        {/* Tech Stack Container */}
                        <div className="flex flex-row items-center gap-2 pl-0 sm:pl-14">
                            <KotlinLogo width={20} height={20} className="opacity-70" />
                            <SwiftLogo width={20} height={20} className="opacity-70" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Backend API */}
            <div className="border-2 border-dashed border-purple-500/30 rounded-lg py-4 sm:py-6 px-3 sm:px-4 bg-transparent hover:bg-purple-500/10 transition-all duration-300">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <div className="flex flex-row items-start gap-3 sm:gap-4">
                        <Server className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500/50 flex-shrink-0" strokeWidth={1.5} />
                        <div className="text-start flex-1">
                            <h3 className="text-sm sm:text-base font-regular text-white">Backend API</h3>
                            <p className="text-xs text-gray-400">Node.js / Golang / Ruby on Rails</p>
                        </div>
                    </div>
                    {/* Tech Stack Container */}
                    <div className="flex flex-row items-center gap-2 pl-0 sm:pl-14">
                        <NodejsLogo width={24} height={24} className="opacity-70" />
                        <GolangLogo width={32} height={32} className="opacity-70 sm:w-10 sm:h-10" />
                        <RailsLogo width={32} height={32} className="opacity-70 sm:w-10 sm:h-10" />
                    </div>
                </div>
            </div>

            {/* Database */}
            <div className="border-2 border-dashed border-orange-500/30 rounded-lg py-4 sm:py-6 px-3 sm:px-4 bg-transparent hover:bg-orange-500/10 transition-all duration-300">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <div className="flex flex-row items-start gap-3 sm:gap-4">
                        <Database className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500/50 flex-shrink-0" strokeWidth={1.5} />
                        <div className="text-start flex-1">
                            <h3 className="text-sm sm:text-base font-regular text-white">Database</h3>
                            <p className="text-xs text-gray-400">PostgreSQL / MySQL</p>
                        </div>
                    </div>
                    {/* Tech Stack Container */}
                    <div className="flex flex-row items-center gap-2 sm:gap-4 pl-0 sm:pl-14">
                        <PostgreSQLLogo width={32} height={32} className="opacity-70 sm:w-10 sm:h-10" />
                        <MySQLLogo width={48} height={32} className="opacity-70 sm:w-[60px] sm:h-10" />
                        <MariaDBLogo width={32} height={32} className="opacity-70 sm:w-10 sm:h-10" />
                    </div>
                </div>
            </div>
        </div>
    );
}
