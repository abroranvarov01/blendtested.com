import type { Metadata } from 'next'
import { Inter, Crimson_Text } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _crimsonText = Crimson_Text({ 
  weight: ['400', '600', '700'],
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: 'BlendTested - Expert Kitchen Appliance Reviews & Guides',
  description: 'Comprehensive reviews and buying guides for kitchen small appliances. Find the best blenders, mixers, coffee makers, and more with our expert testing.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
