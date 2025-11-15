'use client'

import { useState } from 'react'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'

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
    formData.append('u', '7')
    formData.append('f', '7')
    formData.append('s', '')
    formData.append('c', '0')
    formData.append('m', '0')
    formData.append('act', 'sub')
    formData.append('v', '2')
    formData.append('or', 'c5768aaa-3a29-460d-aea1-7712daa7f2e1')
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
      window.location.href = '/blog-system/thank-you'
    }, 1500)
  }
  return (
    <>
      <div className="container max-w-4xl mx-auto px-6 my-10 lg:my-20">
        <section>
          <h1 className="text-3xl lg:text-7xl font-bold text-black mb-10 leading-normal">
            How Smart Pool Builders Turn Their Blogs Into 24/7 Lead-Generating
            Machines (While Everyone Else Just Posts ‘Content’)
          </h1>
          <div className="mb-10 grid lg:grid-cols-2 items-center">
            <p className="text-xl font-bold mb-4 lg:mb-0 flex self-center">
              Listen Here
              <MoveRight className="ml-4" />
            </p>
            <audio controls>
              <source src="/blog-system.mp3" type="audio/ogg" />
              <source src="/blog-system.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <p className="text-2xl mb-4">
            If you’re tired of writing “SEO posts” that vanish into Google’s
            graveyard, it’s time to use a proven system that gets your blog
            ranking, converting, and bringing in homeowner leads week after week
            — without spending a dime on ads.
          </p>
          <hr className="border-2 my-10" />
          <p className="text-2xl mb-4 font-light">
            Most pool builders think blogging is about words on a page. That’s
            why they post, pray, and wonder why nothing happens.
          </p>
          <p className="text-2xl mb-4 font-light">The truth?</p>
          <p className="text-2xl mb-4 font-light">
            Your blog can be your{' '}
            <span className="font-bold">most valuable sales asset</span> — if
            you structure it the right way.
          </p>
          <p className="text-2xl mb-4 font-light">
            We’ve built a simple system that turns every article into a{' '}
            <span className="font-bold">magnet for local search traffic</span>,
            a trust-builder for homeowners, and a{' '}
            <span className="font-bold">lead generator</span> that runs while
            you sleep.
          </p>
          <p className="text-2xl mb-4 font-light">
            Download the free{' '}
            <span className="font-bold">Pool Builder Blog System Template</span>{' '}
            and see exactly how to:
          </p>
          <ul className="list-disc my-6 ml-10">
            <li className="text-2xl mb-4">
              Pick topics that make homeowners call you first
            </li>
            <li className="text-2xl mb-4">
              Write posts that Google and AI tools actually recommend
            </li>
            <li className="text-2xl mb-4">
              Turn your blog into a repeatable, lead-producing workflow your
              competitors will envy
            </li>
          </ul>
          <div className="text-center my-10">
            <Link href="#form">
              <button className="border-2 px-6 py-8 rounded-3xl font-bold bg-green-500 text-white text-2xl mb-6">
                Get My Free Blog System Template
              </button>
            </Link>
            <p className="text-xl">
              (and see how top builders turn posts into profit)
            </p>
          </div>
        </section>
        <section className="py-10">
          <h2 className="my-6 text-4xl font-bold">
            Why Most Pool Builder Blogs Fail (and What Nobody’s Telling You)
          </h2>
          <p className="text-3xl mb-4 font-light">
            Let’s be honest — most pool builder blogs are digital ghost towns.
          </p>
          <hr className="border-2 my-16" />
          <p className="text-2xl mb-4 font-light">
            They’re packed with generic “Top 10 Pool Tips” posts written for
            nobody in particular, stuffed with random keywords, and forgotten
            the minute they’re published.
          </p>
          <p className="text-2xl mb-4 font-bold">No traffic.</p>
          <p className="text-2xl mb-4 font-bold">No leads.</p>
          <p className="text-2xl mb-4 font-bold">No sales.</p>
          <p className="text-2xl mb-4 font-light">Here’s the ugly truth:</p>
          <p className="text-2xl mb-4 font-bold">
            The problem isn’t that blogging “doesn’t work.”
          </p>
          <p className="text-2xl mb-4 font-light">
            It’s that most pool builders are doing it wrong.
          </p>
          <p className="text-2xl mb-4 font-light">
            They’ve been sold the lie that “posting content” equals marketing.
          </p>
          <p className="text-2xl mb-4 font-light">
            So they copy what competitors do, publish a few articles, and hope
            Google magically sends leads.
          </p>
          <p className="text-2xl mb-4 font-light">
            But Google doesn’t reward “hope.”
          </p>
          <p className="text-2xl mb-4 font-light">
            It rewards <span className="font-bold">strategy</span>.
          </p>
          <p className="text-2xl mb-4 font-light">
            And homeowners don’t read “content.”
          </p>
          <p className="text-2xl mb-8 font-light">
            They read stories that solve their problems.
          </p>
          <p className="text-2xl mb-4 font-light">
            If your blog isn’t built around the words homeowners are actually
            searching for, if it doesn’t answer the questions AI search tools
            are already recommending, and if it doesn’t drive a clear next step…
            then it’s not marketing — it’s busywork disguised as progress.
          </p>
          <p className="text-2xl mb-4 font-bold">The Harsh Reality:</p>
          <p className="text-2xl mb-4 font-light">
            If no one finds your blog, you’re giving your competitors free real
            estate in Google and AI search results.
          </p>
          <p className="text-2xl mb-4 font-light">
            That’s why we created a simple, repeatable framework any pool
            builder can use — even if you’ve never written a single post before
            — to turn your blog into a real lead-generation system.
          </p>
          <div className="text-center my-10">
            <Link href="#form">
              <button className="border-2 px-6 py-8 rounded-3xl font-bold bg-green-500 text-white text-2xl">
                Show Me the Blog System Template →
              </button>
            </Link>
          </div>
        </section>
        <section className="py-10">
          <h2 className="my-6 text-4xl font-bold">
            The Solution — The Pool Builder Blog System Template
          </h2>
          <p className="text-3xl mb-4">
            Finally… a Simple, Proven Framework That Turns Every Blog Post Into
            a Lead Magnet for Your Pool Business
          </p>
          <hr className="border-2 my-16" />
          <p className="text-2xl mb-4 font-light">
            Most marketing agencies will happily take your money to “do SEO,”
            “create content,” or “write blogs.”
          </p>
          <p className="text-2xl mb-4 font-light">
            But what they won’t tell you is this:
          </p>
          <p className="text-2xl mb-4 font-light">
            Without the right structure, every word they write might as well be
            invisible.
          </p>
          <p className="text-2xl mb-4 font-light">
            That’s why we created the Pool Builder Blog System Template — a
            straightforward, plug-and-play framework built for one purpose:
          </p>
          <p className="text-2xl mb-4 font-bold">
            👉 to turn your blog into a lead-generating, client-booking machine.
          </p>
          <p className="text-2xl mb-4 font-light">
            No hype. No tech jargon. No guessing what to write next.
          </p>
          <p className="text-2xl mb-4 font-light">
            Just a clear, repeatable system that shows you exactly how to:
          </p>
          <ul className="list-disc my-6 ml-10">
            <li className="text-2xl mb-4">
              Pick topics homeowners are actively searching for in Google and AI
              tools like ChatGPT and Perplexity
            </li>
            <li className="text-2xl mb-4">
              Structure every post so it ranks faster and stays visible longer
            </li>
            <li className="text-2xl mb-4">
              Write in a way that builds authority and trust — even if you hate
              writing
            </li>
            <li className="text-2xl mb-4">
              Add simple calls-to-action that turn readers into real homeowner
              inquiries
            </li>
          </ul>
          <p className="text-2xl mb-4 font-light">It’s not a theory.</p>
          <p className="text-2xl mb-4 font-light">
            It’s a <span className="font-bold">field-tested blueprint</span> we
            built specifically for pool companies tired of wasting money on ads
            that don’t deliver.
          </p>
          <div className="ml-10 border-l-4 pl-10 my-10">
            <p className="text-2xl mb-4 font-light">If you’ve ever thought,</p>
            <p className="text-2xl mb-4 font-light">
              “Blogging takes too much time,”
            </p>
            <p className="text-2xl mb-4 font-light">or</p>
            <p className="text-2xl mb-4 font-light">
              “We tried it — it didn’t work,”
            </p>
            <p className="text-2xl mb-4 font-light">
              then this is the turning point.
            </p>
            <p className="text-2xl mb-4 font-light">
              Because what you were missing wasn’t effort — it was a system that
              sells while you sleep.
            </p>
          </div>
          <div className="text-center my-10">
            <Link href="#form">
              <button className="border-2 px-6 py-8 rounded-3xl font-bold bg-green-500 text-white text-2xl mb-6">
                Get the Free Pool Builder Blog System Template
              </button>
            </Link>
            <p className="text-xl">
              (and start turning your blog into a lead-producing asset today)
            </p>
          </div>
          <p className="text-2xl mb-4 font-bold">
            This isn’t “theory marketing.”
          </p>
          <p className="text-2xl mb-4 font-light">
            It’s the same framework used by agencies that charge thousands per
            month — distilled, simplified, and tailored to fit the pool
            industry.
          </p>
        </section>
        <section className="py-10">
          <h2 className="my-6 text-4xl font-bold">
            What’s Inside the Pool Builder Blog System Template
          </h2>
          <p className="text-3xl mb-10 font-light">
            Here’s Exactly What You’ll Get When You Download the Pool Builder
            Blog System Template
          </p>
          <hr className="border-2 my-16" />
          <div className="mb-10">
            <h3 className="text-3xl mb-4 font-bold">
              1. The 3 Silent Killers Choking Your Blog’s Leads
            </h3>
            <p className="text-2xl mb-4 font-light">
              You’ll uncover the invisible mistakes 97% of pool builders make
              with their content — and how to fix them fast.
            </p>
            <p className="text-2xl mb-4 font-light">
              Once you see these, you’ll never look at “content” the same way
              again.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="text-3xl mb-4 font-bold">
              2. The Blog System Framework (Step-by-Step)
            </h3>
            <p className="text-2xl mb-4 font-light">
              Our plug-and-play system that shows you how to plan, write, and
              structure blog posts that Google and AI tools love.
            </p>
            <p className="text-2xl mb-4 font-light">
              No guesswork. No chasing trends. Just a repeatable workflow that
              gets results.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="text-3xl mb-4 font-bold">
              3. Keyword & Topic Finder for Pool Builders
            </h3>
            <p className="text-2xl mb-4 font-light">
              Forget “general SEO advice.”
            </p>
            <p className="text-2xl mb-4 font-light">
              You’ll get a mini list of real homeowner search terms proven to
              attract ready-to-buy pool clients.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="text-3xl mb-4 font-bold">
              4. The AI Optimization Checklist (2025 Edition)
            </h3>
            <p className="text-2xl mb-4 font-light">
              Learn how to make your blogs show up not just in Google — but in
              AI search tools like ChatGPT, Gemini, and Perplexity.
            </p>
            <p className="text-2xl mb-4 font-light">
              Because modern SEO isn’t about keywords anymore. It’s about AI
              visibility.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="text-3xl mb-4 font-bold">
              5. The Conversion Blueprint
            </h3>
            <p className="text-2xl mb-4 font-light">
              Discover how to turn your blog traffic into calls, quotes, and
              consultations — even if your site gets just a few hundred visits a
              month.
            </p>
            <p className="text-2xl mb-4 font-light">
              This is where “content” becomes cash flow.
            </p>
          </div>
          <div className="text-center my-10">
            <Link href="#form">
              <button className="border-2 px-6 py-8 rounded-3xl font-bold bg-green-500 text-white text-2xl mb-6">
                Download the Free Pool Builder Blog System Template
              </button>
            </Link>
            <p className="text-xl">
              (and watch your blog start working like a 24/7 sales machine)
            </p>
          </div>
        </section>
        <section className="py-10">
          <h2 className="my-6 text-4xl font-bold">
            Who This Is For (and Who It’s Not For)
          </h2>
          <p className="text-3xl mb-4 font-light">
            This Isn’t for Every Pool Builder — and That’s Exactly Why It Works.
          </p>
          <hr className="border-2 my-16" />
          <p className="text-2xl mb-4 font-light">Let’s cut to the chase.</p>
          <p className="text-2xl mb-4 font-light">
            <span className="font-bold">
              The Pool Builder Blog System Template
            </span>{' '}
            isn’t for anyone who just wants “more content.”
          </p>
          <p className="text-2xl mb-4 font-light">
            It’s for the builders who want more clients.
          </p>
          <p className="text-2xl mb-10 font-light">
            If that’s you — keep reading.
          </p>
          <p className="text-3xl mb-4 font-bold">✅ This Is for You If…</p>
          <ul className="list-disc my-6 ml-10">
            <li className="text-2xl mb-4">
              You’re tired of posting random “pool care” articles and seeing
              zero leads
            </li>
            <li className="text-2xl mb-4">
              You know your work is top-notch — but your website doesn’t reflect
              it
            </li>
            <li className="text-2xl mb-4">
              You’ve invested in SEO or ads before and got burned by “marketing
              fluff”
            </li>
            <li className="text-2xl mb-4">
              You understand that ranking on Google and showing up in AI tools
              like ChatGPT is the new playing field
            </li>
            <li className="text-2xl mb-4">
              You’re serious about turning your website into a real sales asset
              that brings leads while you focus on builds
            </li>
          </ul>
          <p className="text-3xl mb-4 font-bold">❌ This Is NOT for You If…</p>
          <ul className="list-disc my-6 ml-10">
            <li className="text-2xl mb-4">
              You’re happy with word-of-mouth and don’t want more business
            </li>
            <li className="text-2xl mb-4">
              You think “blogging” means writing about pool cleaning tips once a
              year
            </li>
            <li className="text-2xl mb-4">
              You’re looking for cheap, copy-paste articles written by AI with
              no strategy
            </li>
            <li className="text-2xl mb-4">
              You believe results should happen overnight without consistent
              effort
            </li>
          </ul>
          <p className="text-2xl mb-4 font-light">
            Look — if you’re the kind of pool builder who believes in
            craftsmanship, precision, and systems that last, then this guide
            will feel like finding the missing piece in your marketing.
          </p>
          <p className="text-2xl mb-4 font-light">
            If you’re not… that’s fine too.
          </p>
          <p className="text-2xl mb-4 font-light">
            Just understand that while you’re waiting for “something to change,”
            your competitors will be using this exact system to dominate Google
            and AI search in your market.
          </p>
          <div className="text-center my-10">
            <Link href="#form">
              <button className="border-2 px-6 py-8 rounded-3xl font-bold bg-green-500 text-white text-2xl mb-6">
                Yes, I Want the Blog System Template
              </button>
            </Link>
            <p className="text-center mt-4 text-lg">
              (Show me how to turn my blog into a lead machine)
            </p>
          </div>
        </section>
        <section className="py-10">
          <h2 className="my-6 text-4xl font-bold">
            Why This System Works (Even If You’ve Tried SEO Before and Failed)
          </h2>
          <p className="text-3xl mb-4">
            It’s Built for Pool Builders — Not Generic “Marketing Clients.”
          </p>
          <hr className="border-2 my-10" />
          <p className="text-2xl mb-4 font-light">
            If you’ve tried blogging, SEO, or even paid ads before and walked
            away thinking, “This stuff just doesn’t work for my business,”
          </p>
          <p className="text-2xl mb-4 font-light">
            you’re not wrong — you were just playing by the wrong rules.
          </p>
          <p className="text-2xl mb-4 font-light">
            Here’s what every pool builder needs to understand:
          </p>
          <div className="mb-10">
            <h3 className="text-3xl mb-4 font-bold">
              1. Traditional SEO Is Built for Traffic — Not for Leads
            </h3>
            <p className="text-2xl mb-4 font-light">
              Most marketing companies chase traffic numbers.
            </p>
            <p className="text-2xl mb-4 font-light">
              They’ll brag about clicks, impressions, and keywords… while your
              phone stays silent.
            </p>
            <p className="text-2xl mb-4 font-light">
              Our system flips that on its head.
            </p>
            <p className="text-2xl mb-4 font-light">
              We build content around buying intent — the exact phrases
              homeowners search when they’re ready to hire.
            </p>
            <p className="text-2xl mb-4 font-light">
              That’s why every post you publish works like a 24/7 digital
              salesperson, not a “blog article.”
            </p>
          </div>
          <div className="mb-10">
            <h3 className="text-3xl mb-4 font-bold">
              2. It Combines Google SEO + AI Search Optimization
            </h3>
            <p className="text-2xl mb-4 font-light">
              Google isn’t the only game anymore.
            </p>
            <p className="text-2xl mb-4 font-light">
              Homeowners are asking ChatGPT, Perplexity, and Gemini for pool
              builder recommendations.
            </p>
            <p className="text-2xl mb-4 font-light">
              <span className="font-bold">The Blog System Template</span> is the
              first framework built to make sure your content ranks in both
              worlds. So whether a homeowner searches on Google or asks an AI,
              your company shows up — not your competitor.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="text-3xl mb-4 font-bold">
              3. It’s Built on a Simple Workflow You Can Actually Stick To
            </h3>
            <p className="text-2xl mb-4 font-light">
              Our system is built for speed and consistency — not perfection.
            </p>
            <p className="text-2xl mb-4 font-light">You’ll know exactly:</p>
            <ul className="list-disc my-6 ml-10">
              <li className="text-2xl mb-4">What to write</li>
              <li className="text-2xl mb-4">How to structure it</li>
              <li className="text-2xl mb-4">When to post it</li>
              <li className="text-2xl mb-4">
                And how to promote it without wasting hours
              </li>
            </ul>
            <p className="text-2xl mb-4 font-light">
              No more guessing. No more staring at a blank screen.
            </p>
            <p className="text-2xl mb-4 font-light">
              Just a clear plan you can follow (or hand off to your team).
            </p>
          </div>
          <hr className="border-2 my-16" />
          <p className="text-2xl mb-4 font-light">
            You don’t need a degree in marketing or a $3,000/month agency to
            make this work.
          </p>
          <p className="text-2xl mb-4 font-light">
            You just need a system built for your industry — with steps that
            make sense for how homeowners actually buy pools.
          </p>
          <p className="text-2xl mb-4 font-light">
            Once you see it, you’ll wonder why nobody explained it this clearly
            before.
          </p>
          <hr className="border-2 my-16" />
          <div className="text-center my-10">
            <Link href="#form">
              <button className="border-2 px-6 py-8 rounded-3xl font-bold bg-green-500 text-white text-2xl mb-6">
                Get My Free Blog System Template
              </button>
            </Link>
            <p className="text-center mt-4 text-lg">
              (and finally understand how to make blogging bring in real leads)
            </p>
          </div>
        </section>
        <section>
          <h2 className="my-6 text-4xl font-bold">
            What Happens After You Download
          </h2>
          <p className="text-3xl mb-4">
            Here’s What Happens Next (And Why Most Pool Builders Are Shocked by
            How Simple It Is)
          </p>
          <hr className="border-2 my-16" />
          <p className="text-2xl mb-4 font-light">
            When you click the button below and download the Pool Builder Blog
            System Template, three things happen right away:
          </p>
          <div className="mb-10">
            <h3 className="text-3xl mb-4 font-bold">
              1. You’ll See Exactly Why Your Current Blog Isn’t Working
            </h3>
            <p className="text-2xl mb-4 font-light">
              The first few pages reveal the three silent killers choking your
              visibility and leads — and how to fix them instantly.
            </p>
            <p className="text-2xl mb-4 font-light">
              Most pool builders will say, “I saw what we were doing wrong
              within five minutes.”
            </p>
          </div>
          <div className="mb-10">
            <h3 className="text-3xl mb-4 font-bold">
              2. You’ll Know What to Post, When to Post, and How to Rank
            </h3>
            <p className="text-2xl mb-4 font-light">
              You’ll get a plug-and-play framework that shows you how to plan
              your next 4–6 blog posts — the same kind that attract real
              homeowner searches.
            </p>
            <p className="text-2xl mb-4 font-light">
              No more guessing, no more “writer’s block.”
            </p>
          </div>
          <div className="mb-10">
            <h3 className="text-3xl mb-4 font-bold">
              3. You’ll Have a Clear Path to Turning Posts Into Profit
            </h3>
            <p className="text-2xl mb-4 font-light">
              This isn’t theory — it’s action.
            </p>
            <p className="text-2xl mb-4 font-light">
              You’ll understand exactly how your blog becomes a steady
              lead-generation asset that keeps bringing you inquiries long after
              it’s published.
            </p>
          </div>
          <p className="text-2xl mb-4 font-light">
            Imagine checking your email one morning and seeing an inquiry from a
            homeowner who found you through a blog post you wrote weeks ago.
          </p>
          <p className="text-2xl mb-4 font-light">
            That’s the power of a system that never stops working.
          </p>
          <p className="text-2xl mb-4 font-light">
            You can keep relying on random luck — or you can build something
            predictable.
          </p>
          <p className="text-2xl mb-4 font-light">The next move is yours.</p>
          <hr className="border-2 my-16" />
          <p className="text-2xl mb-4 font-light">
            We’re only sharing this framework for a limited time while we launch
            this new agency. Once the campaign closes, the template comes down.
          </p>
          <p className="text-2xl mb-4 font-light">
            So if you’re reading this, grab it while you still can.
          </p>
          <div className="text-center my-10">
            <Link href="#form">
              <button className="border-2 px-6 py-8 rounded-3xl font-bold bg-green-500 text-white text-2xl mb-6">
                Get the Free Blog System Template Now
              </button>
            </Link>
            <p className="text-center mt-4 text-lg">
              (and start turning your pool builder blog into a 24/7 sales
              machine)
            </p>
          </div>
        </section>
        <section id="form">
          <h2 className="my-6 text-4xl font-bold">Your Next Step</h2>
          <p className="text-3xl mb-4">
            You Can Keep Guessing… or You Can Start Growing.
          </p>
          <p className="text-2xl mb-4 font-light">Let’s be real.</p>
          <p className="text-2xl mb-4 font-light">
            Every week you wait to “figure out your content strategy” is another
            week your competitors show up ahead of you in Google — and soon, in
            every AI search tool homeowners use.
          </p>
          <p className="text-2xl mb-4 font-light">
            You’ve already seen what happens when you don’t have a plan:
          </p>
          <ul className="list-disc my-6 ml-10">
            <li className="text-2xl mb-4">Random blog posts that don’t rank</li>
            <li className="text-2xl mb-4">Zero calls from your website</li>
            <li className="text-2xl mb-4">
              Missed leads that should’ve been yours
            </li>
          </ul>
          <p className="text-2xl mb-4 font-light">
            Now you’ve got a chance to change that.
          </p>
          <p className="text-2xl mb-4 font-light">
            The Pool Builder Blog System Template gives you the exact structure
            to turn your website into a lead machine — starting this week.
          </p>
          <p className="text-2xl mb-4 font-light">
            It’s free. It’s simple. And it works.
          </p>
          <p className="text-2xl mb-4 font-light">But only if you act.</p>
        </section>
        <section>
          <div className="bg-slate-200 rounded-2xl shadow-lg">
            <form
              className="max-w-2xl py-20 px-6 mx-auto my-14 validate"
              onSubmit={handleSubmit}
              noValidate
            >
              <input type="hidden" name="u" value="7" />
              <input type="hidden" name="f" value="7" />
              <input type="hidden" name="s" />
              <input type="hidden" name="c" value="0" />
              <input type="hidden" name="m" value="0" />
              <input type="hidden" name="act" value="sub" />
              <input type="hidden" name="v" value="2" />
              <input
                type="hidden"
                name="or"
                value="c5768aaa-3a29-460d-aea1-7712daa7f2e1"
              />
              <input type="hidden" name="redirect" value="" />
              <div>
                <p className="text-3xl mb-10 ">
                  Just enter your information below and I'll send the complete
                  Blog System to your email immediately.
                </p>
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Type your first name"
                  className="border-2 border-slate-100 w-full mb-4 p-4 rounded-xl text"
                />
                <label htmlFor="email">Email</label>
                <div></div>
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
                <button
                  type="button"
                  id="mc-embedded-subscribe"
                  disabled={!isFormValid}
                  onClick={handleSubmit}
                  className={`text-2xl text-white font-bold w-full mb-2 p-6 rounded-xl text-center button mt-2 ${
                    isFormValid
                      ? 'bg-green-500'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  {submitting
                    ? 'Sending…'
                    : 'Download the Free Blog System Template Now'}
                </button>
                <p className="text-center mt-4 text-lg">
                  (and start turning your pool builder blog into a 24/7 sales
                  machine)
                </p>
              </div>
            </form>
          </div>
          <p className="text-3xl mb-4 font-bold">
            100% Free. No Strings Attached.
          </p>
          <p className="text-2xl mb-4">
            You risk nothing by grabbing it — but you risk everything by
            ignoring it.
          </p>
          <p className="text-2xl mb-4">
            Because while you’re debating, someone else in your market will
            download it, follow the steps, and start ranking for the exact
            searches you should own.
          </p>
          <p className="text-2xl mb-4">
            <span className="font-light">
              <span className="font-bold">P.S.</span> This isn’t “just another
              PDF.” It’s the same step-by-step system that transforms random
              content into predictable leads for pool builders who take action.
            </span>
          </p>
          <p className="text-2xl mb-4">
            If you want your blog to finally bring in homeowners — not just
            clicks — click below and get it now.
          </p>
          <p className="text-2xl mb-4">
            <span className="font-bold">P.P.S.</span> The only mistake you can
            make today is doing nothing.
          </p>
          <p className="text-2xl mb-4">
            Click the button, get the system, and see for yourself how powerful
            a real strategy feels.
          </p>
        </section>
      </div>
    </>
  )
}
