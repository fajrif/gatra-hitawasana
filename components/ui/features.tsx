"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface FeaturesProps {
    features: {
        id: number;
        icon?: React.ElementType;
        title: string;
        description: string;
        image?: string;
        diagram?: React.ReactNode;
    }[];
    title?: string;
    subTitle?: string;
    primaryColor?: string;
}

export function Features({
    features,
    title,
    subTitle,
    primaryColor,
}: FeaturesProps) {
    const [currentFeature, setCurrentFeature] = useState(0);
    const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const activeFeatureElement = featureRefs.current[currentFeature];
        const container = containerRef.current;

        if (activeFeatureElement && container) {
            const containerRect = container.getBoundingClientRect();
            const elementRect = activeFeatureElement.getBoundingClientRect();

            container.scrollTo({
                left:
                    activeFeatureElement.offsetLeft -
                    (containerRect.width - elementRect.width) / 2,
                behavior: "smooth",
            });
        }
    }, [currentFeature]);

    const handleFeatureClick = (index: number) => {
        setCurrentFeature(index);
    };

    return (
        <div className="min-h-screen py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                {title && (
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        {subTitle && (
                            <p className="text-sm md:text-base text-muted-foreground font-medium uppercase">
                                {subTitle}
                            </p>
                        )}
                        <h2 className="text-2xl md:text-4xl font-medium uppercase text-white mt-4 mb-6">
                            {title}
                        </h2>
                    </div>
                )}
                <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 items-start">
                    {/* Left Side - Features List */}
                    <div
                        ref={containerRef}
                        className="lg:space-y-4 md:space-x-6 lg:space-x-0 overflow-x-auto overflow-hidden no-scrollbar lg:overflow-visible flex lg:flex lg:flex-col flex-row order-2 lg:order-1 py-8 scroll-smooth"
                    >
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            const isActive = currentFeature === index;

                            return (
                                <div
                                    key={feature.id}
                                    ref={(el) => {
                                        featureRefs.current[index] = el;
                                    }}
                                    className="relative cursor-pointer flex-shrink-0 w-full"
                                    onClick={() => handleFeatureClick(index)}
                                >
                                    {/* Feature Content */}
                                    <div
                                        className={`
                                            flex lg:flex-row flex-col items-start lg:space-x-4 space-x-0 p-4 md:p-6 w-full lg:max-w-2xl transition-all duration-300 rounded-lg border
                                            ${isActive
                                                ? "bg-sk-gold border-primary/20 shadow-lg"
                                                : "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20"
                                            }
                                        `}
                                    >
                                        {/* Icon */}
                                        {Icon && (
                                            <div
                                                className={`
                                                    p-3 hidden md:block rounded-lg transition-all duration-300
                                                    ${isActive
                                                        ? "bg-primary text-white"
                                                        : "bg-white/10 text-white/50"
                                                    }
                                                `}
                                            >
                                                <Icon size={24} />
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className="flex-1 w-full">
                                            <h3
                                                className={`
                                                    text-base md:text-lg lg:mt-0 font-semibold mb-2 transition-colors duration-300
                                                    ${isActive
                                                        ? "text-black"
                                                        : "text-white/60"
                                                    }
                                                `}
                                            >
                                                {feature.title}
                                            </h3>
                                            <p
                                                className={`
                                                    transition-colors duration-300 text-sm
                                                    ${isActive
                                                        ? "text-black/70"
                                                        : "text-white/40"
                                                    }
                                                `}
                                            >
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Side - Image Display */}
                    <div className="relative order-1 lg:order-2 w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentFeature}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="relative"
                            >
                                {features[currentFeature].diagram ? (
                                    <div className="rounded-lg shadow-xl bg-black p-3 sm:p-4 md:p-6 overflow-hidden">
                                        {features[currentFeature].diagram}
                                    </div>
                                ) : features[currentFeature].image ? (
                                    <Image
                                        className="rounded-2xl border border-primary/20 shadow-xl"
                                        src={features[currentFeature].image}
                                        alt={features[currentFeature].title}
                                        width={600}
                                        height={400}
                                    />
                                ) : null}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
