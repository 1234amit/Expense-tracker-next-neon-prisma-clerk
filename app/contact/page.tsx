'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, XCircle, Linkedin, Twitter, Github } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle'|'success'|'error'>('idle')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')
    try {
      await new Promise(r => setTimeout(r, 1200))
      setStatus('success')
      ;(e.target as HTMLFormElement).reset()
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0b1220] text-gray-200">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_20%_-10%,rgba(16,185,129,0.18),transparent),radial-gradient(50rem_30rem_at_80%_-10%,rgba(16,185,129,0.08),transparent)]" />
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-sm font-semibold tracking-widest text-emerald-400">Get in touch</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">We’d love to hear from you</h1>
            <p className="mt-3 text-base leading-relaxed text-gray-300">Questions, feedback, or partnership ideas? Send a message and we’ll respond shortly.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-5">
            <div className="rounded-2xl border border-white/5 bg-[#0f1624]/70 p-6 backdrop-blur md:col-span-3">
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-sm text-gray-300">Full name</label>
                    <input name="name" required placeholder="Alex Johnson" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-emerald-500/20 focus:ring-2" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm text-gray-300">Email</label>
                    <input type="email" name="email" required placeholder="alex@email.com" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-emerald-500/20 focus:ring-2" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm text-gray-300">Subject</label>
                  <input name="subject" required placeholder="I have a question about pricing" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-emerald-500/20 focus:ring-2" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm text-gray-300">Message</label>
                  <textarea name="message" required rows={5} placeholder="Write your message..." className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-emerald-500/20 focus:ring-2" />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-400">We typically reply within 1–2 business days.</p>
                  <button disabled={loading} className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:opacity-70">
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    {loading ? 'Sending...' : 'Send message'}
                  </button>
                </div>
                {status === 'success' && (
                  <div className="mt-2 inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2 text-emerald-300 ring-1 ring-emerald-500/30">
                    <CheckCircle2 className="h-4 w-4" />
                    Message sent successfully
                  </div>
                )}
                {status === 'error' && (
                  <div className="mt-2 inline-flex items-center gap-2 rounded-lg bg-red-500/10 px-3 py-2 text-red-300 ring-1 ring-red-500/30">
                    <XCircle className="h-4 w-4" />
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>

            <aside className="flex flex-col gap-6 md:col-span-2">
              <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 to-transparent p-6 ring-1 ring-emerald-500/20">
                <h3 className="text-lg font-semibold text-white">Contact details</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-emerald-400" />
                    <a href="mailto:support@expensetracker.ai" className="hover:text-white">support@expensetracker.ai</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-emerald-400" />
                    <a href="tel:+8801933329902" className="hover:text-white">+880 1933-329902</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-emerald-400" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-[#0f1624]/70 p-6 backdrop-blur">
                <h3 className="text-lg font-semibold text-white">Follow us</h3>
                <div className="mt-4 flex items-center gap-4">
                  <Link href="https://twitter.com" target="_blank" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10">
                    <Twitter className="h-5 w-5 text-emerald-300" />
                  </Link>
                  <Link href="https://linkedin.com" target="_blank" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10">
                    <Linkedin className="h-5 w-5 text-emerald-300" />
                  </Link>
                  <Link href="https://github.com" target="_blank" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10">
                    <Github className="h-5 w-5 text-emerald-300" />
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-[#0f1624]/70 p-6">
                <h3 className="text-lg font-semibold text-white">Office hours</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-300">
                  <li className="flex items-center justify-between"><span>Mon–Fri</span><span>9:00–18:00</span></li>
                  <li className="flex items-center justify-between"><span>Saturday</span><span>10:00–14:00</span></li>
                  <li className="flex items-center justify-between"><span>Sunday</span><span>Closed</span></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#0f1624]">
          <iframe
            title="Map"
            className="h-[320px] w-full"
            src="https://www.openstreetmap.org/export/embed.html?bbox=90.35%2C23.70%2C90.50%2C23.85&layer=mapnik"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  )
}
