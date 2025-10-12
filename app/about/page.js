import React from 'react'
import { CheckCircle, XCircle } from 'lucide-react'
import { ArrowRight, Minus } from 'lucide-react'

export const metadata = {
  title: 'About Pool Builder Growth | A Pool Builder Marketing Agency',
  description:
    'Build a digital marketing system designed for pool builders to attract the right clients.',
  alternates: {
    canonical: '/about',
  },
}

const About = () => {
  return (
    <>
      <main>
        <div className="container max-w-8xl mx-auto px-6">
          <div className="lg:grid grid-cols-2 mb-10 lg:my-20 items-center gap-6">
            <div className="max-w-4xl py-4 md:py-2 :mb-10">
              <h1 className="text-sm md:text-lg text-black mb-2 md:mb-4 leading-tight font-light">
                About Pool Builder Growth
              </h1>
              <h2 className="text-3xl md:text-5xl xl:text-7xl max-w-4xl mx-auto font-extrabold">
                I Grow Pool Building Businesses, Not Just Marketing Campaigns
              </h2>
              <p className="text-sm md:text-2xl max-w-2xl my-2 md:my-4">
                I help pool builders attract the right homeowners, win more
                bids, and grow with digital marketing that works.
              </p>
              <button
                className="text-sm lg:text-2xl font-bold bg-green-500
                text-white hover:bg-green-600 transition-color px-6 py-6 lg:px-8 lg:py-8 rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer"
              >
                Book Your Free Strategy Call
              </button>
            </div>
            <img
              src="/images/SEO-specialist.jpg"
              className="sm:w-full h-auto rounded-3xl"
              alt="SEO specialist at Pool Builder Growth."
            />
          </div>
        </div>
        <section className="lg:py-20">
          <div className="container max-w-8xl mx-auto px-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-black my-6 lg:mb-14 leading-1 text-center max-w-3xl mx-auto">
              How I Actually Help To Grow Your Pool Business With You
            </h2>
            <div className="grid md:grid-cols-2 2xl:grid-cols-3 lg:gap-6">
              <div className="lg:border-[1px] border-slate-100 p-6 rounded-3xl lg:shadow-xl bg-white">
                <p className="text-3xl lg:text-4xl lg:px-10 lg:py-10 font-light max-w-md">
                  ACQUISITION (Getting Qualified Leads)
                </p>
                <ul className="md:ml-10 pt-6">
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Paid advertising (Google, Facebook, YouTube)
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    SEO and organic traffic
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Referral systems
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Strategic partnerships
                  </li>
                </ul>
                <p className="text-md lg:text-xl font-bold mb-4 lg:px-10">
                  Goal: Predictable pipeline of qualified homeowners
                </p>
              </div>
              <div className="lg:border-[1px] border-slate-100 p-6 lg:py-10 rounded-3xl lg:shadow-xl bg-white">
                <p className="text-3xl lg:text-4xl lg:px-10 lg:py-10 font-light max-w-md">
                  CONVERSION (Turning Leads Into Customers)
                </p>
                <ul className="md:ml-10 pt-6">
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Sales process optimization
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    CRM implementation and automation
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Response time systems
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Team training and coaching
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Pricing strategy
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Objection handling frameworks
                  </li>
                </ul>
                <p className="text-md lg:text-xl font-bold mb-4 lg:px-10">
                  Goal: 15%+ close rate (vs. industry average of 8-10%)
                </p>
              </div>
              <div className="lg:border-[1px] border-slate-100 p-6 lg:py-10 rounded-3xl lg:shadow-xl bg-white">
                <p className="text-3xl lg:text-4xl lg:px-10 lg:py-10 font-light max-w-md">
                  DELIVERY (Operational Excellence)
                </p>
                <ul className="md:ml-10 pt-6">
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Capacity planning
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Project management systems
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Customer communication protocols
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Quality control processes
                  </li>
                </ul>
                <p className="text-md lg:text-xl font-bold mb-4 lg:px-10">
                  Goal: On-time, on-budget projects that generate referrals
                </p>
              </div>
              <div className="lg:border-[1px] border-slate-100 p-6 lg:py-10 rounded-3xl lg:shadow-xl bg-white">
                <p className="text-3xl lg:text-4xl lg:px-10 lg:py-10 font-light max-w-md">
                  RETENTION (Maximizing Customer Value)
                </p>
                <ul className="md:ml-10 pt-6">
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Post-installation follow-up
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Maintenance service upsells
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Renovation opportunities
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Referral program systems
                  </li>
                </ul>
                <p className="text-md lg:text-xl font-bold mb-4 lg:px-10">
                  Goal: 30%+ of new business from referrals
                </p>
              </div>
              <div className="lg:border-[1px] border-slate-100 p-6 lg:py-10 rounded-3xl lg:shadow-xl bg-white">
                <p className="text-3xl lg:text-4xl lg:px-10 lg:py-10 font-light max-w-md">
                  REVENUE OPTIMIZATION (Business Economics)
                </p>
                <ul className="md:ml-10">
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Pricing analysis and strategy
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Margin improvement
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Operational efficiency
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Cash flow management
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Hiring and team development
                  </li>
                </ul>
                <p className="text-md lg:text-xl font-bold mb-4 lg:px-10">
                  Goal: Sustainable, profitable growth to 8-figure revenue
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container max-w-8xl mx-auto px-6 lg:py-20">
            <div className="grid lg:grid-cols-2 lg:my-20 items-center gap-10">
              <div className="">
                <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4 leading-1">
                  Why Partnerships Are Better
                </h2>
                <p className="text-md lg:text-xl font-light mb-4">
                  Most marketing agencies will get you leads and call it
                  success.
                </p>
                <p className="text-md lg:text-xl font-bold mb-4">
                  I think that's only 20% of the job.
                </p>
                <p className="text-md lg:text-xl font-bold mb-4">
                  What about the other 80%?
                </p>
                <ul>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Are those leads actually closing?
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Is your sales process losing deals?
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Can your operations handle 2x the volume?
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Are you pricing for maximum profit?
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Is your team trained to convert at elite rates?
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    What's your actual path from $3M to $10M?
                  </li>
                </ul>
                <p className="text-md lg:text-xl font-bold mb-4">
                  This is GROWTH MARKETING for pool builders.
                </p>
                <p className="text-md lg:text-xl font-light mb-4">
                  I don't just drive traffic. I engineer revenue growth across
                  your entire business - from first click to final payment.
                </p>
              </div>
              <img
                src="/images/partnership.jpeg"
                className="rounded-2xl"
                alt="About Pool Builder Growth"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section className="bg-slate-100 py-10 lg:py-40">
          <div className="container max-w-8xl mx-auto px-6">
            <div className="max-w-8xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4 leading-1 max-w-3xl">
                The Difference Between Working With a Marketing Agency and
                Working With Me
              </h2>
              <div className="py-10">
                <p className="text-md lg:text-xl font-bold mb-4">
                  MARKETING AGENCY THINKS:
                </p>
                <p className="text-md lg:text-xl font-light mb-4">
                  "We got you 40 leads this month. Success!"
                </p>
                <p className="text-md lg:text-xl font-bold mb-4">I THINK:</p>
                <p className="text-md lg:text-xl font-light mb-4">
                  "You got 40 leads but only closed 2 pools. Let's diagnose why:
                </p>
                <ul>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Was it lead quality? Let's adjust targeting.
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Was it response time? Let's build automation.
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Was it the sales pitch? Let's train your team.
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Was it pricing? Let's analyze competitor positioning.
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <ArrowRight className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Was it capacity? Let's plan for scaling operations."
                  </li>
                </ul>
                <p className="text-md lg:text-xl font-light mb-4">
                  I optimize the ENTIRE revenue engine, not just one piece.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="container max-w-8xl mx-auto px-6">
          <div className="max-w-8xl mx-auto py-10 lg:pt-40">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4 leading-1 text-center max-w-3xl mx-auto">
              The Mathematics Other Agencies Ignore
            </h2>
            <p className="text-center text-xl">
              Why the Full-System Approach Works
            </p>
            <div className="grid lg:grid-cols-2 gap-5">
              <div className="p-6 lg:py-10">
                <p className="text-3xl lg:text-4xl lg:px-10 lg:py-10 font-light max-w-md">
                  Scenario A: Traditional Marketing Agency
                </p>
                <ul className="md:ml-10">
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Generates 40 leads/month at $150 CPL = $6,000 cost
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    You close 4 pools (10% close rate)
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Revenue: $300,000
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    You pay agency $4,000/month
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    ROI: 50x (looks good on paper)
                  </li>
                </ul>
              </div>
              <div className="p-6 lg:py-10">
                <p className="text-3xl lg:text-4xl lg:px-10 lg:py-10 font-light max-w-md">
                  Scenario B: Growth Marketing Partnership (Me)
                </p>
                <ul className="md:ml-10">
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Generates 40 leads/month at $120 CPL = $4,800 cost
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    We fix your sales process, CRM, follow-up, pricing
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    You close 8 pools (20% close rate - DOUBLE)
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Revenue: $600,000 (DOUBLE)
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    You pay us $8,000 in performance fees
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    ROI: 75x (50% better than traditional)
                  </li>
                </ul>
              </div>
              <div className="p-6 lg:py-10">
                <p className="text-3xl lg:text-4xl lg:px-10 lg:py-10 font-light max-w-md">
                  PLUS: Those improvements compound year after year.
                </p>
                <ul className="md:ml-10">
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Year 2: You're closing at 22%
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Year 3: You're closing at 25%
                  </li>
                  <li className="text-md lg:text-xl font-light mb-4 flex">
                    <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    Year 5: You're a $15M business
                  </li>
                </ul>
              </div>
              <div className="p-6 lg:py-10">
                <p className="text-3xl lg:text-4xl lg:px-10 lg:py-10 font-light max-w-md">
                  That's what I bring to the table.
                </p>
              </div>
            </div>
            <hr className="border-2 w-1/2 mx-auto mt-10" />
          </div>
        </div>
        <div className="container max-w-8xl mx-auto px-6 pb-10 lg:py-20">
          <div className="max-w-8xl mx-auto py-10">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4 leading-1 text-center max-w-3xl mx-auto">
              What Our Business Partnership Can Actually Look Like
            </h2>
            <p className="text-center text-xl">
              We're business partners, not vendors.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="lg:border-[1px] border-slate-100 p-6 lg:py-10 rounded-3xl lg:shadow-xl">
              <p className="text-3xl lg:text-4xl lg:px-10 pb-6 lg:py-10 font-light max-w-md">
                MONTH 1-3: BUILD THE FOUNDATION
              </p>
              <ul className="md:ml-10">
                <li className="text-md lg:text-xl font-light mb-4 flex">
                  <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  Deep business audit (not just marketing)
                </li>
                <li className="text-md lg:text-xl font-light mb-4 flex">
                  <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  Competitive analysis and positioning
                </li>
                <li className="text-md lg:text-xl font-light mb-4 flex">
                  <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  Full-funnel tracking implementation
                </li>
                <li className="text-md lg:text-xl font-light mb-4 flex">
                  <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  Sales process documentation and optimization
                </li>
                <li className="text-md lg:text-xl font-light mb-4 flex">
                  <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  Initial marketing campaigns launch
                </li>
                <li className="text-md lg:text-xl font-light mb-4 flex">
                  <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  Team training begins
                </li>
              </ul>
            </div>
            <div className="lg:border-[1px] border-slate-100 p-6 lg:py-10 rounded-3xl lg:shadow-xl">
              <p className="text-3xl lg:text-4xl lg:px-10 pb-6 lg:py-10 font-light max-w-md">
                MONTH 4-6: OPTIMIZE AND SCALE
              </p>
              <ul className="md:ml-10">
                <li className="text-md lg:text-xl font-light mb-4 flex">
                  <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  Data-driven refinements across entire funnel
                </li>
                <li className="text-md lg:text-xl font-light mb-4 flex">
                  <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  Double down on what's working
                </li>
                <li className="text-md lg:text-xl font-light mb-4 flex">
                  <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  Kill what's not
                </li>
                <li className="text-md lg:text-xl font-light mb-4 flex">
                  <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  Advanced sales training
                </li>
                <li className="text-md lg:text-xl font-light mb-4 flex">
                  <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  Systems and automation implementation
                </li>
                <li className="text-md lg:text-xl font-light mb-4 flex">
                  <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  Capacity planning for growth
                </li>
              </ul>
            </div>
            <div className="lg:border-[1px] border-slate-100 p-6 lg:py-10 rounded-3xl lg:shadow-xl">
              <p className="text-3xl lg:text-4xl lg:px-10 pb-6 lg:py-10 font-light max-w-md">
                MONTH 7-12: PREDICTABLE GROWTH ENGINE
              </p>
              <ul className="md:ml-10">
                <li className="text-md lg:text-xl font-light mb-4 flex">
                  <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  Consistent, qualified lead flow
                </li>
                <li className="text-md lg:text-xl font-light mb-4 flex">
                  <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  Elite-level conversion rates
                </li>
                <li className="text-md lg:text-xl font-light mb-4 flex">
                  <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  Efficient operations
                </li>
                <li className="text-md lg:text-xl font-light mb-4 flex">
                  <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  Strong referral systems
                </li>
                <li className="text-md lg:text-xl font-light mb-4 flex">
                  <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  Strategic planning for next stage
                </li>
                <li className="text-md lg:text-xl font-light mb-4 flex">
                  <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  Potentially: Equity partnership discussion
                </li>
              </ul>
            </div>
            <div className="lg:border-[1px] border-slate-100 p-6 lg:py-10 rounded-3xl lg:shadow-xl">
              <p className="text-3xl lg:text-4xl lg:px-10 pb-6 lg:py-10 font-light max-w-md">
                YEAR 2+: SCALE TO 8-FIGURES
              </p>
              <ul className="md:ml-10">
                <li className="text-md lg:text-xl font-light mb-4 flex">
                  <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  Multi-location expansion (if applicable)
                </li>
                <li className="text-md lg:text-xl font-light mb-4 flex">
                  <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  Team building and leadership development
                </li>
                <li className="text-md lg:text-xl font-light mb-4 flex">
                  <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  Advanced business systems
                </li>
                <li className="text-md lg:text-xl font-light mb-4 flex">
                  <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  Exit planning or long-term growth strategy
                </li>
                <li className="text-md lg:text-xl font-light mb-4 flex">
                  <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  Potentially: Equity stake and deep partnership
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container max-w-8xl mx-auto px-6 mb-10 lg:py-20">
          <div className="max-w-5xl mx-auto py-10">
            <h2 className="text-3xl lg:text-5xl font-bold text-black mb-10 leading-1 text-center max-w-3xl mx-auto">
              Long-term Vision
            </h2>
            <p className="text-xl lg:text-2xl mb-4 font-light">
              I'm not building an agency with 100 clients.
            </p>
            <p className="text-xl lg:text-2xl mb-4 font-bold">
              I'm building partnerships with elite pool building partners who I
              can help scale to $10M-$50M+ in revenue.
            </p>
            <p className="text-xl lg:text-2xl mb-4 font-light">
              Some of those partnerships will evolve into equity ownership.
            </p>
            <p className="text-xl lg:text-2xl mb-4 font-light">Why?</p>
            <p className="text-xl lg:text-2xl mb-4 font-light">
              Because I believe in building long-term wealth together.
            </p>
            <p className="text-xl lg:text-2xl mb-4 font-bold">
              When you hit $15M in revenue and start thinking about:
            </p>
            <ul>
              <li className="text-xl lg:text-2xl font-light mb-4 flex">
                <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                Bringing on a business partner
              </li>
              <li className="text-xl lg:text-2xl font-light mb-4 flex">
                <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                Raising capital for expansion
              </li>
              <li className="text-xl lg:text-2xl font-light mb-4 flex">
                <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                Selling to private equity
              </li>
              <li className="text-xl lg:text-2xl font-light mb-4 flex">
                <Minus className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                Building a regional/national brand
              </li>
            </ul>
            <p className="text-xl lg:text-2xl mb-4 font-light">
              I want to be at the table.
            </p>
            <p className="text-xl lg:text-2xl mb-4 font-light">
              Not as your marketing agency.
            </p>
            <p className="text-xl lg:text-2xl mb-4 font-light">
              As your growth partner.
            </p>
            <p className="text-xl lg:text-2xl mb-4 font-bold">
              That's the difference between transactional and transformational.
            </p>
            <div className="text-center mt-10 lg:mt-14">
              <button
                className="text-sm lg:text-2xl font-bold bg-green-500
                text-white hover:bg-green-600 transition-color px-6 py-6 lg:px-8 lg:py-8 rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer"
              >
                Book Your Free Strategy Call
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default About
