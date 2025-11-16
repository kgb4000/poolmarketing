'use client'

import React from 'react'
import Button from './Button'
import { event } from '../lib/eventHelper'

const Section2 = () => {
  const handleClick = () => {
    try {
      event({
        action: 'ai_seo_checklist_click',
        category: 'engagement',
        label: 'section2_cta',
        value: 1,
      })
      window.location.href = '/ai-seo-checklist'
    } catch (error) {
      console.error('Error in handleClick:', error)
    }
  }
  return (
    <>
      <div className="container max-w-8xl mx-auto px-4 my-10 lg:my-20">
        <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4 leading-1 text-center max-w-4xl mx-auto">
          Struggling With Pool Builder Marketing for Your Company?
        </h2>
        <p className="text-md lg:text-lg lg:max-w-2xl lg:mx-auto text-center px-6 mb-4 lg:mb-10">
          If you're struggling with any of these issues, you’re not alone. But
          if you don't start fixing them now, these problems only get worse
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:border-[1px] border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              Your phone isn't ringing enough
            </p>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              You know you do great work, but homeowners can't find you online
              when they're ready to build.
            </p>
          </div>
          <div className="lg:border-[1px] border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              You’re competing on price, not quality
            </p>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              Every lead wants the cheapest option, even though your
              craftsmanship is worth premium pricing.
            </p>
          </div>
          <div className="lg:border-[1px] border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              You have no time for marketing
            </p>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              You know you need a better website and online presence, but when
              would you find the time.
            </p>
          </div>
          <div className="lg:border-[1px] border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              You're losing leads to competitors
            </p>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              Prospects go dark during the long decision making process and end
              up hiring someone else.
            </p>
          </div>
          <div className="lg:border-[1px] border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              You're wasting time with price shoppers
            </p>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              Hours spent on site visits and estimates for people who were never
              serious about building a swimming pool.
            </p>
          </div>
          <div className="lg:border-[1px] border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              You depend on Google & Facebook ads
            </p>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              Spending thousands on Google, Facebook, and Instagram ads without
              knowing what's working.
            </p>
          </div>
        </div>
        <div className="lg:max-w-xl mx-auto text-center">
          <p className="text-md lg:text-xl py-6 px-10 lg:px-10 lg:py-10">
            If you're nodding your head thinking{' '}
            <span className="italic font-bold">
              "That's exactly my situation,"{' '}
            </span>{' '}
            you're not alone and I want to partner with you to fix it.
          </p>
        </div>
        <>
          <Button
            onClick={handleClick}
            align="text-center"
            buttonText="Get My FREE AI SEO Checklist"
            textSize="text-sm lg:text-2xl"
            bgColor="bg-green-500"
            textColor="text-white"
            hover="hover:bg-green-600"
          />
        </>
      </div>
    </>
  )
}

export default Section2
