"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Music, MicOffIcon as MusicOff, Star, Moon, Shell, Lock, Flower } from "lucide-react"
import SpotifyPlayer from "@/components/spotify-player"
import FloatingHearts from "@/components/floating-hearts"
import FallingPetals from "@/components/falling-petals"
import PhotoGallery from "@/components/photo-gallery"
import HugModal from "@/components/hug-modal"
import ScrollingQuotes from "@/components/scrolling-quotes"
import ChalkboardMath from "@/components/chalkboard-math"
import CursorParticles from "@/components/cursor-particles"
import { useWindowSize } from "@/hooks/use-window-size"

export default function HomePage() {
  const [showHugModal, setShowHugModal] = useState(false)
  // Make sure the music starts playing by default
  const [isMusicPlaying, setIsMusicPlaying] = useState(true)
  const [showCursorParticles, setShowCursorParticles] = useState(false)
  const { width, height } = useWindowSize()

  // Update the toggleMusic function to handle the audio properly
  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying)
  }

  return (
    <div className="font-['Dancing_Script',_cursive] bg-gradient-to-b from-pink-50 to-purple-50 min-h-screen">
      {/* Spotify Player */}
      <SpotifyPlayer isPlaying={isMusicPlaying} />

      {/* Music Toggle Button */}
      <button
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all"
        aria-label={isMusicPlaying ? "Pause music" : "Play music"}
      >
        {isMusicPlaying ? <MusicOff size={20} /> : <Music size={20} />}
      </button>

      {/* Cursor Particles */}
      {showCursorParticles && <CursorParticles />}

      {/* Falling petals background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <FallingPetals />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-100/70 to-purple-100/70 z-0"></div>
        <div className="absolute inset-0 z-0">
          <FloatingHearts />
        </div>

        <div className="max-w-4xl w-full z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-['Pacifico',_cursive] text-pink-600 mb-6">Hey Puchka ❤️</h1>
            <h2 className="text-2xl md:text-3xl font-['Playfair_Display',_serif] text-pink-500">
              You're not alone. You'll never be. I'm right here — forever.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={() => setShowCursorParticles(!showCursorParticles)}
              className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-['Playfair_Display',_serif] text-xl shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Heart className="w-5 h-5" /> Tap to Feel Loved <Heart className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-12 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 0.95, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
                className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-xl"
              >
                <img src="/images/happy.png" alt="Happy memories" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Love Letter Section */}
      <section className="min-h-screen flex items-center justify-center p-6 md:p-12 bg-cream-50 relative">
        <div className="absolute inset-0 bg-[url('/images/love-letter.png')] bg-center bg-cover opacity-10 z-0"></div>

        <div className="max-w-3xl w-full z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-xl border border-pink-100 love-letter relative"
          >
            <div className="absolute top-0 left-0 w-24 h-24 bg-[url('/images/flower-corner.png')] bg-contain bg-no-repeat opacity-70"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-[url('/images/flower-corner.png')] bg-contain bg-no-repeat opacity-70 transform rotate-180"></div>

            <p className="text-2xl md:text-3xl text-pink-700 mb-6">To the strongest soul I know,</p>

            <p className="text-xl md:text-2xl text-pink-600 mb-4 leading-relaxed">
              I know it hurts. I wish I could pull all the sadness out of your heart and keep it in mine. I can't
              promise to fix everything, but I promise to stand beside you through it all.
            </p>

            <p className="text-xl md:text-2xl text-pink-600 mb-6 leading-relaxed">
              You are precious, powerful, and deeply loved. No fight can dim your light. You are my future wife. And I
              will never stop being your home.
            </p>

            <p className="text-2xl md:text-3xl text-pink-700 text-right">
              Love always,
              <br />
              Your Cupcake 🍰
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={() => setShowHugModal(true)}
              className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-['Playfair_Display',_serif] text-xl shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Heart className="w-5 h-5" /> Need a Hug? <Heart className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        <AnimatePresence>{showHugModal && <HugModal onClose={() => setShowHugModal(false)} />}</AnimatePresence>
      </section>

      {/* Photo Gallery Section */}
      <section className="min-h-screen flex items-center justify-center p-6 md:p-12 bg-lavender-50 relative">
        <div className="max-w-4xl w-full z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-['Pacifico',_cursive] text-purple-600 mb-8 text-center"
          >
            Moments That Matter
          </motion.h2>

          <PhotoGallery />
        </div>
      </section>

      {/* Scrolling Quotes Section */}
      <section className="min-h-screen flex items-center justify-center p-6 md:p-12 bg-gradient-to-b from-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-10 opacity-20">
            <Star className="w-8 h-8 text-yellow-400" fill="currentColor" />
          </div>
          <div className="absolute top-1/4 right-1/4 opacity-30">
            <Star className="w-12 h-12 text-yellow-400" fill="currentColor" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 opacity-20">
            <Star className="w-10 h-10 text-yellow-400" fill="currentColor" />
          </div>
          <div className="absolute top-1/2 right-1/5 opacity-15">
            <Star className="w-6 h-6 text-yellow-400" fill="currentColor" />
          </div>
          <div className="absolute bottom-1/4 right-1/4 opacity-25">
            <Moon className="w-16 h-16 text-indigo-300" fill="currentColor" />
          </div>
        </div>

        <div className="max-w-4xl w-full z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-['Pacifico',_cursive] text-indigo-600 mb-12 text-center"
          >
            Words of Hope
          </motion.h2>

          <ScrollingQuotes />
        </div>
      </section>

      {/* Reasons I Admire You Section */}
      <section className="min-h-screen flex items-center justify-center p-6 md:p-12 bg-peach-50 relative">
        <div className="max-w-3xl w-full z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-['Pacifico',_cursive] text-pink-600 mb-12 text-center"
          >
            Reasons I Admire You
          </motion.h2>

          <div className="grid gap-8">
            {[
              { icon: <Flower className="w-10 h-10 text-pink-500" />, text: "Your heart is bigger than your smile." },
              {
                icon: <Shell className="w-10 h-10 text-pink-500" />,
                text: "You speak softly, but you fight strongly.",
              },
              {
                icon: <Moon className="w-10 h-10 text-pink-500" />,
                text: "You light up dark skies with just your presence.",
              },
              { icon: <Lock className="w-10 h-10 text-pink-500" />, text: "You make broken things feel safe again." },
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-pink-100 flex items-center gap-6"
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 0.9, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                >
                  {reason.icon}
                </motion.div>
                <p className="text-xl md:text-2xl text-pink-600 font-['Playfair_Display',_serif]">{reason.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Forever Math Section */}
      <section className="min-h-screen flex items-center justify-center p-6 md:p-12 bg-slate-900 relative">
        <div className="max-w-3xl w-full z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-['Pacifico',_cursive] text-pink-300 mb-12 text-center"
          >
            Our Forever Math
          </motion.h2>

          <ChalkboardMath />
        </div>
      </section>

      {/* Final Message Section */}
      <section className="min-h-screen flex items-center justify-center p-6 md:p-12 bg-gradient-to-b from-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: Math.random() * 5,
              }}
            >
              <Star className="w-2 h-2 text-white" fill="currentColor" />
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl w-full z-10 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl text-white font-['Playfair_Display',_serif] leading-relaxed"
            >
              You are not just my girlfriend.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl text-pink-300 font-['Playfair_Display',_serif] leading-relaxed"
            >
              You are my forever, my future wife.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl text-white font-['Playfair_Display',_serif] leading-relaxed"
            >
              And this heart?
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl text-pink-300 font-['Pacifico',_cursive] leading-relaxed"
            >
              It's permanently yours.
            </motion.p>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              viewport={{ once: true }}
              className="mt-12 flex justify-center"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Heart className="w-20 h-20 text-pink-400" fill="currentColor" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
