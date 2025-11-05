'use client'

import { useState } from 'react'
import { CheckCircle, MoveRight } from 'lucide-react'

export default function ContentAudit() {
  const [submitting, setSubmitting] = useState(false)
  return (
    <div className="container max-w-4xl mx-auto px-4 my-10 lg:my-20">
      <h1 className="text-4xl lg:text-7xl font-bold text-black mb-4 leading-normal">
        Your Pool Company Is Invisible Online (And It's Costing You $100K+
        Projects)
      </h1>
      <div className="mb-10 grid lg:grid-cols-2 items-center">
        <p className="text-xl font-bold mb-4 lg:mb-0 flex self-center">
          Listen Here
          <MoveRight className="ml-4" />
        </p>
        <audio controls>
          <source src="content-audit.mp3" type="audio/ogg" />
          <source src="content-audit.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <div>
        <h2 className="my-10 text-4xl font-light">
          Here's what's happening right now in your city:
        </h2>
        <p className="text-2xl mb-4">
          A homeowner just searched "How much does a pool cost in [Your City]?"
        </p>
        <p className="text-2xl mb-4">
          <span className="font-bold">Google</span> showed them answers from
          your competitors.
        </p>
        <p className="text-2xl mb-4">
          <span className="font-bold">ChatGPT</span> explained to them the steps
          in building a pool.
        </p>
        <p className="text-2xl mb-4">
          <span className="font-bold">Perplexity AI</span> recommended a pool
          builder that publishes helpful content and ranks higher than you.
        </p>
        <p className="text-2xl mb-4 font-bold">Your company?</p>
        <p className="text-2xl mb-4 font-bold">Nowhere to be found.</p>
      </div>
      <hr className="border-2 my-10" />
      <div>
        <h2 className="my-6 text-4xl font-light">
          Every Day You're Not Writing Blog Content, You're Losing Leads
        </h2>
        <p className="text-2xl mb-4 font-bold">
          Homeowners are asking questions like these every single day:
        </p>
        <ul className="list-disc ml-10 my-6">
          <li className="text-2xl mb-4">
            "Fiberglass vs. concrete pool — which is better for my backyard?"
          </li>
          <li className="text-2xl mb-4">
            "What are the hidden costs of pool maintenance?"
          </li>
          <li className="text-2xl mb-4">
            "How long does pool installation really take?"
          </li>
          <li className="text-2xl mb-4">
            "What type of inground pool lasts the longest?"
          </li>
          <li className="text-2xl mb-4">"Does a pool increase home value?"</li>
        </ul>
        <p className="text-2xl mb-4 font-bold">
          If you're not answering these questions with fresh, helpful content,
          your competitors are.
        </p>
        <p className="text-2xl mb-4">
          And that means they're getting the <b>$50K-$120K projects</b> that
          should be yours.
        </p>
      </div>
      <hr className="border-2 my-10" />
      <div>
        <h2 className="my-6 text-4xl font-light">Hi, I'm Kes 👋</h2>
        <p className="text-2xl mb-4">
          After 8 years in digital marketing (including 3 years working with
          home improvement companies), I've seen the same pattern over and over:
        </p>
        <p className="text-2xl mb-4 font-bold">
          The pool builders who consistently publish helpful content become the
          go-to experts in their city.
        </p>
        <p className="text-2xl mb-4">Their phones ring more.</p>
        <p className="text-2xl mb-4">Their calendars stay full.</p>
        <p className="text-2xl mb-4">
          Competitors wonder where all the leads went.
        </p>
        <p className="text-2xl mb-4">
          That's why I started Pool Builder Growth.
        </p>
        <p className="text-2xl mb-4">
          To help serious pool builders become the obvious choice when
          homeowners are ready to build.
        </p>
      </div>
      <hr className="border-2 my-10" />
      <div>
        <h2 className="my-6 text-4xl font-light">
          Here's Exactly How I Help Pool Builders Dominate Local Search
        </h2>
        <p className="text-2xl mb-4">
          <span className="font-bold">Step 1: </span>Research What Your
          Customers Actually Search For
        </p>
        <p className="text-2xl mb-4">
          I dig into keyword data and analyze your local competitors to find the
          exact questions homeowners in your area are asking.
        </p>
        <p className="text-2xl mb-4">
          <span className="font-bold">Step 2: </span>Create Content That
          Converts Browsers Into Buyers
        </p>
        <p className="text-2xl mb-4">
          I write SEO-optimized blog posts that don't just get traffic — they
          turn curious homeowners into qualified leads who call you first.
        </p>
        <p className="text-2xl mb-4">
          <span className="font-bold">Step 3: </span>Publish Consistently So You
          Stay Top-of-Mind
        </p>
        <p className="text-2xl mb-4">
          Every month, fresh content goes live on your site, building your
          authority and keeping you ahead of competitors who post once a year
          (if that).
        </p>
      </div>
      <hr className="border-2 my-10" />
      <div>
        <h2 className="my-6 text-4xl font-light">
          What Kind of Content Actually Works?
        </h2>
        <p className="text-2xl mb-4">
          Here are examples of posts that get pool builders found and hired:
        </p>
        <p className="text-2xl mb-6">
          <b>"The Real Cost of Building a Pool in [Your City] in 2025"</b>{' '}
          Perfect for homeowners in the early research phase
        </p>
        <p className="text-2xl mb-6">
          <b>"5 Questions to Ask Any Pool Builder Before You Sign"</b> Positions
          you as the trustworthy expert
        </p>
        <p className="text-2xl mb-6">
          <b>"Saltwater vs. Chlorine: What Pool Dealers Won't Tell You"</b>{' '}
          Builds trust by being refreshingly honest
        </p>
        <p className="text-2xl mb-6">
          <b>"Why Pool Projects Get Delayed (And How to Avoid It)"</b> Shows
          your professionalism and expertise
        </p>
      </div>
      <div>
        <h2 className="my-6 text-4xl font-bold">
          Picture Two Different Scenarios:
        </h2>
        <div className="mb-10">
          <p className="text-2xl mb-4 font-semibold">Without Fresh Content:</p>
          <p className="text-2xl mb-4">Your website collects digital dust. </p>
          <p className="text-2xl mb-4">
            Homeowners can't find you when they search.
          </p>
          <p className="text-2xl mb-4">Competitors dominate Google results. </p>
          <p className="text-2xl mb-4">Leads trickle in slowly.</p>
          <p className="text-2xl mb-4">You're always competing on price.</p>
        </div>
        <div>
          <p className="text-2xl mb-4 font-semibold">With Monthly Content:</p>
          <p className="text-2xl mb-4">
            Your website becomes a resource homeowners can trust.
          </p>
          <p className="text-2xl mb-4">Google ranks you higher. </p>
          <p className="text-2xl mb-4">
            AI tools like ChatGPT, Preplexity, and Gemini cite your expertise.
          </p>
          <p className="text-2xl mb-4">Qualified leads call you first.</p>
          <p className="text-2xl mb-4">
            You can charge premium prices because you're seen as the expert.
          </p>
        </div>
      </div>
      <hr className="border-2 my-10" />
      <h2 className="my-6 text-4xl font-bold">
        I'm Taking On Just 9 Pool Construction Companies This Quarter
      </h2>
      <p className="text-2xl mb-4 font-semibold">
        Here's why I'm keeping it small:
      </p>
      <p className="text-2xl mb-4">
        I want to give each client my full attention and deliver exceptional
        results.
      </p>
      <p className="text-2xl mb-4">
        No handing your account off to junior writers.
      </p>
      <p className="text-2xl mb-4">No cookie-cutter content.</p>
      <p className="text-2xl mb-4">
        Just focused, high-quality work that actually moves the needle.
      </p>
      <p className="text-2xl mb-4">
        Plus, I'm offering launch pricing that's 20% below market rate to
        serious pool builders who want to increase leads and profits.
      </p>
      <hr className="border-2 my-10" />
      <div>
        <h2 className="my-6 text-4xl font-bold">
          Let's Start With a Free Deep-Dive Content Audit
        </h2>
        <p className="text-2xl mb-4 font-semibold">
          Here's what you'll get (normally $500, free for qualified pool
          builders):
        </p>
        <p className="text-2xl mb-4 flex items-start p-2">
          <CheckCircle className="w-8 h-8 text-green-400 mr-2 shrink-0 relative top-[0px]" />
          Complete analysis of your current website and blog
        </p>
        <p className="text-2xl mb-4 flex items-start p-2">
          <CheckCircle className="w-8 h-8 text-green-400 mr-2 shrink-0 relative top-[0px]" />
          15 high-value content topics homeowners in your market are searching
          for
        </p>
        <p className="text-2xl mb-4 flex items-start p-2">
          <CheckCircle className="w-8 h-8 text-green-400 mr-2 shrink-0 relative top-[0px]" />
          Competitor content gaps you can exploit
        </p>
        <p className="text-2xl mb-4 flex items-start p-2">
          <CheckCircle className="w-8 h-8 text-green-400 mr-2 shrink-0 relative top-[0px]" />
          3-month content roadmap to start outranking competitors
        </p>
        <p className="text-2xl mb-4 flex items-start p-2">
          <CheckCircle className="w-8 h-8 text-green-400 mr-2 shrink-0 relative top-[0px]" />
          Sample blog post outline you could publish next week
        </p>
        <p className="text-2xl mb-4">
          This audit takes me 3 hours to complete properly, so I'm only offering
          it to pool builders who are serious about growing their online
          presence.
        </p>
      </div>
      <hr className="border-2 my-10" />
      <div>
        <h2 className="my-6 text-4xl font-bold" id="form">
          Ready to Become the Pool Expert Homeowners Find First?
        </h2>
        <p className="text-2xl mb-4">
          The audit spots are filling up fast (I can only handle two
          comprehensive audits per week), and pool season planning starts now.
        </p>
        <p className="text-2xl mb-4">
          Don't let another month go by watching competitors steal leads that
          should be yours.
        </p>
        <div className="bg-slate-200 rounded-2xl shadow-lg">
          <form
            action="https://poolbuildergrowth.us4.list-manage.com/subscribe/post?u=9709f951450aedeb01b57d0ed&amp;id=6e4c434319&amp;f_id=008d95e3f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="max-w-2xl py-20 px-6 mx-auto my-14 validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll">
              <p className="text-3xl mb-10 ">
                Just enter your information below and I'll send the complete
                blog system to your email immediately.
              </p>
              <div class="mc-field-group">
                <label for="mce-FNAME">Email</label>
                <input
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  required
                  className="border-2 border-slate-100 w-full mb-2 p-4 rounded-xl text"
                />
              </div>
              <div className="mc-field-group">
                <label for="mce-EMAIL">
                  Website <span class="asterisk">*</span>
                </label>
                <input
                  type="url"
                  name="MMERGE7"
                  id="mce-MMERGE7"
                  required
                  className="border-2 border-slate-100 w-full mb-2 p-4 rounded-xl required email"
                />
              </div>
              <div hidden="">
                <input type="hidden" name="tags" value="4531410" />
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response"></div>
                <div className="response" id="mce-success-response"></div>
              </div>
              <div aria-hidden="true">
                <input
                  type="text"
                  name="b_9709f951450aedeb01b57d0ed_6e4c434319"
                  tabIndex="-1"
                  className="hidden"
                />
              </div>
              <div className="clear">
                <button
                  type="submit"
                  id="mc-embedded-subscribe"
                  disabled={submitting}
                  className="text-2xl text-white font-bold bg-green-500 w-full mb-2 p-6 rounded-xl text-center button mt-2"
                >
                  {submitting ? 'Sending…' : 'Get My Free Content Audit Now'}
                </button>
                <p className="text-center mt-4 text-lg">
                  (and start turning your pool builder blog into a 24/7 sales
                  machine)
                </p>
              </div>
            </div>
          </form>
        </div>
        <p className="text-2xl mb-4 font-bold">
          <span className="font-bold">P.S.</span> Even if we don't work
          together, you'll walk away with a clear roadmap for dominating local
          search.
        </p>
        <p className="text-2xl mb-4">
          But based on what I've seen with other pool builders, once you see the
          potential, you'll want to move fast.
        </p>
      </div>
    </div>
  )
}
