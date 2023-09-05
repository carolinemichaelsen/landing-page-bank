import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Public_Sans} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const publicSans = Public_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Easybank',
  description: 'Frontend Mentor Challenge — Coded by Caroline Michaelsen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={publicSans.className}>{children}</body>
    </html>
  )
}
