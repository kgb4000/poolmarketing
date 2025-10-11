'use client'

import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import Button from './Button'

const Footer = () => {
  return (
    <footer className="ad-footer text-black border-t border-gray-700 mt-20 ">
      <div className=" py-10 container max-w-8xl mx-auto">
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
              className="text-black hover:text-blue-400 hover:underline transition-colors transition-underline"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-black hover:text-blue-400 hover:underline transition-colors transition-underline"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
