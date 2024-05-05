import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { fontContrailOne } from '@/lib/fonts'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: 'Full Stack Tool',
  description: 'List of tools for full stack developers',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="oB0kdf2_VvKkELCcNraxJAPze44Gs4DFafScoBjWGPI"
        />
      </head>
      <body className={fontContrailOne.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV !== 'development' && (
          <GoogleAnalytics gaId="G-Q8KFE0CW2Q" />
        )}
      </body>
    </html>
  )
}
