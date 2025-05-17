"use client"

import { useEffect, useRef } from "react"

interface SpotifyPlayerProps {
  isPlaying: boolean
}

export default function SpotifyPlayer({ isPlaying }: SpotifyPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Handle play/pause based on isPlaying prop
    if (!audioRef.current) return

    try {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error)
        })
      } else {
        audioRef.current.pause()
      }
    } catch (error) {
      console.error("Error controlling audio playback:", error)
    }
  }, [isPlaying])

  return (
    <div className="hidden">
      <audio ref={audioRef} src="/audio/tomake-chai.mp3" loop preload="auto" style={{ display: "none" }} />
    </div>
  )
}
