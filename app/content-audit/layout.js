import { Poppins } from 'next/font/google'
import '../globals.css'
import './content-audit.css'
import AdNav from '../../components/AdNav'
import AdFooter from '../../components/AdFooter'

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
    canonical: 'https://poolbuildergrowth.com',
  },
}

export default function AdLayout({ children }) {
  return (
    <div className="content-audit-page">
      <AdNav />
      {children}
      <AdFooter />
    </div>
  )
}
