export async function GET() {
  try {
    const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN
    const clientId = process.env.SPOTIFY_CLIENT_ID
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

    if (!refreshToken || !clientId || !clientSecret) {
      return Response.json(
        { error: 'Spotify credentials not configured' },
        { status: 200 }
      )
    }

    // Get new access token
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
      return Response.json(
        { error: 'Failed to get access token' },
        { status: 200 }
      )
    }

    const { access_token } = await tokenResponse.json()

    // Get currently playing track
    const playerResponse = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    )

    if (!playerResponse.ok) {
      return Response.json({ isPlaying: false }, { status: 200 })
    }

    const data = await playerResponse.json()

    if (!data.item) {
      return Response.json({ isPlaying: false }, { status: 200 })
    }

    return Response.json({
      isPlaying: data.is_playing,
      title: data.item.name,
      artist: data.item.artists[0].name,
      url: data.item.external_urls.spotify,
    })
  } catch (error) {
    console.error('Spotify API error:', error)
    return Response.json({ isPlaying: false }, { status: 200 })
  }
}
