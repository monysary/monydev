import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

import { Lexend } from 'next/font/google'

export const metadata = {
  title: {
    default:
      'Mony Sary - Web Developer',
  },
  description:
    'I’m Mony, a fullstack web developer based in Los Angeles, CA. I specialize in creating user-friendly and responsive website and web applications to help businesses grow.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={"h-full antialiased " + lexend.className} suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
