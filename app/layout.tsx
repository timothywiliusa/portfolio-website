import Navbar from "@/components/navbar"

import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from "@/context/active-section-context"
import Footer from "@/components/footer"
import LightDarkButton from "@/components/light-dark-button"
import ThemeContextProvider from "@/context/theme-context"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wiliusa | Personal Portfolio',
  description: 'web developer, data science, automation, full-stack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-zinc-900 dark:text-gray-50 dark:text-opacity-90`}>
        

      <ThemeContextProvider>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-orange-900"></div>

        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-red-900">
        
        </div>
        

          <ActiveSectionContextProvider>
            <Navbar/>
            {children}
            <Footer />
            
          </ActiveSectionContextProvider>

          <LightDarkButton/>

        </ThemeContextProvider>
        
      </body>
    </html>
  )
}
