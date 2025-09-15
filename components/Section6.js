import React from 'react'
import Button from './Button'
import { CheckCircle, XCircle } from 'lucide-react'

const Section6 = () => {
  return (
    <>
      <div className="container max-w-8xl mx-auto px-6 my-20">
        <h2 className="text-5xl font-bold text-black mb-4 leading-tight text-center">
          Why Work With Me?
        </h2>
        <p className="text-xl max-w-xl mx-auto text-center mb-10">
          I’ve noticed the same thing for 10 years. Pool builders were always
          underserved by generic marketing agencies who didn’t understand their
          unique challenges.
        </p>
        <div>
          <table className="w-full text-left sm:table-auto">
            <thead>
              <tr className="text-slate-900 border-b border-slate-300 bg-slate-50">
                <th className="text-2xl p-10 text-left">What matters most</th>
                <th className="text-2xl p-10 text-left">Pool Bulder Growth</th>
                <th className="text-2xl p-10 text-left">
                  Other pool marketing companies
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="align-top">
                <td className="text-xl p-10 font-bold items-start">
                  Research Foundation
                </td>
                <td className="text-lg p-10 flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                  Built on 50+ pool builder interviews - I KNOW your industry
                </td>
                <td className="text-lg p-10">
                  <div className="flex">
                    <XCircle className="w-6 h-6 text-red-400 mr-3 shrink-0 relative top-[2px]" />
                    Generic strategies adapted from other industries
                  </div>
                </td>
              </tr>
              <tr className="align-top">
                <td className="text-xl p-10 font-bold items-start">
                  Who you work with
                </td>
                <td className="text-lg p-10 flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                  Direct access to founder - your success is my personal
                  reputation
                </td>
                <td className="text-lg p-10">
                  <div className="flex">
                    <XCircle className="w-6 h-6 text-red-400 mr-3 shrink-0 relative top-[2px]" />
                    Assigned account managers who may not understand pools
                  </div>
                </td>
              </tr>
              <tr className="align-top">
                <td className="text-xl p-10 font-bold">My Focus</td>
                <td className="text-lg p-10 flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                  Your pool company
                </td>
                <td className="text-lg p-10">
                  <div className="flex">
                    <XCircle className="w-6 h-6 text-red-400 mr-3 shrink-0 relative top-[2px]" />
                    Your company and other companies (competitors) in your city
                  </div>
                </td>
              </tr>
              <tr className="align-top">
                <td className="text-xl p-10 font-bold">Results Guarantee</td>
                <td className="text-lg p-10 flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                  10 qualified leads in 90 days after system is built or I work
                  for free
                </td>
                <td className="text-lg p-10">
                  <div className="flex">
                    <XCircle className="w-6 h-6 text-red-400 mr-3 shrink-0 relative top-[2px]" />
                    No guarantees or vague promises
                  </div>
                </td>
              </tr>
              <tr className="align-top">
                <td className="text-xl p-10 font-bold">Time Savings</td>
                <td className="text-lg p-10 flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                  Save 15+ hours/week with automation systems
                </td>
                <td className="text-lg p-10">
                  <div className="flex">
                    <XCircle className="w-6 h-6 text-red-400 mr-3 shrink-0 relative top-[2px]" />
                    Your company and other companies (competitors) in your city
                  </div>
                </td>
              </tr>
              <tr className="align-top">
                <td className="text-xl p-10 font-bold">Education</td>
                <td className="text-lg p-10 flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                  Monthly training - you understand every strategy
                </td>
                <td className="text-lg p-10">
                  <div className="flex">
                    <XCircle className="w-6 h-6 text-red-400 mr-3 shrink-0 relative top-[2px]" />
                    Black box approach - you're kept in the dark
                  </div>
                </td>
              </tr>
              <tr className="align-top">
                <td className="text-xl p-10 font-bold">Reporting</td>
                <td className="text-lg p-10 flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                  Business performance focus (profit, efficiency)
                </td>
                <td className="text-lg p-10">
                  <div className="flex">
                    <XCircle className="w-6 h-6 text-red-400 mr-3 shrink-0 relative top-[2px]" />
                    Vanity metrics (clicks, impressions)
                  </div>
                </td>
              </tr>
              <tr className="align-top">
                <td className="text-xl p-10 font-bold">Approach</td>
                <td className="text-lg p-10 flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                  Done-with-you - you own your growth
                </td>
                <td className="text-lg p-10">
                  <div className="flex">
                    <XCircle className="w-6 h-6 text-red-400 mr-3 shrink-0 relative top-[2px]" />
                    Done-for-you - you rent their traffic
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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

export default Section6
