"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

interface AnimatedHeartProps {
  size?: number
  color?: string
  className?: string
}

export default function AnimatedHeart({ size = 24, color = "text-pink-500", className = "" }: AnimatedHeartProps) {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0.8 }}
      animate={{
        scale: [0.8, 1.2, 0.8],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    >
      <Heart className={`${color} w-${size} h-${size}`} fill="currentColor" />
    </motion.div>
  )
}
