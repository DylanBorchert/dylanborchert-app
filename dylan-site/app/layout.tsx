import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import NavBar from '@/components/NavBar'
import { ThemeProvider } from '@/context/ThemeContext'

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
    <ThemeProvider>
      <html lang="en">
        <body className={SpaceGrotesk.className + " text-foreground-color bg-background-color"}>
          <NavBar />
          {children}
        </body>
      </html>
    </ThemeProvider>
  )
}
