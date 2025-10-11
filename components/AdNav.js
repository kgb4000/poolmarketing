'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const Navigation = () => {
  const [currentPage, setCurrentPage] = useState('/')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigateTo = (page) => {
    setCurrentPage(page)
    setIsMenuOpen(true) // Close menu after navigation on mobile
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActiveLink = (page) => {
    return currentPage === page
  }

  return (
    <nav className="border-b border-gray-300 bg-white">
      <div className="container max-w-8xl mx-auto px-6">
        <div className="flex justify-between items-center py-2 lg:py-4">
          {/* Logo */}
          <Link
            href="#"
            className="lg:text-xl md:text-2xl font-bold text-black hover:text-gray-800 transition-colors"
          >
            Pool Builder Growth
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`px-4 py-2 text-lg font-medium transition-colors ${
                isActiveLink('home')
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-8 h-8 bg-black rounded hover:bg-gray-800 transition-colors focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'}`}
        >
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              className={`px-4 py-3 text-left text-lg font-medium transition-colors ${
                isActiveLink('home')
                  ? 'text-black bg-gray-50 border-l-4 border-black'
                  : 'text-gray-600 hover:text-black hover:bg-gray-50'
              }`}
            >
              Pool Builder Growth
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
