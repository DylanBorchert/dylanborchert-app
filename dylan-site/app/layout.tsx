import { Space_Grotesk } from 'next/font/google'
import NavBar from '@/components/Navigation/NavBar'
import dynamic from "next/dynamic";
const ThemeProvider = dynamic(() => import("@/context/ThemeProvider"), {
  ssr: false,
});

import './globals.css'
import './component.css'

const SpaceGrotesk = Space_Grotesk({ subsets: ['latin'] })


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
