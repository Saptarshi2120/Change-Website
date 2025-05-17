"use client"

import { useRef, useState } from "react"

export default function SpotifyPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [hasStarted, setHasStarted] = useState(false)

  const handlePlay = () => {
    if (!audioRef.current) return
    audioRef.current.play().catch((error) => {
      console.error("Autoplay error:", error)
    })
    setHasStarted(true)
  }

  return (
    <>
      {!hasStarted && (
        <button
          onClick={handlePlay}
          className="fixed bottom-4 left-4 z-50 bg-pink-500 text-white px-4 py-2 rounded shadow-md hover:bg-pink-600 transition"
        >
          Play Background Music
        </button>
      )}
      <audio
        ref={audioRef}
        src="/audio/tomake-chai.mp3"
        loop
        preload="auto"
      />
    </>
  )
}
