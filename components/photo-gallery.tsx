"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

const photos = [
  {
    id: 1,
    src: "/images/childhood.png",
    alt: "Childhood photo",
  },
  {
    id: 2,
    src: "/images/couple-selfie.png",
    alt: "Couple selfie",
  },
  {
    id: 3,
    src: "/images/traditional-couple.png",
    alt: "Traditional couple",
  },
  {
    id: 4,
    src: "/images/kiss-couple.png",
    alt: "Kiss couple",
  },
]

export default function PhotoGallery() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {photos.map((photo, index) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
          whileHover={{
            scale: 1.05,
            rotate: Math.random() * 4 - 2,
            boxShadow: "0 20px 25px -5px rgba(236, 72, 153, 0.4)",
          }}
          onHoverStart={() => setActivePhoto(photo.id)}
          onHoverEnd={() => setActivePhoto(null)}
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg border-4 border-white bg-white p-2 transform transition-transform">
            <Image
              src={photo.src || "/placeholder.svg"}
              width={400}
              height={400}
              alt={photo.alt}
              className="rounded-lg object-cover w-full aspect-square"
            />

            {/* Polaroid style caption */}
            <div className="mt-2 text-center text-pink-600 font-medium">
              {index % 2 === 0 ? "Forever yours ❤️" : "Our memories ❤️"}
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute top-2 right-2 z-10"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 0.9, 1],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              {index % 4 === 0 && <span className="text-xl">🌸</span>}
              {index % 4 === 1 && <span className="text-xl">✨</span>}
              {index % 4 === 2 && <span className="text-xl">💖</span>}
              {index % 4 === 3 && <span className="text-xl">🧸</span>}
            </motion.div>

            {/* Floating hearts on hover */}
            {activePhoto === photo.id && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    initial={{
                      x: Math.random() * 100 + 50,
                      y: Math.random() * 100 + 50,
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      y: -20 - i * 10,
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <Heart className="text-pink-500 w-6 h-6" fill="currentColor" />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
