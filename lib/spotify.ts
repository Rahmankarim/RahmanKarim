export interface SpotifyTrack {
  name: string
  artist: string
  url: string
  image: string
  isPlaying: boolean
}

export async function getCurrentlyPlaying(): Promise<SpotifyTrack | null> {
  try {
    const clientId = process.env.SPOTIFY_CLIENT_ID
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
    const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN

    if (!clientId || !clientSecret || !refreshToken) {
      console.warn('Spotify credentials not configured')
      return null
    }

    // Get access token
    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=refresh_token&refresh_token=' + refreshToken,
    })

    if (!tokenResponse.ok) {
      console.error('Failed to get Spotify access token')
      return null
    }

    const { access_token } = await tokenResponse.json()

    // Get currently playing track
    const playResponse = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    )

    if (!playResponse.ok || playResponse.status === 204) {
      return null
    }

    const data = await playResponse.json()

    if (!data.item) {
      return null
    }

    return {
      name: data.item.name,
      artist: data.item.artists[0].name,
      url: data.item.external_urls.spotify,
      image: data.item.album.images[0]?.url || '',
      isPlaying: data.is_playing,
    }
  } catch (error) {
    console.error('Error fetching Spotify data:', error)
    return null
  }
}
