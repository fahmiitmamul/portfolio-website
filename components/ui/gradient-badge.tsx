"use client"

import { cn } from "@/lib/utils"

interface GradientBadgeProps {
  text: string
  className?: string
}

export function GradientBadge({ text, className }: GradientBadgeProps) {
  return (
    <span
      className={cn(
        "px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white",
        className,
      )}
    >
      {text}
    </span>
  )
}
