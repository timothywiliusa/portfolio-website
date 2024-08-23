import Navbar from "@/components/navbar"

import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from "@/context/active-section-context"
import Footer from "@/components/footer"
import LightDarkButton from "@/components/light-dark-button"
import ThemeContextProvider from "@/context/theme-context"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Timothy Wiliusa',
  description: 'full-stack web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-zinc-900 dark:text-zinc-400 dark:text-opacity-90`}>
        

      <ThemeContextProvider>
      

        <ActiveSectionContextProvider>
          <Navbar/>
          {children}
          <Footer/>
        </ActiveSectionContextProvider>

        <LightDarkButton/>

        </ThemeContextProvider>
        
      </body>
    </html>
  )
}
