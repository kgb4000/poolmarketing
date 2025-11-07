import '../(home)/globals.css'
import { Poppins } from 'next/font/google'
import AdNav from '../../components/AdNav'
import AdFooter from '../../components/AdFooter'
import { GoogleTagManager } from '@next/third-parties/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: '7 Day AI Marketing Guide for Pool Builders | Pool Builder Growth',
  description:
    'Pool builder marketing agency  helping pool builders attract more cleints with expert local SEO, content marketing, email campaigns and web design.',
  alternates: {
    canonical: 'https://poolbuildergrowth.com/7-day-ai-marketing-guide',
  },
}

export default function AdLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-MJPH8V54" />
      <body className={poppins.variable}>
        <AdNav />
        {children}
        <AdFooter />
      </body>
    </html>
  )
}
