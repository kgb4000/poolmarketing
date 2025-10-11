import React from 'react'
import Button from './Button'
import WebDesignCTA from '@/components/WebDesignCTA'

const WeakDesign = () => {
  return (
    <>
      <div className="bg-slate-50 py-10 lg:py20">
        <div className="container max-w-8xl mx-auto px-4 my-10 lg:my-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4 leading-loose text-center max-w-5xl mx-auto">
            Weak Website Design Could be Costing You $50,000 or More in Missed
            Projects
          </h2>
          <p className="text-md lg:text-lg lg:max-w-4xl mx-auto text-center px-6 mb-4 lg:mb-10 italic">
            One missed client represents tens of thousands in lost revenue. A
            weak pool company website quietly sends those clients to your
            competitors instead of you.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-1">
              <p className="text-2xl leading-normal pb-6">
                A weak website doesn’t just fail to impress. It leaves
                homeowners skeptical, and ready to look elsewhere.
              </p>
              <ul className="list-disc ml-10">
                <li className="text-2xl leading-normal pb-6">
                  <a
                    href="https://www.businessdasher.com/statistics-about-website/"
                    target="_blank"
                    className="hover:underline"
                  >
                    97% of customers
                  </a>{' '}
                  say websites influence their purchases.
                </li>
                <li className="text-2xl leading-normal pb-6">
                  <a href="" className="hover:underline">
                    84% of consumers{' '}
                  </a>
                  consider a business’s website as more credible than its social
                  media presence.
                </li>

                <li className="text-2xl leading-normal pb-6">
                  <a
                    href="https://www.nipa.org/blogpost/982039/491712/Don-t-Judge-a-Business-by-Its-Website-A-Look-at-Your-Website-by-the-Numbers"
                    target="_blank"
                    className="hover:underline"
                  >
                    75% of customers
                  </a>{' '}
                  judge a business’s credibility through its website design.
                </li>
              </ul>
              <p className="text-2xl leading-normal pb-6">
                When a homeowner clicks away from your website, they don’t just
                leave your page—they leave your business behind. And chances
                are, they’ll never come back.
              </p>
              <p className="text-2xl leading-normal pb-6">
                Every impression matters, especially in the pool industry where
                projects are high-ticket and deeply personal. If your website
                creates doubt or frustration, here’s what happens:
              </p>
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-2 gap-6">
                <div className="lg:border-[1px] border-slate-100 bg-white p-6 lg:py-20 rounded-3xl lg:shadow-xl">
                  <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
                    Leads Slip Away in Silence
                  </p>
                  <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
                    That homeowner who might have scheduled a consultation is
                    now requesting quotes from your competitor instead, and you
                    never even knew you lost them.
                  </p>
                </div>
                <div className="lg:border-[1px] border-slate-100 bg-white p-6 lg:py-20 rounded-3xl lg:shadow-xl">
                  <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
                    Revenue Vanishes Overnight
                  </p>
                  <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
                    Each missed project could mean tens of thousands of dollars
                    gone.One small design flaw could be the reason you lose a{' '}
                    <b>$50,000</b> backyard transformation.
                  </p>
                </div>
                <div className="lg:border-[1px] border-slate-100 bg-white p-6 lg:py-20 rounded-3xl lg:shadow-xl">
                  <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
                    Reputation Takes a Major Hit
                  </p>
                  <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
                    If your website feels outdated or neglected, homeowners
                    assume your work will be careless too. Instead of being the
                    trusted professional, you’re remembered as the company they
                    didn’t trust with their dream.
                  </p>
                </div>
                <div className="lg:border-[1px] border-slate-100 bg-white p-6 lg:py-20 rounded-3xl lg:shadow-xl">
                  <p className="text-3xl lg:text-4xl lg:px-10 lg:pt-10 font-light max-w-md">
                    Marketing Dollars Wasted
                  </p>
                  <p className="text-[1.3rem] pt-4 lg:px-10 lg:py-10">
                    Every Google and Facebook ad click, every SEO effort, every
                    dollar spent on traffic is thrown away when visitors bounce
                    off your website that doesn't instill confidence. They
                    eventually leave your website and go straignt to your
                    competitors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <WebDesignCTA label="weak_design_section" />
        </div>
      </div>
    </>
  )
}

export default WeakDesign
