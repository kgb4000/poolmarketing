'use client'

import React from 'react'
import { useState } from 'react'
import Button from './Button'
import { CheckCircle } from 'lucide-react'
import { event } from '../lib/eventHelper'
import BlueprintModal from './BlueprintModal'

const Section4 = () => {
  const handleClick = () => {
    try {
      event({
        action: 'ai_marketing_guide_click',
        category: 'engagement',
        label: 'section4_cta',
        value: 1,
      })
      window.location.href = '/7-day-ai-marketing-guide'
    } catch (error) {
      console.error('Error in handleClick:', error)
    }
  }
  return (
    <>
      <div className=' bg-slate-400 bg-[url("/images/pool-builder-smiling-in-front-of-pool.jpg")] bg-blend-multiply bg-no-repeat bg-cover bg-fixed'>
        <div className="container max-w-7xl mx-auto px-6 py-16 lg:py-40">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight text-center max-w-xl lg:max-w-4xl mx-auto">
            Pool Builder Marketing Services That Transform Your Business
          </h2>
          <p className="text-md lg:text-lg lg:max-w-3xl mx-auto text-center mb-4 lg:mb-10 text-white">
            What if every time a homeowner searched for a pool builder, they
            found you first, and they couldn't wait to work with you? That's
            what my pool contractor marketing strategies help you achieve:
            trust, more visibility, and more leads
          </p>
          <div className=" flex flex-col md:gap-10 max-w-3xl text-white">
            <div className="pb-2 lg:pb-10 rounded-3xl">
              <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-xl">
                Showcase Your Best Work. Convert Visitors Into Clients.
              </p>
              <p className="text-xl lg:text-2xl lg:px-10 py-6 font-extrabold max-w-xl text-orange-600">
                Pool Builder Web Designs That Works as Hard as You Do
              </p>
              <p className="text-md lg:text-xl lg:px-10 font-light max-w-2xl mb-4">
                Think of your website as your best salesperson—one that works
                24/7, never takes a day off, and never misses a follow-up. Too
                many pool companies treat their website like an online brochure.
                The problem? Brochures don’t sell. I build websites that do the
                heavy lifting for you by capturing attention, earning trust, and
                motivating homeowners to reach out.
              </p>
              <p className="text-md lg:text-xl lg:px-10 font-light max-w-2xl mb-4">
                When a potential client visits your site, they should
                immediately feel: “This is the builder I can trust with my
                backyard.”
              </p>
              <p className="text-md lg:text-xl lg:px-10 font-light max-w-2xl mb-4">
                That’s what I design for.
              </p>
              <ul className="lg:px-10 py-4 ">
                <li className="text-md lg:text-xl pb-4 flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                  <span>
                    Conversion-focused copywriting that speaks to what
                    homeowners truly want: beauty, reliability, and confidence.
                  </span>
                </li>
                <li className="text-md lg:text-xl pb-4 flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                  <span>
                    Stunning photo & video galleries that showcase your
                    craftsmanship and make dream pools feel within reach.
                  </span>
                </li>
                <li className="text-md lg:text-xl pb-4 flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                  <span>
                    Lead qualification systems that save you time by filtering
                    out tire-kickers and delivering only serious inquiries.
                  </span>
                </li>
                {/* <li className="text-md lg:text-xl pb-4 flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                  <span>
                    Mobile-first optimization so homeowners get a seamless
                    experience whether they’re on their phone, tablet, or
                    desktop.
                  </span>
                </li> */}
              </ul>
            </div>
            <div className="pb-2 lg:pb-10 rounded-3xl">
              <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-xl">
                Automate Follow-Up. Close More Deals.
              </p>
              <p className="text-xl lg:text-2xl lg:px-10 py-6 font-extrabold max-w-xl text-orange-600">
                Smart Systems That Work While You Build
              </p>
              <p className="text-md lg:text-xl lg:px-10 font-light max-w-2xl mb-4">
                Here’s the truth: most homeowners aren’t ready to sign a
                contract on the first call. They’re comparing, planning, and
                saving. Without a follow-up system in place, you risk losing
                them to another builder who stayed in touch.
              </p>
              <p className="text-md lg:text-xl lg:px-10 font-light max-w-2xl mb-4">
                That’s where automation changes everything. I help you stay
                top-of-mind automatically, so even if months go by, when they’re
                ready to move forward, they think of you first.
              </p>
              <ul className="lg:px-10 py-4">
                <li className="text-md lg:text-xl pb-4 flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                  <span>
                    Automated email sequences that build trust, showcase your
                    expertise, and gently guide prospects toward a “yes.”
                  </span>
                </li>
                {/* <li className="text-md lg:text-xl pb-4 flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                  <span>
                    Proposal generation systems that save you hours of admin
                    work while impressing homeowners with fast, professional
                    quotes.
                  </span>
                </li> */}
                <li className="text-md lg:text-xl pb-4 flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                  <span>
                    Client workflows that streamline communication and give your
                    buyers a smooth, hassle-free experience.
                  </span>
                </li>
                <li className="text-md lg:text-xl pb-4 flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                  <span>
                    Nurturing campaigns that keep you connected and turn “not
                    right now” into “when can we start?”
                  </span>
                </li>
              </ul>
            </div>
            <div className="pb-2 lg:pb-10 rounded-3xl">
              <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-xl">
                Be the Expert They Find First When They Search For Pool
                Builders.
              </p>
              <p className="text-xl lg:text-2xl lg:px-10 py-6 font-extrabold max-w-xl text-orange-600">
                Search Everywhere Optimization & Content Marketing That Dominate
                Your Market
              </p>
              <p className="text-md lg:text-xl lg:px-10 font-light max-w-2xl mb-4">
                Right now, homeowners in your city are searching for pool
                builders. The only question is: are they finding you, or your
                competitor?
              </p>
              <p className="text-md lg:text-xl lg:px-10 font-light max-w-2xl mb-4">
                With the right SEO and content strategy, your company shows up
                first—right where your next client is looking. From Google
                searches to AI-driven results, I help you stand out as the
                builder who not only builds pools but builds trust and authority
                online.
              </p>
              <ul className="lg:px-10 py-4">
                <li className="text-md lg:text-xl pb-4 flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                  Local SEO that ensures you dominate searches in your area, not
                  just on page two but at the very top.
                </li>
                <li className="text-md lg:text-xl pb-4 flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                  Google Business Profile optimization that drives calls,
                  requests for directions, and immediate inquiries.
                </li>
                <li className="text-md lg:text-xl pb-4 flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                  Content marketing that positions you as the local expert
                  homeowners can rely on, building authority with every blog,
                  guide, and project showcase.
                </li>
                <li className="text-md lg:text-xl pb-4 flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                  Future-proofed SEO strategies designed to keep you visible as
                  search technology evolves with AI and voice search.
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:max-w-3xl mx-auto text-center">
            <p className="text-md lg:text-xl py-4 px-10 lg:px-10 lg:py-10 text-white">
              If you’re nodding along thinking,{' '}
              <span className="italic font-bold">
                “This is exactly what I need,”
              </span>
              you’re in the right place. My goal isn’t just to build you a
              website or run ads. It’s to work together in turning your pool
              company into a more profitable, in-demand business.
            </p>
          </div>
          <>
            <Button
              onClick={handleClick}
              align="text-center"
              buttonText="Get My 7-Day AI Marketing Guide"
              textSize="text-sm lg:text-2xl"
              bgColor="bg-green-500"
              textColor="text-white"
              hover="hover:bg-green-600"
            />
          </>
        </div>
      </div>
    </>
  )
}

export default Section4
