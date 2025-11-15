'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle } from 'lucide-react'

export default function AISEOChecklist() {
  const [submitting, setSubmitting] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter()

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
    formData.append('u', '1')
    formData.append('f', '1')
    formData.append('s', '')
    formData.append('c', '0')
    formData.append('m', '0')
    formData.append('act', 'sub')
    formData.append('v', '2')
    formData.append('or', 'fab33f6e-200e-41a0-9bb1-4b9056083f95')
    formData.append('firstname', firstName)
    formData.append('email', email)

    try {
      await fetch('https://poolbuildergrowth.activehosted.com/proc.php', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      })
    } catch (error) {
      console.log('ActiveCampaign submission error:', error)
    }

    // Redirect to thank you page
    setTimeout(() => {
      window.location.href = '/ai-seo-checklist/thank-you'
    }, 1500)
  }

  return (
    <div className="container max-w-4xl mx-auto px-6 my-10 lg:my-20">
      <section>
        <h1 className="text-3xl md:text-7xl font-bold text-black mb-10 leading-normal">
          Is Your Pool Company Invisible in Google and AI Searches?
        </h1>
        {/* <div className="mb-10 grid md:grid-cols-2 items-center">
          <p className="text-md font-bold mb-4 lg:mb-0 flex self-center">
            Listen Here
            <MoveRight className="ml-4" />
          </p>
          <audio controls>
            <source src="/7-day-ai-marketing-guide.mp3" type="audio/ogg" />
            <source src="/7-day-ai-marketing-guide.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div> */}
        <p className="text-2xl md:text-3xl mb-4 md:mb-10">
          Here's the uncomfortable truth:
        </p>
        <hr className="border-2 my-10" />
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Right now, homeowners in your market are asking Google and ChatGPT,
          "Who's the best pool builder in Tampa, Florida?"
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          If your name doesn't appear in that answer, that{' '}
          <span className="font-bold">
            $75K project just went to your competitor
          </span>
          .
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Not because they're better. Because they figured out AI search before
          you did.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          And while you're paying some SEO agency $2,500/month to "optimize"
          your website for Google's 2019 algorithm,{' '}
          <span className="font-bold">the game has already changed</span>. The
          pool builders who will dominate 2026 aren't waiting for Google to
          catch up — they're showing up where homeowners actually make buying
          decisions: ChatGPT, Perplexity, and Gemini.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Your agency won't tell you this. Because they don't know how to fix
          it.
        </p>

        <hr className="border-2 my-10" />
        <h2 className="text-3xl md:text-4xl mb-4 md:mb-10 font-bold">
          Here's What I Discovered After Analyzing 100+ Pool Contractor Websites
        </h2>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          I started Pool Builder Growth after watching great pool companies —
          with decades of experience and incredible craftsmanship — get buried
          online by mediocre competitors who barely knew the difference between
          gunite and vinyl.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          The difference?{' '}
          <span className="font-bold">
            The winning companies had cracked AI search optimization
          </span>
          .
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          So I reverse-engineered the pattern. I analyzed over 100 pool
          contractor websites. I tested what made some appear in ChatGPT results
          while others stayed completely invisible.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Here's what I found:
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          The pool companies ranking in Google and AI search all have 5 things:
        </p>
        <ol className="ml-10">
          <li className="text-md md:text-2xl mb-4 md:mb-10">
            1. AI-readable structured data (most pool builders have ZERO schema
            markup)
          </li>
          <li className="text-md md:text-2xl mb-4 md:mb-10">
            2. Content clusters that answer real questions (not blog fluff —
            actual answers to what homeowners ask)
          </li>
          <li className="text-md md:text-2xl mb-4 md:mb-10">
            3. Core Web Vitals that don't suck (slow sites get buried. Period.)
          </li>
          <li className="text-md md:text-2xl mb-4 md:mb-10">
            4. Optimized Google Business Profile (AI engines pull 60%+ of their
            local data from GBP)
          </li>
          <li className="text-md md:text-2xl mb-4 md:mb-10">
            5. Natural language content (keyword-stuffed garbage gets ignored by
            AI)
          </li>
        </ol>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Missing even ONE of these? You're losing 40-60% of your AI search
          visibility.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Missing three or more? You might as well be invisible.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          And here's what made me sick:
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          The SEO agencies charging pool builders $2K-$5K/month aren't fixing
          ANY of this. They're optimizing for an algorithm that's already
          obsolete. They're building backlinks and chasing keyword rankings
          while AI search is stealing your leads.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          By the time they figure it out, you'll have lost 12 months of projects
          to the pool builder down the street who got AI-ready first.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Do the math: If you're losing just ONE $75K project per month to a
          competitor who ranks in AI search, that's $900K in lost revenue per
          year. That's a crew member's salary. That's your profit margin. That's
          the difference between growing and barely surviving.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          All inside a single, easy-to-use Google Sheet.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Don’t wait for your competitors to outrank you in AI search.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Claim your free copy of the AI SEO Checklist for Pool Builders and see
          exactly where you stand.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          You don't have time to wait for your agency to catch up.
        </p>
        <hr className="border-2 my-10" />
        <h2 className="text-3xl md:text-4xl mb-4 md:mb-10 font-bold">
          So I Built a Checklist — And I'm Giving It to You Free
        </h2>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          The AI SEO Checklist for Pool Builders shows you exactly what's
          keeping you invisible — and how to fix it.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Here's what you get:
        </p>
        <ul className="ml-10">
          <li className="mb-4 flex">
            <CheckCircle className="w-8 h-8 text-green-400 mr-6 shrink-0 relative top-[0px]" />
            <p className="text-md md:text-2xl mb-4 md:mb-10">
              <span className="font-bold">16 Categories to Audit</span> —
              Technical SEO, Local, Schema, Content, Core Web Vitals
            </p>
          </li>
          <li className="mb-4 flex">
            <CheckCircle className="w-8 h-8 text-green-400 mr-6 shrink-0 relative top-[0px]" />
            <p className="text-md md:text-2xl mb-4 md:mb-10">
              <span className="font-bold">Auto-Scored Dashboard</span> — Your
              score updates as you check off each item
            </p>
          </li>
          <li className="mb-4 flex">
            <CheckCircle className="w-8 h-8 text-green-400 mr-6 shrink-0 relative top-[0px]" />
            <p className="text-md md:text-2xl mb-4 md:mb-10">
              <span className="font-bold">Plain-English Fixes</span> — No
              jargon. Just clear yes/no questions and action steps
            </p>
          </li>
          <li className="mb-4 flex">
            <CheckCircle className="w-8 h-8 text-green-400 mr-6 shrink-0 relative top-[0px]" />
            <p className="text-md md:text-2xl mb-4 md:mb-10">
              <span className="font-bold">Competitive Benchmarking</span> — Most
              pool builders score below 60%. Hit 75%+ and you're ahead of 80% of
              your market
            </p>
          </li>
          <li className="mb-4 flex">
            <CheckCircle className="w-8 h-8 text-green-400 mr-6 shrink-0 relative top-[0px]" />
            <p className="text-md md:text-2xl mb-4 md:mb-10">
              <span className="font-bold"> Ranked by Impact</span> — Fix the top
              3 items and leapfrog your competition in weeks, not months
            </p>
          </li>
        </ul>
        <p className="text-md md:text-2xl mb-4 md:mb-10" id="form">
          <span className="font-bold">
            This is the exact checklist I use when auditing pool builders.
          </span>{' '}
          Now it's yours. Free.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10" id="form">
          <span className="font-bold">Why am I giving this away?</span>
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10" id="form">
          Because I'd rather have you owe me a favor than watch another great
          pool company go under while their mediocre competitor — who happened
          to figure out AI search — steals their market.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10" id="form">
          When you fix your AI SEO and your phone starts ringing again, you'll
          remember who gave you the roadmap. And maybe we'll work together.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10" id="form">
          But even if we don't, at least you'll still be in business.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10" id="form">
          No sales call required. No "book a demo" nonsense. No credit card. No
          bait-and-switch.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10" id="form">
          Just the checklist and 10 minutes of your time.
        </p>
        <div className="bg-slate-200 rounded-2xl shadow-lg">
          <form
            id="_form_1_"
            noValidate
            onSubmit={handleSubmit}
            className="max-w-2xl py-20 px-6 mx-auto my-14"
          >
            <input type="hidden" name="u" value="1" />
            <input type="hidden" name="f" value="1" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />
            <input
              type="hidden"
              name="or"
              value="fab33f6e-200e-41a0-9bb1-4b9056083f95"
            />
            <div>
              <h2 className="text-3xl mb-10 ">
                Just enter your information below and we'll send you the{' '}
                <span className="font-bold">
                  FREE AI SEO Checklist for Pool Builders
                </span>
              </h2>
            </div>
            <div>
              <label htmlFor="firstname"> First Name</label>
              <div>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border-2 border-slate-100 w-full mb-4 p-4 rounded-xl required email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email">
                Email<span>*</span>
              </label>
              <div>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Type your email"
                  required
                  className="border-2 border-slate-100 w-full mb-4 p-4 rounded-xl required email"
                />
              </div>
            </div>
            <div>
              <button
                id="_form_1_submit"
                className={`text-2xl text-white font-bold w-full mb-2 p-6 rounded-xl text-center button mt-2 ${
                  isFormValid
                    ? 'bg-green-500'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
                type="button"
                onClick={handleSubmit}
                disabled={!isFormValid}
              >
                {submitting ? 'Sending…' : 'Download the Free AI SEO Checklist'}
              </button>
              <p className="text-center mt-4 text-lg">
                (and start turning your pool builder website into a sales
                machine)
              </p>
            </div>
          </form>
        </div>
        <div className="mb-10">
          <h2 className="my-6 text-xl md:text-3xl font-bold">
            Here's what happens the moment you hit submit:
          </h2>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            → The checklist hits your inbox in 60 seconds — No waiting. No "our
            team will review your request" garbage. It's yours immediately.
          </p>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            → Your score updates as you go — Check off each item and watch your
            AI readiness score appear in real-time. You'll know exactly where
            you stand in under 10 minutes.
          </p>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            → You'll see what's costing you leads — Every gap is ranked by
            revenue impact. Fix the top 3 and you'll be more visible than 80% of
            pool builders in your market.
          </p>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            → Optional: Get a free audit call — Want me to walk through your
            biggest gaps personally? I'll send you a calendar link after you
            complete the checklist. No pitch. No pressure. Just answers.
          </p>
          <p className="text-md md:text-2xl mb-4 md:mb-10 font-bold">
            The pool builders who run this checklist in the next 30 days will
            dominate their markets in 2026.
          </p>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            The ones who don't? They'll spend 2026 wondering why their
            competitor's phone won't stop ringing while theirs sits silent.
          </p>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            Don't be that guy.
          </p>
          <div className="bg-slate-200 rounded-2xl shadow-lg">
            <form
              id="_form_1_"
              noValidate
              onSubmit={handleSubmit}
              className="max-w-2xl py-20 px-6 mx-auto my-14"
            >
              <input type="hidden" name="u" value="1" />
              <input type="hidden" name="f" value="1" />
              <input type="hidden" name="s" />
              <input type="hidden" name="c" value="0" />
              <input type="hidden" name="m" value="0" />
              <input type="hidden" name="act" value="sub" />
              <input type="hidden" name="v" value="2" />
              <input
                type="hidden"
                name="or"
                value="fab33f6e-200e-41a0-9bb1-4b9056083f95"
              />
              <div>
                <h2 className="text-3xl mb-10 ">
                  Just enter your information below and we'll send you the{' '}
                  <span className="font-bold">
                    FREE AI SEO Checklist for Pool Builders
                  </span>
                </h2>
              </div>
              <div>
                <label htmlFor="firstname"> First Name</label>
                <div>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border-2 border-slate-100 w-full mb-4 p-4 rounded-xl required email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email">
                  Email<span>*</span>
                </label>
                <div>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Type your email"
                    required
                    className="border-2 border-slate-100 w-full mb-4 p-4 rounded-xl required email"
                  />
                </div>
              </div>
              <div>
                <button
                  id="_form_1_submit"
                  className={`text-2xl text-white font-bold w-full mb-2 p-6 rounded-xl text-center button mt-2 ${
                    isFormValid
                      ? 'bg-green-500'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                  type="button"
                  onClick={handleSubmit}
                  disabled={!isFormValid}
                >
                  {submitting
                    ? 'Sending…'
                    : 'Download the Free AI SEO Checklist'}
                </button>
                <p className="text-center mt-4 text-lg">
                  (and see what's holding your website back from generating
                  thousands in leads)
                </p>
              </div>
            </form>
          </div>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            <span className="font-bold">P.S.</span> — This is 100% free. No
            strings. I built this because I got tired of watching great pool
            companies lose to mediocre competitors who just happened to figure
            out AI search first. Use it. Fix your site. Win your market.{' '}
            <span className="font-bold">
              Or ignore it — and spend the next 12 months paying an SEO agency
              to optimize you into irrelevance while AI search eats your lunch.
            </span>
          </p>
          <p className="text-md md:text-2xl mb-4 md:mb-10"> Your call.</p>
        </div>
      </section>
    </div>
  )
}
