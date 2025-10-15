'use client'

import React, { useState, useEffect } from 'react'

export default function BlueprintModal({ open, setOpen }) {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch by only rendering on client
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render until mounted on client
  if (!mounted) return null

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)

    const fd = new FormData(e.currentTarget)
    const name = fd.get('name')
    const email = fd.get('email')

    console.log('Submitting', { name, email })

    setTimeout(() => {
      setSubmitting(false)
      setSuccess(true)
    }, 1000)
  }

  if (!open) {
    return null
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl rounded-xl bg-white p-4 lg:p-14 shadow-xl">
        <div className="text-3xl lg:text-5xl font-bold text-slate-900">
          Most Pool Builders Have No Idea What's Coming!
        </div>
        <div className="mt-2 text-md text-slate-600">
          <p className="py-2 text-md">This blueprint reveals:</p>
          <ul className="ml-6 list-inside list-disc">
            <li className="text-lg">
              <span className="font-bold text-black">
                Google's new AI Overview strategy
              </span>{' '}
              that puts you above competitors
            </li>
            <li className="text-lg">
              <span className="font-bold text-black">
                The automated follow-up sequence
              </span>{' '}
              that converts leads over 6-12 months
            </li>
            <li className="text-lg">
              <span className="font-bold text-black">
                Why 73% of pool builder websites
              </span>{' '}
              are basically invisible online
            </li>
          </ul>
        </div>
        <p className="py-2 font-bold">
          Stop losing high-value projects to builders with inferior work but a
          superior marketing team behind them.
        </p>
        {success ? (
          <p className="mt-6 rounded-lg bg-green-50 p-3 text-green-800">
            🎉 Success! Check your inbox.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-2 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
            </div>

            <div className="mt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg border px-4 py-2 text-sm"
              >
                Don't need it, my website appears in AI searches.
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-white hover:bg-green-600 disabled:opacity-70"
              >
                {submitting ? 'Sending…' : 'I Want the Blueprint'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
