"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { AnimatePresence } from "framer-motion"

const notes = [
  "Your smile is the highlight of my day.",
  "I'm counting down the days until I can hold you again.",
  "You make my heart skip a beat, every single time.",
  "Your strength inspires me to be better.",
  "I fall in love with you more each day.",
  "You are the poem I never knew how to write.",
  "Your voice is my favorite sound in the world.",
  "Every moment with you feels like magic.",
  "You're the dream I never want to wake up from.",
  "My heart has found its home in yours.",
]

export default function DailyNote() {
  const [currentNote, setCurrentNote] = useState("")
  const [showNote, setShowNote] = useState(false)

  useEffect(() => {
    // Get a random note based on the day
    const date = new Date()
    const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))
    const noteIndex = dayOfYear % notes.length
    setCurrentNote(notes[noteIndex])
  }, [])

  return (
    <div className="mt-12">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-['Playfair_Display',_serif] text-lg shadow-lg flex items-center gap-2"
        onClick={() => setShowNote(!showNote)}
      >
        <Heart className="w-5 h-5" /> Tap to Feel Loved <Heart className="w-5 h-5" />
      </motion.button>

      <AnimatePresence>
        {showNote && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 20 }}
            className="mt-6 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-pink-200"
          >
            <p className="text-xl text-pink-600 font-['Dancing_Script',_cursive]">{currentNote}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
