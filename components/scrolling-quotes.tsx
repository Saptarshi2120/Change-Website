"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const quotes = [
  "Storms don't last forever.",
  "You're not what hurt you—you are who survived it.",
  "You're not alone. You never will be.",
  "The darkest nights produce the brightest stars.",
  "Every moment of pain carries a seed of strength.",
  "Your heart knows the way. Run in that direction.",
  "This too shall pass, but your strength will remain.",
  "Sometimes the bravest thing is simply to exist.",
]

export default function ScrollingQuotes() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-40 relative flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            className="text-center"
            animate={{
              textShadow: [
                "0 0 5px rgba(139, 92, 246, 0)",
                "0 0 15px rgba(139, 92, 246, 0.5)",
                "0 0 5px rgba(139, 92, 246, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            <p className="text-2xl md:text-3xl text-indigo-700 font-['Playfair_Display',_serif] max-w-2xl mx-auto">
              "{quotes[currentQuote]}"
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 mt-4">
        {quotes.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentQuote ? "bg-indigo-600 w-4" : "bg-indigo-300"
            }`}
            onClick={() => setCurrentQuote(index)}
          />
        ))}
      </div>
    </div>
  )
}
