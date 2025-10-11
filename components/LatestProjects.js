import React from 'react'
import WeakDesignCTA from '@/components/WebDesignCTA'

const LatestProjects = () => {
  return (
    <>
      <div className="container max-w-8xl mx-auto px-4 my-10 lg:my-20">
        <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4 leading-normal text-center max-w-3xl mx-auto">
          Choose the Website Package That Unlocks Your Growth
        </h2>
        <p className="text-md lg:text-lg lg:max-w-xl lg:mx-auto text-center px-6 mb-4 lg:mb-10 italic">
          A professional website is the foundation that makes homeowners use to
          trust your company online.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:border-[1px] border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              Foundation Package
            </p>
            <p className="text-3xl lg:text-3xl lg:px-10 lg:pt-4 font-light max-w-md italic">
              (Starting at $2500)
            </p>
            <p className="text-[1.3rem] pt-2 lg:px-10 lg:py-4">
              Best for smaller pool builders or those launching their first
              professional site.
            </p>
            <p className="text-[1.3rem] lg:px-10">Includes:</p>
            <p className="text-[1.3rem] pt-2 lg:px-10">
              Custom 5-page design (Home, About, Services, Gallery, Contact)
            </p>
            <p className="text-[1.3rem] pt-2 lg:px-10">
              Mobile-friendly and Local SEO-optimized
            </p>
            <p className="text-[1.3rem] pt-2 lg:px-10">Lead form integration</p>
            <p className="text-[1.3rem] pt-2 lg:px-10">
              Portfolio gallery + testimonials section
            </p>
            <p className="text-[1.3rem] pt-2 lg:px-10">
              Secure hosting & SSL setup
            </p>
          </div>
          <div className="lg:border-[1px] border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              Momentum Package
            </p>
            <p className="text-3xl lg:text-3xl lg:px-10 lg:pt-4 font-light max-w-md italic">
              (Starting at $4,500)
            </p>
            <p className="text-[1.3rem] pt-2 lg:px-10 lg:py-4">
              Best for pool builders ready to scale their business and generate
              consistent leads.
            </p>
            <p className="text-[1.3rem] lg:px-10">Includes:</p>
            <p className="text-[1.3rem] pt-2 lg:px-10">
              Everything in Foundation
            </p>
            <p className="text-[1.3rem] pt-2 lg:px-10">
              Expanded pages for multiple services/locations
            </p>
            <p className="text-[1.3rem] pt-2 lg:px-10">
              Advanced galleries with before/after sliders & video integration
            </p>
            <p className="text-[1.3rem] pt-2 lg:px-10">
              Blog setup for SEO & content marketing
            </p>
            <p className="text-[1.3rem] pt-2 lg:px-10">
              Email marketing integration
            </p>
          </div>
          <div className="lg:border-[1px] border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              Market Leader
            </p>
            <p className="text-3xl lg:text-3xl lg:px-10 lg:pt-4 font-light max-w-md italic">
              (Starting at $7,500)
            </p>
            <p className="text-[1.3rem] pt-2 lg:px-10 lg:py-4">
              Best for established pool companies who want to dominate their
              market.
            </p>
            <p className="text-[1.3rem] lg:px-10">Includes:</p>
            <p className="text-[1.3rem] pt-2 lg:px-10">
              Everything in Momentum
            </p>
            <p className="text-[1.3rem] pt-2 lg:px-10">
              Advanced SEO with schema markup for local search
            </p>
            <p className="text-[1.3rem] pt-2 lg:px-10">
              Advanced SEO with schema markup for local search
            </p>
            <p className="text-[1.3rem] pt-2 lg:px-10">
              AI chatbot integration for instant lead capture
            </p>
            <p className="text-[1.3rem] pt-2 lg:px-10">
              Marketing automation workflows (email + SMS follow-ups)
            </p>
            <p className="text-[1.3rem] pt-2 lg:px-10">
              Ongoing monthly support & updates{' '}
              <span className="italic">(With Local SEO service)</span>
            </p>
          </div>
        </div>
        <div className="lg:max-w-xl mx-auto text-center">
          <p className="text-md lg:text-xl py-6 px-10 lg:px-10 lg:py-10">
            If you're thinking{' '}
            <span className="italic font-bold">
              "I need a pool builder website like these,"{' '}
            </span>{' '}
            let's build a new up-to-date-website that make you look like an
            expert.
          </p>
        </div>
        <WeakDesignCTA label="latest_work_section" />
      </div>
    </>
  )
}

export default LatestProjects
