'use client'

import React, { useState } from 'react'
import { CheckCircle, MoveRight } from 'lucide-react'

export default function BlogContentPlanner() {
  const [submitting, setSubmitting] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  const isEmailValid =
    email.trim().length > 0 &&
    emailRegex.test(email.trim()) &&
    email.includes('.') &&
    email.split('@')[1]?.includes('.')
  const isFormValid = firstName.trim().length > 0 && isEmailValid

  const handleSubmit = async () => {
    if (!isFormValid) {
      return
    }

    setSubmitting(true)

    // Submit to ActiveCampaign
    const formData = new FormData()
    formData.append('u', '9')
    formData.append('f', '9')
    formData.append('s', '')
    formData.append('c', '0')
    formData.append('m', '0')
    formData.append('act', 'sub')
    formData.append('v', '2')
    formData.append('or', 'c02a142f-63b7-4835-9419-b5622beffa6f')
    formData.append('firstname', firstName)
    formData.append('email', email)

    try {
      await fetch('https://poolbuildergrowth.activehosted.com/proc.php', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      })
    } catch (error) {
      console.log('ActiveCampaign submission error:', error)
    }

    // Redirect to thank you page
    setTimeout(() => {
      window.location.href = '/free-90-day-blog-content-planner/thank-you'
    }, 1500)
  }

  return (
    <div className="container max-w-4xl mx-auto px-6 my-10 lg:my-20">
      <h1 className="text-4xl lg:text-7xl font-bold text-black mb-4 leading-normal">
        Free 90-Day Blog Content Planner for Pool Builders
      </h1>
      <div className="mb-10 grid lg:grid-cols-2 items-center">
        <p className="text-xl font-bold mb-4 lg:mb-0 flex self-center">
          Listen Here
          <MoveRight className="ml-4" />
        </p>
        {/* <AudioPlayer
              src="blog-system.mp3"
              minimal={true}
              width={300}
              trackHeight={40}
              barWidth={3}
              gap={1}
              visualise={true}
              backgroundColor="#FFF8DE"
              barColor="#C1D0B5"
              barPlayedColor="#99A98F"
              skipDuration={2}
              showLoopOption={true}
              showVolumeControl={true}
              hideSeekBar={true}
              hideSeekKnobWhenPlaying={true}
              playbackRate={1.2}
            /> */}
        <audio controls>
          <source src="90-day-blog-content-planner.mp3" type="audio/ogg" />
          <source src="90-day-blog-content-planner.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <section>
        <h2 className="my-10 text-4xl">
          Turn Your Website Into a 24/7 Lead-Generating Machine
        </h2>

        <p className="text-2xl mb-4">Stop competing on price.</p>
        <p className="text-2xl mb-4">Start competing on expertise.</p>
        <hr />
        <h2 className="my-10 text-4xl font-bold">
          You're Tired of Chasing Leads When You Should Be Building Pools
        </h2>
        <p className="text-2xl mb-4">
          You became a pool builder to create amazing backyards, not to become a
          marketing expert.
        </p>
        <p className="text-2xl mb-4 font-normal">But here's the reality:</p>
        <p className="text-2xl mb-4 font-normal">
          While you're a master at your craft, homeowners are spending hours
          online researching pool builders before they ever pick up the phone.
          If you're not showing up in those searches with helpful, trustworthy
          content, you're invisible.
        </p>
        <p className="text-2xl mb-4 font-light">
          <span className="font-bold">The problem?</span> Most pool builders
          either:
        </p>
        <ul className="list-disc ml-10 my-6">
          <li className="text-2xl mb-4">
            Have no blog at all (letting competitors capture all the search
            traffic)
          </li>
          <li className="text-2xl mb-4">
            Post random updates that don't attract serious buyers
          </li>
          <li className="text-2xl mb-4">
            Write content without any strategy or conversion plan
          </li>
          <li className="text-2xl mb-4">
            Give up after a few posts because they don't see immediate results
          </li>
        </ul>
        <p className="text-2xl mb-4 font-light">
          <span className="font-bold">
            Meanwhile, smart pool builders are using strategic content to:
          </span>{' '}
        </p>
        <ul className="list-disc ml-10 my-6">
          <li className="text-2xl mb-4">
            Attract 50+ qualified leads per month from their website
          </li>
          <li className="text-2xl mb-4">
            Get found when homeowners search "pool builder near me"
          </li>
          <li className="text-2xl mb-4">
            Build trust before the first conversation even happens
          </li>
          <li className="text-2xl mb-4">
            Book consultations with educated, pre-sold prospects
          </li>
        </ul>
      </section>
      <section>
        <h2 className="my-6 text-4xl font-bold">
          Introducing the Complete 90-Day Blog Content System
        </h2>
        <p className="text-2xl mb-10 font-bold">
          Everything you need to transform your website from a digital business
          card into a lead-generating powerhouse.
        </p>
        <p className="text-2xl mb-10 font-normal">
          This isn't just a list of blog post ideas. It's the exact 90-day
          implementation roadmap that's helped pool builders across the country
          generate consistent, qualified leads through strategic content.
        </p>
        <p className="text-3xl mb-10 font-bold">
          What's Inside the 90-Day Planner:
        </p>
        <ul className="list-disc my-6">
          <li className="text-2xl mb-4 flex">
            <CheckCircle className="w-8 h-8 text-green-400 mr-6 shrink-0 relative top-[0px]" />
            <div>
              <span className="font-bold">Strategic Publishing Schedule -</span>{' '}
              Which posts to publish when (and why the order matters)
            </div>
          </li>
          <li className="text-2xl mb-4 flex">
            <CheckCircle className="w-8 h-8 text-green-400 mr-6 shrink-0 relative top-[0px]" />
            <div>
              <span className="font-bold">10 Proven Blog Post Templates -</span>{' '}
              The exact posts that convert browsers into buyers
            </div>
          </li>
          <li className="text-2xl mb-4 flex">
            <CheckCircle className="w-8 h-8 text-green-400 mr-6 shrink-0 relative top-[0px]" />
            <div>
              <span className="font-bold">Complete Keyword Research -</span>{' '}
              Target the searches homeowners are actually making
            </div>
          </li>
          <li className="text-2xl mb-4 flex">
            <CheckCircle className="w-8 h-8 text-green-400 mr-6 shrink-0 relative top-[0px]" />
            <div>
              <span className="font-bold">Lead Magnet Creation Guide -</span>{' '}
              Turn readers into email subscribers with valuable downloads
            </div>
          </li>
          <li className="text-2xl mb-4 flex">
            <CheckCircle className="w-8 h-8 text-green-400 mr-6 shrink-0 relative top-[0px]" />
            <div>
              <span className="font-bold">Content Promotion Strategy -</span>{' '}
              Maximize each post's reach across social media and email
            </div>
          </li>
          <li className="text-2xl mb-4 flex">
            <CheckCircle className="w-8 h-8 text-green-400 mr-6 shrink-0 relative top-[0px]" />
            <div>
              <span className="font-bold">Performance Tracking System -</span>{' '}
              Know which content is generating real leads and revenue
            </div>
          </li>
          <li className="text-2xl mb-4 flex">
            <CheckCircle className="w-8 h-8 text-green-400 mr-6 shrink-0 relative top-[0px]" />
            <div>
              <span className="font-bold">12-Month Content Calendar -</span>{' '}
              Never run out of content ideas again
            </div>
          </li>
          <li className="text-2xl mb-4 flex">
            <CheckCircle className="w-8 h-8 text-green-400 mr-6 shrink-0 relative top-[0px]" />
            <div>
              <span className="font-bold">SEO Optimization Checklists -</span>{' '}
              Rank higher in Google searches without being an SEO expert
            </div>
          </li>
          <li className="text-2xl mb-4 flex">
            <CheckCircle className="w-8 h-8 text-green-400 mr-6 shrink-0 relative top-[0px]" />
            <div>
              <span className="font-bold">Local Marketing Integration -</span>{' '}
              Connect your content to your Google Business Profile and local SEO
            </div>
          </li>
          <li className="text-2xl mb-4 flex">
            <CheckCircle className="w-8 h-8 text-green-400 mr-6 shrink-0 relative top-[0px]" />
            <div>
              <span className="font-bold">Seasonal Content Planning -</span>{' '}
              Match your content to when homeowners are actually planning pool
              projects
            </div>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="my-6 text-4xl font-bold">
          Why This Works (When Other Marketing Doesn't)
        </h2>
        <p className="text-3xl mb-10 font-bold">
          ❌ Traditional Marketing Problems:
        </p>
        <ul className="list-disc my-6 ml-10">
          <li className="text-2xl mb-4">
            Expensive Google Ads that drain your budget
          </li>
          <li className="text-2xl mb-4">
            Facebook ads that attract tire-kickers, not serious buyers
          </li>
          <li className="text-2xl mb-4">
            Word-of-mouth referrals that are inconsistent
          </li>
          <li className="text-2xl mb-4">
            Competing purely on price with every other builder
          </li>
        </ul>
        <p className="text-3xl mb-4 font-bold">
          ✅ Content Marketing Advantages:
        </p>
        <ul className="list-disc my-6 ml-10">
          <li className="text-2xl mb-4">
            Works 24/7, even when you're not actively marketing
          </li>
          <li className="text-2xl mb-4">
            Builds trust and authority before prospects contact you
          </li>
          <li className="text-2xl mb-4">
            Attracts higher-quality leads who are ready to invest
          </li>
          <li className="text-2xl mb-4">
            Costs less than paid advertising with longer-lasting results
          </li>
          <li className="text-2xl mb-4">
            Positions you as the expert, not just another contractor
          </li>
        </ul>
      </section>
      <hr className="border-2 my-16" />
      <section>
        <h2 className="my-6 text-4xl font-bold">
          Perfect for Pool Builders Who
        </h2>
        <ul className="list-disc my-6 ml-10">
          <li className="text-2xl mb-4">
            Want more qualified leads without increasing ad spend
          </li>
          <li className="text-2xl mb-4">
            Are you tired of competing solely on price
          </li>
          <li className="text-2xl mb-4">
            Want to be seen as the trusted expert in their market
          </li>
          <li className="text-2xl mb-4">
            Have limited time for marketing but want maximum impact
          </li>
          <li className="text-2xl mb-4">
            Understand that homeowners research extensively before hiring
          </li>
          <li className="text-2xl mb-4">
            Want a systematic approach (not random content posting)
          </li>
        </ul>
      </section>
      <hr className="border-2 my-16" />
      <section id="form">
        <h2 className="my-6 text-4xl font-bold">
          Get Your Free 90-Day Content Planner
        </h2>
        <p className="text-2xl mb-4 font-bold">Download includes:</p>
        <ul className="list-disc my-6 ml-10">
          <li className="text-2xl mb-4">
            Complete 90-day blog publishing schedule
          </li>
          <li className="text-2xl mb-4">
            10 proven blog post templates with examples
          </li>
          <li className="text-2xl mb-4">
            Keyword research worksheet for your local market
          </li>
          <li className="text-2xl mb-4">Content promotion checklists</li>
          <li className="text-2xl mb-4">Performance tracking templates</li>
          <li className="text-2xl mb-4">Seasonal content calendar</li>
          <li className="text-2xl mb-4">SEO optimization guides</li>
        </ul>
      </section>
      <hr className="border-2 my-16" />
      <section>
        <div className="bg-slate-200 rounded-2xl shadow-lg">
          <form
            id="content-planner-form"
            className="max-w-2xl py-20 px-6 mx-auto my-14 validate"
            noValidate
          >
            <div>
              <p className="text-3xl mb-10 ">
                Just enter your information below and I'll send your FREE 90-Day
                Blog Content Planner.
              </p>
              <div>
                <label htmlFor="firstname">First Name </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border-2 border-slate-100 w-full mb-4 p-4 rounded-xl text"
                />
              </div>
              <div>
                <label htmlFor="email">
                  Email Address <span className="asterisk">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-2 border-slate-100 w-full mb-4 p-4 rounded-xl required email"
                />
              </div>
              <div>
                <button
                  type="button"
                  id="content-planner-subscribe"
                  disabled={!isFormValid}
                  onClick={handleSubmit}
                  className={`text-2xl text-white font-bold w-full mb-2 p-6 rounded-xl text-center button mt-2 ${
                    isFormValid ? 'bg-green-500' : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  {submitting
                    ? 'Sending…'
                    : 'Get My FREE 90-Day Blog Content Planner'}
                </button>
                <p className="text-center mt-4 text-lg">
                  (and start turning your pool builder blog into a 24/7 sales
                  machine)
                </p>
              </div>
            </div>
          </form>
        </div>
        <p className="text-3xl mb-4 font-bold">
          100% Free. No Strings Attached.
        </p>
        <p className="text-2xl mb-4">
          This isn't a "free" trial that requires a credit card. It's not a
          watered-down version of a paid product. This is the complete 90-day
          system we use with our clients, and you're getting it free because we
          believe every pool builder deserves to compete effectively online.
        </p>
        <p className="text-2xl mb-4">
          <span className="font-bold">Why am I giving this away?</span>
        </p>
        <p className="text-2xl mb-4">Simple.</p>
        <p className="text-2xl mb-4">
          When pool builders succeed with smart marketing, it elevates the
          entire industry. Plus, once you see the results from implementing this
          system, you'll want our help with the more advanced stuff.
        </p>
      </section>
    </div>
  )
}
