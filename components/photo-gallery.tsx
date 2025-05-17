"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

const photos = [
  {
    id: 1,
    src: "/images/couple-selfie.png",
    alt: "Couple selfie",
    caption: "Your smile makes planets jealous",
  },
  {
    id: 2,
    src: "/images/traditional.png",
    alt: "Traditional outfit",
    caption: "Elegance personified",
  },
  {
    id: 3,
    src: "/images/thoughtful.png",
    alt: "Thoughtful moment",
    caption: "Lost in your thoughts",
  },
  {
    id: 4,
    src: "/images/happy.png",
    alt: "Happy moment",
    caption: "Your joy is contagious",
  },
  {
    id: 5,
    src: "/images/smiling.png",
    alt: "Smiling",
    caption: "Sunshine in human form",
  },
  {
    id: 6,
    src: "/images/facemask.png",
    alt: "Face mask fun",
    caption: "Even in face masks, you're adorable",
  },
]

export default function PhotoGallery() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {photos.map((photo, index) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
          whileHover={{
            scale: 1.05,
            rotate: Math.random() * 4 - 2,
            boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.4)",
          }}
          onHoverStart={() => setActivePhoto(photo.id)}
          onHoverEnd={() => setActivePhoto(null)}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-lg border-4 border-white bg-white p-3 transform transition-transform">
            <div className="relative">
              <Image
                src={photo.src || "/placeholder.svg"}
                width={400}
                height={400}
                alt={photo.alt}
                className="rounded-xl object-cover w-full aspect-square"
              />

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent rounded-xl flex items-end"
              >
                <p className="text-white text-xl p-4 font-['Dancing_Script',_cursive]">{photo.caption}</p>
              </motion.div>
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
              {index % 6 === 0 && <span className="text-xl">🌸</span>}
              {index % 6 === 1 && <span className="text-xl">✨</span>}
              {index % 6 === 2 && <span className="text-xl">💖</span>}
              {index % 6 === 3 && <span className="text-xl">🧸</span>}
              {index % 6 === 4 && <span className="text-xl">🌟</span>}
              {index % 6 === 5 && <span className="text-xl">🌷</span>}
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
