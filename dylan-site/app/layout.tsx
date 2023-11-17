import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import './component.css'
import NavBar from '@/components/NavBar'

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
