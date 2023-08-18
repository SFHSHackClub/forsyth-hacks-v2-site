import './globals.css'
import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'

const fira_code = Fira_Code({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Forsyth Hacks 2.0',
  description: 'A Hackathon Returning to Forsyth County',
  icons: '../../public/favicon.ico'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fira_code.className}>{children}</body>
    </html>
  )
}
