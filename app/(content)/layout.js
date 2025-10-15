import { Poppins } from 'next/font/google'
import '../(home)/globals.css'
import AdNav from '../../components/AdNav'
import AdFooter from '../../components/AdFooter'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'Get your free content audit.',
  description:
    'Pool builder marketing agency  helping pool builders attract more cleints with expert local SEO, content marketing, email campaigns and web design.',
  alternates: {
    canonical: 'https://poolbuildergrowth.com/content-audit',
  },
}

export default function ContentLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <AdNav />
        {children}
        <AdFooter />
      </body>
    </html>
  )
}
