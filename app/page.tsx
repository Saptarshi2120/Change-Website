"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Music, MicOffIcon as MusicOff } from "lucide-react"
import Confetti from "react-confetti"
import { useWindowSize } from "@/hooks/use-window-size"
import FloatingHearts from "@/components/floating-hearts"
import PhotoGallery from "@/components/photo-gallery"
import { cn } from "@/lib/utils"

import FloatingAnimation from "@/components/floating-animation"
import AnimatedText from "@/components/animated-text"
import AnimatedHeart from "@/components/animated-heart"

export default function ApologyPage() {
  const [currentSection, setCurrentSection] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const { width, height } = useWindowSize()

  const sections = [
    {
      id: "landing",
      content: (
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-8"
          >
            <Heart className="h-24 w-24 text-pink-400 animate-pulse" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-pink-600 mb-6"
          >
            I'm truly sorry, Madhurima.
          </motion.h1>
          <AnimatedText
            text="Please scroll down to read my heart..."
            className="text-lg text-pink-500 mb-8"
            delay={0.2}
          />
          <div className="flex gap-3 mt-4">
            <FloatingAnimation delay={0} yOffset={15}>
              <AnimatedHeart size={8} />
            </FloatingAnimation>
            <FloatingAnimation delay={0.5} yOffset={12}>
              <AnimatedHeart size={6} />
            </FloatingAnimation>
            <FloatingAnimation delay={1} yOffset={10}>
              <AnimatedHeart size={10} />
            </FloatingAnimation>
          </div>
        </div>
      ),
    },
    {
      id: "nicknames",
      content: (
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-pink-600 mb-6"
          >
            To My Everything
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
            {[
              { name: "Puchka", icon: "🌸" },
              { name: "Puchku", icon: "✨" },
              { name: "Soft Toy", icon: "🧸" },
              { name: "Cupcake", icon: "🧁" },
              { name: "Better Half", icon: "❤️" },
              { name: "My World", icon: "🌎" },
            ].map((nickname, index) => (
              <motion.div
                key={nickname.name}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotate: Math.random() * 5 - 2.5,
                  boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)",
                }}
                className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center justify-center"
              >
                <span className="text-4xl mb-2">{nickname.icon}</span>
                <span className="text-xl text-pink-500 font-medium">{nickname.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "hidden-truth",
      content: (
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-pink-600 mb-4"
            >
              I Should Have Told You
            </motion.h2>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg text-pink-500"
            >
              I should've told you that my parents aren't well. You love them so much, and I hid it. I was scared and
              overwhelmed.
            </motion.p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1.2 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/childhood.png"
                width={300}
                height={300}
                alt="Childhood photo"
                className="rounded-lg"
              />
              <motion.div
                animate={{
                  boxShadow: [
                    "0px 0px 0px rgba(236, 72, 153, 0)",
                    "0px 0px 20px rgba(236, 72, 153, 0.7)",
                    "0px 0px 0px rgba(236, 72, 153, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      id: "my-sadness",
      content: (
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <motion.h2
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-pink-600 mb-4"
            >
              I Bottled Up My Sadness
            </motion.h2>
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg text-pink-500"
            >
              I bottled up my sadness instead of sharing it with you. I shut you out when I needed you the most. I'm
              sorry.
            </motion.p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 to-transparent z-10 rounded-lg pointer-events-none" />
              <Image
                src="/images/couple-selfie.png"
                width={300}
                height={300}
                alt="Couple selfie"
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      id: "perfect-for-me",
      content: (
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-pink-600 mb-6"
          >
            You Are Perfect For Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="max-w-2xl bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-200"
          >
            <p className="text-lg text-pink-600 mb-4 leading-relaxed">
              In every smile, every tear, every moment we share, I find pieces of a puzzle that complete me. Your
              kindness, your strength, your beautiful heart - they all remind me that in this vast universe, I found
              someone who fits perfectly with my soul.
            </p>
            <p className="text-lg text-pink-600 mb-4 leading-relaxed">
              When I look into your eyes, I see not just the woman I love, but the future I dream of. Your laughter is
              the melody that brightens my darkest days, and your touch is the comfort that soothes my restless nights.
            </p>
            <p className="text-lg text-pink-600 leading-relaxed">
              You are not just perfect - you are perfect for me, in ways that defy explanation but fill my heart with
              certainty. Like stars aligned in the cosmos, we were meant to find each other.
            </p>
          </motion.div>
        </div>
      ),
    },
    {
      id: "love-and-regret",
      content: (
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-pink-600 mb-4"
            >
              My Love and Regret
            </motion.h2>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg text-pink-500"
            >
              You're not just my girlfriend. You're my perfect future wife. I love you deeply, and I promise to correct
              my mistakes.
            </motion.p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/traditional-couple.png"
                width={300}
                height={300}
                alt="Traditional couple"
                className="rounded-lg"
              />
              <motion.div
                animate={{
                  scale: [1, 1.03, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 bg-pink-500/10 rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      id: "infinite-love",
      content: (
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-pink-600 mb-6"
          >
            My Love For You = ∞
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-200 max-w-2xl">
              <div className="mb-6 text-center">
                <span className="text-4xl md:text-6xl text-pink-500 font-bold">
                  ∫<sub>0</sub>
                  <sup>∞</sup> love(t) dt = ∞
                </span>
              </div>
              <p className="text-lg text-pink-600 mb-4">
                If my love were to be expressed mathematically, it would be an infinite integral - unbounded, limitless,
                and eternal. From the moment we met until forever, my love for you only grows stronger.
              </p>
              <p className="text-lg text-pink-600 mb-4">
                Like parallel lines that extend to infinity, my commitment to you will never waver. Like the infinite
                set of real numbers, my reasons to love you are uncountable.
              </p>
            </div>
            <motion.div
              className="absolute -z-10 inset-0 rounded-2xl"
              animate={{
                boxShadow: [
                  "0px 0px 0px rgba(236, 72, 153, 0)",
                  "0px 0px 30px rgba(236, 72, 153, 0.6)",
                  "0px 0px 0px rgba(236, 72, 153, 0)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </div>
      ),
    },
    {
      id: "forgiveness",
      content: (
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-pink-600 mb-6"
          >
            Will You Forgive Me?
          </motion.h2>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setShowConfetti(true)}
              className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-medium shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Yes, I Forgive You
            </button>
          </motion.div>

          <AnimatePresence>
            {showConfetti && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="mt-12 flex flex-col items-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-pink-600 mb-8">I love you, Madhurima ❤️</h3>
                <Image
                  src="/images/kiss-couple.png"
                  width={350}
                  height={350}
                  alt="Kiss couple"
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ),
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.body.offsetHeight

      // Calculate which section should be active based on scroll position
      const sectionHeight = windowHeight
      const newSection = Math.min(Math.floor(scrollPosition / sectionHeight), sections.length - 1)

      setCurrentSection(newSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections.length])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsMusicPlaying(!isMusicPlaying)
    }
  }

  return (
    <div className="font-['Caveat_Brush',_cursive] bg-gradient-to-b from-pink-50 to-pink-100 min-h-screen">
      <audio ref={audioRef} src="/audio/romantic-piano.mp3" loop />

      <button
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all"
        aria-label={isMusicPlaying ? "Pause music" : "Play music"}
      >
        {isMusicPlaying ? <MusicOff size={20} /> : <Music size={20} />}
      </button>

      {/* Floating hearts background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <FloatingHearts />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {sections.map((section, index) => (
          <section
            key={section.id}
            className={cn(
              "min-h-screen flex items-center justify-center p-6 md:p-12",
              index % 2 === 1 ? "bg-pink-50/50" : "",
            )}
          >
            <div className="max-w-4xl w-full">{section.content}</div>
          </section>
        ))}

        {/* Photo gallery section */}
        <section className="min-h-screen flex items-center justify-center p-6 md:p-12 bg-pink-50/50">
          <div className="max-w-4xl w-full">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-pink-600 mb-8 text-center"
            >
              Our Beautiful Memories
            </motion.h2>
            <PhotoGallery />
          </div>
        </section>
      </div>

      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          colors={["#EC4899", "#F472B6", "#F9A8D4", "#FDF2F8"]}
          confettiSource={{
            x: width / 2,
            y: height / 2,
            w: 0,
            h: 0,
          }}
        />
      )}
    </div>
  )
}
