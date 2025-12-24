import type React from "react"

interface ManagedServicesProps {
    className?: string
}

const ManagedServices: React.FC<ManagedServicesProps> = ({ className = "" }) => {
    // Theme-based CSS variables using global theme
    const themeVars = {
        "--pca-background-color": "hsl(var(--ptr-background))",
        "--pca-background-glass": "hsl(var(--card) / 0.2)",
        "--pca-background-gradient-start": "hsl(var(--card) / 0.2)",
        "--pca-background-gradient-end": "transparent",
        "--pca-text-primary": "hsl(var(--ptr-foreground))",
        "--pca-text-secondary": "hsl(var(--muted-foreground))",
        "--pca-border-color": "hsl(var(--border))",
        "--pca-border-main": "hsl(var(--border))",
        "--pca-shadow-color": "rgba(0, 0, 0, 0.12)", // Keeping as is, common shadow
        "--pca-container-background": "hsl(var(--card) / 0.4)",
        "--pca-container-gradient-start": "hsl(var(--card) / 0.4)",
        "--pca-container-gradient-end": "transparent",
    }

    const CheckmarkIcon = () => (
        <svg
            width="10"
            height="10"
            viewBox="0 0 14 14"
            fill="none"
            style={{ width: "10px", height: "10px" }}
        >
            <path
                d="M3.85156 7.875L6.47656 10.5L10.8516 3.5"
                stroke="hsl(165 96% 71%)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                opacity="0.8"
            />
        </svg>
    )

    const RefreshIcon = () => (
        <svg
            width="10"
            height="10"
            viewBox="0 0 14 14"
            fill="none"
            style={{ width: "10px", height: "10px" }}
        >
            <path
                d="M1.75 7C1.75 4.1005 4.1005 1.75 7 1.75C9.8995 1.75 12.25 4.1005 12.25 7C12.25 9.8995 9.8995 12.25 7 12.25"
                stroke="var(--pca-text-primary)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                opacity="0.8"
            />
            <path
                d="M4.375 10.5L1.75 12.25L3.5 9.625"
                stroke="var(--pca-text-primary)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                opacity="0.8"
            />
        </svg>
    )

    const SparklesIcon = () => (
        <svg
            width="10"
            height="10"
            viewBox="0 0 14 14"
            fill="none"
            style={{ width: "10px", height: "10px" }}
        >
            <path
                d="M7 1.75L8.225 5.775L12.25 7L8.225 8.225L7 12.25L5.775 8.225L1.75 7L5.775 5.775L7 1.75Z"
                stroke="var(--pca-text-primary)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                opacity="0.8"
            />
        </svg>
    )

    const column1Tasks = [
        {
            icon: <CheckmarkIcon />,
            title: "Server Monitoring",
            short_description: "24/7 sistem monitoring infrastruktur...",
            status: "completed",
        },
        {
            icon: <CheckmarkIcon />,
            title: "Security Updates",
            short_description: "Patch management dan keamanan...",
            status: "completed",
        },
        {
            icon: <SparklesIcon />,
            title: "Backup Verification",
            short_description: "Validasi backup data harian...",
            status: "in-progress",
        },
        {
            icon: <CheckmarkIcon />,
            title: "Log Analysis",
            short_description: "Analisis log sistem dan aplikasi...",
            status: "completed",
        },
        {
            icon: <RefreshIcon />,
            title: "Capacity Planning",
            short_description: "Perencanaan kapasitas infrastruktur...",
            status: "in-progress",
        },
    ]

    const column2Tasks = [
        {
            icon: <CheckmarkIcon />,
            title: "Network Maintenance",
            short_description: "Pemeliharaan jaringan rutin...",
            status: "completed",
        },
        {
            icon: <RefreshIcon />,
            title: "Database Optimization",
            short_description: "Optimasi performa database...",
            status: "in-progress",
        },
        {
            icon: <CheckmarkIcon />,
            title: "System Health Check",
            short_description: "Pengecekan kesehatan sistem...",
            status: "completed",
        },
        {
            icon: <RefreshIcon />,
            title: "User Access Management",
            short_description: "Manajemen hak akses pengguna...",
            status: "in-progress",
        },
        {
            icon: <RefreshIcon />,
            title: "Cloud Resource Management",
            short_description: "Pengelolaan resource cloud...",
            status: "in-progress",
        },
    ]

    const column3Tasks = [
        {
            icon: <CheckmarkIcon />,
            title: "Application Updates",
            short_description: "Update aplikasi dan dependencies...",
            status: "completed",
        },
        {
            icon: <CheckmarkIcon />,
            title: "Performance Tuning",
            short_description: "Optimasi performa sistem...",
            status: "completed",
        },
        {
            icon: <RefreshIcon />,
            title: "Incident Response",
            short_description: "Tanggap darurat dan troubleshooting...",
            status: "in-progress",
        },
        {
            icon: <SparklesIcon />,
            title: "Disaster Recovery",
            short_description: "Pemulihan sistem dari bencana...",
            status: "in-progress",
        },
        {
            icon: <RefreshIcon />,
            title: "Compliance Monitoring",
            short_description: "Monitoring kepatuhan regulasi...",
            status: "in-progress",
        },
    ]


    return (
        <div
            className={className}
            style={
                {
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    background: `linear-gradient(180deg, var(--pca-container-gradient-start) 0%, var(--pca-container-gradient-end) 100%)`,
                    backdropFilter: "blur(8.372px)",
                    borderRadius: "10.047px",
                    boxSizing: "border-box",
                    flexShrink: 0,
                    margin: "0 auto",
                    ...themeVars,
                } as React.CSSProperties
            }
            role="img"
            aria-label="Parallel coding agents working on different tasks simultaneously"
        >
            {/* Inner content area with gradient background */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row", // Changed to row for horizontal layout
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: "16px",
                    padding: "20px",
                    height: "100%",
                    width: "calc(100% - 48px)",
                    background: "linear-gradient(180deg, hsl(var(--primary) / 0.05) 0%, transparent 100%)",
                    backdropFilter: "blur(16px)",
                    borderRadius: "9.628px",
                    border: "0.802px solid hsl(var(--border))",
                    overflow: "hidden",
                    boxSizing: "border-box",
                    margin: "24px 24px 0 24px",
                }}
            >
                {/* Column 1 - Always visible */}
                <div className="flex flex-col gap-2 w-full md:w-auto md:flex-1">
                    {column1Tasks.map((agent, index) => (
                        <div
                            key={`col1-${index}`}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                gap: "6px",
                                padding: "4px 6px",
                                background: `linear-gradient(180deg, var(--pca-background-gradient-start) 0%, var(--pca-background-gradient-end) 100%)`,
                                backdropFilter: "blur(19.481px)",
                                borderRadius: "8.658px",
                                boxShadow: `0px 1.082px 2.165px 0px var(--pca-shadow-color)`,
                                border: "0.541px solid var(--pca-border-color)",
                                width: "100%",
                                flexShrink: 0,
                                position: "relative",
                                overflow: "hidden",
                                boxSizing: "border-box",
                            }}
                        >
                            {/* Icon container */}
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    gap: "6px",
                                    padding: "2px 0 0 0",
                                    flexShrink: 0,
                                }}
                            >
                                <div
                                    style={{
                                        width: "12px",
                                        height: "12px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        overflow: "hidden",
                                        flexShrink: 0,
                                    }}
                                >
                                    {agent.icon}
                                </div>
                            </div>
                            {/* Content container */}
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "center",
                                    gap: "1px",
                                    padding: "0",
                                    flexShrink: 0,
                                    ...(index === 1
                                        ? {
                                            flexBasis: 0,
                                            flexGrow: 1,
                                            minHeight: "1px",
                                            minWidth: "1px",
                                        }
                                        : {}),
                                }}
                            >
                                <div
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 400,
                                        fontSize: "9px",
                                        lineHeight: "13px",
                                        color: agent.status === "completed" ? "hsl(165 96% 71%)" : "var(--pca-text-primary)",
                                        whiteSpace: "pre",
                                        flexShrink: 0,
                                    }}
                                >
                                    {agent.title}
                                </div>
                                <div
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 400,
                                        fontSize: "8px",
                                        lineHeight: "12px",
                                        color: "var(--pca-text-secondary)",
                                        whiteSpace: index === 1 ? "nowrap" : "pre",
                                        overflow: index === 1 ? "hidden" : "visible",
                                        textOverflow: index === 1 ? "ellipsis" : "clip",
                                        width: index === 1 ? "100%" : "auto",
                                        minWidth: index === 1 ? "100%" : "auto",
                                        flexShrink: 0,
                                    }}
                                >
                                    {agent.short_description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Column 2 - Hidden on mobile, visible on md+ */}
                <div className="hidden md:flex flex-col gap-2 md:flex-1">
                    {column2Tasks.map((agent, index) => (
                        <div
                            key={`col2-${index}`}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                gap: "6px",
                                padding: "4px 6px",
                                background: `linear-gradient(180deg, var(--pca-background-gradient-start) 0%, var(--pca-background-gradient-end) 100%)`,
                                backdropFilter: "blur(19.481px)",
                                borderRadius: "8.658px",
                                boxShadow: `0px 1.082px 2.165px 0px var(--pca-shadow-color)`,
                                border: "0.541px solid var(--pca-border-color)",
                                width: "100%",
                                flexShrink: 0,
                                position: "relative",
                                overflow: "hidden",
                                boxSizing: "border-box",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    gap: "6px",
                                    padding: "2px 0 0 0",
                                    flexShrink: 0,
                                }}
                            >
                                <div
                                    style={{
                                        width: "12px",
                                        height: "12px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        overflow: "hidden",
                                        flexShrink: 0,
                                    }}
                                >
                                    {agent.icon}
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "center",
                                    gap: "1px",
                                    padding: "0",
                                    flexShrink: 0,
                                    ...(index === 1
                                        ? {
                                            flexBasis: 0,
                                            flexGrow: 1,
                                            minHeight: "1px",
                                            minWidth: "1px",
                                        }
                                        : {}),
                                }}
                            >
                                <div
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 400,
                                        fontSize: "9px",
                                        lineHeight: "13px",
                                        color: agent.status === "completed" ? "hsl(165 96% 71%)" : "var(--pca-text-primary)",
                                        whiteSpace: "pre",
                                        flexShrink: 0,
                                    }}
                                >
                                    {agent.title}
                                </div>
                                <div
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 400,
                                        fontSize: "8px",
                                        lineHeight: "12px",
                                        color: "var(--pca-text-secondary)",
                                        whiteSpace: index === 1 ? "nowrap" : "pre",
                                        overflow: index === 1 ? "hidden" : "visible",
                                        textOverflow: index === 1 ? "ellipsis" : "clip",
                                        width: index === 1 ? "100%" : "auto",
                                        minWidth: index === 1 ? "100%" : "auto",
                                        flexShrink: 0,
                                    }}
                                >
                                    {agent.short_description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Column 3 - Hidden on mobile, visible on md+ */}
                <div className="hidden md:flex flex-col gap-2 md:flex-1">
                    {column3Tasks.map((agent, index) => (
                        <div
                            key={`col3-${index}`}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                gap: "6px",
                                padding: "4px 6px",
                                background: `linear-gradient(180deg, var(--pca-background-gradient-start) 0%, var(--pca-background-gradient-end) 100%)`,
                                backdropFilter: "blur(19.481px)",
                                borderRadius: "8.658px",
                                boxShadow: `0px 1.082px 2.165px 0px var(--pca-shadow-color)`,
                                border: "0.541px solid var(--pca-border-color)",
                                width: "100%",
                                flexShrink: 0,
                                position: "relative",
                                overflow: "hidden",
                                boxSizing: "border-box",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    gap: "6px",
                                    padding: "2px 0 0 0",
                                    flexShrink: 0,
                                }}
                            >
                                <div
                                    style={{
                                        width: "12px",
                                        height: "12px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        overflow: "hidden",
                                        flexShrink: 0,
                                    }}
                                >
                                    {agent.icon}
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "center",
                                    gap: "1px",
                                    padding: "0",
                                    flexShrink: 0,
                                    ...(index === 1
                                        ? {
                                            flexBasis: 0,
                                            flexGrow: 1,
                                            minHeight: "1px",
                                            minWidth: "1px",
                                        }
                                        : {}),
                                }}
                            >
                                <div
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 400,
                                        fontSize: "9px",
                                        lineHeight: "13px",
                                        color: agent.status === "completed" ? "hsl(165 96% 71%)" : "var(--pca-text-primary)",
                                        whiteSpace: "pre",
                                        flexShrink: 0,
                                    }}
                                >
                                    {agent.title}
                                </div>
                                <div
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 400,
                                        fontSize: "8px",
                                        lineHeight: "12px",
                                        color: "var(--pca-text-secondary)",
                                        whiteSpace: index === 1 ? "nowrap" : "pre",
                                        overflow: index === 1 ? "hidden" : "visible",
                                        textOverflow: index === 1 ? "ellipsis" : "clip",
                                        width: index === 1 ? "100%" : "auto",
                                        minWidth: index === 1 ? "100%" : "auto",
                                        flexShrink: 0,
                                    }}
                                >
                                    {agent.short_description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ManagedServices