import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import NavBar from '@/components/NavBar'
import dynamic from "next/dynamic";
const ThemeProvider = dynamic(() => import("@/context/ThemeProvider"), {
  ssr: false,
});

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
    <html lang="en" className={SpaceGrotesk.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
