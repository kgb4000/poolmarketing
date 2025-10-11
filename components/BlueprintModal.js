'use client'

import {
  Dialog,
  Transition,
  DialogPanel,
  DialogTitle,
  Description,
} from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function BlueprintModal({ open, setOpen }) {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)

    const fd = new FormData(e.currentTarget)
    const name = fd.get('name')
    const email = fd.get('email')

    // TODO: send to API
    console.log('Submitting', { name, email })

    setTimeout(() => {
      setSubmitting(false)
      setSuccess(true)
    }, 1000)
  }

  return (
    <Transition show={open} as={Fragment}>
      <Dialog open={open} onClose={setOpen} className="relative z-50">
        {/* Background overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        {/* Centering container */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95 translate-y-2"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100 translate-y-0"
            leaveTo="opacity-0 scale-95 translate-y-2"
          >
            <DialogPanel className="w-full max-w-2xl rounded-xl bg-white p-10 shadow-xl">
              <DialogTitle className="text-3xl lg:text-5xl font-bold text-slate-900">
                Most Pool Builders Have No Idea What's About to Hit Them
              </DialogTitle>
              <Description className="mt-2 text-md text-slate-600">
                While you're building pools, your competitors are capturing
                premium leads with AI-enhanced marketing you've never heard of.
                <span className="font-bold">
                  And most pool builders are completely unprepared.
                </span>
                <p className="py-2 text-md">
                  That's why I created the{' '}
                  <span className="font-bold underline">
                    Pool Builder Growth Blueprint.
                  </span>
                </p>
                <p className="py-2 text-md">This blueprint reveals:</p>
                <ul className="ml-6 list-inside list-disc">
                  <li className="text-lg">
                    <span className="font-bold">
                      Google's new AI Overview strategy
                    </span>{' '}
                    that puts you above competitors
                  </li>
                  <li className="text-lg">
                    <span className="font-bold">
                      The automated follow-up sequence
                    </span>{' '}
                    that converts leads over 6-12 months
                  </li>
                  <li className="text-lg">
                    <span className="font-bold">
                      Why 73% of pool builder websites
                    </span>{' '}
                    are basically invisible online
                  </li>
                </ul>
              </Description>
              <p className="py-2 font-bold">
                Stop losing high-value projects to builders with inferior work
                but superior marketing knowledge.
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                    >
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
                      {submitting ? 'Sending…' : 'Email Me the Blueprint'}
                    </button>
                  </div>
                </form>
              )}
            </DialogPanel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
