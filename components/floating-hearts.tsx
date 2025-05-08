"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

type FloatingHeart = {
  id: number
  x: number
  size: number
  delay: number
  duration: number
  opacity: number
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([])

  useEffect(() => {
    // Create initial hearts
    const initialHearts = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // random horizontal position (0-100%)
      size: Math.random() * 20 + 10, // random size between 10-30px
      delay: Math.random() * 5, // random delay for animation start
      duration: Math.random() * 10 + 15, // random duration between 15-25s
      opacity: Math.random() * 0.5 + 0.2, // random opacity between 0.2-0.7
    }))

    setHearts(initialHearts)

    // Add new hearts periodically
    const interval = setInterval(() => {
      setHearts((prevHearts) => [
        ...prevHearts,
        {
          id: Date.now(),
          x: Math.random() * 100,
          size: Math.random() * 20 + 10,
          delay: 0,
          duration: Math.random() * 10 + 15,
          opacity: Math.random() * 0.5 + 0.2,
        },
      ])

      // Remove old hearts to prevent too many elements
      if (hearts.length > 40) {
        setHearts((prevHearts) => prevHearts.slice(1))
      }
    }, 1500)

    return () => clearInterval(interval)
  }, [hearts.length])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute bottom-0"
          style={{ left: `${heart.x}%` }}
          initial={{ y: "100vh", opacity: heart.opacity }}
          animate={{
            y: "-100vh",
            opacity: 0,
            x: [0, Math.random() * 50 - 25, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            ease: "linear",
          }}
        >
          <Heart className="text-pink-400" style={{ width: heart.size, height: heart.size }} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  )
}
