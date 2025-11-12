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
  title:
    '#1 Pool Marketing Agency for Pool Builders in DC, Maryland, & Northern Virginia',
  description:
    'Pool builder marketing agency  helping pool builders attract more cleints with expert local SEO, content marketing, email campaigns and web design.',
  alternates: {
    canonical: 'https://poolbuildergrowth.com/free-90-day-blog-content-planner',
  },
}

export default function AdLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-MJPH8V54" />
      <body className={poppins.variable} suppressHydrationWarning={true}>
        <AdNav />
        {children}
        <AdFooter />
      </body>
    </html>
  )
}
