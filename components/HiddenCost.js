import React from 'react'
import Button from '@/components/Button'
import { event } from '../lib/eventHelper'
import WebDesignCTA from '@/components/WebDesignCTA'

const HiddenCost = () => {
  return (
    <>
      <div className="container max-w-8xl mx-auto px-4 my-10 lg:my-20">
        <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4 leading-tight text-center max-w-2xl mx-auto">
          The Hidden Cost of Poor Website Design
        </h2>
        <p className="text-md lg:text-lg lg:max-w-2xl mx-auto text-center px-6 mb-4 lg:mb-10 italic">
          An outdated website does more than look outdated. It creates doubt and
          pushes homeowners away before you can earn their trust.
        </p>
        <div className="max-w-4xl mx-auto px-6 lg:px-0">
          <p className="text-2xl leading-normal pb-6">
            When a homeowner begins the journey of hiring a pool builder, their
            first step is almost always online. They open Google, type in “pool
            builder near me”, and start clicking through websites.
          </p>
          <p className="text-2xl leading-normal pb-6">
            Now imagine what happens when they land on a site that looks
            outdated, slow, or confusing:
          </p>
          <ul className="leading-normal ml-10 list-disc">
            <li className="text-2xl leading-normal pb-6">
              The photos are small or blurry.
            </li>
            <li className="text-2xl leading-normal pb-6">
              The navigation is clunky, leaving them frustrated trying to find
              basic information.
            </li>
            <li className="text-2xl leading-normal pb-6">
              The site doesn’t load properly on their phone, forcing them to
              pinch, zoom, and scroll endlessly.
            </li>
            <li className="text-2xl leading-normal pb-6">
              There’s no clear way to request a quote or get in touch quickly.
            </li>
          </ul>
          <p className="text-2xl leading-normal pb-6">
            At that moment, the homeowner isn’t just unimpressed—they’re
            disappointed and doubtful. They start thinking:
          </p>
          <ul className="leading-normal ml-10 list-disc">
            <li className="text-2xl leading-normal pb-6">
              “If this is how the company presents themselves online, will they
              cut corners on my pool project too?”
            </li>
            <li className="text-2xl leading-normal pb-6">
              “I don’t feel confident trusting them with such a big investment.”
            </li>
            <li className="text-2xl leading-normal pb-6">
              “I’ll just look at the next builder’s website instead.”
            </li>
          </ul>
          <p className="text-2xl leading-normal pb-6">
            The truth is, a poorly designed pool company website makes potential
            clients feel anxious, uncertain, and skeptical about your business.
          </p>
          <p className="text-2xl leading-normal pb-6">
            And once that trust is lost, they’re unlikely to give you a second
            chance.
          </p>
          <p className="text-2xl leading-normal pb-6">
            A weak website isn’t just a technical problem. It’s an emotional
            barrier that pushes homeowners away from you and straight into the
            hands of your competitors.
          </p>
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
        <WebDesignCTA label="hiden_cost_section" />
      </div>
    </>
  )
}

export default HiddenCost
