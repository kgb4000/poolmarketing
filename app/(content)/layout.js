import { Poppins } from 'next/font/google'
import '../(home)/globals.css'
import ContentAuditNav from '@/components/ContentAuditNav'
import AdFooter from '../../components/AdFooter'
import { GoogleTagManager } from '@next/third-parties/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'Get your free content audit | Pool Builder Growth.',
  description:
    'Pool builder marketing agency  helping pool builders attract more cleints with expert local SEO, content marketing, email campaigns and web design.',
  alternates: {
    canonical: 'https://poolbuildergrowth.com/content-audit',
  },
}

export default function ContentLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="AW-17704226239" />
      <body className={poppins.variable}>
        <ContentAuditNav />
        {children}
        <AdFooter />
      </body>
    </html>
  )
}
