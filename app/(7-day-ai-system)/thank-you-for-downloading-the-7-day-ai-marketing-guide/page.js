'use client'

import { MoveRight } from 'lucide-react'

export default function BlogContentPlanner() {
  return (
    <>
      <div className="container max-w-4xl mx-auto px-6 my-10 lg:my-20">
        <section>
          <h1 className="text-5xl lg:text-7xl font-bold text-black mb-10 leading-normal">
            Your 7-Day AI Marketing Guide Is on Its Way — Check Your Inbox in
            the Next 2 Minutes
          </h1>
          <div className="mb-10 grid md:grid-cols-2 items-center">
            <p className="text-xl font-bold mb-4 lg:mb-0 flex self-center">
              Listen Here
              <MoveRight className="ml-4" />
            </p>
            s{' '}
            <audio controls>
              <source src="7-day-ai-marketing-guide.mp3" type="audio/ogg" />
              <source src="7-day-ai-marketing-guide.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <p className="text-2xl md:text-3xl mb-4">
            While You Wait, Here's How to Make Sure You Actually Implement It…
          </p>
          <hr className="border-2 my-10" />
          <p className="text-xl md:text-2xl mb-4 md:mb-10">
            Most pool builders will download this guide…
          </p>
          <p className="text-xl md:text-2xl mb-4 md:mb-10">
            …and let it collect digital dust on their desktop.
          </p>
          <p className="text-xl md:text-2xl mb-4 md:mb-10">
            But you’re not most builders.
          </p>
          <p className="text-xl md:text-2xl mb-4 md:mb-10">
            You took action — and that already puts you ahead of 90% of your
            competitors.
          </p>
          <p className="text-xl md:text-2xl mb-4 md:mb-10">
            Now, here's how to turn this into real results: We're offering a
            Free AI Marketing Strategy Call where we'll personally review your
            current marketing and show you:
          </p>
          <ul className="list-disc my-6 ml-10">
            <li className="text-xl md:text-2xl mb-4 font-bold">
              Which of the 7 systems will have the biggest impact in your
              specific market
            </li>
            <li className="text-xl md:text-2xl mb-4 font-bold">
              How to prioritize implementation based on your current lead flow
            </li>
            <li className="text-xl md:text-2xl mb-4 font-bold">
              The #1 mistake pool builders make when setting up AI tools (and
              how to avoid it)
            </li>
            <li className="text-xl md:text-2xl mb-4 font-bold">
              A custom 90-day roadmap to get ahead of your competition
            </li>
          </ul>
          <p className="text-xl md:text-2xl mb-4 md:mb-10">
            This isn't a sales pitch — it's a strategy session for builders who
            are serious about modernizing their marketing before everyone else
            catches on.
          </p>
          <p className="text-xl md:text-2xl mb-4 md:mb-10">
            You’ll walk away knowing exactly what to write, how to structure it,
            and how to make Google and AI search tools recommend your business
            first.
          </p>
          <p className="text-xl md:text-2xl mb-4 md:mb-10">
            You'll walk away knowing exactly which system to implement first,
            how to set it up properly, and how to measure success.
          </p>
          <div className="text-center my-10">
            <a href="/">
              <button className="border-2 px-6 py-8 rounded-3xl font-bold bg-green-500 text-white md:text-2xl">
                Book My Free AI Marketing Strategy Call →
              </button>
            </a>
          </div>
          <p className="text-xl md:text-2xl mb-4 md:mb-10">
            Or just check your email — your guide link should arrive in a
            minute.
          </p>
          <p className="text-xl md:text-2xl mb-4 md:mb-10">
            But if you're serious about getting ahead of the curve while your
            competitors are still figuring out that things are changing, this
            call is where real implementation starts.
          </p>
          <p className="text-xl md:text-2xl mb-4 md:mb-10">
            <span className="font-bold">P.S. </span>This 20-minute call could be
            the difference between having AI systems that actually work and just
            having another PDF on your computer.
          </p>
          <p className="text-xl md:text-2xl mb-4 md:mb-10">
            It's free. It's focused. And it might just give you the competitive
            edge you've been looking for.
          </p>
        </section>
      </div>
    </>
  )
}
