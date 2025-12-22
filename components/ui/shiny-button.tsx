'use client'

import type React from 'react'

interface ShinyButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
}

export function ShinyButton({
  children,
  onClick,
  href,
  className = ''
}: ShinyButtonProps) {
  const classes = `shiny-cta ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        <span>{children}</span>
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick}>
      <span>{children}</span>
    </button>
  )
}
