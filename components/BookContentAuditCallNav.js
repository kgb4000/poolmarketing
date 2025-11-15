'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Dialog, DialogPanel } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

export default function BookContentAuditCall() {
  return (
    <div className="bg-white">
      <header className="container max-w-8xl mx-auto px-6">
        <nav
          aria-label="Global"
          className="flex items-center justify-between py-6 lg:px-0"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="text-black font-bold text-lg">
              Pool Builder Growth
            </Link>
          </div>

          <div className="flex lg:hidden">
            <a
              href="https://cal.com/kester-browne-zwivr2/30min"
              target="_blank"
            >
              <div className="-m-2.5 inline-flex items-center justify-center rounded-md px-6 py-2 bg-green-500 text-white font-bold">
                Book Content Audit Call
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="https://cal.com/kester-browne-zwivr2/30min"
              target="_blank"
            >
              <div className="-m-2.5 inline-flex items-center justify-center rounded-md px-8 py-4 bg-green-500 text-white font-bold">
                Book Content Audit Call
              </div>
            </a>
          </div>
        </nav>
      </header>
    </div>
  )
}
