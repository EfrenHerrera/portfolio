import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import MouseFollower from './components/MouseFollower'
import NaviFly from './components/NaviFly'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Efren Herrera',
  description: 'Software Engineer / Mobile Developer / IA Enthusiast', 
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
        <div className='bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900'>
          <MouseFollower />
          <NaviFly/>
          {children}
        </div>
      </body>
    </html>
  )
}
