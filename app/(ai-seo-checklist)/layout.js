import '../(home)/globals.css'
import { Poppins } from 'next/font/google'
import AISEONav from '@/components/AISEONav'
import AdFooter from '../../components/AdFooter'
import { GoogleTagManager } from '@next/third-parties/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'AI SEO Audit for Pool Builders – Free Interactive Checklist (2025)',
  description:
    'Free AI SEO audit built for pool builders. Check your website’s SEO, AI visibility, and local ranking score — and learn how to fix what’s holding you back.',
  alternates: {
    canonical: 'https://poolbuildergrowth.com/free-ai-seo-checklist',
  },
}

export default function AdLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-MJPH8V54" />
      <body className={poppins.variable}>
        <AISEONav />
        {children}
        <AdFooter />
      </body>
    </html>
  )
}
