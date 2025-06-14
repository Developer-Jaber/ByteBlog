import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navber from '@/components/Navber'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/context/AuthContext'
import AuthModal from '@/components/AuthModal'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'ByteBlog Website',
  description: 'your companion for all things ByteBlog'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Navber></Navber>
          {children}
          {/* Auth Modal */}
          <AuthModal></AuthModal>
          <Footer></Footer>
        </AuthProvider>
      </body>
    </html>
  )
}
