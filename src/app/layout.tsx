import './globals.css'
import type { Metadata } from 'next'
import { Public_Sans} from 'next/font/google'

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
