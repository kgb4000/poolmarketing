import { Poppins } from 'next/font/google'
import './globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Script from 'next/script'
import Analytics from '../components/Analytics'
import { Suspense } from 'react'

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
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <body>
        <Nav />
        {children}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        {/* Load GA library */}
        {GA_ID ? (
          <>
            {/* GA library */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            {/* Init GA */}
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = window.gtag || function(){dataLayer.push(arguments);}

                gtag('js', new Date());
                gtag('config', '${GA_ID}', { send_page_view: false });
              `}
            </Script>
          </>
        ) : null}
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
