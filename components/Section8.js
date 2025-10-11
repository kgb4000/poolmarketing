import React from 'react'
import { CheckCircle } from 'lucide-react'

const Section8 = () => {
  return (
    <>
      <div
        id="#contact"
        className='bg-slate-500 bg-[url("/images/ready-for-pool-marketing-bg.png")] bg-no-repeat bg-cover bg-center bg-blend-multiply'
      >
        <div className="container max-w-8xl mx-auto py-10 lg:py-40 lg:grid grid-cols-2 justify-between px-6 lg:px-0">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight text-center lg:text-left max-w-4xl mx-auto">
              Ready to Partner With Me To Transform Your Pool Business With
              Proven Pool Builder Marketing?
            </h2>
            <p className="text-md lg:text-xl text-white mb-6">
              A website is just the start. To win in today's market, you need a
              complete pool builder marketing system that attracts serious
              homeowners, builds trust, and closes projects on autopilot.
            </p>
            <ul className="text-white mb-8">
              <li className="text-md lg:text-xl pb-4 flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                <span>
                  Websites built for conversions that showcase your best work
                  and capture real leads
                </span>
              </li>
              <li className="text-md lg:text-xl pb-4 flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                Lead-nurturing systems that keep you top-of-mind until
                homeowners are ready to buy
              </li>
              <li className="text-md lg:text-xl pb-4 flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                Local SEO & content marketing that position you as the #1 pool
                builder in your city
              </li>
              <li className="text-md lg:text-xl pb-4 flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                Email automation & workflows that handle follow-up and eliminate
                lost opportunities
              </li>
            </ul>
            <p className="text-md text-white max-w-xl font-light">
              Join the pool builders who are transforming their businesses with
              strategic marketing that goes beyond a website and delivering
              steady, qualified leads and more profitable projects.
            </p>
          </div>
          <div>
            <form className="border-2 border-white py-10 lg:py-20 rounded-2xl px-6 lg:px-20 max-w-xl mt-10">
              <input
                className="border-1 py-4 px-4 rounded-xl mb-4 lg:mb-10 block w-full focus:outline-0"
                placeholder="Name"
              />
              <input
                className="border-1 py-4 px-4 rounded-xl mb-4 lg:mb-10 block w-full focus:outline-0"
                placeholder="Email"
              />
              <textarea
                rows="4"
                className="border-2 py-4 px-4 rounded-xl mb-4 lg:mb-10 block w-full focus:outline-0"
                placeholder="What's your biggest hurdle?"
              ></textarea>
              <input
                type="submit"
                value="Get in Touch"
                className="bg-orange-500 py-4 px-4 text-white rounded-xl block w-full mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section8
