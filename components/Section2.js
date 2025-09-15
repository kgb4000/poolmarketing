import React from 'react'
import Button from './Button'

const Section2 = () => {
  return (
    <>
      <div className="container max-w-8xl mx-auto px-6 my-20">
        <h2 className="text-5xl font-bold text-black mb-4 leading-tight text-center max-w-4xl mx-auto">
          Struggling With Digital Marketing for Your Pool Company?
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-center mb-10">
          If you're struggling with any of these issues, you’re not alone. But
          if you don't start fixing them now, they only get worse
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border-1 border-slate-300 py-20 rounded-3xl shadow-md">
            <p className="text-4xl px-10 pt-10 font-light max-w-md">
              Your phone isn't ringing enough
            </p>
            <p className="text-[1.3rem] px-10 py-10">
              You know you do great work, but homeowners can't find you online
              when they're ready to build.
            </p>
          </div>
          <div className="border-1 border-slate-300 py-20 rounded-3xl shadow-md">
            <p className="text-4xl px-10 pt-10 font-light max-w-md">
              You’re competing on price, not quality
            </p>
            <p className="text-[1.3rem] px-10 py-10">
              Every lead wants the cheapest option, even though your
              craftsmanship is worth premium pricing.
            </p>
          </div>
          <div className="border-1 border-slate-300 py-20 rounded-3xl shadow-md">
            <p className="text-4xl px-10 pt-10 font-light max-w-md">
              You have no time for marketing
            </p>
            <p className="text-[1.3rem] px-10 py-10">
              You know you need a better website and online presence, but when
              would you find the time.
            </p>
          </div>
          <div className="border-1 border-slate-300 py-20 rounded-3xl shadow-md">
            <p className="text-4xl px-10 pt-10 font-light max-w-md">
              You'r losing leads to competitors
            </p>
            <p className="text-[1.3rem] px-10 py-10">
              Propects go dark during the long decision making process and end
              up hiring someone else.
            </p>
          </div>
          <div className="border-1 border-slate-300 py-20 rounded-3xl shadow-md">
            <p className="text-4xl px-10 pt-10 font-light max-w-md">
              You're wasting time with tire-kickers
            </p>
            <p className="text-[1.3rem] px-10 py-10">
              Hours spent on estimates for people who were never serious about
              building a pool.
            </p>
          </div>
          <div className="border-1 border-slate-300 py-20 rounded-3xl shadow-md">
            <p className="text-4xl px-10 pt-10 font-light max-w-md">
              You depend on Google & Facebook ads
            </p>
            <p className="text-[1.3rem] px-10 py-10">
              Spending thousands on Google, Facebook, and Instagram ads without
              knowing what's working.
            </p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl px-10 py-10">
            If you're nodding your head thinking{' '}
            <span className="italic font-bold">
              "That's exactly my situation,"{' '}
            </span>{' '}
            you're not alone and I can help.
          </p>
        </div>
        <Button
          buttonText="Get My Free Pool Builder Growth Blueprint Now"
          textSize="text-2xl"
          bgColor="bg-green-500"
          textColor="text-white"
          hover="hover:bg-green-600"
        />
      </div>
    </>
  )
}

export default Section2
