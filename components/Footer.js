'use client'

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 mt-20">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Pool Builder Growth</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Helping pool contractors dominate Google's AI search results and build lasting brand authority.
            </p>
            <p className="text-gray-400 text-sm">
              Generative Engine Optimization Specialists
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">AI Citation Audits</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Local SEO Optimization</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Content Authority Building</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Competitor Analysis</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Brand Memory Optimization</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">Pool Marketing FAQ</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Industry Blog</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">AI Marketing Guide</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Free Analysis</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">1-800-POOL-SEO</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">info@poolbuildergrowth.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <span className="text-gray-300">
                  Nationwide Service<br/>
                  Pool Contractors Across US
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Pool Builder Marketing. All rights reserved. Dominating AI search results for pool contractors.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center bg-gray-900 p-6 rounded-lg">
          <h5 className="text-xl font-bold mb-2">Ready to Dominate Google's AI Results?</h5>
          <p className="text-gray-300 mb-4">Get your free AI citation analysis and discover how to become the pool contractor Google recommends.</p>
          <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Claim Your Free Analysis
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;