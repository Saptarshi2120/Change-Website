"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FloatingAnimationProps {
  children: ReactNode
  delay?: number
  duration?: number
  yOffset?: number
}

export default function FloatingAnimation({ children, delay = 0, duration = 3, yOffset = 10 }: FloatingAnimationProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-yOffset / 2, yOffset / 2, -yOffset / 2] }}
      transition={{
        duration: duration,
        repeat: Number.POSITIVE_INFINITY,
        delay: delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}
