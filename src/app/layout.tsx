import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { fontContrailOne } from '@/lib/fonts'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: 'Full Stack Tools',
  description: 'List of tools for full stack developers',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={fontContrailOne.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <GoogleAnalytics gaId="G-Q8KFE0CW2Q" />
      </body>
    </html>
  )
}
