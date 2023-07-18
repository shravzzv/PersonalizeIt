import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Templates by Sai Shravan - Fueling Productivity with Precision',
  description: `As an entrepreneur, I proudly operate this online business that exclusively offers an extensive collection of meticulously crafted Notion templates specifically designed for knowledge workers like yourself. My ultimate ambition is to carve out a niche as a trusted and respected platform for top-notch productivity tools.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <nav>
          <Navbar />
        </nav>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
