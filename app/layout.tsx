import type { Metadata } from 'next'
import { Roboto, Roboto_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] })
const robotoMono = Roboto_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'MERN Stack Developer | Portfolio',
  description: 'MERN Stack Developer, founder, and Computer Science student at COMSATS University Islamabad',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} font-sans antialiased bg-[#1A1A1A] text-white`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
