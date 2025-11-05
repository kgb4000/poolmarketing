import { Poppins } from 'next/font/google'
import './globals.css'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import GoogleAnalytics from '../../components/GoogleAnalytics'
import Script from 'next/script'
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
    'Pool builder marketing agency serving DC, MD & VA. Generate 20+ qualified leads per month with specialized marketing for pool construction companies.',
  alternates: {
    canonical: 'https://poolbuildergrowth.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <GoogleTagManager gtmId="AW-17704226239" />
      <body>
        <Nav />
        {children}
        <Footer />
        <Script
          id="mcjs"
          strategy="afterInteractive"
          src="https://chimpstatic.com/mcjs-connected/js/users/9709f951450aedeb01b57d0ed/f4500c3bedf954eb89a9ac706.js"
        />
      </body>
    </html>
  )
}
