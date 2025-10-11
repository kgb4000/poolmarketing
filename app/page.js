'use client'

import React from 'react'
import { useState } from 'react'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import WhyPollBuildersNeedSpecialist from '@/components/WhyPollBuildersNeedSpecialist'
import Section4 from '@/components/Section4'
import Section5 from '../components/Section5'
import Section6 from '../components/Section6'
import Section7 from '../components/Section7'
import Section8 from '@/components/Section8'
import { CheckCircle } from 'lucide-react'
import { event } from '../lib/gtag'
import BlueprintModal from '@/components/BlueprintModal'

const Home = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    event({
      action: 'get_started_click',
      category: 'engagement',
      label: 'hero_cta',
      value: 1,
    })
  }

  return (
    <>
      <main>
        <div className='bg-slate-400 bg-blend-multiply bg-[url("/images/pool-builder-marketing.jpg")] bg-no-repeat bg-cover bg-center'>
          <div className="container max-w-8xl mx-auto px-6">
            <div className="max-w-4xl py-4 md:py-8">
              <div className="lg:my-20">
                <h1 className="text-sm md:text-lg text-white mb-2 md:mb-4 leading-tight font-semibold">
                  Pool Builder Marketing That Creates a Full Marketing System
                  for Your Business
                </h1>
                <h2 className="text-4xl lg:text-6xl max-w-4xl mx-auto font-extrabold text-white">
                  Don't stay invisible to homeowners ready to build. Partner
                  with a pool builder marketing specialist who's invested in
                  your success.
                </h2>
                <p className="text-sm md:text-xl max-w-2xl my-2 md:my-4 text-white">
                  Stop being invisible and losing jobs to competitors. With the
                  right marketing PARTNER, you'll attract serious homeowners who
                  value quality craftsmanship and are ready to build.
                </p>
                <p className="text-sm md:text-xl max-w-2xl my-2 md:my-4 text-white">
                  I partner with you to build a lead generation system you'll
                  understand, own, and control. Here's what we'll accomplish
                  together:
                </p>
                <ul className="text-white mb-4 lg:mb-8">
                  <li className="mb-4 flex items-start">
                    <CheckCircle className="w-[30px] h-[30px] md:w-8 md:h-8 text-green-400 mr-4" />
                    <p className="text-sm lg:text-xl">
                      Get more qualified leads without wasting money on dead
                      ends
                    </p>
                  </li>
                  <li className="mb-4 flex items-start">
                    <CheckCircle className="w-[30px] h-[30px] md:w-8 md:h-8 text-green-400 mr-4" />
                    <p className="text-sm lg:text-xl">
                      Book more projects with digital marketing designed for
                      pool builders
                    </p>
                  </li>
                  <li className="mb-4 flex items-start">
                    <CheckCircle className="w-[30px] h-[30px] md:w-8 md:h-8 text-green-400 mr-4" />
                    <p className="text-sm lg:text-xl">
                      Never miss a lead with automated follow-up and email
                      campaigns
                    </p>
                  </li>
                </ul>
                <>
                  <button
                    onClick={handleClick}
                    className="text-sm lg:text-2xl font-bold bg-green-500
                text-white hover:bg-green-600 transition-color px-6 py-6 lg:px-8 lg:py-8 rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer"
                  >
                    Get My Free Pool Builder Growth Blueprint
                  </button>
                  <BlueprintModal open={open} setOpen={setOpen} />
                </>
              </div>
            </div>
          </div>
        </div>
        <Section2 />
        <Section3 />
        <WhyPollBuildersNeedSpecialist />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </main>
    </>
  )
}

export default Home
