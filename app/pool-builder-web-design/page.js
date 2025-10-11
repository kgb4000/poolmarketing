import React from 'react'
import HiddenCost from '@/components/HiddenCost'
import WeakDesign from '@/components/WeakDesign'
import GoFromMissed from '@/components/GoFromMissed'
import EverythingYouNeed from '@/components/EverythingYouNeed'
import WhyHireAWebDesigner from '@/components/WhyHireAWebDesigner'
import ChooseYourPackage from '@/components/ChooseYourPackage'
import WebsiteDesignFAQ from '@/components/WebsiteDesignFAQ'
import LatestProjects from '@/components/LatestProjects'
import { CheckCircle } from 'lucide-react'
import { event } from '../../lib/eventHelper'

export const metadata = {
  title: 'Pool Builder Web Desgin Agency in DC, Maryland, and Virginia.',
  description:
    'Custom pool builder website design services that generate leads, boost SEO, and showcase your work. Get a site that grows your pool business today.',
  alternates: {
    canonical: '/pool-builder-web-design',
  },
}

const WebDesignPage = () => {
  return (
    <>
      <main>
        <div className='bg-slate-100 bg-blend-multiply bg-[url("/images/pool-builder-marketing.jpg")] bg-no-repeat bg-cover bg-center'>
          <div className="container max-w-8xl mx-auto px-6">
            <div className="max-w-4xl py-4 md:py-2">
              <div className="lg:my-20">
                <h1 className="text-sm md:text-lg text-white mb-2 md:mb-4 leading-tight font-semibold">
                  #1 Pool Builder Web Design Agency in DC, Maryland, and
                  Virginia.
                </h1>
                <h2 className="text-4xl lg:text-7xl max-w-4xl mx-auto font-bold text-white">
                  Don't Let Bad Web Design Kill Your Profits.
                  <span className="block">
                    Get Custom Pool Builder Web Design That Grows Your Business.
                  </span>
                </h2>
                <p className="text-sm md:text-2xl max-w-2xl my-2 md:my-4 text-white">
                  Stop losing customers to your outdated website. With a new
                  custom pool builder website, you'll stand out from teh
                  competiton and win more projects, and be the sought after
                  expert.
                </p>
                <ul className="text-white mb-4 lg:mb-8">
                  <li className="mb-4 flex items-start">
                    <CheckCircle className="w-[30px] h-[30px] md:w-8 md:h-8 text-green-400 mr-4" />
                    <p className="text-sm lg:text-xl">
                      Get more qualified leads without wasting money on dead
                      ends
                    </p>
                  </li>
                  <li className="mb-4 flex items-start">
                    <CheckCircle className="w-[30px] h-[30px] md:w-8 md:h-8 text-green-400 mr-4" />
                    <p className="text-sm lg:text-xl">
                      Book more projects with digital marketing designed for
                      pool builders
                    </p>
                  </li>
                  <li className="mb-4 flex items-start">
                    <CheckCircle className="w-[30px] h-[30px] md:w-8 md:h-8 text-green-400 mr-4" />
                    <p className="text-sm lg:text-xl">
                      Never miss a lead with automated follow-up and email
                      campaigns
                    </p>
                  </li>
                </ul>
                <button
                  className="text-sm lg:text-2xl font-bold bg-green-500
                text-white hover:bg-green-600 transition-color px-6 py-6 lg:px-8 lg:py-8 rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer"
                >
                  Get My Free Website Audit
                </button>
              </div>
            </div>
          </div>
        </div>
        <HiddenCost />
        <WeakDesign />
        <GoFromMissed />
        <EverythingYouNeed />
        <LatestProjects />
        <WhyHireAWebDesigner />
        <ChooseYourPackage />
        <WebsiteDesignFAQ />
      </main>
    </>
  )
}

export default WebDesignPage
