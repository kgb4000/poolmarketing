'use client'

import React from 'react'
import { useState } from 'react'
import Button from './Button'
import Image from 'next/image'
import { event } from '../lib/eventHelper'
import BlueprintModal from './BlueprintModal'

const Section3 = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    event({
      action: 'get_growth_blueprint_click',
      category: 'engagement',
      label: 'section3_cta',
      value: 1,
    })
    setOpen(true)
  }
  return (
    <>
      <section className="bg-slate-50 py-10 lg:py-20">
        <div className="container max-w-8xl mx-auto px-6 my-10 lg:my-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4 leading-tight text-center max-w-xl lg:max-w-4xl mx-auto">
            There's a Better Way to Grow Your Pool Construction Business
          </h2>
          <p className="text-xl max-w-xl mx-auto text-center mb-10">
            What if you could ...
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-1 border-slate-300 pb-10 rounded-3xl shadow-md">
              <img
                src="/images/generate-qualified-leads.png"
                className="rounded-t-3xl"
                alt="Pool marketing that generates 20+ leads per month."
                title="Pool marketing that generates 20+ leads per month."
              />
              <p className="lg:text-[1.4rem] px-10 lg:px-10 py-6 lg:py-10">
                Generate 20+ qualified leads per month without chasing referrals
                or paying for expensive ads.
              </p>
            </div>
            <div className="border-1 border-slate-300 pb-10 rounded-3xl shadow-md">
              <img
                src="/images/pool-marketing-growth.png"
                className="rounded-t-3xl"
                alt="A pool proposal system that is automated to save time."
                title="A pool proposal system that is automated to save time."
              />
              <p className="lg:text-[1.4rem] px-10 lg:px-10 py-6 lg:py-10">
                Cut proposal estimation time by 75% with automated proposal
                systems that win more bids.
              </p>
            </div>
            <div className="border-1 border-slate-300 pb-10 rounded-3xl shadow-md">
              <img
                src="/images/homeowners-looking-to-buy-a-pool.png"
                className="rounded-t-3xl"
                alt="Happy couple waiting to get quote on pool service."
                title="Happy couple waiting to get quote on pool service."
              />
              <p className="lg:text-[1.4rem] px-10 lg:px-10 py-6 lg:py-10">
                Attract homeowners who value quality work and craftsmanship over
                the lowest price.
              </p>
            </div>
            <div className="border-1 border-slate-300 pb-10 rounded-3xl shadow-md">
              <img
                src="/images/project-management.png"
                className="rounded-t-3xl"
                alt="Pool project management."
                title="Pool project management."
              />
              <p className="lg:text-[1.4rem] px-10 lg:px-10 py-6 lg:py-10">
                Keep every project on track with automated communication that
                impresses clients
              </p>
            </div>
            <div className="border-1 border-slate-300 pb-10 rounded-3xl shadow-md">
              <img
                src="/images/pool-under-construction.png"
                className="rounded-t-3xl"
                alt="New swimming pool being built in a backyard."
                title="New swimming pooll being built."
              />
              <p className="lg:text-[1.4rem] px-10 lg:px-10 py-6 lg:py-10">
                Focus on building pools while we handle your entire online
                marketing machine.
              </p>
            </div>
            <div className="border-1 border-slate-300 pb-10 rounded-3xl shadow-md">
              <img
                src="/images/we-form-a-partnership.png"
                className="rounded-t-3xl"
                alt="We become partners."
                title="We become partners."
              />
              <p className="lg:text-[1.4rem] px-10 lg:px-10 py-6 lg:py-10">
                Work with a partner that handles the digital marketing, while
                you handle building pools.
              </p>
            </div>
          </div>
          <div className="lg:max-w-2xl mx-auto text-center">
            <p className="text-md lg:text-xl py-6 px-10 lg:px-10 lg:py-10">
              If you're nodding your head thinking{' '}
              <span className="italic font-bold">
                "That's exactly what I need for my company,"
              </span>{' '}
              I want this for you. I will partner with your company to make you
              become a more profitable business.
            </p>
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
            <BlueprintModal open={open} setOpen={setOpen} />
          </>
        </div>
      </section>
    </>
  )
}

export default Section3
