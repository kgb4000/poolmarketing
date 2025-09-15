'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const PoolBuilderFAQ = () => {
  const [openQuestions, setOpenQuestions] = useState({})

  const toggleQuestion = (questionId) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }))
  }

  const QuestionItem = ({ id, question, children }) => (
    <div className="border border-gray-200 rounded-lg mb-4 bg-white">
      <button
        onClick={() => toggleQuestion(id)}
        className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-lg font-semibold text-black pr-4">{question}</h3>
        {openQuestions[id] ? (
          <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
        )}
      </button>
      {openQuestions[id] && (
        <div className="px-6 pb-6 border-t border-gray-100">
          <div className="pt-4 space-y-4 text-black leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold text-black mb-4">
            Pool Builder Marketing FAQ
          </h1>
          <p className="text-xl text-gray-600">
            Everything You Need to Know About Modern Pool Marketing
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* General Pool Marketing Strategy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 pb-2 border-b-2 border-black">
            General Pool Marketing Strategy
          </h2>

          <QuestionItem
            id="q1"
            question="How much should pool builders spend on marketing per month?"
          >
            <p>
              <strong>Direct Answer:</strong> Pool builders should spend 8-15%
              of gross revenue on marketing monthly. For a $2M annual company,
              that's $13,000-$25,000 per month.
            </p>

            <div>
              <p>
                <strong>Marketing Budget by Business Size:</strong>
              </p>
              <ul className="ml-6 space-y-1 mt-2">
                <li>• Small builders ($500K-$1M): $3,000-$8,000/month</li>
                <li>• Medium builders ($1M-$5M): $8,000-$40,000/month</li>
                <li>• Large builders ($5M+): $40,000+/month</li>
              </ul>
            </div>

            <div>
              <p>
                <strong>Where to invest your budget:</strong>
              </p>
              <p>
                Digital marketing takes 60-70% of budget. Google Ads get 25-30%.
                SEO and website optimization get 15-20%. Social media ads get
                10-15%.
              </p>
            </div>

            <div>
              <p>
                <strong>What ROI should you expect?</strong>
              </p>
              <p>
                Well-executed campaigns generate 3:1 to 5:1 return on
                investment, according to Pool & Spa News industry data.
                Competitive markets like Phoenix and Miami cost more but deliver
                higher project values.
              </p>
            </div>

            <p>
              <strong>Pro tip:</strong> Start with 8% if established. Scale to
              12-15% during growth phases. Track cost per lead monthly.
            </p>
          </QuestionItem>

          <QuestionItem
            id="q2"
            question="What is the best marketing strategy for pool builders in 2025?"
          >
            <p>
              <strong>Direct Answer:</strong> The best 2025 strategy combines
              local SEO dominance (30%), video content marketing (25%),
              multi-channel paid ads (25%), and automated email nurturing (20%).
            </p>

            <div>
              <p>
                <strong>The Modern Pool Builder Marketing Stack:</strong>
              </p>

              <p>
                <strong>Local SEO Foundation (30% of effort):</strong>
                <br />
                Optimize Google Business Profile weekly. Create location pages
                for every service area. Target "pool builders near me" searches.
              </p>

              <p>
                <strong>Video Content Marketing (25% of effort):</strong>
                <br />
                Produce weekly project showcases. Create time-lapse construction
                videos. Share educational maintenance content. Video generates
                5x more engagement than static posts.
              </p>

              <p>
                <strong>Multi-Channel Advertising (25% of effort):</strong>
                <br />
                Run Google Ads for "pool builders [city]" keywords. Use Facebook
                ads for brand awareness. Retarget website visitors.
              </p>

              <p>
                <strong>Email Marketing (20% of effort):</strong>
                <br />
                Automate 30-90 day lead nurturing. Share project galleries.
                Address common objections.
              </p>
            </div>

            <div>
              <p>
                <strong>What's new in 2025?</strong>
              </p>
              <p>
                Voice search optimization for "best pool builders in [city]"
                queries. AI chatbots for 24/7 lead qualification. AR pool design
                tools for customer visualization.
              </p>
            </div>
          </QuestionItem>

          <QuestionItem
            id="q3"
            question="How do pool builders get more leads without spending a fortune on advertising?"
          >
            <p>
              <strong>Direct Answer:</strong> Generate leads through content
              marketing, local partnerships, Google Business optimization, and
              referral programs - all low-cost strategies that outperform
              expensive ads.
            </p>

            <div>
              <p>
                <strong>Free Lead Generation Strategies:</strong>
              </p>

              <p>
                <strong>Content Marketing That Converts:</strong>
                <br />
                Write guides about pool design trends. Create local permit
                requirement articles. Answer homeowner questions. Target "pool
                builders in [city]" keywords naturally.
              </p>

              <p>
                <strong>Strategic Local Partnerships:</strong>
                <br />
                Partner with landscape designers and general contractors. Offer
                $500-$2,000 referral commissions. Cross-promote services. Share
                customer bases.
              </p>

              <p>
                <strong>Google Business Profile Optimization:</strong>
                <br />
                Post weekly project updates. Respond to all reviews within 24
                hours. Upload high-quality photos. Optimized profiles generate
                2-3x more calls.
              </p>
            </div>

            <p>
              <strong>Why this works better than ads:</strong> Organic
              strategies build long-term authority. Content attracts motivated
              prospects. Referrals convert at 40-60% rates versus 10-20% for
              cold advertising.
            </p>
          </QuestionItem>

          <QuestionItem
            id="q4"
            question="What's the average cost per lead for pool builder marketing campaigns?"
          >
            <p>
              <strong>Direct Answer:</strong> Pool builder leads cost $50-$500
              depending on location and channel. Google Ads average $100-$300.
              Facebook ads cost $75-$200. SEO generates $25-$100 leads.
            </p>

            <div>
              <p>
                <strong>Cost Per Lead by Channel:</strong>
              </p>

              <p>
                <strong>Google Ads:</strong> $100-$300 in competitive markets
                like Los Angeles, Phoenix, Miami. Smaller markets see $50-$150
                per lead.
              </p>

              <p>
                <strong>Facebook/Instagram Ads:</strong> $75-$200 per lead.
                Social leads need longer nurturing but convert at higher rates.
              </p>

              <p>
                <strong>SEO/Organic Search:</strong> $25-$100 per lead when
                factoring monthly investment. Takes 6-12 months but provides
                long-term value.
              </p>

              <p>
                <strong>Referral Programs:</strong> $200-$1,000 per lead
                including commissions. Convert at 40-60% rates.
              </p>
            </div>

            <div>
              <p>
                <strong>Geographic Cost Breakdown:</strong>
              </p>
              <ul className="ml-6 space-y-1 mt-2">
                <li>
                  • High-cost markets (California, Florida metros):
                  $200-$500/lead
                </li>
                <li>
                  • Medium markets (Southeast, Southwest suburbs):
                  $100-$250/lead
                </li>
                <li>
                  • Lower-cost markets (Midwest, smaller cities): $50-$150/lead
                </li>
              </ul>
            </div>

            <p>
              <strong>What makes a qualified lead?</strong> Budget above your
              minimum project size. Realistic timeline. Decision-making
              authority. Track qualified leads, not just total leads.
            </p>
          </QuestionItem>
        </div>

        {/* Digital Marketing */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 pb-2 border-b-2 border-black">
            Digital Marketing for Pool Companies
          </h2>

          <QuestionItem
            id="q5"
            question="Should pool builders use Google Ads or Facebook Ads for better results?"
          >
            <p>
              <strong>Direct Answer:</strong> Use both strategically. Google Ads
              capture high-intent "pool builders near me" searches. Facebook Ads
              build brand awareness and nurture prospects. Split budget 60%
              Google, 40% Facebook.
            </p>

            <div>
              <p>
                <strong>Google Ads: Best for High-Intent Leads</strong>
              </p>
              <p>
                Google Ads excel when customers actively search for pool
                builders. Shorter sales cycles. Higher conversion rates. Better
                for immediate lead generation.
              </p>

              <p>
                <strong>Optimal Google Strategy:</strong>
              </p>
              <ul className="ml-6 space-y-1 mt-2">
                <li>• Target "pool builders in [city]" keywords</li>
                <li>• Use ad extensions with phone numbers and reviews</li>
                <li>• Create separate campaigns per service type</li>
                <li>• Bid on competitor names in your market</li>
                <li>• Implement call tracking</li>
              </ul>
            </div>

            <div>
              <p>
                <strong>Facebook Ads: Best for Brand Building</strong>
              </p>
              <p>
                Facebook reaches homeowners who aren't actively searching but
                might want a pool. Better for showcasing visual content. Longer
                nurturing cycles.
              </p>

              <p>
                <strong>Optimal Facebook Strategy:</strong>
              </p>
              <ul className="ml-6 space-y-1 mt-2">
                <li>• Use video ads showing pool transformations</li>
                <li>• Target homeowners with $75,000+ household income</li>
                <li>• Create lookalike audiences from past customers</li>
                <li>• Retarget website visitors</li>
                <li>• Use lead generation forms</li>
              </ul>
            </div>

            <p>
              <strong>Budget Allocation:</strong> 60-70% to Google Ads for
              immediate leads. 30-40% to Facebook for brand building. In
              expensive markets, shift to 50/50 split.
            </p>
          </QuestionItem>

          <QuestionItem
            id="q6"
            question="How can pool builders rank #1 on Google for local searches?"
          >
            <p>
              <strong>Direct Answer:</strong> Optimize Google Business Profile
              completely, create location-specific landing pages, build local
              citations, and generate customer reviews systematically.
            </p>

            <div>
              <p>
                <strong>
                  Google Business Profile Optimization (Most Critical):
                </strong>
              </p>
              <p>
                Complete every profile section with accurate information. Upload
                weekly photos of projects. Respond to reviews within 24 hours.
                Post weekly updates.
              </p>
              <p>
                <strong>Why this matters:</strong> Google treats active profiles
                as more relevant and trustworthy.
              </p>
            </div>

            <div>
              <p>
                <strong>Local SEO Website Strategy:</strong>
              </p>
              <p>
                Create dedicated pages for each service area. Examples: "Pool
                Builders in Scottsdale" or "Custom Pools in Plano Texas."
                Include local keywords naturally.
              </p>
              <p>
                Build location-specific content like "Pool Permits in [City]" or
                "Best Pool Designs for [Area] Climate."
              </p>
            </div>

            <div>
              <p>
                <strong>Citation Building:</strong>
                <br />
                Get listed in local directories. Join chamber of commerce.
                Partner with local businesses. Sponsor community events.
              </p>

              <p>
                <strong>Review Generation System:</strong>
                <br />
                Send follow-up emails after project completion. Include direct
                Google review links. Respond professionally to negative reviews.
                Encourage photo reviews.
              </p>
            </div>

            <p>
              <strong>Pro tip:</strong> Consistent NAP (Name, Address, Phone)
              across all platforms is essential.
            </p>
          </QuestionItem>

          <QuestionItem
            id="q7"
            question="What social media platforms work best for pool builder marketing?"
          >
            <p>
              <strong>Direct Answer:</strong> Instagram and Facebook dominate
              pool marketing. Add YouTube for authority building and TikTok for
              younger demographics. Start with Instagram/Facebook, then expand.
            </p>

            <div>
              <p>
                <strong>Instagram: The Visual Showcase</strong>
              </p>
              <p>
                Instagram's visual nature perfectly fits pool businesses. Use
                high-quality project photos and videos. Stories and Reels
                generate higher engagement.
              </p>

              <p>
                <strong>Instagram Strategy:</strong>
              </p>
              <ul className="ml-6 space-y-1 mt-2">
                <li>• Post daily project photos</li>
                <li>• Use Stories for real-time construction updates</li>
                <li>• Create Reels with time-lapse installations</li>
                <li>
                  • Use local hashtags like #PhoenixPools #DallasPoolBuilder
                </li>
                <li>• Tag customers (with permission)</li>
              </ul>
            </div>

            <div>
              <p>
                <strong>Facebook: Community and Lead Generation</strong>
              </p>
              <p>
                Facebook builds local community presence. Join homeowner groups.
                Answer pool-related questions. Use targeted advertising.
              </p>

              <p>
                <strong>Facebook Tactics:</strong>
              </p>
              <ul className="ml-6 space-y-1 mt-2">
                <li>• Share educational maintenance content</li>
                <li>• Post customer testimonials</li>
                <li>• Use Facebook Events for pool shows</li>
                <li>• Create local pool owner groups</li>
                <li>• Implement Facebook Lead Ads</li>
              </ul>
            </div>

            <p>
              <strong>YouTube:</strong> Establishes expertise through how-to
              videos, project walkthroughs, and design inspiration content.
            </p>

            <p>
              <strong>TikTok:</strong> TikTok's algorithm favors engaging
              content. Before/after reveals. Construction time-lapses. Trending
              audio with pool content.
            </p>

            <p>
              <strong>Platform Priority:</strong> Instagram + Facebook first.
              YouTube for long-term authority. TikTok for younger markets.
            </p>
          </QuestionItem>

          <QuestionItem
            id="q8"
            question="How do pool builders create content that actually generates leads?"
          >
            <p>
              <strong>Direct Answer:</strong> Create project showcases,
              educational guides, and local authority content with clear
              calls-to-action. Focus on answering customer questions and
              demonstrating expertise.
            </p>

            <div>
              <p>
                <strong>High-Converting Content Types:</strong>
              </p>

              <p>
                <strong>Project Showcase Content:</strong>
                <br />
                Document complete installations from start to finish. Include
                customer challenges, design solutions, timelines, and results.
                Add before/after photos and testimonials.
              </p>

              <p>
                <strong>Educational Content That Converts:</strong>
              </p>
              <ul className="ml-6 space-y-1 mt-2">
                <li>• "Pool Design Ideas for [Local Area] Homes"</li>
                <li>• "Swimming Pool Installation Process in [City]"</li>
                <li>• "Pool Maintenance Guide for [Climate]"</li>
                <li>• "Custom Pool Costs in [Area]"</li>
                <li>• "Pool Permit Requirements in [City]"</li>
              </ul>
            </div>

            <p>
              <strong>Why educational content works:</strong> Answers customer
              questions. Builds trust. Demonstrates expertise. Captures search
              traffic.
            </p>

            <div>
              <p>
                <strong>Seasonal Content Strategy:</strong>
                <br />
                Spring: Opening procedures and design planning. Summer:
                Maintenance tips and entertaining ideas. Fall: Winterization
                guides. Winter: Design inspiration and early-bird promotions.
              </p>

              <p>
                <strong>Local Authority Content:</strong>
                <br />
                Write about local regulations. Popular design trends in your
                area. Climate-specific features. "Best Pool Features for Texas
                Heat" or "Pool Designs for Florida Homes."
              </p>
            </div>

            <p>
              <strong>Lead Generation Integration:</strong> Every content piece
              needs clear calls-to-action: "Schedule Free Design Consultation"
              or "Get Custom Pool Quote." Use content upgrades like design
              guides.
            </p>
          </QuestionItem>
        </div>

        {/* Lead Generation and Conversion */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 pb-2 border-b-2 border-black">
            Lead Generation and Conversion
          </h2>

          <QuestionItem
            id="q9"
            question="How do pool builders convert website visitors into qualified leads?"
          >
            <p>
              <strong>Direct Answer:</strong> Use strategic lead magnets,
              multiple contact options, clear value propositions, and immediate
              follow-up systems. Make contacting you incredibly easy with
              obvious calls-to-action.
            </p>

            <div>
              <p>
                <strong>High-Converting Lead Capture:</strong>
              </p>

              <p>
                <strong>Strategic Lead Magnets:</strong>
                <br />
                Offer "Pool Planning Guide," "Design Gallery," or "Cost
                Calculator" for contact information. Create location-specific
                guides addressing local permits and costs.
              </p>

              <p>
                <strong>Multiple Contact Options:</strong>
                <br />
                Provide phone numbers, contact forms, live chat, and social
                messaging. Different prospects prefer different contact methods.
              </p>

              <p>
                <strong>Clear Value Propositions:</strong>
                <br />
                Communicate what sets you apart through compelling headlines and
                customer testimonials. Display unique selling points
                prominently.
              </p>
            </div>

            <div>
              <p>
                <strong>Website Conversion Optimization:</strong>
              </p>

              <p>
                <strong>Landing Page Strategy:</strong>
                <br />
                Create dedicated pages for different traffic sources with
                targeted messaging. Remove navigation distractions. Focus on
                single conversion goals.
              </p>

              <p>
                <strong>Mobile Optimization:</strong>
                <br />
                Ensure perfect mobile functionality. 60%+ of visitors use mobile
                devices. Test contact forms and phone clicking.
              </p>

              <p>
                <strong>Live Chat Implementation:</strong>
                <br />
                Engage visitors immediately with trained staff who can qualify
                prospects and schedule consultations.
              </p>
            </div>

            <p>
              <strong>Follow-Up Systems:</strong> Call new leads within 5
              minutes when possible. Send immediate email confirmations. Develop
              automated nurturing sequences over 30-90 days.
            </p>
          </QuestionItem>

          <QuestionItem
            id="q10"
            question="What's the best way for pool builders to follow up with leads who don't respond?"
          >
            <p>
              <strong>Direct Answer:</strong> Use multi-channel follow-up with
              valuable content delivery. Email sequences, phone calls, text
              messages, and social media engagement over 12 months minimum.
            </p>

            <div>
              <p>
                <strong>Multi-Channel Follow-Up Strategy:</strong>
              </p>

              <p>
                <strong>Email Sequence Development:</strong>
                <br />
                Send project galleries, educational content, and success stories
                every 3-5 days for first month, then weekly for 90 days.
              </p>

              <p>
                <strong>Phone Call Schedule:</strong>
                <br />
                Initial call within 24 hours. Follow-up at 3 days, 1 week, 2
                weeks, then monthly. Vary call times. Leave informative
                voicemails.
              </p>

              <p>
                <strong>Text Message Integration:</strong>
                <br />
                Send brief, professional messages for appointment confirmations
                and valuable content sharing. Always include opt-out options.
              </p>
            </div>

            <div>
              <p>
                <strong>Follow-Up Timeline:</strong>
              </p>
              <ul className="ml-6 space-y-1 mt-2">
                <li>• Week 1: Daily contact through different channels</li>
                <li>• Weeks 2-4: Every 3-4 days with valuable content</li>
                <li>• Months 2-3: Weekly emails and monthly calls</li>
                <li>• Months 4-12: Monthly content and quarterly check-ins</li>
                <li>• Beyond year 1: Seasonal content and annual updates</li>
              </ul>
            </div>

            <p>
              <strong>Why 12+ months?</strong> Pool building is often a
              long-term decision. Many prospects contact companies 6-18 months
              after initial inquiry.
            </p>
          </QuestionItem>
        </div>

        {/* SEO for Pool Businesses */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 pb-2 border-b-2 border-black">
            SEO for Pool Businesses
          </h2>

          <QuestionItem
            id="q11"
            question="Is SEO worth it for pool builders and cleaners?"
          >
            <p>
              <strong>Direct Answer:</strong> Yes, SEO is highly worth it for
              pool businesses. 90% of customers discover pool builders through
              organic Google results, and SEO generates leads at $25-$100 per
              lead compared to $100-$300 for Google Ads.
            </p>

            <div>
              <p>
                <strong>Why SEO Works for Pool Companies:</strong>
              </p>

              <p>
                <strong>Long-Term Value:</strong>
                <br />
                SEO builds lasting authority that generates leads for years.
                Unlike ads that stop when you stop paying, SEO compounds over
                time.
              </p>

              <p>
                <strong>High-Intent Traffic:</strong>
                <br />
                People searching "pool builders near me" or "pool cleaning
                service" are actively looking for your services, leading to
                higher conversion rates than cold advertising.
              </p>

              <p>
                <strong>Local Market Dominance:</strong>
                <br />
                Pool businesses serve specific geographic areas. Local SEO helps
                you dominate your service area and capture customers before they
                find competitors.
              </p>
            </div>

            <div>
              <p>
                <strong>ROI for Pool Businesses:</strong>
              </p>
              <p>
                Well-executed SEO campaigns generate 3:1 to 5:1 return on
                investment. For pool builders, one new customer from SEO can
                generate $50,000+ in revenue, making the investment extremely
                profitable.
              </p>
            </div>

            <p>
              <strong>Best for:</strong> Pool builders, cleaning services,
              maintenance companies, and pool supply businesses serving local
              markets.
            </p>
          </QuestionItem>

          <QuestionItem
            id="q12"
            question="What's the difference between SEO and paid ads for pool companies?"
          >
            <p>
              <strong>Direct Answer:</strong> SEO builds long-term organic
              visibility while paid ads provide immediate but temporary results.
              Pool companies should use both strategically: 60% budget on Google
              Ads for immediate leads, 40% on SEO for long-term growth.
            </p>

            <div>
              <p>
                <strong>SEO Advantages:</strong>
              </p>
              <ul className="ml-6 space-y-1 mt-2">
                <li>• Lower cost per lead ($25-$100 vs $100-$300 for ads)</li>
                <li>• Builds lasting brand authority and trust</li>
                <li>• Compounds over time - gets better with age</li>
                <li>• Captures more research-phase customers</li>
                <li>• Works 24/7 without ongoing ad spend</li>
              </ul>
            </div>

            <div>
              <p>
                <strong>Paid Ads Advantages:</strong>
              </p>
              <ul className="ml-6 space-y-1 mt-2">
                <li>• Immediate results and lead generation</li>
                <li>• Precise targeting and budget control</li>
                <li>• Better for seasonal campaigns and promotions</li>
                <li>• Captures high-intent "ready to buy" customers</li>
                <li>• Faster testing of messaging and offers</li>
              </ul>
            </div>

            <div>
              <p>
                <strong>Combined Strategy:</strong>
              </p>
              <p>
                Smart pool companies use SEO for long-term growth and ads for
                immediate results. SEO takes 6-12 months to show results but
                provides lasting value. Ads work immediately but stop when you
                stop paying.
              </p>
            </div>

            <p>
              <strong>Timeline:</strong> Use ads to generate leads while
              building SEO. After 12-18 months, SEO should generate 50%+ of your
              leads organically.
            </p>
          </QuestionItem>

          <QuestionItem
            id="q13"
            question="Do I need SEO if I already run Google Ads?"
          >
            <p>
              <strong>Direct Answer:</strong> Yes, you still need SEO even with
              Google Ads. SEO and ads work together to dominate search results,
              increase brand trust, and reduce your overall cost per lead over
              time.
            </p>

            <div>
              <p>
                <strong>Why Both Are Essential:</strong>
              </p>

              <p>
                <strong>Search Results Domination:</strong>
                <br />
                When you appear in both organic results and ads, you occupy more
                real estate on the search page, increasing click-through rates
                and brand visibility.
              </p>

              <p>
                <strong>Trust and Credibility:</strong>
                <br />
                Customers trust organic results more than ads. Having strong
                organic rankings validates your paid ad presence and increases
                overall conversions.
              </p>

              <p>
                <strong>Cost Reduction Over Time:</strong>
                <br />
                As SEO improves, you can reduce ad spend on keywords where you
                rank organically, lowering your overall marketing costs while
                maintaining lead volume.
              </p>
            </div>

            <div>
              <p>
                <strong>Strategic Benefits:</strong>
              </p>
              <ul className="ml-6 space-y-1 mt-2">
                <li>
                  • SEO captures research-phase customers that ads often miss
                </li>
                <li>• Organic results work when ad budgets are paused</li>
                <li>• SEO builds long-term assets while ads are temporary</li>
                <li>• Combined presence increases overall market share</li>
                <li>• SEO data improves ad keyword and messaging strategies</li>
              </ul>
            </div>

            <p>
              <strong>Smart Approach:</strong> Use ads for immediate results
              while building SEO for long-term success. This combination creates
              a sustainable lead generation system that becomes more
              cost-effective over time.
            </p>
          </QuestionItem>

          <QuestionItem
            id="q14"
            question="Is SEO a one-time service or ongoing for pool companies?"
          >
            <p>
              <strong>Direct Answer:</strong> SEO is an ongoing service, not a
              one-time project. Pool companies need continuous optimization
              because Google's algorithm changes, competitors improve, and your
              business grows into new service areas.
            </p>

            <div>
              <p>
                <strong>Why SEO Requires Ongoing Work:</strong>
              </p>

              <p>
                <strong>Algorithm Updates:</strong>
                <br />
                Google updates its algorithm hundreds of times per year. What
                works today may need adjustment tomorrow to maintain rankings.
              </p>

              <p>
                <strong>Competitive Landscape:</strong>
                <br />
                Other pool companies are constantly improving their SEO.
                Standing still means falling behind competitors who are actively
                optimizing.
              </p>

              <p>
                <strong>Business Growth:</strong>
                <br />
                As your pool company expands to new areas or adds services, you
                need SEO for new keywords and locations.
              </p>
            </div>

            <div>
              <p>
                <strong>Ongoing SEO Activities:</strong>
              </p>
              <ul className="ml-6 space-y-1 mt-2">
                <li>• Content creation and optimization</li>
                <li>• Local business profile management</li>
                <li>• Review generation and response</li>
                <li>• Technical website maintenance</li>
                <li>• Competitor monitoring and strategy adjustment</li>
                <li>• Performance tracking and reporting</li>
              </ul>
            </div>

            <div>
              <p>
                <strong>Investment Timeline:</strong>
              </p>
              <p>
                Most pool companies see initial results in 3-6 months,
                significant improvements in 6-12 months, and long-term dominance
                after 12+ months of consistent optimization.
              </p>
            </div>

            <p>
              <strong>Think of SEO like pool maintenance:</strong> It requires
              regular attention to maintain results, but the compound benefits
              make it incredibly valuable over time.
            </p>
          </QuestionItem>

          <QuestionItem
            id="q15"
            question="How do pool companies show up in Google Maps?"
          >
            <p>
              <strong>Direct Answer:</strong> Pool companies appear in Google
              Maps through Google Business Profile optimization, consistent
              local citations, customer reviews, and location-specific SEO
              strategies.
            </p>

            <div>
              <p>
                <strong>Google Business Profile Optimization:</strong>
              </p>

              <p>
                <strong>Complete Your Profile:</strong>
                <br />
                Fill out every section including business hours, services,
                photos, and description. Google treats complete profiles as more
                relevant for local searches.
              </p>

              <p>
                <strong>Regular Updates:</strong>
                <br />
                Post weekly project photos, company updates, and seasonal
                promotions. Active profiles rank higher in map results.
              </p>

              <p>
                <strong>Category Selection:</strong>
                <br />
                Choose primary categories like "Pool Contractor," "Pool Cleaning
                Service," or "Swimming Pool Supply Store" that match your main
                services.
              </p>
            </div>

            <div>
              <p>
                <strong>Review Generation Strategy:</strong>
              </p>
              <ul className="ml-6 space-y-1 mt-2">
                <li>• Send follow-up emails after project completion</li>
                <li>• Include direct Google review links</li>
                <li>• Respond professionally to all reviews</li>
                <li>• Encourage photo reviews showing completed pools</li>
                <li>• Maintain 4.5+ star average for best visibility</li>
              </ul>
            </div>

            <div>
              <p>
                <strong>Local Citation Building:</strong>
              </p>
              <p>
                Get listed in local directories, chamber of commerce, and
                industry associations. Ensure your business name, address, and
                phone number (NAP) are identical across all platforms.
              </p>
            </div>

            <p>
              <strong>Pro Tip:</strong> Google Maps rankings prioritize
              proximity, relevance, and prominence. You can't change proximity,
              but you can improve relevance through keywords and prominence
              through reviews and citations.
            </p>
          </QuestionItem>

          <QuestionItem
            id="q16"
            question="Does SEO help with seasonal pool services?"
          >
            <p>
              <strong>Direct Answer:</strong> Yes, SEO is perfect for seasonal
              pool services. It captures customers planning ahead during
              off-seasons and dominates high-demand periods when customers
              actively search for pool services.
            </p>

            <div>
              <p>
                <strong>Seasonal SEO Strategy:</strong>
              </p>

              <p>
                <strong>Year-Round Content:</strong>
                <br />
                Create content for all seasons: spring opening guides, summer
                maintenance tips, fall winterization, and winter planning
                resources. This captures searches throughout the year.
              </p>

              <p>
                <strong>Early-Bird Campaigns:</strong>
                <br />
                Optimize for early-season searches like "pool opening service"
                in late winter when customers plan ahead. Early optimization
                captures customers before peak season competition.
              </p>

              <p>
                <strong>Peak Season Dominance:</strong>
                <br />
                When demand peaks in spring/summer, your SEO foundation helps
                you capture maximum search volume for "pool cleaning," "pool
                repair," and "pool maintenance."
              </p>
            </div>

            <div>
              <p>
                <strong>Seasonal Content Examples:</strong>
              </p>
              <ul className="ml-6 space-y-1 mt-2">
                <li>• "Pool Opening Checklist for [City]" (Spring)</li>
                <li>• "Summer Pool Maintenance Schedule" (Summer)</li>
                <li>• "When to Winterize Your Pool in [State]" (Fall)</li>
                <li>• "Planning Your Pool Renovation This Winter" (Winter)</li>
              </ul>
            </div>

            <div>
              <p>
                <strong>Benefits for Seasonal Businesses:</strong>
              </p>
              <p>
                SEO works 24/7 capturing leads even during slower periods. Pool
                cleaning companies report 2-3x more spring inquiries when they
                maintain SEO during winter months.
              </p>
            </div>

            <p>
              <strong>Strategy:</strong> Build SEO authority during off-seasons,
              then dominate when demand peaks. This approach generates more
              leads at lower costs than competing only during busy periods.
            </p>
          </QuestionItem>

          <QuestionItem
            id="q17"
            question="What is local SEO for pool cleaning companies?"
          >
            <p>
              <strong>Direct Answer:</strong> Local SEO for pool cleaning
              companies focuses on dominating specific neighborhoods and service
              areas through location-based optimization, route-efficient
              targeting, and community engagement.
            </p>

            <div>
              <p>
                <strong>Neighborhood-Specific Optimization:</strong>
              </p>

              <p>
                <strong>Service Area Pages:</strong>
                <br />
                Create dedicated pages for each neighborhood you serve: "Pool
                Cleaning in [Neighborhood]" with local information, customer
                testimonials, and area-specific content.
              </p>

              <p>
                <strong>Route-Based Marketing:</strong>
                <br />
                Target zip codes where you already provide services. Cluster
                customers geographically for efficiency while building local
                market dominance.
              </p>

              <p>
                <strong>Hyperlocal Keywords:</strong>
                <br />
                Optimize for specific searches like "pool cleaning Scottsdale
                Ranch" or "pool service Paradise Valley" rather than broad
                city-wide terms.
              </p>
            </div>

            <div>
              <p>
                <strong>Local Business Strategies:</strong>
              </p>
              <ul className="ml-6 space-y-1 mt-2">
                <li>• Google Business Profile for each service location</li>
                <li>• Local directory listings and citations</li>
                <li>• Neighborhood social media groups participation</li>
                <li>• Community event sponsorships</li>
                <li>• Local partnership with pool supply stores</li>
              </ul>
            </div>

            <div>
              <p>
                <strong>Content Strategy:</strong>
              </p>
              <p>
                Create location-specific content addressing local challenges:
                "Pool Maintenance in Arizona Heat" or "Algae Prevention During
                Florida Rainy Season."
              </p>
            </div>

            <p>
              <strong>Why This Works:</strong> Pool cleaning is a local,
              recurring service. Customers prefer nearby companies for
              convenience and faster response. Local SEO helps you dominate your
              immediate service area before expanding.
            </p>
          </QuestionItem>

          <QuestionItem
            id="q18"
            question="Can SEO help pool companies rank for 'near me' searches?"
          >
            <p>
              <strong>Direct Answer:</strong> Yes, SEO is essential for "near
              me" searches. These searches represent high-intent local customers
              and can be captured through local SEO optimization, Google
              Business Profile management, and location-based content.
            </p>

            <div>
              <p>
                <strong>Near Me Search Optimization:</strong>
              </p>

              <p>
                <strong>Google Business Profile:</strong>
                <br />
                Complete and active profiles are crucial for "near me"
                visibility. Google uses your business location, category, and
                activity level to determine "near me" rankings.
              </p>

              <p>
                <strong>Location Pages:</strong>
                <br />
                Create pages for each service area with local keywords,
                testimonials, and area-specific information. This helps Google
                understand your service coverage.
              </p>

              <p>
                <strong>Mobile Optimization:</strong>
                <br />
                Most "near me" searches happen on mobile devices. Ensure your
                website loads quickly and contact information is easily
                accessible for immediate calls.
              </p>
            </div>

            <div>
              <p>
                <strong>Key Ranking Factors:</strong>
              </p>
              <ul className="ml-6 space-y-1 mt-2">
                <li>• Physical proximity to the searcher</li>
                <li>• Google Business Profile completeness and activity</li>
                <li>• Customer review quantity and quality</li>
                <li>• Website authority and local relevance</li>
                <li>• Consistent NAP (Name, Address, Phone) information</li>
              </ul>
            </div>

            <div>
              <p>
                <strong>Content Strategy:</strong>
              </p>
              <p>
                Include location-based content naturally: "Our pool cleaning
                technicians serve [area] and surrounding neighborhoods" or
                "Licensed pool contractors serving [city] since [year]."
              </p>
            </div>

            <p>
              <strong>Impact:</strong> "Near me" searches often convert at
              higher rates because customers are ready to contact local
              businesses immediately. Optimizing for these searches captures
              high-value local leads.
            </p>
          </QuestionItem>

          <QuestionItem
            id="q19"
            question="Should pool companies invest in video SEO?"
          >
            <p>
              <strong>Direct Answer:</strong> Yes, pool companies should
              absolutely invest in video SEO. Video generates 5x more engagement
              than static posts and is perfect for showcasing pool
              transformations, construction processes, and maintenance
              tutorials.
            </p>

            <div>
              <p>
                <strong>Why Video Works for Pool Companies:</strong>
              </p>

              <p>
                <strong>Visual Nature of Pool Business:</strong>
                <br />
                Pools are highly visual products. Before/after transformations,
                time-lapse installations, and design showcases perform
                exceptionally well in video format.
              </p>

              <p>
                <strong>Customer Education:</strong>
                <br />
                Video tutorials about pool maintenance, seasonal care, and
                troubleshooting establish your expertise while helping
                customers, building trust and authority.
              </p>

              <p>
                <strong>Search Engine Benefits:</strong>
                <br />
                Google owns YouTube and favors video content in search results.
                Video-optimized pages often rank higher than text-only content.
              </p>
            </div>

            <div>
              <p>
                <strong>Effective Video Types for Pool Companies:</strong>
              </p>
              <ul className="ml-6 space-y-1 mt-2">
                <li>• Time-lapse pool installation and construction</li>
                <li>
                  • Before/after project showcases with customer testimonials
                </li>
                <li>• Seasonal maintenance and care tutorials</li>
                <li>• Equipment explanation and troubleshooting guides</li>
                <li>• Design inspiration and trend showcases</li>
                <li>• Behind-the-scenes team and process videos</li>
              </ul>
            </div>

            <div>
              <p>
                <strong>Video SEO Strategy:</strong>
              </p>
              <p>
                Optimize video titles and descriptions with local keywords,
                create compelling thumbnails, add captions for accessibility,
                and embed videos on relevant website pages to boost overall page
                authority.
              </p>
            </div>

            <p>
              <strong>ROI Impact:</strong> Pool companies using video content
              report higher engagement rates, longer website visits, and
              increased conversion rates compared to text-only marketing
              approaches.
            </p>
          </QuestionItem>

          <QuestionItem
            id="q20"
            question="Do pool companies need schema markup?"
          >
            <p>
              <strong>Direct Answer:</strong> Yes, pool companies should
              implement schema markup. It helps search engines understand your
              business information, improves local search visibility, and
              enables rich snippets that can increase click-through rates.
            </p>

            <div>
              <p>
                <strong>Essential Schema Types for Pool Companies:</strong>
              </p>

              <p>
                <strong>Local Business Schema:</strong>
                <br />
                Include business name, address, phone number, hours, and service
                areas. This helps Google display accurate information in local
                search results and maps.
              </p>

              <p>
                <strong>Service Schema:</strong>
                <br />
                Mark up your services like "Pool Installation," "Pool Cleaning,"
                or "Pool Repair" with descriptions, service areas, and pricing
                information when appropriate.
              </p>

              <p>
                <strong>Review Schema:</strong>
                <br />
                Display star ratings in search results by marking up customer
                reviews, which can significantly increase click-through rates
                from search results.
              </p>
            </div>

            <div>
              <p>
                <strong>FAQ Schema Benefits:</strong>
              </p>
              <ul className="ml-6 space-y-1 mt-2">
                <li>• Enables direct answers in Google search results</li>
                <li>
                  • Makes content accessible to AI tools like ChatGPT and
                  Perplexity
                </li>
                <li>
                  • Increases chances of appearing in voice search results
                </li>
                <li>• Establishes authority for pool-related questions</li>
                <li>• Can trigger rich snippet displays in search results</li>
              </ul>
            </div>

            <div>
              <p>
                <strong>Implementation Priority:</strong>
              </p>
              <p>
                Start with Local Business and Service schema, then add FAQ
                schema for common customer questions, and Review schema to
                showcase customer satisfaction in search results.
              </p>
            </div>

            <p>
              <strong>Competitive Advantage:</strong> Most pool companies don't
              use schema markup yet, so implementing it gives you a technical
              SEO advantage and better search result appearance than
              competitors.
            </p>
          </QuestionItem>

          <QuestionItem
            id="q21"
            question="Do I need a blog if I'm a pool builder?"
          >
            <p>
              <strong>Direct Answer:</strong> Yes, a blog is essential for pool
              builders. It establishes expertise, captures search traffic for
              pool-related questions, nurtures leads during long decision
              cycles, and builds the authority needed for strong SEO rankings.
            </p>

            <div>
              <p>
                <strong>Why Blogging Works for Pool Builders:</strong>
              </p>

              <p>
                <strong>Long Sales Cycles:</strong>
                <br />
                Pool installation is a major decision with 6-18 month
                consideration periods. Blog content keeps you top-of-mind
                throughout the customer's research and planning phase.
              </p>

              <p>
                <strong>Educational Authority:</strong>
                <br />
                Homeowners have many questions about pools: permits, costs,
                timelines, maintenance. Your blog answers these questions,
                positioning you as the local expert.
              </p>

              <p>
                <strong>Search Traffic Capture:</strong>
                <br />
                Blog posts target informational keywords that bring qualified
                traffic: "pool installation process," "pool permit
                requirements," or "pool maintenance costs."
              </p>
            </div>

            <div>
              <p>
                <strong>High-Converting Blog Topics:</strong>
              </p>
              <ul className="ml-6 space-y-1 mt-2">
                <li>• "Pool Installation Process in [Your City]"</li>
                <li>• "How Much Does a Custom Pool Cost in [Area]?"</li>
                <li>• "Pool Permit Requirements for [Location]"</li>
                <li>• "Best Pool Features for [Climate/Region]"</li>
                <li>• "Pool Design Trends for [Current Year]"</li>
                <li>• "Seasonal Pool Maintenance Checklist"</li>
              </ul>
            </div>

            <div>
              <p>
                <strong>SEO and Lead Generation Benefits:</strong>
              </p>
              <p>
                Each blog post creates a new page that can rank for relevant
                keywords, bringing qualified traffic. Include calls-to-action in
                every post like "Schedule Free Design Consultation" to convert
                readers into leads.
              </p>
            </div>

            <p>
              <strong>Content Strategy:</strong> Publish 1-2 high-quality,
              locally-focused blog posts per month addressing real customer
              questions. This builds authority faster than competitors while
              generating consistent organic traffic.
            </p>
          </QuestionItem>
        </div>

        {/* FAQ Schema JSON-LD */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much should pool builders spend on marketing per month?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pool builders should spend 8-15% of gross revenue on marketing monthly. For a $2M annual company, that's $13,000-$25,000 per month. Small builders ($500K-$1M) should budget $3,000-$8,000/month, medium builders ($1M-$5M) need $8,000-$40,000/month, and large builders ($5M+) require $40,000+/month."
                }
              },
              {
                "@type": "Question",
                "name": "What is the best marketing strategy for pool builders in 2025?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The best 2025 strategy combines local SEO dominance (30%), video content marketing (25%), multi-channel paid ads (25%), and automated email nurturing (20%). Focus on Google Business Profile optimization, weekly project showcases, targeted advertising, and systematic lead follow-up."
                }
              },
              {
                "@type": "Question",
                "name": "How do pool builders get more leads without spending a fortune on advertising?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Generate leads through content marketing, local partnerships, Google Business optimization, and referral programs. These organic strategies build long-term authority and convert at 40-60% rates versus 10-20% for cold advertising."
                }
              },
              {
                "@type": "Question",
                "name": "What's the average cost per lead for pool builder marketing campaigns?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pool builder leads cost $50-$500 depending on location and channel. Google Ads average $100-$300, Facebook ads cost $75-$200, SEO generates $25-$100 leads, and referral programs cost $200-$1,000 per lead but convert at higher rates."
                }
              },
              {
                "@type": "Question",
                "name": "Should pool builders use Google Ads or Facebook Ads for better results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Use both strategically. Google Ads capture high-intent 'pool builders near me' searches for immediate leads. Facebook Ads build brand awareness and nurture prospects. Split budget 60% Google, 40% Facebook for optimal results."
                }
              },
              {
                "@type": "Question",
                "name": "How can pool builders rank #1 on Google for local searches?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Optimize Google Business Profile completely, create location-specific landing pages, build local citations, and generate customer reviews systematically. Post weekly updates, respond to reviews within 24 hours, and maintain consistent NAP information across all platforms."
                }
              },
              {
                "@type": "Question",
                "name": "What social media platforms work best for pool builder marketing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Instagram and Facebook dominate pool marketing due to their visual nature. Add YouTube for authority building and TikTok for younger demographics. Start with Instagram/Facebook for daily project photos and community engagement, then expand to other platforms."
                }
              },
              {
                "@type": "Question",
                "name": "How do pool builders create content that actually generates leads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Create project showcases documenting complete installations, educational guides answering customer questions, and local authority content with clear calls-to-action. Focus on seasonal content strategy and include specific CTAs like 'Schedule Free Design Consultation'."
                }
              },
              {
                "@type": "Question",
                "name": "How do pool builders convert website visitors into qualified leads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Use strategic lead magnets like Pool Planning Guides, multiple contact options, clear value propositions, and immediate follow-up systems. Implement live chat, optimize for mobile, and call new leads within 5 minutes when possible."
                }
              },
              {
                "@type": "Question",
                "name": "What's the best way for pool builders to follow up with leads who don't respond?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Use multi-channel follow-up with valuable content delivery over 12 months minimum. Include email sequences, phone calls, text messages, and social media engagement. Pool building is often a long-term decision with 6-18 month consideration periods."
                }
              },
              {
                "@type": "Question",
                "name": "Is SEO worth it for pool builders and cleaners?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, SEO is highly worth it. 90% of customers discover pool builders through organic Google results, and SEO generates leads at $25-$100 per lead compared to $100-$300 for Google Ads. Well-executed SEO campaigns generate 3:1 to 5:1 ROI."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between SEO and paid ads for pool companies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SEO builds long-term organic visibility while paid ads provide immediate but temporary results. SEO costs $25-$100 per lead and compounds over time, while ads cost $100-$300 per lead but work immediately. Use 60% budget on Google Ads for immediate leads, 40% on SEO for long-term growth."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need SEO if I already run Google Ads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you still need SEO. SEO and ads work together to dominate search results, increase brand trust, and reduce overall cost per lead over time. Combined presence increases market share and builds long-term assets while ads are temporary."
                }
              },
              {
                "@type": "Question",
                "name": "Is SEO a one-time service or ongoing for pool companies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SEO is an ongoing service. Pool companies need continuous optimization because Google's algorithm changes, competitors improve, and businesses grow into new service areas. Think of SEO like pool maintenance - it requires regular attention but provides compound benefits over time."
                }
              },
              {
                "@type": "Question",
                "name": "How do pool companies show up in Google Maps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Optimize Google Business Profile with complete information, regular updates, and weekly project photos. Generate customer reviews systematically, build local citations, and ensure consistent NAP information. Google Maps prioritizes proximity, relevance, and prominence."
                }
              },
              {
                "@type": "Question",
                "name": "Does SEO help with seasonal pool services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, SEO is perfect for seasonal services. Create year-round content for all seasons, optimize for early-season planning searches, and dominate peak demand periods. SEO works 24/7 capturing leads even during slower periods, with pool cleaning companies reporting 2-3x more spring inquiries when maintaining SEO during winter."
                }
              },
              {
                "@type": "Question",
                "name": "What is local SEO for pool cleaning companies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Local SEO focuses on dominating specific neighborhoods through location-based optimization, route-efficient targeting, and community engagement. Create service area pages for each neighborhood, target zip codes where you already provide services, and optimize for hyperlocal keywords."
                }
              },
              {
                "@type": "Question",
                "name": "Can SEO help pool companies rank for 'near me' searches?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, SEO is essential for 'near me' searches. Optimize Google Business Profile, create location pages, ensure mobile optimization, and include location-based content naturally. 'Near me' searches often convert at higher rates because customers are ready to contact local businesses immediately."
                }
              },
              {
                "@type": "Question",
                "name": "Should pool companies invest in video SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, pool companies should invest in video SEO. Video generates 5x more engagement than static posts and is perfect for showcasing pool transformations, construction processes, and maintenance tutorials. Video-optimized pages often rank higher than text-only content."
                }
              },
              {
                "@type": "Question",
                "name": "Do pool companies need schema markup?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, pool companies should implement schema markup. It helps search engines understand your business information, improves local search visibility, and enables rich snippets that can increase click-through rates. Start with Local Business, Service, and FAQ schema types."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need a blog if I'm a pool builder?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, a blog is essential for pool builders. It establishes expertise, captures search traffic for pool-related questions, nurtures leads during 6-18 month decision cycles, and builds authority needed for strong SEO rankings. Publish 1-2 locally-focused posts per month addressing real customer questions."
                }
              }
            ]
          }`}
        </script>

        {/* Call to Action */}
        <div className="bg-black text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-gray-300 mb-6">
            Get personalized answers and a custom AI marketing strategy for your
            pool company.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </div>
  )
}

export default PoolBuilderFAQ
