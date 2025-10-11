import React from 'react'
import Button from './Button'
import { CheckCircle, XCircle } from 'lucide-react'
import WeakDesignCTA from '@/components/WebDesignCTA'

const Section6 = () => {
  return (
    <>
      <div className="container max-w-8xl mx-auto px-6 my-20">
        <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4 leading-tight text-center max-w-xl lg:max-w-3xl mx-auto">
          Why Why Hire Me as Your Pool Company Web Designer?
        </h2>
        <p className="text-md lg:text-lg lg:max-w-2xl mx-auto text-center px-6 mb-4 lg:mb-10">
          I’ve noticed the same thing for 10 years. Pool builders were always
          underserved by generic marketing agencies who didn’t understand their
          unique challenges.
        </p>
        <div className="pb-10">
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-left table-auto">
              <thead>
                <tr className="text-slate-900 border-b border-slate-300 bg-slate-50">
                  <th className="text-2xl p-10 text-left">What matters most</th>
                  <th className="text-2xl p-10 text-left">
                    Pool Bulder Growth
                  </th>
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
                      Your company and other companies (competitors) in your
                      city
                    </div>
                  </td>
                </tr>
                <tr className="align-top">
                  <td className="text-xl p-10 font-bold">Results Guarantee</td>
                  <td className="text-lg p-10 flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 shrink-0 relative top-[2px]" />
                    10 qualified leads in 90 days after system is built or I
                    work for free
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
                      Your company and other companies (competitors) in your
                      city
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

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6 mb-6">
            {[
              {
                category: 'Research Foundation',
                poolBuilderGrowth:
                  'Built on 50+ pool builder interviews - I KNOW your industry',
                others: 'Generic strategies adapted from other industries',
              },
              {
                category: 'Who you work with',
                poolBuilderGrowth:
                  'Direct access to founder - your success is my personal reputation',
                others:
                  'Assigned account managers who may not understand pools',
              },
              {
                category: 'My Focus',
                poolBuilderGrowth: 'Your pool company',
                others:
                  'Your company and other companies (competitors) in your city',
              },
              {
                category: 'Results Guarantee',
                poolBuilderGrowth:
                  '10 qualified leads in 90 days after system is built or I work for free',
                others: 'No guarantees or vague promises',
              },
              {
                category: 'Time Savings',
                poolBuilderGrowth:
                  'Save 15+ hours/week with automation systems',
                others:
                  'Your company and other companies (competitors) in your city',
              },
              {
                category: 'Education',
                poolBuilderGrowth:
                  'Monthly training - you understand every strategy',
                others: "Black box approach - you're kept in the dark",
              },
              {
                category: 'Reporting',
                poolBuilderGrowth:
                  'Business performance focus (profit, efficiency)',
                others: 'Vanity metrics (clicks, impressions)',
              },
              {
                category: 'Approach',
                poolBuilderGrowth: 'Done-with-you - you own your growth',
                others: 'Done-for-you - you rent their traffic',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {item.category}
                </h3>

                <div className="space-y-4">
                  <div className=" p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-black-800 mb-2">
                      Pool Builder Growth
                    </h4>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 shrink-0 relative top-[2px]" />
                      <p className="text-black-700">{item.poolBuilderGrowth}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-black-800 mb-2">
                      Other pool marketing companies
                    </h4>
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-400 mr-2 shrink-0 relative top-[2px]" />
                      <p className="text-black-700">{item.others}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <WeakDesignCTA label="why_hire_section" />
      </div>
    </>
  )
}

export default Section6
