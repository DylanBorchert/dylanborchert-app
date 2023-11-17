import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import NavBar from '@/components/NavBar'
import './globals.css'
import './component.css'

const SpaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'dylanborchert.ca',
  description: 'My Portfolio Website'
}

export default function RootLayout(
  {
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en">
      <body className={SpaceGrotesk.className + " text-white"}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
