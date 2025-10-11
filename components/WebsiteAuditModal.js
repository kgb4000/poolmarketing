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
                Your Website Costing You $70k+ in Pool Contracts, And You Don't
                Even Know It?
              </DialogTitle>

              <Description className="mt-2 text-md text-slate-600">
                Most pool builders don’t realize it — but every day, homeowners
                are searching Google and now AI tools like ChatGPT and
                Perplexity for pool builders in your area. If your website isn’t
                showing up, or it looks weak compared to competitors… you’re
                invisible.{' '}
                <span className="font-bold">And invisibility costs money.</span>
                <p className="py-2 font-bold">
                  That’s why I put together this Free Website Audit. In less
                  than 48 hours, I’ll show you:
                </p>
                <ul className="mt-1 list-inside list-disc">
                  <li className="text-lg">
                    <span className="font-bold">3 silent killers</span> choking
                    your website’s leads
                  </li>
                  <li className="text-lg">
                    <span className="font-bold">A 4-week content plan</span>{' '}
                    that makes Google and AI notice you
                  </li>
                  <li className="text-lg">
                    <span className="font-bold">A conversion checklist</span>{' '}
                    that turns lookers into booked calls
                  </li>
                </ul>
              </Description>
              <p className="pt-4 font-bold">
                👉 Enter your name and email below, and I’ll rush your audit
                straight to your inbox.
              </p>
              {success ? (
                <p className="mt-6 rounded-lg bg-green-50 p-3 text-green-800">
                  🎉 Success! You'll have your website audit in 48 hours.'
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
                  <div>
                    <label
                      htmlFor="website"
                      className="block text-sm font-medium"
                    >
                      Website
                    </label>
                    <input
                      id="website"
                      name="website"
                      type="url"
                      required
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-200"
                    />
                  </div>

                  <div className="mt-2 flex justify-evenly gap-2">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="rounded-lg border px-4 py-4 text-sm"
                    >
                      Don't need it, my website appears in AI searches.
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-white hover:bg-green-600 disabled:opacity-70"
                    >
                      {submitting ? 'Sending…' : 'I Want My Website Audit'}
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
