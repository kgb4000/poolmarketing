import React from 'react'
import Button from './Button'
import WebDesignCTA from '@/components/WebDesignCTA'

const EverythingYouNeed = () => {
  return (
    <div className="bg-slate-50 py-10 lg:py-20">
      <div className="container max-w-8xl mx-auto px-4 my-10 lg:my-20">
        <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4 leading-normal text-center max-w-4xl mx-auto">
          Everything You Need in a High-Coverting Pool Company Website
        </h2>
        <p className="text-md lg:text-lg lg:max-w-xl lg:mx-auto text-center px-6 mb-4 lg:mb-10">
          From design and SEO to galleries, automation, and AI-driven tools, we
          deliver websites that attract, impress, and convert homeowners into
          clients
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:border-[1px] bg-white border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              Custom Designs that Reflect Your Brand
            </p>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              Your website be feel unique, professional, and unmistakably yours.
              Homeowners will instantly see that you take pride in your work and
              they’ll trust you to take pride in theirs.
            </p>
          </div>
          <div className="lg:border-[1px] bg-white  border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              Local SEO-Optimized for Local Growth
            </p>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              Instead of wondering why no one calls, you’ll feel confident
              knowing homeowners can actually find your pool construction
              company on Google and AI searches.
            </p>
          </div>
          <div className="lg:border-[1px] bg-white  border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              Mobile-Friendly and Responsive Web Designs
            </p>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              Instead of frustration, homeowners will feel comfort knowing you
              value their time and make it easy to connect from anywhere.
            </p>
          </div>
          <div className="lg:border-[1px] bg-white  border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              Galleries and Project Showcases
            </p>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              Homeowners won’t just see your work—they’ll picture themselves
              enjoying it, and that emotional spark makes them want to call you
              first.
            </p>
          </div>
          <div className="lg:border-[1px] bg-white  border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              Lead Capture and Follow-Up
            </p>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              Integrated chatbots, smart forms, and automated follow-up emails
              or make sure no lead slips away.
            </p>
          </div>
          <div className="lg:border-[1px] bg-white  border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              CRM and Marketing Automation
            </p>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              Every inquiry flows seamlessly into your CRM with automated
              reminders, tracking, and nurture campaigns.
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
        <WebDesignCTA />
      </div>
    </div>
  )
}

export default EverythingYouNeed
