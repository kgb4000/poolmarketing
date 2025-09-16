import React from 'react'
import Button from './Button'

const Section5 = () => {
  return (
    <>
      <div className="container max-w-8xl mx-auto px-6 my-40">
        <div className="max-w-2xl mx-auto ">
          <h2 className="text-5xl font-bold text-black mb-4 leading-tight text-center">
            Digital Marketing That Turns Pool Builders Into Market Leaders
          </h2>
          <p className="text-lg max-w-xl mx-auto text-center mb-10">
            From search everywhere optimization to websites to automation, every
            strategy is tailored to pool companies, so you get more visibility,
            more leads, and more profitable projects
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border-1 border-slate-300 py-20 rounded-3xl shadow-md">
            <h3 className="text-4xl pt-30 font-light px-10 max-w-sm">
              Local SEO for Pool Builders
            </h3>
            <p className="text-[1.3rem] px-10 py-10">
              Lead local search results and attract high-quality leads when
              homeowners search for pool builders and pool contractors.
            </p>
          </div>
          <div className="border-1 border-slate-300 py-20 rounded-3xl shadow-md">
            <h3 className="text-4xl pt-30 font-light px-10 max-w-sm">
              Web Design & Development
            </h3>
            <p className="text-[1.3rem] px-10 py-10">
              Professional, high-converting websites that showcase your work,
              turn visitors into leads, and keeps appearing in search engines
              and AI overviews.
            </p>
          </div>
          <div className="border-1 border-slate-300 py-20 rounded-3xl shadow-md">
            <h3 className="text-4xl pt-30 font-light px-10 max-w-sm">
              Content Marketing
            </h3>
            <p className="text-[1.3rem] px-10 py-10">
              Build authority and build trust with valuable content and blog
              posts that educates homeowners and showcases your expertise.
            </p>
          </div>
          <div className="border-1 border-slate-300 py-20 rounded-3xl shadow-md">
            <h3 className="text-4xl pt-30 font-light px-10 max-w-sm">
              Automated Solutions
            </h3>
            <p className="text-[1.3rem] px-10 py-10">
              Streamline your operations with smart automation that handles
              repetitive tasks and keeps projects on track.
            </p>
          </div>
          <div className="border-1 border-slate-300 py-20 rounded-3xl shadow-md">
            <h3 className="text-4xl pt-30 font-light px-10 max-w-sm">
              Email Marketing for Pool Builders
            </h3>
            <p className="text-[1.3rem] px-10 py-10">
              Streamline your operations with smart automation that handles
              repetitive tasks and keeps projects on track.
            </p>
          </div>
        </div>
        <Button
          buttonText="Get My Free Pool Builder Growth Blueprint Now"
          textSize="text-md lg:text-2xl"
          bgColor="bg-green-500"
          textColor="text-white"
          hover="hover:bg-green-600"
        />
      </div>
    </>
  )
}

export default Section5
