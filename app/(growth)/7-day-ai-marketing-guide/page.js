'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'

export default function BlogContentPlanner() {
  const [submitting, setSubmitting] = useState(false)

  return (
    <div className="container max-w-4xl mx-auto px-6 my-10 lg:my-20">
      <section>
        <h1 className="text-3xl lg:text-7xl font-bold text-black mb-10 leading-normal">
          The 7-Day AI Marketing Plan For Pool Builders
        </h1>
        <div className="mb-10 grid md:grid-cols-2 items-center">
          <p className="text-md font-bold mb-4 lg:mb-0 flex self-center">
            Listen Here
            <MoveRight className="ml-4" />
          </p>
          <audio controls>
            <source src="7-day-ai-marketing-guide.mp3" type="audio/ogg" />
            <source src="7-day-ai-marketing-guide.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <p className="md:text-3xl mb-4 md:mb-10">
          If You're Still Marketing Your Pool Construction Company the Same Way
          You Did Five Years Ago, You're About to Get Left Behind
        </p>
        <hr className="border-2 my-10" />
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          While you're building gorgeous pools, a small group of your
          competitors are starting to figure out AI-enhanced marketing. Here's a
          7-day plan to get ahead of them before this becomes the new standard.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Let me tell you what's starting to happen right now:
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Homeowners in your town are still typing "pool builders near me" into
          Google.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          But here's what's changing:
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Some of them are also asking ChatGPT, Gemini, and other AI tools
          detailed questions about their pool projects before they ever contact
          a contractor.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Questions like "I have a small backyard, will a pool fit?" or "What's
          the difference between fiberglass and concrete pools?" or "What should
          I budget for a pool installation?"
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          They're getting educated by AI before they call you. And if that AI
          doesn't know you exist, guess what? You're not part of that
          conversation.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Google is also testing AI Overviews that sometimes appear in search
          results. When they do show up, they can influence which businesses get
          visibility. Right now, most pool builders have no idea this is even
          happening.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10 font-bold">
          Here's the opportunity:
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          While 95% of your competition is still posting random photos on
          Facebook and hoping for referrals, you can position yourself to
          benefit from these emerging trends before they become mainstream.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Let me guess how you're marketing right now. You post some photos on
          Facebook when you remember. Maybe you've got a website that gets some
          traffic. You rely heavily on referrals. You might run a Google ad here
          and there when things get slow.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          That still works... for now. But customer behavior is shifting, and
          the pool builders who adapt early are going to have a massive
          advantage over those who wait.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Here's what's really happening:
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Customers are becoming more educated before they contact contractors.
          They expect faster responses. They want more information upfront.
          They're comparison shopping more thoroughly than ever before.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          The pool builders who give customers what they want - instant cost
          estimates, detailed information, immediate responses - are winning
          more projects and commanding higher prices.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Meanwhile, builders who still operate like it's 2019 are wondering why
          customers seem more price-focused and harder to close.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          You're not losing projects because of your craftsmanship. You're
          losing them because of your positioning and process.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Now, here's why I created this guide.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          I spent the last 18 months studying what's working in pool builder
          marketing right now. I analyzed successful pool companies, tested
          different strategies, and figured out what separates the builders
          booking premium projects from those fighting over price shoppers.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          What I discovered was fascinating. The gap between pool builders who
          use modern marketing systems and those who don't is growing every
          month. And it's not about spending more money - it's about working
          smarter.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          So I created a 7-day system that any pool builder can implement,
          regardless of technical skill or marketing budget.
        </p>
      </section>
      <div className="text-center my-10">
        <Link href="#form">
          <button className="border-2 px-8 py-8 rounded-3xl font-bold bg-green-500 text-white md:text-2xl mb-6">
            Download the 7-day AI Marketing Guide Now
          </button>
        </Link>
        <p className="text-center mt-4 text-lg">
          (and start turning your pool builder blog into a 24/7 sales machine)
        </p>
      </div>
      <hr className="border-2 my-10" />
      <section>
        <h2 className="my-10 text-4xl font-bold">
          Here's what you're going to build:
        </h2>
        <div>
          <h3 className="md:text-2xl mb-4 font-bold">
            Day 1: The AI Pool Cost Calculator/Estimator
          </h3>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            A pool cost calculator that answers prospects' number one question
            instantly while capturing their project details and contact
            information automatically.
          </p>
        </div>
        <div>
          <h3 className="md:text-2xl mb-4 font-bold">
            Day 2: Automated Google Business Profile
          </h3>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            An automated Google Business posting that keeps you visible in local
            search without the manual work.
          </p>
        </div>
        <div>
          <h3 className="md:text-2xl mb-4 font-bold">
            Day 3: Predictive AI Lead Scoring
          </h3>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            A lead scoring system that helps you prioritize hot prospects and
            nurture long-term leads automatically.
          </p>
        </div>
        <div>
          <h3 className="md:text-2xl mb-4 font-bold">
            Day 4: Competitive Intelligence Automation
          </h3>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            A competitive monitoring that keeps you informed about what other
            builders in your market are doing.
          </p>
        </div>
        <div>
          <h3 className="md:text-2xl mb-4 font-bold">
            Day 5: AI Content Generation & Repurposing
          </h3>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            A content systems that turn your expertise into multiple pieces of
            marketing material with minimal effort.
          </p>
        </div>
        <div>
          <h3 className="md:text-2xl mb-4 font-bold">
            Day 6: Automated Review Generation
          </h3>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            A automated review requests that systematically build your
            reputation.
          </p>
        </div>
        <div>
          <h3 className="md:text-2xl mb-4 font-bold">
            Day 7: AI Generated Email Nuture Sequence
          </h3>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            A email sequences that nurture leads based on their behavior and
            timeline.
          </p>
        </div>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          <span className="font-bold">Time investment:</span> 2-3 hours per day.
          By Day 7, you have a complete marketing system running 24/7.
        </p>
      </section>
      <div className="text-center my-10">
        <Link href="#form">
          <button className="border-2 px-8 py-8 rounded-3xl font-bold bg-green-500 text-white md:text-2xl mb-6">
            Download the 7-day AI Marketing Guide
          </button>
        </Link>
        <p className="text-center mt-4 text-lg">
          (and start turning your pool builder blog into a 24/7 sales machine)
        </p>
      </div>
      <hr className="border-2 my-16" />
      <section>
        <h3 className="text-xl md:text-3xl mb-4 font-bold">
          Now, let me be honest about why you should listen to me.
        </h3>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          I'm not going to claim I've helped hundreds of pool builders or show
          you fake income screenshots. Here's what I will tell you: I've spent
          18 months researching what actually works in pool builder marketing
          today, not what worked five years ago.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          This guide represents the strategies that are producing results right
          now for the pool builders smart enough to implement them.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Could you figure this out yourself? Absolutely. If you want to spend
          months testing, thousands on tools, and dealing with the trial and
          error.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Or you could follow this proven system and get ahead of the curve
          while most of your competition is still figuring out that things are
          changing.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Here's the thing about market shifts - they happen gradually, then
          suddenly. Right now, we're in the gradual phase. Most pool builders
          don't realize customer expectations are evolving. They're not building
          the systems that tomorrow's customers will expect.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          This creates a massive opportunity for builders who move now. But
          windows like this don't stay open forever.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Someone in your market is going to implement these systems first.
          They're going to become known as the pool builder who has their act
          together. The one who responds instantly, provides detailed
          information, and makes the buying process smooth and professional.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Once they establish that reputation, catching up becomes much harder.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10 font-bold">
          Here's what you're risking by waiting:
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Someone else becomes the obvious choice in your market.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          They capture the customers who value professionalism and
          responsiveness. You're left competing on price with builders who also
          haven't adapted.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10 font-bold">
          Or you could be the one who leads this shift over the next 7 days.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Most pool builders will stick with what they know. They'll hope
          referrals keep coming and wonder why business feels more competitive
          every year.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          A small group will take action.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          They'll implement these systems, position themselves ahead of the
          curve, and build businesses that attract premium customers who
          appreciate their professionalism.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">Which one are you?</p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          If you want to be in the group that gets ahead of this shift, here's
          what to do next. Just fill out the form below get your free 7-Day AI
          Marketing Guide. Just enter your name and email address, and I'll send
          you the complete system with step-by-step instructions.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          No credit card required.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">No sales calls.</p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Just actionable strategies you can start implementing today.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          The marketing landscape is evolving whether you participate or not.
          Your competitors will eventually figure out these systems.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          The only question is:
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Will you be leading the change or scrambling to catch up?
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Get your guide and start building your competitive advantage today.
        </p>
      </section>
      <hr className="border-2 my-16" />
      <section id="form">
        <h2 className="my-6 text-xl md:text-3xl font-bold">
          Get Your 7-Day Action Plan FREE
        </h2>
        <p className="text-md md:text-2xl mb-4 md:mb-10">Here's the deal:</p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Fill out the simple form below and I'll send you immediate access to:
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          ✓ The 7-Day AI Marketing Quick Start Guide - Complete system with
          checklists and implementation instructions
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          ✓ Follow-up guides delivered via email - Advanced strategies, AI
          prompts, and scaling tactics
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          ✓ Free Strategy Session invitation - Custom 90-day roadmap for your
          specific market
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          No credit card. No sales calls. No BS.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Just actionable strategies you can implement immediately to get ahead
          of the AI revolution in pool builder marketing.
        </p>
      </section>
      <section>
        <div className="bg-slate-200 rounded-2xl shadow-lg">
          <form
            form
            action="https://poolbuildergrowth.us4.list-manage.com/subscribe/post?u=9709f951450aedeb01b57d0ed&amp;id=6e4c434319&amp;f_id=008f95e3f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="max-w-2xl py-20 px-6 mx-auto my-14 validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll">
              <p className="text-3xl mb-10 ">
                Just enter your information below and I'll send the complete
                7-Day AI Marketing Guide.
              </p>
              <div class="mc-field-group">
                <label for="mce-FNAME">First Name </label>
                <input
                  type="text"
                  name="FNAME"
                  id="mce-FNAME"
                  className="border-2 border-slate-100 w-full mb-2 p-4 rounded-xl text"
                />
              </div>
              <div class="mc-field-group">
                <label for="mce-EMAIL">
                  Email Address <span class="asterisk">*</span>
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  required
                  className="border-2 border-slate-100 w-full mb-2 p-4 rounded-xl required email"
                />
              </div>
              <div hidden="">
                <input type="hidden" name="tags" value="4531409" />
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response"></div>
                <div className="response" id="mce-success-response"></div>
              </div>
              <div aria-hidden="true">
                <input
                  type="text"
                  name="b_9709f951450aedeb01b57d0ed_6e4c434319"
                  tabindex="-1"
                  className="hidden"
                />
              </div>
              <div class="clear">
                <button
                  type="submit"
                  id="mc-embedded-subscribe"
                  disabled={submitting}
                  className="text-2xl text-white font-bold bg-green-500 w-full mb-2 p-6 rounded-xl text-center button mt-2"
                >
                  {submitting
                    ? 'Sending…'
                    : 'Download the Free AI Marketing Guide Now'}
                </button>
                <p className="text-center mt-4 text-lg">
                  (and start turning your pool builder blog into a 24/7 sales
                  machine)
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="mb-10">
          <h2 className="my-6 text-xl md:text-3xl font-bold">
            What happens after you submit:
          </h2>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            → Instant access to your 7-Day Quick Start Guide
          </p>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            → Day 2: Receive Complete Implementation Guide (25 pages)
          </p>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            → Day 4: Receive AI Prompt Template Library
          </p>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            → Day 6: Receive Scaling Strategies
          </p>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            → Invitation to book your free Strategy Session
          </p>
          <p className="text-md md:text-2xl mb-4 md:mb-10">
            <span className="font-bold">No spam. No gimmicks.</span> Just the
            information you need to dominate your market before your competitors
            wake up.
          </p>
        </div>
        <hr className="border-2 my-16" />
      </section>
      <section>
        <p className="text-xl md:text-3xl mb-4 font-bold">
          Look, I've laid it all out for you.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          The AI revolution is happening whether you participate or not.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Your competitors are going to figure this out eventually.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          The only question is:{' '}
          <span className="font-bold">
            Will you be leading the charge or playing catch-up?
          </span>
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Most pool builders will ignore this.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          They'll stick with what they know, hope referrals keep coming, and
          wonder why business gets harder every year.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          <span className="font-bold">A small group will take action.</span>{' '}
          They'll follow this 7-day plan, implement the strategies, and position
          themselves as the obvious choice in their market.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Which one are you going to be?
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          There's only one way to find out.
        </p>
        <p className="text-md md:text-2xl mb-4 md:mb-10">
          Fill out the form above and start Day 1 today.
        </p>
      </section>
    </div>
  )
}
