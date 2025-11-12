'use client'

import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Section4 from '@/components/Section4'
import Section5 from '@/components/Section5'
import Section6 from '@/components/Section6'
import Section7 from '@/components/Section7'
import Section8 from '@/components/Section8'
import { CheckCircle } from 'lucide-react'
import { event } from '@/lib/eventHelper'
import WhyPollBuildersNeedSpecialist from '@/components/WhyPollBuildersNeedSpecialist'

export default function Home() {
  const handleClick = () => {
    try {
      event({
        action: 'get_started_click',
        category: 'engagement',
        label: 'hero_cta',
        value: 1,
      })
      window.location.href = '/ai-seo-checklist'
    } catch (error) {
      console.error('Error in handleClick:', error)
    }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "I've been burned by marketing companies before. How is this different?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "You're not alone, many pool builders have had the same experience. The difference with my approach is transparency, specialization, and results that actually matter to your business. I don't take a one-size-fits-all approach. Every strategy is designed for the unique challenges of selling high-ticket pool projects. You won't just get clicks, impressions, or 'traffic reports.' You'll see real inquiries from homeowners who are serious about building a pool. You'll always know what's being done, why it matters, and how it's performing. No black-box campaigns, no hidden fees. Systems that keep generating leads, even when you're not running paid campaigns. My goal isn't just to 'do marketing' for you, it's to be a partner in growing your pool business profitably and sustainably.",
        },
      },
      {
        '@type': 'Question',
        name: 'How long before I see results from SEO and digital marketing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "I'll keep it real with you. SEO isn't overnight. Most pool builders start to see traction in about 3–6 months, depending on your market, your present website, landing pages, and competition. That said, the work we put in today (like optimizing your website and content) builds momentum that keeps paying off for years. The good news is, while SEO compounds over time, other parts of your marketing can start delivering faster. A conversion-focused website, smart automation, and even well-optimized ad campaigns can generate leads right away, while SEO steadily positions you as the #1 pool builder homeowners find first. My approach combines quick wins with long-term growth, so you're not stuck waiting months before seeing results—you get a pipeline that builds now and scales later.",
        },
      },
      {
        '@type': 'Question',
        name: 'Do I really need a new website? Mine looks fine.',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "It depends. A website can 'look fine' but still cost you leads every single day. The real question isn't how your site looks, it's how it performs. Does it show up when homeowners search for pool builders in your city? Does it guide visitors to call, fill out a form, or request a quote? Does it load fast and look great on mobile devices? Does it filter out tire-kickers so you spend time only on serious buyers? If the answer to any of those is 'no,' then your website is more like a pretty brochure than a lead-generating tool. I build sites that don't just look professional, they're designed to rank higher, convert visitors, and turn more of your traffic into real projects.",
        },
      },
      {
        '@type': 'Question',
        name: 'What if I already have someone doing my marketing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Fantastic. You're already ahead of most builders. But here's the truth: not all marketing is created equal. Many agencies take a 'one-size-fits-all' approach, and pool builders end up wasting money on strategies that don't bring in serious homeowners. That's where I come in. I specialize exclusively in pool marketing, so I know the seasonality, the competition, and the unique challenges of selling high-ticket pool projects. Even if you're already working with someone, I can provide a deep audit to show what's working, what's wasting money, and what's missing. Strategies tailored to pool builders only, not generic campaigns. Systems that make sure your leads don't just click, but actually convert into contracts. Think of it as a second set of expert eyes. Even if you keep your current provider, you'll walk away with a clearer roadmap for getting better results.",
        },
      },
      {
        '@type': 'Question',
        name: 'What makes marketing for pool builders different from other industries?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pool building is a high-ticket, highly personal purchase. Homeowners aren't buying an impulse item—they're investing in their dream backyard. That means your marketing must do more than generate clicks, it must build trust, showcase craftsmanship, and position you as the go-to expert.",
        },
      },
      {
        '@type': 'Question',
        name: "I don't have time for another project. How much of my time does this require?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "That's exactly why you need this. My goal is to save you time, not create more work. Initial setup requires about 2 hours of your time (photos, content review, goal-setting). After that, you'll spend maybe 30 minutes per month reviewing reports. The automated systems I build actually give you back 10-15 hours per week by handling follow-ups and administrative tasks.",
        },
      },
      {
        '@type': 'Question',
        name: "Isn't SEO just about keywords?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Not anymore. Today's SEO is about authority, trust, and visibility across Google, maps, and even AI-driven search. It's not just stuffing pages with keywords—it's building a digital footprint that ensures homeowners see you as the top choice.",
        },
      },
      {
        '@type': 'Question',
        name: 'My business is seasonal. Does digital marketing work for pool builders?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Absolutely - in fact, it's even more important for seasonal businesses. During your off-season, homeowners are researching and planning their pool projects for next year. SEO and content marketing keep you top-of-mind during this crucial research phase. Many of my clients book 60% of their next year's projects during the winter months from leads generated online.",
        },
      },
      {
        '@type': 'Question',
        name: 'I get most of my work from referrals. Why do I need marketing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Referrals are great, but they're not scalable or predictable. What happens when you want to grow beyond your current capacity? Or when the economy slows down? Digital marketing gives you control over your lead flow and helps you attract premium clients who are actively searching for quality pool builders, not just asking neighbors for 'the cheapest guy.'",
        },
      },
      {
        '@type': 'Question',
        name: 'Can I just do social media instead of SEO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Social media is great for showing off your work, but it's not where most homeowners start their buying journey. When they're serious, they search Google for pool builders in their area. That's where SEO and local marketing win the jobs. Social media supports it, but it can't replace it.",
        },
      },
      {
        '@type': 'Question',
        name: "Do I need to keep marketing once I'm ranking on Google?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes. Because your competitors won't stop. SEO is like a pool: if you don't maintain it, it falls apart. The good news is that once you're established, it's easier and cheaper to stay ahead than to start from scratch.",
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if I stop marketing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most businesses see leads slow down within weeks, and rankings decline within months. Homeowners have short attention spans, and competitors are always fighting for visibility. Consistency is what keeps your pipeline healthy year after year.',
        },
      },
      {
        '@type': 'Question',
        name: "What if I'm already booked solid? Why would I need more leads?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Being busy and being profitable are different things. More leads give you the luxury of being selective - you can choose the best projects, increase your prices, and stop competing on cost. Plus, you'll need a pipeline for next season. Most successful pool builders I work with maintain a 6-12 month waiting list of qualified prospects.",
        },
      },
      {
        '@type': 'Question',
        name: 'How much should I expect to invest in digital marketing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Most pool builders invest between $2,000-$5,000 per month on marketing (including my services). Consider this: if my marketing generates just ONE additional $75,000 pool project per year, you've made back your entire annual investment. Most clients see 3-5x return on their marketing spend within the first year.",
        },
      },
      {
        '@type': 'Question',
        name: 'Can you guarantee results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I guarantee the work will be done correctly and on time, but no ethical marketer can guarantee specific results because there are too many variables (your market, competition, seasonality, etc.). What I can promise is complete transparency with detailed reporting, proven strategies that work for pool builders, and my commitment to continuously optimize until we hit your goals.',
        },
      },
      {
        '@type': 'Question',
        name: 'I tried Google Ads and Facebook ads before and lost money. Will this be different?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Google Ads for pool builders require specific expertise - most agencies waste money on broad keywords that attract tire-kickers. I focus on high-intent local keywords and create systems that pre-qualify prospects. Plus, I optimize your entire funnel (landing pages, follow-up sequences) so leads don't just click and disappear. The difference is targeting quality over quantity.",
        },
      },
    ],
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pool Builder Growth',
    description:
      'Pool builder marketing specialist helping pool construction companies grow their business through digital marketing, SEO, and lead generation systems.',
    url: 'https://poolbuildergrowth.com',
    logo: 'https://poolbuildergrowth.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      areaServed: 'US',
    },
    sameAs: ['https://poolbuildergrowth.com'],
    founder: {
      '@type': 'Person',
      name: 'Pool Builder Marketing Specialist',
    },
    foundingDate: '2020',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    serviceType: 'Digital Marketing Services',
    industry: 'Marketing and Advertising',
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Pool Builder Marketing Services',
    description:
      'Comprehensive digital marketing services specifically designed for pool construction companies including SEO, website design, lead generation, email marketing, and automated follow-up systems.',
    provider: {
      '@type': 'Organization',
      name: 'Pool Builder Growth',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    serviceType: 'Digital Marketing',
    audience: {
      '@type': 'Audience',
      audienceType: 'Pool Builders',
    },
    offers: {
      '@type': 'Offer',
      description:
        'Pool builder marketing services starting from $2,000-$10,000 per month',
      priceRange: '$2000-$10000',
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pool Builder Growth',
    description:
      'Pool builder marketing specialist providing digital marketing services to pool construction companies nationwide.',
    url: 'https://poolbuildergrowth.com',
    telephone: 'Contact via website',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    serviceArea: {
      '@type': 'Country',
      name: 'United States',
    },
    priceRange: '$2000-$10000',
    openingHours: 'Mo-Fr 09:00-17:00',
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pool Builder Growth',
    url: 'https://poolbuildergrowth.com',
    description:
      'Pool builder marketing that creates a full marketing system for your business. Partner with a pool builder marketing specialist.',
    publisher: {
      '@type': 'Organization',
      name: 'Pool Builder Growth',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://poolbuildergrowth.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <main>
        <div className='bg-slate-400 bg-blend-multiply bg-[url("/images/pool-builder-marketing.jpg")] bg-no-repeat bg-cover bg-center'>
          <div className="container max-w-8xl mx-auto px-6">
            <div className="max-w-4xl py-4 md:py-8">
              <div className="my-4 lg:my-10">
                <h1 className="text-sm md:text-lg text-white mb-2 md:mb-4 leading-tight font-semibold">
                  Pool Builder Marketing to go from $1 million to $10 million
                </h1>
                <h2 className="text-3xl lg:text-6xl max-w-4xl mx-auto font-extrabold text-white">
                  Don't stay invisible to homeowners ready to build pools.
                  Partner with a pool builder marketing specialist who's
                  invested in your success.
                </h2>
                <p className="text-sm md:text-xl max-w-2xl my-2 md:my-4 text-white">
                  Stop being invisible and losing jobs to competitors. With the
                  right pool marketing PARTNER, you'll attract serious
                  homeowners are READY to build and grow your business.
                </p>
                <p className="text-sm md:text-xl max-w-2xl my-2 md:my-4 text-white">
                  I partner with you to go from $1 million - $10 million. Here's
                  what we'll accomplish together:
                </p>
                <ul className="text-white mb-4 lg:mb-8 ml-10">
                  <li className="mb-4 flex items-start">
                    <CheckCircle className="w-[30px] h-[30px] md:w-8 md:h-8 text-green-400 mr-4" />
                    <p className="text-sm lg:text-xl">
                      More qualified leads without wasting money on dead ends
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
                      Complete marketing and sales system to grow your business
                    </p>
                  </li>
                </ul>
                <>
                  <button
                    onClick={handleClick}
                    className="text-sm lg:text-2xl font-bold bg-green-500
                text-white hover:bg-green-600 transition-color px-6 py-6 lg:px-8 lg:py-8 rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer"
                  >
                    Download My FREE AI SEO Checklist
                  </button>
                </>
              </div>
            </div>
          </div>
        </div>
        <Section2 />
        <Section3 />
        <WhyPollBuildersNeedSpecialist />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </main>
    </>
  )
}
