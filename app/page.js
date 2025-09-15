'use client'

import React from 'react'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '@/components/Section4'
import Section5 from '../components/Section5'
import Section6 from '../components/Section6'
import Section7 from '../components/Section7'
import Section8 from '@/components/Section8'
import Button from '@/components/Button'
import { CheckCircle } from 'lucide-react'

const PoolBuilderMarketingSite = () => {
  return (
    <>
      <main>
        <div className='bg-slate-50 bg-blend-multiply bg-[url("/images/pool-builder-marketing.jpg")] bg-no-repeat bg-cover bg-center'>
          <div className="container max-w-8xl mx-auto px-6">
            <div className="max-w-4xl py-8">
              <div className="my-20">
                <h1 className="text-md text-white mb-4 leading-tight font-light">
                  #1 Pool Marketing Agency for Pool Builders in DC, Maryland, &
                  Northern Virginia
                </h1>
                <p className="text-7xl max-w-4xl mx-auto font-extrabold text-white">
                  Don’t Stay Invisible.
                  <span className="block">
                    Get Found by Homeowners Ready to Build Pools in Your City.
                  </span>
                </p>
                <p className="text-xl max-w-2xl my-6 text-white">
                  Stop being invisible and losing jobs to competitors. With the
                  right marketing, you’ll attract serious homeowners who value
                  quality craftsmanship and are ready to build. I help pool
                  builders:
                </p>
                <ul className="text-white mb-8">
                  <li className="mb-4 flex items-center text-xl">
                    <CheckCircle className="size-6 text-green-400 mr-4" />
                    <p>
                      Get more qualified leads without wasting money on dead
                      ends
                    </p>
                  </li>
                  <li className="mb-4 flex items-center text-xl">
                    <CheckCircle className="size-6 text-green-400 mr-4" />
                    Book more projects with marketing designed to convert
                  </li>
                  <li className="mb-4 flex items-center text-xl">
                    <CheckCircle className="size-6 text-green-400 mr-4" />
                    Save time with automated follow-up and email campaigns
                  </li>
                </ul>
                <button
                  className="text-2xl font-bold bg-green-500
                text-white hover:bg-green-600 transition-color px-8 py-8 rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer"
                >
                  Get My Free Pool Builder Growth Blueprint Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </main>
    </>
  )
}

export default PoolBuilderMarketingSite
