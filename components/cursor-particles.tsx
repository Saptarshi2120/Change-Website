"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

type Particle = {
  id: number
  x: number
  y: number
  size: number
  color: string
}

const colors = ["#F9A8D4", "#F472B6", "#EC4899", "#C084FC", "#A855F7"]

export default function CursorParticles() {
  const [particles, setParticles] = useState<Particle[]>([])
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  // Smooth spring physics for cursor
  const springX = useSpring(cursorX, { stiffness: 300, damping: 30 })
  const springY = useSpring(cursorY, { stiffness: 300, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)

      // Add a new particle on mouse move
      if (Math.random() > 0.6) {
        // Only add particles sometimes to avoid too many
        const newParticle = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 10 + 5,
          color: colors[Math.floor(Math.random() * colors.length)],
        }

        setParticles((prev) => [...prev, newParticle])

        // Remove the particle after animation
        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== newParticle.id))
        }, 1000)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor */}
      <motion.div
        className="w-6 h-6 rounded-full bg-pink-400/50 fixed pointer-events-none z-50 flex items-center justify-center"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-2 h-2 rounded-full bg-pink-500"></div>
      </motion.div>

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed rounded-full pointer-events-none"
          style={{
            x: particle.x,
            y: particle.y,
            translateX: "-50%",
            translateY: "-50%",
            backgroundColor: particle.color,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{
            opacity: 0,
            scale: 0,
            x: particle.x + (Math.random() * 100 - 50),
            y: particle.y + (Math.random() * 100 - 50),
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}
    </div>
  )
}
