'use client'

import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import Button from './Button'

const Footer = () => {
  return (
    <footer className="text-black">
      {/* Call to Action */}
      <div className="text-center bg-gray-900 p-6 py-40">
        <h2 className="text-5xl text-white font-bold my-6">
          Ready to Build More Pools?
        </h2>
        <p className="text-gray-300 text-2xl mx-auto max-w-xl">
          Get your Pool Growth Builder Blueprint and become the pool contractor
          Google recommends
        </p>
        <Button
          buttonText="Get My Free Pool Builder Growth Blueprint Now"
          textSize="text-2xl"
          bgColor="bg-green-500"
          textColor="text-white"
          hover="hover:bg-green-600"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Pool Builder Growth</h3>
            <p className="text-black mb-4 leading-relaxed">
              Expert pool marketing solutions built specifically for pool
              contractors.
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-orange-400 hover:underline transition-colors transition-underline"
                >
                  Pool Bulder SEO
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-orange-400 hover:underline transition-colors transition-underline"
                >
                  Web Design & Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-orange-400 hover:underline transition-colors transition-underline"
                >
                  Automation Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-orange-400 hover:underline transition-colors transition-underline"
                >
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-orange-400 hover:underline transition-colors transition-underline"
                >
                  Content Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="text-black hover:text-orange-400 hover:underline transition-colors transition-underline"
                >
                  Pool Marketing FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-black hover:text-orange-400 hover:underline transition-colors transition-underline"
                >
                  Industry Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-orange-400 hover:underline transition-colors transition-underline"
                >
                  AI Marketing Guide
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-orange-400 hover:underline transition-colors transition-underline"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black hover:text-orange-400 hover:underline transition-colors transition-underline"
                >
                  Free Analysis
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-black" />
                <span className="text-black">Pool Marketing FAQ</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-black" />
                <span className="text-black">info@poolbuildergrowth.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-black mt-1" />
                <span className="text-black">
                  Nationwide Service
                  <br />
                  Pool Contractors Across US
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-black text-sm text-center md:text-left">
              Pool Builder Marketing. All rights reserved &copy;{' '}
              {new Date().getFullYear()}
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-black hover:text-orange-400 hover:underline transition-colors transition-underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-black hover:text-orange-400 hover:underline transition-colors transition-underline"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-black hover:text-orange-400 hover:underline transition-colors transition-underline"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
