"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import Image from "next/image"

type FloatingHeart = {
  id: number
  x: number
  size: number
  delay: number
  duration: number
  opacity: number
  isImage?: boolean
  imageIndex?: number
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([])

  const images = ["/images/happy.png", "/images/smiling.png", "/images/thoughtful.png"]

  useEffect(() => {
    // Create initial hearts
    const initialHearts = Array.from({ length: 30 }, (_, i) => {
      const isImage = i % 8 === 0 // Every 8th heart is an image
      return {
        id: i,
        x: Math.random() * 100,
        size: isImage ? Math.random() * 30 + 30 : Math.random() * 20 + 10,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 15,
        opacity: Math.random() * 0.5 + 0.2,
        isImage,
        imageIndex: isImage ? Math.floor(Math.random() * images.length) : undefined,
      }
    })

    setHearts(initialHearts)

    // Add new hearts periodically
    const interval = setInterval(() => {
      setHearts((prevHearts) => {
        const isImage = Math.random() > 0.9 // 10% chance of being an image
        return [
          ...prevHearts,
          {
            id: Date.now(),
            x: Math.random() * 100,
            size: isImage ? Math.random() * 30 + 30 : Math.random() * 20 + 10,
            delay: 0,
            duration: Math.random() * 10 + 15,
            opacity: Math.random() * 0.5 + 0.2,
            isImage,
            imageIndex: isImage ? Math.floor(Math.random() * images.length) : undefined,
          },
        ]
      })

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
            x: [0, Math.random() * 50 - 25, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            ease: "linear",
          }}
        >
          {heart.isImage && heart.imageIndex !== undefined ? (
            <div className="rounded-full overflow-hidden" style={{ width: heart.size, height: heart.size }}>
              <Image
                src={images[heart.imageIndex] || "/placeholder.svg"}
                alt="Floating memory"
                width={heart.size}
                height={heart.size}
                className="object-cover w-full h-full"
              />
            </div>
          ) : (
            <Heart className="text-pink-400" style={{ width: heart.size, height: heart.size }} fill="currentColor" />
          )}
        </motion.div>
      ))}
    </div>
  )
}
