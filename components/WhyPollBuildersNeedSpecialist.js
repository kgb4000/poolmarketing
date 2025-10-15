'use client'

import React from 'react'
import { useState } from 'react'
import Button from './Button'
import BlueprintModal from './BlueprintModal'
import { event } from '../lib/eventHelper'

const WhyPollBuildersNeedSpecialist = () => {
  const handleClick = () => {
    try {
      event({
        action: 'get_growth_blueprint_click',
        category: 'engagement',
        label: 'why_specialist_cta',
        value: 1,
      })
      window.location.href = '/growth-blueprint'
    } catch (error) {
      console.error('Error in handleClick:', error)
    }
  }
  return (
    <>
      <div className="container max-w-8xl mx-auto px-4 my-10 lg:my-20">
        <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4 leading-1 text-center max-w-4xl mx-auto">
          Why Pool Builder Marketing Requires a Specialized Approach
        </h2>
        <p className="text-md lg:text-lg lg:max-w-2xl lg:mx-auto text-center px-6 mb-4 lg:mb-10">
          If you're struggling with any of these issues, you’re not alone. But
          if you don't start fixing them now, they only get worse
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:border-[1px] border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              Long Sales Cycles
            </p>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              Homeowners take 6-18 months from first contact to signed contract.
              Generic agencies expect 30-day sales cycles and give up too early.
            </p>
          </div>
          <div className="lg:border-[1px] border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              High ticket Sales
            </p>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              $40,000-$150,000+ purchases require extensive trust-building that
              most home service marketing doesn't account for.
            </p>
          </div>
          <div className="lg:border-[1px] border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              Seasonal Business Patterns
            </p>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              Pool construction marketing must account for planning season
              (fall/winter) versus building season (spring/summer).
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
              Visual-heavy Sales Process
            </p>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              Homeowners buy with their eyes. Your swimming pool marketing must
              showcase stunning visuals and project galleries.
            </p>
          </div>
          <div className="lg:border-[1px] border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              Complex Buyer Journey
            </p>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              Zoning, permitting, financing, and design decisions create a
              unique path to purchase.
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm lg:text-xl py-6 px-10 lg:px-10 lg:py-10">
            That's why I built Pool Builder Growth specifically around how
            homeowners research and buy pools. Every strategy—from SEO to email
            automation to content marketing—is designed for the pool
            construction industry's unique challenges, not adapted from generic
            templates.
          </p>
          {/* <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
            Pool builders who work with specialized pool contractor marketing
            agencies see 3x more qualified leads than those using generic home
            service agencies.
          </p> */}
        </div>
        <>
          <Button
            onClick={handleClick}
            align="text-center"
            buttonText="Get My Free Pool Builder Growth Blueprint"
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

export default WhyPollBuildersNeedSpecialist
