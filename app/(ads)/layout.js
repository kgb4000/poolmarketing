import '../(home)/globals.css'
import { Poppins } from 'next/font/google'
import BookCall from '@/components/BookCallNav'
import AdFooter from '../../components/AdFooter'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'Free Blog System Template | Pool Builder Growth',
  description:
    'Pool builder marketing agency  helping pool builders attract more cleints with expert local SEO, content marketing, email campaigns and web design.',
  alternates: {
    canonical: 'https://poolbuildergrowth.com/blog-system',
  },
}

export default function AdLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <BookCall />
        {children}
        <AdFooter />
      </body>
    </html>
  )
}
