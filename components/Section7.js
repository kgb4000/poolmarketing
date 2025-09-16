import React from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Plus, Minus } from '@heroicons/react/20/solid'
import Button from './Button'

const Section7 = () => {
  return (
    <>
      <section className="bg-slate-50 py-20">
        <div className="container max-w-8xl mx-auto px-6 my-20">
          <h2 className="text-5xl font-bold text-black mb-4 leading-tight text-center max-w-2xl mx-auto">
            Frequently Asked Questions
          </h2>
          <p className="text-xl max-w-xl mx-auto text-center mb-10">
            Every strategy I recommend is backed by research. No guesswork, no
            generic solutions, always innovating.
          </p>
          <div className="max-w-5xl mx-auto">
            <Disclosure>
              <DisclosureButton>
                <p className="py-2 text-3xl mb-4 text-left">
                  I've been burned by marketing companies before. How is this
                  different?
                </p>
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500 text-xl mb-6">
                <p className="text-xl leading-normal mb-4">
                  You’re not alone, many pool builders I talk to have had the
                  same experience.
                </p>
                <p className="text-xl leading-normal mb-4">
                  The difference with my approach is transparency,
                  specialization, and results that actually matter to your
                  business.
                </p>
                <p className="text-xl leading-normal mb-4">
                  I don’t take a one-size-fits-all approach. Every strategy is
                  designed for the unique challenges of selling high-ticket pool
                  projects. You won’t just get clicks, impressions, or “traffic
                  reports.”{' '}
                </p>
                <p className="text-xl leading-normal mb-4">
                  You’ll see real inquiries from homeowners who are serious
                  about building a pool. You’ll always know what’s being done,
                  why it matters, and how it’s performing. No black-box
                  campaigns, no hidden fees.
                </p>
                <p className="text-xl leading-normal mb-6">
                  systems that keep generating leads, even when you’re not
                  running paid campaigns. My goal isn’t just to “do marketing”
                  for you, it’s to be a partner in growing your pool business
                  profitably and sustainably.
                </p>
              </DisclosurePanel>
            </Disclosure>
            <Disclosure>
              <DisclosureButton>
                <p className="py-2 text-3xl mb-4 text-left">
                  How long before I see results from SEO and digital marketing?
                </p>
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500 text-xl">
                <p className="text-xl leading-normal mb-6">
                  I’ll keep it real with you. SEO isn’t overnight.
                </p>
                <p className="text-xl leading-normal mb-6">
                  Most pool builders start to see traction in about 3–6 months,
                  depending on your market, your present website, landing pages,
                  and competition. That said, the work we put in today (like
                  optimizing your website and content) builds momentum that
                  keeps paying off for years.
                </p>
                <p className="text-xl leading-normal mb-6">
                  The good news is, while SEO compounds over time, other parts
                  of your marketing can start delivering faster. A
                  conversion-focused website, smart automation, and even
                  well-optimized ad campaigns can generate leads right away,
                  while SEO steadily positions you as the #1 pool builder
                  homeowners find first.
                </p>
                <p className="text-xl leading-normal mb-6">
                  My approach combines quick wins with long-term growth, so
                  you’re not stuck waiting months before seeing results—you get
                  a pipeline that builds now and scales later.
                </p>
              </DisclosurePanel>
            </Disclosure>
            <Disclosure>
              <DisclosureButton className="py-2 text-3xl mb-4 text-left">
                Do I really need a new website? Mine looks fine.
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500 text-xl">
                It depends. A website can “look fine” but still cost you leads
                every single day. The real question isn’t how your site looks,
                it’s how it performs. Does it show up when homeowners search for
                pool builders in your city? Does it guide visitors to call, fill
                out a form, or request a quote? Does it load fast and look great
                on mobile devices? Does it filter out tire-kickers so you spend
                time only on serious buyers? If the answer to any of those is
                “no,” then your website is more like a pretty brochure than a
                lead-generating tool. I build sites that don’t just look
                professional, they’re designed to rank higher, convert visitors,
                and turn more of your traffic into real projects.
              </DisclosurePanel>
            </Disclosure>
            <Disclosure>
              <DisclosureButton className="py-2 text-3xl mb-4 text-left">
                What if I already have someone doing my marketing?
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500 text-xl">
                <p className="text-xl leading-normal mb-6">
                  Fantastic. You’re already ahead of most builders. But here’s
                  the truth: not all marketing is created equal. Many agencies
                  take a “one-size-fits-all” approach, and pool builders end up
                  wasting money on strategies that don’t bring in serious
                  homeowners. That’s where I come in.
                </p>
                <p className="text-xl leading-normal mb-6">
                  I specialize exclusively in pool marketing, so I know the
                  seasonality, the competition, and the unique challenges of
                  selling high-ticket pool projects. Even if you’re already
                  working with someone, I can provide a deep audit to show
                  what’s working, what’s wasting money, and what’s missing.
                  Strategies tailored to pool builders only, not generic
                  campaigns. Systems that make sure your leads don’t just click,
                  but actually convert into contracts. Think of it as a second
                  set of expert eyes.
                </p>
                <p className="text-xl leading-normal mb-6">
                  Even if you keep your current provider, you’ll walk away with
                  a clearer roadmap for getting better results.
                </p>
              </DisclosurePanel>
            </Disclosure>
            <Disclosure>
              <DisclosureButton className="py-2 text-3xl mb-4 text-left">
                What makes marketing for pool builders different from other
                industries?
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500 text-xl">
                Pool building is a high-ticket, highly personal purchase.
                Homeowners aren’t buying an impulse item—they’re investing in
                their dream backyard. That means your marketing must do more
                than generate clicks, it must build trust, showcase
                craftsmanship, and position you as the go-to expert.
              </DisclosurePanel>
            </Disclosure>
            <Disclosure>
              <DisclosureButton className="py-2 text-3xl mb-4 text-left">
                I don't have time for another project. How much of my time does
                this require?
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500 text-xl">
                That's exactly why you need this. My goal is to save you time,
                not create more work. Initial setup requires about 2 hours of
                your time (photos, content review, goal-setting). After that,
                you'll spend maybe 30 minutes per month reviewing reports. The
                automated systems I build actually give you back 10-15 hours per
                week by handling follow-ups and administrative tasks.
              </DisclosurePanel>
            </Disclosure>
            <Disclosure>
              <DisclosureButton className="py-2 text-3xl mb-4 text-left">
                Isn’t SEO just about keywords?
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500 text-xl">
                Not anymore. Today’s SEO is about authority, trust, and
                visibility across Google, maps, and even AI-driven search. It’s
                not just stuffing pages with keywords—it’s building a digital
                footprint that ensures homeowners see you as the top choice.
              </DisclosurePanel>
            </Disclosure>
            <Disclosure>
              <DisclosureButton className="py-2 text-3xl mb-4 text-left">
                My business is seasonal. Does digital marketing work for pool
                builders?
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500 text-xl">
                Absolutely - in fact, it's even more important for seasonal
                businesses. During your off-season, homeowners are researching
                and planning their pool projects for next year. SEO and content
                marketing keep you top-of-mind during this crucial research
                phase. Many of my clients book 60% of their next year's projects
                during the winter months from leads generated online.
              </DisclosurePanel>
            </Disclosure>
            <Disclosure>
              <DisclosureButton className="py-2 text-3xl mb-4 text-left">
                I get most of my work from referrals. Why do I need marketing?
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500 text-xl">
                Referrals are great, but they're not scalable or predictable.
                What happens when you want to grow beyond your current capacity?
                Or when the economy slows down? Digital marketing gives you
                control over your lead flow and helps you attract premium
                clients who are actively searching for quality pool builders,
                not just asking neighbors for "the cheapest guy."
              </DisclosurePanel>
            </Disclosure>
            <Disclosure>
              <DisclosureButton className="py-2 text-3xl mb-4 text-left">
                Can I just do social media instead of SEO?
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500 text-xl">
                Social media is great for showing off your work, but it’s not
                where most homeowners start their buying journey. When they’re
                serious, they search Google for pool builders in their area.
                That’s where SEO and local marketing win the jobs. Social media
                supports it, but it can’t replace it.
              </DisclosurePanel>
            </Disclosure>
            <Disclosure>
              <DisclosureButton className="py-2 text-3xl mb-4 text-left">
                Do I need to keep marketing once I’m ranking on Google?
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500 text-xl">
                Yes. Because your competitors won’t stop. SEO is like a pool: if
                you don’t maintain it, it falls apart. The good news is that
                once you’re established, it’s easier and cheaper to stay ahead
                than to start from scratch.
              </DisclosurePanel>
            </Disclosure>
            <Disclosure>
              <DisclosureButton className="py-2 text-3xl mb-4 text-left">
                What happens if I stop marketing?
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500 text-xl">
                Most businesses see leads slow down within weeks, and rankings
                decline within months. Homeowners have short attention spans,
                and competitors are always fighting for visibility. Consistency
                is what keeps your pipeline healthy year after year.
              </DisclosurePanel>
            </Disclosure>
            <Disclosure>
              <DisclosureButton className="py-2 text-3xl mb-4 text-left">
                What if I'm already booked solid? Why would I need more leads?
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500 text-xl">
                Being busy and being profitable are different things. More leads
                give you the luxury of being selective - you can choose the best
                projects, increase your prices, and stop competing on cost.
                Plus, you'll need a pipeline for next season. Most successful
                pool builders I work with maintain a 6-12 month waiting list of
                qualified prospects.
              </DisclosurePanel>
            </Disclosure>
            <Disclosure>
              <DisclosureButton className="py-2 text-3xl mb-4 text-left">
                <p>How much should I expect to invest in digital marketing?</p>
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500 text-xl">
                <p className="text-md">
                  Most pool builders invest between $2,000-$5,000 per month on
                  marketing (including my services). Consider this: if my
                  marketing generates just ONE additional $75,000 pool project
                  per year, you've made back your entire annual investment. Most
                  clients see 3-5x return on their marketing spend within the
                  first year.
                </p>
              </DisclosurePanel>
            </Disclosure>
            <Disclosure>
              <DisclosureButton className="py-2 text-3xl mb-4 text-left">
                <p>Can you guarantee results?</p>
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500 text-xl">
                I guarantee the work will be done correctly and on time, but no
                ethical marketer can guarantee specific results because there
                are too many variables (your market, competition, seasonality,
                etc.). What I can promise is complete transparency with detailed
                reporting, proven strategies that work for pool builders, and my
                commitment to continuously optimize until we hit your goals.
              </DisclosurePanel>
            </Disclosure>
            <Disclosure>
              <DisclosureButton className="py-2 text-3xl mb-4 text-left">
                <p>
                  I tried Google Ads and Facebook ads before and lost money.{' '}
                  <span className="block py-2">Will this be different?</span>
                </p>
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500 text-xl">
                Google Ads for pool builders require specific expertise - most
                agencies waste money on broad keywords that attract
                tire-kickers. I focus on high-intent local keywords and create
                ads that pre-qualify prospects. Plus, I optimize your entire
                funnel (landing pages, follow-up sequences) so leads don't just
                click and disappear. The difference is targeting quality over
                quantity.
              </DisclosurePanel>
            </Disclosure>
          </div>
          <Button
            buttonText="Get My Free Pool Builder Growth Blueprint Now"
            textSize="text-md lg:text-2xl"
            bgColor="bg-green-500"
            textColor="text-white"
            hover="hover:bg-green-600"
          />
        </div>
      </section>
    </>
  )
}

export default Section7
