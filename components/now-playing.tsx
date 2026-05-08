'use client'

import { useEffect, useState } from 'react'

interface SpotifyTrack {
  isPlaying: boolean
  title?: string
  artist?: string
  url?: string
}

export function NowPlaying() {
  const [track, setTrack] = useState<SpotifyTrack | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchNowPlaying() {
      try {
        const response = await fetch('/api/spotify')
        const data = await response.json()
        setTrack(data)
      } catch (error) {
        console.error('Failed to fetch now playing:', error)
        setTrack({ isPlaying: false })
      } finally {
        setLoading(false)
      }
    }

    fetchNowPlaying()
    const interval = setInterval(fetchNowPlaying, 30000)
    return () => clearInterval(interval)
  }, [])

  if (loading) return null

  if (!track?.isPlaying) {
    return <p className="text-sm opacity-60">Not currently listening</p>
  }

  return (
    <div className="text-sm">
      <p className="opacity-60">Now playing on Spotify:</p>
      <a href={track.url} target="_blank" rel="noopener noreferrer">
        {track.title} — {track.artist}
      </a>
    </div>
  )
}
