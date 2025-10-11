'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react'

const services = [
  { name: 'Web Design', href: '/pool-builder-web-design' },
  { name: 'Local SEO', href: '/local-seo-services' },
  { name: 'Content Marketing', href: '/content-marketing' },
  { name: 'Email Marketing', href: '/email-marketing' },
]

const navigation = [
  // { name: 'Services', href: '#' },
  // { name: 'Tools', href: '#' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="container max-w-8xl mx-auto">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="/" className="text-black font-bold text-lg">
              Pool Builder Growth
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {/* Services Dropdown */}
            {/* <Menu as="div" className="relative">
              <MenuButton className="flex items-center text-md font-semibold text-gray-900 hover:text-gray-600 focus:outline-none">
                Services
                <ChevronDownIcon className="ml-1 h-5 w-5" />
              </MenuButton>
              <MenuItems className="absolute left-0 mt-6 w-48 bg-white focus:outline-none">
                {services.map((service) => (
                  <MenuItem key={service.name}>
                    {({ active }) => (
                      <a
                        href={service.href}
                        className={`block px-4 py-2 text-sm ${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        }`}
                      >
                        {service.name}
                      </a>
                    )}
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu> */}

            {/* Other Navigation Items */}
            {navigation
              .filter((item) => item.name !== 'Services')
              .map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-md font-semibold text-gray-900 hover:text-gray-600"
                >
                  {item.name}
                </a>
              ))}
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="text-black font-bold text-lg">
                Pool Builder Growth
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                {/* Mobile Nav Items */}
                <div className="space-y-2 py-6">
                  {/* Services with sub-links */}
                  <div>
                    <p className="px-3 py-2 text-base font-semibold text-gray-900">
                      Services
                    </p>
                    <div className="ml-4 space-y-1">
                      {services.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Other nav links */}
                  {navigation
                    .filter((item) => item.name !== 'Services')
                    .map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  )
}
