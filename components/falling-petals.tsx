"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type Petal = {
  id: number
  x: number
  size: number
  delay: number
  duration: number
  rotation: number
  color: string
}

const colors = ["bg-pink-200", "bg-pink-100", "bg-purple-100", "bg-rose-100", "bg-fuchsia-100"]

export default function FallingPetals() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    // Create initial petals
    const initialPetals = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 15 + 5,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    setPetals(initialPetals)

    // Add new petals periodically
    const interval = setInterval(() => {
      setPetals((prevPetals) => [
        ...prevPetals,
        {
          id: Date.now(),
          x: Math.random() * 100,
          size: Math.random() * 15 + 5,
          delay: 0,
          duration: Math.random() * 10 + 15,
          rotation: Math.random() * 360,
          color: colors[Math.floor(Math.random() * colors.length)],
        },
      ])

      // Remove old petals to prevent too many elements
      if (petals.length > 40) {
        setPetals((prevPetals) => prevPetals.slice(1))
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [petals.length])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className={`absolute rounded-full ${petal.color} opacity-70`}
          style={{
            left: `${petal.x}%`,
            width: petal.size,
            height: petal.size / 2,
            rotate: `${petal.rotation}deg`,
          }}
          initial={{ y: "-10vh", opacity: 0.7 }}
          animate={{
            y: "110vh",
            x: [
              `${petal.x}%`,
              `${petal.x + (Math.random() * 10 - 5)}%`,
              `${petal.x + (Math.random() * 10 - 5)}%`,
              `${petal.x}%`,
            ],
            rotate: petal.rotation + 360 * 2,
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            ease: "linear",
            times: [0, 0.3, 0.7, 1],
          }}
        />
      ))}
    </div>
  )
}
