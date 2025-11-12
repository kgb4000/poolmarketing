'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { MoveRight } from 'lucide-react'

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
        mode: 'no-cors'
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
        <h1 className="text-3xl lg:text-7xl font-bold text-black mb-10 leading-normal">
          Is Your Pool Company Invisible on Google and AI Search?
        </h1>
        <div className="mb-10 grid md:grid-cols-2 items-center">
          <p className="text-md font-bold mb-4 lg:mb-0 flex self-center">
            Listen Here
            <MoveRight className="ml-4" />
          </p>
          <audio controls>
            <source src="/7-day-ai-marketing-guide.mp3" type="audio/ogg" />
            <source src="/7-day-ai-marketing-guide.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <p className="md:text-3xl mb-4 md:mb-10">
          Discover What’s Keeping You Out of Google, ChatGPT & Perplexity
          Results — And Fix It in 10 Minutes Flat
        </p>
        <hr className="border-2 my-10" />
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Right now, AI search engines are rewriting the rules of visibility.
          The way homeowners find pool builders has changed — and most companies
          don’t even realize they’re disappearing.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          You don’t have a traffic problem.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          You have an AI SEO problem.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Every day you stay invisible, you lose leads to the company that is
          showing up in AI search.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          That’s not just lost traffic — it’s lost revenue, lost trust, and lost
          time.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          When homeowners ask ChatGPT, “Who’s the best pool builder in [City]?”,
          does your name appear?
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          If it doesn’t… you’re already behind.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Because the first companies to get AI-ready will own the next decade
          of local SEO.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          At Pool Builder Growth, we help you uncover what’s secretly blocking
          your rankings — not just on Google, but on AI engines like Gemini,
          Perplexity, and ChatGPT.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          We see the same pattern over and over again:
        </p>
        <ul className="list-disc ml-10">
          <li className="text-md md:text-2xl mb-4 md:mb-10">
            Missing structured data 🤖
          </li>
          <li className="text-md md:text-2xl mb-4 md:mb-10">
            Weak content clusters ✍️
          </li>
          <li className="text-md md:text-2xl mb-4 md:mb-10">
            Poor Core Web Vitals ⚙️
          </li>
          <li className="text-md md:text-2xl mb-4 md:mb-10">
            Neglected GBP pages 📍
          </li>
          <li className="text-md md:text-2xl mb-4 md:mb-10">
            No AI-readable answers 💬
          </li>
        </ul>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          So we built a tool that exposes these issues instantly — and gives you
          the roadmap to fix them before your competitors do.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Imagine knowing your exact AI SEO score — and having a checklist that
          tells you precisely what to do next.
        </p>
        <ul className="list-disc ml-10">
          <li className="text-md md:text-2xl mb-4 md:mb-10">
            ✅ Which pages to fix.
          </li>
          <li className="text-md md:text-2xl mb-4 md:mb-10">
            ✅ What schema to add.
          </li>
          <li className="text-md md:text-2xl mb-4 md:mb-10">
            ✅ How to make your content AI-discoverable.
          </li>
          <li className="text-md md:text-2xl mb-4 md:mb-10">
            ✅ How close you are to “AI Ready” status.
          </li>
        </ul>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          No agencies. No fluff. No guesswork.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Just results you can measure.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Introducing the AI SEO Checklist for Pool Builders (2025 Edition) — a
          free, interactive audit you can complete in 10 minutes.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">You’ll get:</p>
        <ul className="list-disc ml-10">
          <li className="text-md md:text-2xl mb-4 md:mb-10">
            🧭 16 Sections — Technical, On-Page, Local SEO, AI Optimization, and
            more
          </li>
          <li className="text-md md:text-2xl mb-4 md:mb-10">
            📊 Auto-scored Dashboard to see your readiness instantly
          </li>
          <li className="text-md md:text-2xl mb-4 md:mb-10">
            💡 Action plan to boost visibility in Google and AI searches
          </li>
          <li className="text-md md:text-2xl mb-4 md:mb-10">
            🔗 Pro tips from real pool marketing campaigns
          </li>
        </ul>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          All inside a single, easy-to-use Google Sheet.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Don’t wait for your competitors to outrank you in AI search.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10" id="form">
          Claim your free copy of the AI SEO Checklist for Pool Builders and see
          exactly where you stand.
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
            What happens after you submit:
          </h2>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            → Instant access to your AI SEO Checklist
          </p>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            You’ll get immediate access to your interactive Google Sheet
            checklist. No emails lost in spam. No waiting for someone to
            “approve” it. It’s yours right away — ready to use.
          </p>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            → You’ll See Your Score — Right on the Dashboard.
          </p>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            The checklist automatically calculates your AI SEO Readiness Score
            across 16 key categories — from Technical SEO to Local Optimization
            to AI Visibility.
          </p>
          <ul className="list-disc ml-10">
            <li className="text-md md:text-2xl mb-4 md:mb-10">
              ✅ You’ll see where you’re strong.
            </li>
            <li className="text-md md:text-2xl mb-4 md:mb-10">
              ⚠️ You’ll see where you’re slipping.
            </li>
            <li className="text-md md:text-2xl mb-4 md:mb-10">
              ❌ And you’ll know exactly what’s costing you rankings.
            </li>
          </ul>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            → You’ll Know What to Fix — In Plain English.
          </p>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            No jargon. No “SEO-speak.”
          </p>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            Every task includes a short, plain-language description — so you can
            take immediate action (or send it to your web guy with zero
            confusion).
          </p>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            → Invitation to book your free Live SEO Audit Session
          </p>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            <span className="font-bold">No spam. No gimmicks.</span> Just the
            information you need to dominate your market before your competitors
            wake up.
          </p>
        </div>
      </section>
    </div>
  )
}
