"use client"

import type React from "react"
import * as Icons from "@/components/ui/custom-icons"

interface TelcoInfraServicesProps {
  className?: string
}

const TelcoInfraServices: React.FC<TelcoInfraServicesProps> = ({ className = "" }) => {
  const themeVars: Record<string, string> = {
    "--oci-primary-color": "hsl(var(--ptr-primary))",
    "--oci-background-color": "hsl(var(--background))",
    "--oci-foreground-color": "hsl(var(--foreground))",
    "--oci-muted-foreground-color": "hsl(var(--muted-foreground))",
    "--oci-border-color": "hsl(var(--border))",
    "--oci-shadow-color": "rgba(0, 0, 0, 0.12)",
    "--oci-gradient-light-gray-start": "hsl(var(--foreground) / 0.2)",
    "--oci-gradient-light-gray-end": "transparent",
  }

  // Helper component for rendering each logo box
  const LogoBox: React.FC<{
    LogoComponent?: React.FC<React.SVGProps<SVGSVGElement>>
    isGradientBg?: boolean
  }> = ({ LogoComponent, isGradientBg }) => {
    const boxStyle: React.CSSProperties = {
      width: "60px",
      height: "60px",
      position: "relative",
      borderRadius: "9px",
      border: `1px ${themeVars["--oci-border-color"]} solid`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      flexShrink: 0,
    }

    const innerContentStyle: React.CSSProperties = {
      width: "36px",
      height: "36px",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }

    if (isGradientBg) {
      boxStyle.background = `linear-gradient(180deg, ${themeVars["--oci-gradient-light-gray-start"]} 0%, ${themeVars["--oci-gradient-light-gray-end"]} 100%)`
      boxStyle.boxShadow = `0px 1px 2px ${themeVars["--oci-shadow-color"]}`
      boxStyle.backdropFilter = "blur(18px)"
      boxStyle.padding = "6px 8px"
    }

    return (
      <div style={boxStyle}>
        {LogoComponent && (
          <div style={innerContentStyle}>
            <LogoComponent width={36} height={36} />
          </div>
        )}
      </div>
    )
  }

  // Define the grid items with their respective logos and properties
  const gridItems = Array(40)
    .fill(null)
    .map((_, i) => {
      const item: { LogoComponent?: React.FC<React.SVGProps<SVGSVGElement>>; isGradientBg?: boolean } = {}
      const row = Math.floor(i / 10)
      const col = i % 10

      // Assign logos to specific positions
      if (row === 0 && col === 3) {
        item.LogoComponent = Icons.MikrotikLogo
        item.isGradientBg = true
      } else if (row === 0 && col === 2) {
        item.LogoComponent = Icons.GarminLogo
        item.isGradientBg = true
      } else if (row === 1 && col === 4) {
        item.LogoComponent = Icons.HPLogo
        item.isGradientBg = true
      } else if (row === 1 && col === 5) {
        item.LogoComponent = Icons.FortinetLogo
        item.isGradientBg = true
      } else if (row === 0 && col === 6) {
        item.LogoComponent = Icons.APCLogo
        item.isGradientBg = true
      } else if (row === 0 && col === 8) {
        item.LogoComponent = Icons.HPLogo
        item.isGradientBg = true
      } else if (row === 1 && col === 2) {
        item.LogoComponent = Icons.LenovoLogo
        item.isGradientBg = true
      } else if (row === 2 && col === 3) {
        item.LogoComponent = Icons.TPLinkLogo
        item.isGradientBg = true
      } else if (row === 2 && col === 4) {
        item.LogoComponent = Icons.IBMLogo
        item.isGradientBg = true
      } else if (row === 1 && col === 7) {
        item.LogoComponent = Icons.CiscoLogo
        item.isGradientBg = true
      } else if (row === 3 && col === 3) {
        item.LogoComponent = Icons.HPLogo
        item.isGradientBg = true
      } else if (row === 3 && col === 5) {
        item.LogoComponent = Icons.OpenNebulaLogo
        item.isGradientBg = true
      } else if (row === 2 && col === 6) {
        item.LogoComponent = Icons.VMWareLogo
        item.isGradientBg = true
      } else if (row === 2 && col === 7) {
        item.LogoComponent = Icons.HuaweiLogo
        item.isGradientBg = true
      } else if (row === 1 && col === 9) {
        item.LogoComponent = Icons.VMWareLogo
        item.isGradientBg = true
      } else if (row === 3 && col === 5) {
        item.LogoComponent = Icons.GarminLogo
        item.isGradientBg = true
      } else if (row === 3 && col === 9) {
        item.LogoComponent = Icons.OpenNebulaLogo
        item.isGradientBg = true
      }
      return item
    })

  return (
    <div
      className={`w-full h-full relative ${className}`}
      style={{
        ...themeVars,
      }}
      role="img"
      aria-label="One-click integrations illustration showing a grid of connected squares"
    >
      {/* Background radial gradient */}
      <div
        style={{
          width: "377.33px",
          height: "278.08px",
          left: "0px",
          top: "24px",
          position: "absolute",
          background: `radial-gradient(ellipse 103.87% 77.04% at 52.56% -1.80%, 
            ${themeVars["--oci-foreground-color"]}00 0%, 
            ${themeVars["--oci-foreground-color"]}F5 15%, 
            ${themeVars["--oci-foreground-color"]}66 49%, 
            ${themeVars["--oci-foreground-color"]}F5 87%, 
            ${themeVars["--oci-foreground-color"]}00 100%)`,
        }}
      />

      {/* Main content container with backdrop blur */}
      <div
        style={{
          width: "377px",
          height: "265px",
          left: "0.34px",
          top: "43.42px",
          position: "absolute",
          backdropFilter: "blur(7.91px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {/* Render rows of logo boxes */}
        {Array.from({ length: 4 }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "16px" }}
          >
            {gridItems.slice(rowIndex * 10, (rowIndex + 1) * 10).map((item, colIndex) => (
              <LogoBox key={colIndex} {...item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TelcoInfraServices
