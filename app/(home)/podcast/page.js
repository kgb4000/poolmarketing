import React from 'react'
import { CheckCircle, XCircle } from 'lucide-react'
import { ArrowRight, Minus } from 'lucide-react'

export const metadata = {
  title: 'Podcasts for Pool Builder Growth | A Pool Builder Marketing Agency',
  description:
    'Get insightful tips and strategies built for pool builders to attract the right clients.',
  alternates: {
    canonical: '/podcasts',
  },
}

export default function Podcasts() {
  return (
    <>
      <main>
        <div className="container max-w-8xl mx-auto px-6">
          <div className="lg:grid grid-cols-2 mb-10 lg:my-20 items-center gap-6">
            <div className="max-w-4xl py-4 md:py-2 :mb-10">
              <h1 className="text-sm md:text-lg text-black mb-2 md:mb-4 leading-tight font-light">
                Pool Builder Growth Podcast
              </h1>
              <h2 className="text-3xl md:text-5xl xl:text-7xl max-w-4xl mx-auto font-extrabold">
                Listen to Insigthful Tips and Strategies Designed to Help Pool
                Builders Improve Digital Marketing
              </h2>
              <p className="text-sm md:text-2xl max-w-2xl my-2 md:my-4">
                I help pool builders attract the right homeowners, win more
                bids, and grow with digital marketing that works.
              </p>
              <button
                className="text-sm lg:text-2xl font-bold bg-green-500
                text-white hover:bg-green-600 transition-color px-6 py-6 lg:px-8 lg:py-8 rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer"
              >
                Book Your Free Strategy Call
              </button>
            </div>
            <img
              src="/images/podcast-img.png"
              className="sm:w-full h-auto rounded-3xl"
              alt="SEO specialist at Pool Builder Growth."
            />
          </div>
        </div>
      </main>
    </>
  )
}
