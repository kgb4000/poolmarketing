import React from 'react'
import Button from './Button'
import WebDesignCTA from '@/components/WebDesignCTA'

const GoFromMissed = () => {
  return (
    <div className="container max-w-8xl mx-auto px-4 my-10 lg:my-20">
      <h2 className="text-2xl lg:text-5xl font-bold text-black mb-4 leading-loose text-center max-w-5xl mx-auto">
        Go From Missed Leads to Excited New Clients With Custom Web Design
      </h2>
      <p className="text-md lg:text-lg lg:max-w-2xl mx-auto text-center px-6 mb-4 lg:mb-10 italic">
        Here’s what happens when homeowners land on a professional, custom pool
        builder website designed to impress
      </p>
      <div className="">
        <div className="grid grid-cols-2 mb-14 gap-10">
          <div className="max-w-2xl self-center">
            <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              Confidence is Sparked Instantly
            </p>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              Your site loads fast, looks polished, and works beautifully on
              mobile, making homeowners feel they’ve found a company they can
              trust. In just a few seconds, their uncertainty turns into
              relief—they finally feel safe putting their dream project in the
              right hands.
            </p>
          </div>
          <img
            src="/images/generate-qualified-leads.png"
            className="rounded-3xl"
          />
        </div>
        <div className="grid grid-cols-2 mb-14 gap-10">
          <div className="max-w-2xl order-2 self-center">
            <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              Your Portfolio Creates Desire
            </p>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              They scroll through stunning galleries, high-res photos, and
              videos that showcase your craftsmanship. With every image, they
              can imagine themselves relaxing by their new pool, proud to show
              friends and family what you’ve created.
            </p>
          </div>
          <img
            src="/images/generate-qualified-leads.png"
            className="rounded-3xl"
          />
        </div>
        <div className="grid grid-cols-2 mb-14 gap-10">
          <div className="max-w-2xl self-center">
            <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              Trust is Reinforced At Every Step
            </p>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              Clear service pages, easy navigation, and helpful resources show
              you’re a true professional. Instead of wondering “Can they handle
              this?” they feel reassured that you’re the expert who can bring
              their vision to life without stress or regret.
            </p>
          </div>
          <img
            src="/images/generate-qualified-leads.png"
            className="rounded-3xl"
          />
        </div>
        <div className="grid grid-cols-2 mb-14 gap-10">
          <div className="max-w-2xl order-2 self-center">
            <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              Taking Action Feels Effortless
            </p>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              With one click, they can call, request a quote, or schedule a
              consultation without frustration. The decision feels easy, almost
              natural—as if choosing your company was the obvious next step in
              making their dream backyard come true.
            </p>
          </div>
          <img
            src="/images/generate-qualified-leads.png"
            className="rounded-3xl"
          />
        </div>
      </div>

      <div className="lg:max-w-3xl mx-auto text-center">
        <p className="text-md lg:text-xl py-6 px-10 lg:px-10 lg:py-10">
          A powerful website doesn’t just inform, but inspires confidence,
          creates excitement, and builds an emotional connection. It transforms
          curious browsers into eager clients who can’t wait to work with you,
          turning their dream pool into reality.
        </p>
      </div>
      <WebDesignCTA label="from_missed_section" />
    </div>
  )
}

export default GoFromMissed
