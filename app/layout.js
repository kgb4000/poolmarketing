import { Poppins } from 'next/font/google'
import './globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Script from 'next/script'

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
    'Pool Builder Growth helps pool builders attract more customers with expert local SEO, content marketing, email campaigns, web design & development.',
  alternates: {
    canonical: 'https://poolbuildergrowth.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
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
