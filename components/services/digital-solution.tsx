import type React from "react"

interface DigitalSolutionServicesProps {
  className?: string
}

const DigitalSolutionServices: React.FC<DigitalSolutionServicesProps> = ({ className = "" }) => {
  // tech data with new SVG paths
  const techStacks = [
    { name: "Figma", icon: "/images/digital-solutions/figma.svg", ready: true },
    { name: "Shadcn UI", icon: "/images/digital-solutions/shadcn.svg" },
    { name: "Next.js", icon: "/images/digital-solutions/nextjs.svg", ready: true },
    { name: "Tailwind CSS", icon: "/images/digital-solutions/tailwind-css.svg", ready: true },
    { name: "Resend", icon: "/images/digital-solutions/resend.svg" },
    { name: "React", icon: "/images/digital-solutions/react.svg" },
  ]

  return (
    <div
      className={`w-full h-full flex items-center justify-center p-4 relative ${className}`}
      role="img"
      aria-label="Digital Solution showcasing technology stacks"
    >
      {/* Main Message Box */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, calc(-50% + 24px))",
          width: "345px",
          height: "277px",
          background: "linear-gradient(180deg, hsl(var(--ptr-background)) 0%, transparent 100%)",
          backdropFilter: "blur(16px)",
          borderRadius: "9.628px",
          border: "0.802px solid hsl(var(--border))",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12.837px",
              padding: "8.826px 12.837px",
              borderBottom: "0.802px solid hsl(var(--border))",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: "12.837px",
                lineHeight: "19.256px",
                color: "hsl(var(--muted-foreground))",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              Tech Stack
            </span>
          </div>
          {/* tech List */}
          {techStacks.map((tech, index) => (
            <div
              key={tech.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8.826px 12.837px",
                borderBottom: index < techStacks.length - 1 ? "0.479px solid hsl(var(--border))" : "none",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12.837px",
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    className="w-full h-full object-contain opacity-70 grayscale" // Apply opacity and grayscale
                  />
                </div>
                <span
                  style={{
                    fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    fontSize: "12.837px",
                    lineHeight: "19.256px",
                    color: "hsl(var(--muted-foreground))",
                    fontWeight: 400,
                    whiteSpace: "nowrap",
                  }}
                >
                  {tech.name}
                </span>
              </div>
              {tech.ready && (
                <div
                  style={{
                    background: "hsl(var(--ptr-primary) / 0.08)",
                    padding: "1.318px 5.272px",
                    borderRadius: "3.295px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                      fontSize: "9.583px",
                      lineHeight: "15.333px",
                      color: "hsl(var(--ptr-primary))",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Ready
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DigitalSolutionServices
