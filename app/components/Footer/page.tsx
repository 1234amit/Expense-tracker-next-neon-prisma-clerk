'use client'

import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f1624] text-gray-300 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-inner">
            💰
          </span>
          <span className="text-lg font-semibold text-emerald-400">ExpenseTracker AI</span>
        </div>

        <ul className="flex flex-wrap justify-center gap-6 text-sm">
          <li><Link href="/" className="hover:text-white transition">Home</Link></li>
          <li><Link href="/about" className="hover:text-white transition">About</Link></li>
          <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          <li><Link href="/privacy" className="hover:text-white transition">Privacy</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          <Link href="mailto:support@expensetracker.ai" className="hover:text-emerald-400 transition">
            <Mail className="h-5 w-5" />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="hover:text-emerald-400 transition">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-emerald-400 transition">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="https://github.com" target="_blank" className="hover:text-emerald-400 transition">
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/5 text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} ExpenseTracker AI. All rights reserved.
      </div>
    </footer>
  )
}
