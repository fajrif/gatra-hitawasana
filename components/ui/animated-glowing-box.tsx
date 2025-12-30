'use client';

import React, { useState, useEffect } from 'react';

interface AnimatedGlowingBoxProps {
    children: React.ReactNode;
    className?: string;
}

const AnimatedGlowingBox: React.FC<AnimatedGlowingBoxProps> = ({
    children,
    className = '',
}) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className={className}>{children}</div>;
    }

    return (
        <div className="relative isolate">
            <div className="relative group">
                {/* Glow Layer 1 */}
                <div className="absolute z-0 overflow-hidden h-full w-full rounded-xl blur-[3px] 
                                before:absolute before:content-[''] before:z-0 before:w-[999px] before:h-[999px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[60deg]
                                before:bg-[conic-gradient(#000,#402fb5_5%,#000_38%,#000_50%,#cf30aa_60%,#000_87%)] before:transition-all before:duration-2000
                                group-hover:before:rotate-[-120deg]">
                </div>
                {/* Glow Layer 2 */}
                <div className="absolute z-0 overflow-hidden h-full w-full rounded-xl blur-[3px] 
                                before:absolute before:content-[''] before:z-0 before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[82deg]
                                before:bg-[conic-gradient(rgba(0,0,0,0),#18116a,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%,#6e1b60,rgba(0,0,0,0)_60%)] before:transition-all before:duration-2000
                                group-hover:before:rotate-[-98deg]">
                </div>
                {/* Glow Layer 3 */}
                <div className="absolute z-0 overflow-hidden h-full w-full rounded-xl blur-[3px] 
                                before:absolute before:content-[''] before:z-0 before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[82deg]
                                before:bg-[conic-gradient(rgba(0,0,0,0),#18116a,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%,#6e1b60,rgba(0,0,0,0)_60%)] before:transition-all before:duration-2000
                                group-hover:before:rotate-[-98deg]">
                </div>
                {/* Glow Layer 4 */}
                <div className="absolute z-0 overflow-hidden h-full w-full rounded-xl blur-[3px] 
                                before:absolute before:content-[''] before:z-0 before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[82deg]
                                before:bg-[conic-gradient(rgba(0,0,0,0),#18116a,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%,#6e1b60,rgba(0,0,0,0)_60%)] before:transition-all before:duration-2000
                                group-hover:before:rotate-[-98deg]">
                </div>
                {/* Glow Layer 5 */}
                <div className="absolute z-0 overflow-hidden h-full w-full rounded-lg blur-[2px] 
                                before:absolute before:content-[''] before:z-0 before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[83deg]
                                before:bg-[conic-gradient(rgba(0,0,0,0)_0%,#a099d8,rgba(0,0,0,0)_8%,rgba(0,0,0,0)_50%,#dfa2da,rgba(0,0,0,0)_58%)] before:brightness-140
                                before:transition-all before:duration-2000 group-hover:before:rotate-[-97deg]">
                </div>
                {/* Glow Layer 6 - Sharp edge */}
                <div className="absolute z-0 overflow-hidden h-full w-full rounded-xl blur-[0.5px] 
                                before:absolute before:content-[''] before:z-0 before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[70deg]
                                before:bg-[conic-gradient(#1c191c,#402fb5_5%,#1c191c_14%,#1c191c_50%,#cf30aa_60%,#1c191c_64%)] before:brightness-130
                                before:transition-all before:duration-2000 group-hover:before:rotate-[-110deg]">
                </div>

                {/* Content wrapper - higher z-index */}
                <div className={`relative z-10 ${className}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AnimatedGlowingBox;
