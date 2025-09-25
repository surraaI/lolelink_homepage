import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zulu Test WebApp',
  description: 'A Next.js project with Shadcn UI library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style>
          {`
            @import url("https://fonts.googleapis.com/css?family=Sora:var(--heading-h2-font-weight),700,600|Inter:400|Manrope:500,600");
          `}
        </style>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

