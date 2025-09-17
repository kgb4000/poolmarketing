import React from 'react'
import Button from './Button'

const Section5 = () => {
  return (
    <>
      <div className="container max-w-8xl mx-auto px-6 my-10 lg:my-40">
        <div className="max-w-2xl mx-auto ">
          <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4 leading-normal text-center max-w-4xl mx-auto">
            Digital Marketing That Turns Pool Builders Into Market Leaders
          </h2>
          <p className="text-md lg:text-lg mx-10 lg:max-w-2xl mx-auto text-center px-6 mb-4 lg:mb-10">
            From search everywhere optimization to websites to automation, every
            strategy is tailored to pool companies, so you get more visibility,
            more leads, and more profitable projects
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:border-[1px] border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <h3 className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              Local SEO for Pool Builders
            </h3>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              Lead local search results and attract high-quality leads when
              homeowners search for pool builders and pool contractors.
            </p>
          </div>
          <div className="lg:border-[1px] border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <h3 className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              Web Design & Development
            </h3>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              Professional, high-converting websites that showcase your work,
              turn visitors into leads, and keeps appearing in search engines
              and AI overviews.
            </p>
          </div>
          <div className="lg:border-[1px] border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <h3 className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              Aurthoritative Content Marketing
            </h3>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              Build authority and build trust with valuable content and blog
              posts that educates homeowners and showcases your expertise.
            </p>
          </div>
          <div className="lg:border-[1px] border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <h3 className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              Automated Solutions
            </h3>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              Streamline your operations with smart automation that handles
              repetitive tasks and keeps projects on track.
            </p>
          </div>
          <div className="lg:border-[1px] border-slate-100 p-6 lg:py-20 rounded-3xl lg:shadow-xl">
            <h3 className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
              Email Marketing for Pool Builders
            </h3>
            <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
              Streamline your operations with smart automation that handles
              repetitive tasks and keeps projects on track.
            </p>
          </div>
        </div>
        <Button
          buttonText="Get My Free Pool Builder Growth Blueprint"
          textSize="text-sm lg:text-2xl"
          bgColor="bg-green-500"
          textColor="text-white"
          hover="hover:bg-green-600"
        />
      </div>
    </>
  )
}

export default Section5
