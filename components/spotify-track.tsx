'use client'

import { useEffect, useState } from 'react'

interface SpotifyTrack {
  isPlaying: boolean
  title?: string
  artist?: string
  url?: string
}

export function SpotifyTrack() {
  const [track, setTrack] = useState<SpotifyTrack | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTrack() {
      try {
        const response = await fetch('/api/spotify')
        const data = await response.json()
        setTrack(data)
      } catch (error) {
        console.error('Failed to fetch Spotify track:', error)
        setTrack(null)
      } finally {
        setLoading(false)
      }
    }

    fetchTrack()
    const interval = setInterval(fetchTrack, 30000)

    return () => clearInterval(interval)
  }, [])

  if (loading || !track) {
    return null
  }

  if (!track.isPlaying || !track.title) {
    return null
  }

  return (
    <a
      href={track.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
    >
      Now playing: <span className="font-semibold">{track.title}</span> by {track.artist}
    </a>
  )
}
