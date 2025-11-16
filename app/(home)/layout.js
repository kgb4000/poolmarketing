import { Poppins } from 'next/font/google'
import './globals.css'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { GoogleTagManager } from '@next/third-parties/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'Pool Builder Marketing Agency | DC, MD & VA | Pool Builder Growth',
  description:
    'Pool builder marketing agency serving DC, MD & VA. Marketing strategies for pool builders that take you from $1 million to $10 million. Start Today!',
  alternates: {
    canonical: 'https://poolbuildergrowth.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/pool-builder-marketing.jpeg"
          type="image/jpeg"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="dns-prefetch"
          href="https://www.googletagmanager.com"
        />
        <link
          rel="dns-prefetch"
          href="https://www.google-analytics.com"
        />
        <style dangerouslySetInnerHTML={{
          __html: `
            .hero-section{position:relative;overflow:hidden}
            .hero-bg{position:absolute;inset:0;z-index:0}
            .hero-content{position:relative;z-index:10}
            .hero-overlay{position:absolute;inset:0;background:rgba(15,23,42,0.6)}
          `
        }} />
      </head>
      <GoogleTagManager gtmId="GTM-MJPH8V54" />
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
