'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, LineChart, ShieldCheck, Wallet, TrendingUp, BarChart2, Clock, Sparkles, Quote, ChevronDown } from 'lucide-react'
import { useState } from 'react'

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-2 text-sm font-semibold tracking-widest text-emerald-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      <p className="mt-3 text-base leading-relaxed text-gray-300">{subtitle}</p>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#0f1624]/60 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30">
        <Icon className="h-5 w-5 text-emerald-400" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-300">{desc}</p>
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )
}

function Plan({ name, price, cta, features, highlighted }: { name: string; price: string; cta: string; features: string[]; highlighted?: boolean }) {
  return (
    <div className={`flex flex-col rounded-2xl border p-6 ${highlighted ? 'border-emerald-500/40 bg-gradient-to-b from-emerald-500/10 to-transparent ring-1 ring-emerald-500/30' : 'border-white/5 bg-[#0f1624]/60'}`}>
      <div className="mb-4 flex items-baseline justify-between">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <div className="text-2xl font-bold text-white">{price}</div>
      </div>
      <ul className="mt-2 space-y-2 text-sm">
        {features.map(f => (
          <li key={f} className="flex items-start gap-2 text-gray-300">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Link href="/sign-in" className={`mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition ${highlighted ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'bg-white/10 text-white hover:bg-white/20'}`}>
        {cta}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  )
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-white/5 bg-[#0f1624]/60">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between p-4 text-left">
        <span className="font-medium text-white">{q}</span>
        <ChevronDown className={`h-5 w-5 text-gray-400 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="px-4 pb-4 text-sm text-gray-300">{a}</div>}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0b1220] text-gray-100">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_20%_-10%,rgba(16,185,129,0.18),transparent),radial-gradient(50rem_30rem_at_80%_-10%,rgba(16,185,129,0.08),transparent)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/30">
              <Sparkles className="h-3.5 w-3.5" />
              AI-Powered Expense Tracking
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Track spending, forecast cash flow, and grow with confidence
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-300">
              ExpenseTracker AI categorizes transactions, surfaces insights, and helps you make smarter decisions in real time.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href="/sign-in" className="inline-flex items-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/about" className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Learn More
              </Link>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-5">
              <Stat value="12k+" label="Active users" />
              <Stat value="$2.4B" label="Tracked volume" />
              <Stat value="98%" label="Satisfaction" />
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto aspect-[16/10] w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-transparent ring-1 ring-emerald-500/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-40 w-40 rounded-3xl bg-gradient-to-br from-emerald-400 to-emerald-600 opacity-20 blur-3xl" />
              </div>
              <Image src="/dashboard-preview.png" alt="Dashboard preview" fill className="object-cover" priority />
            </div>
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-b from-emerald-500/10 to-transparent blur-2xl" />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <SectionTitle eyebrow="Why choose us" title="Designed for clarity, built for growth" subtitle="Everything you need to control spending and plan ahead with confidence." />
        <div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-3">
          <FeatureCard icon={Wallet} title="Smart Categorization" desc="Auto-classify transactions with high accuracy and keep books clean without manual effort." />
          <FeatureCard icon={LineChart} title="Cash Flow Forecasts" desc="Predict runway and upcoming cash gaps with adaptive, explainable AI models." />
          <FeatureCard icon={ShieldCheck} title="Bank-Level Security" desc="Encryption in transit and at rest, role-based access, and audit trails by default." />
          <FeatureCard icon={TrendingUp} title="Savings Insights" desc="Spot recurring waste, duplicate tools, and negotiate opportunities instantly." />
          <FeatureCard icon={BarChart2} title="Multi-Account Views" desc="Unify bank, card, and wallet data across teams, subsidiaries, and regions." />
          <FeatureCard icon={Clock} title="Realtime Alerts" desc="Be notified when thresholds are crossed or anomalies appear, before it’s too late." />
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <SectionTitle eyebrow="How it works" title="From connection to clarity in minutes" subtitle="Securely connect, categorize automatically, and act on insights." />
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/5 bg-[#0f1624]/60 p-6">
            <div className="mb-3 text-sm font-semibold text-emerald-400">Step 1</div>
            <h3 className="text-lg font-semibold text-white">Connect accounts</h3>
            <p className="mt-2 text-sm text-gray-300">Link banks and cards with secure OAuth to import transactions continuously.</p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-[#0f1624]/60 p-6">
            <div className="mb-3 text-sm font-semibold text-emerald-400">Step 2</div>
            <h3 className="text-lg font-semibold text-white">Auto-categorize</h3>
            <p className="mt-2 text-sm text-gray-300">Our models label spending, detect vendors, and learn from your edits.</p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-[#0f1624]/60 p-6">
            <div className="mb-3 text-sm font-semibold text-emerald-400">Step 3</div>
            <h3 className="text-lg font-semibold text-white">See insights</h3>
            <p className="mt-2 text-sm text-gray-300">Forecast cash flow, set budgets, and receive alerts when things drift.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <SectionTitle eyebrow="Pricing" title="Simple plans that scale with you" subtitle="Start free. Upgrade anytime." />
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
          <Plan name="Starter" price="$0" cta="Create free account" features={['Up to 2 accounts', 'Smart categorization', 'Monthly insights']} />
          <Plan name="Growth" price="$19/mo" cta="Start 14-day trial" features={['Unlimited accounts', 'Realtime alerts', 'Cash flow forecasting', 'Priority support']} highlighted />
          <Plan name="Scale" price="Custom" cta="Contact sales" features={['SAML SSO', 'Advanced permissions', 'Export & API access', 'Dedicated manager']} />
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <SectionTitle eyebrow="Loved by teams" title="What users say" subtitle="Results that speak for themselves." />
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/5 bg-[#0f1624]/60 p-6">
            <Quote className="h-6 w-6 text-emerald-400" />
            <p className="mt-3 text-sm text-gray-300">We spotted $18k in duplicate SaaS spend within a week. The insights paid for the tool instantly.</p>
            <div className="mt-4 text-sm font-semibold text-white">Amina R.</div>
            <div className="text-xs text-gray-400">COO, Fintech</div>
          </div>
          <div className="rounded-2xl border border-white/5 bg-[#0f1624]/60 p-6">
            <Quote className="h-6 w-6 text-emerald-400" />
            <p className="mt-3 text-sm text-gray-300">The forecasting helped us plan hiring with confidence. Clean UI and frictionless onboarding.</p>
            <div className="mt-4 text-sm font-semibold text-white">David P.</div>
            <div className="text-xs text-gray-400">Founder, SaaS</div>
          </div>
          <div className="rounded-2xl border border-white/5 bg-[#0f1624]/60 p-6">
            <Quote className="h-6 w-6 text-emerald-400" />
            <p className="mt-3 text-sm text-gray-300">Finally one place to see everything across banks and cards. Saved hours every week.</p>
            <div className="mt-4 text-sm font-semibold text-white">Sofia K.</div>
            <div className="text-xs text-gray-400">Head of Finance</div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <SectionTitle eyebrow="FAQ" title="Answers to common questions" subtitle="Everything you need to get started quickly." />
        <div className="mx-auto mt-8 grid max-w-3xl gap-4">
          <FAQItem q="Is there a free plan?" a="Yes. The Starter plan is free forever and includes core tracking for up to two accounts." />
          <FAQItem q="How secure is my data?" a="We use TLS 1.2+, AES-256 encryption at rest, and strict access controls. You can disconnect at any time." />
          <FAQItem q="Can I invite my accountant or team?" a="Yes. Growth and Scale plans include multi-user access with roles and permissions." />
          <FAQItem q="Do you support multiple currencies?" a="Yes. We normalize transactions and provide reports in your base currency." />
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-transparent p-8 ring-1 ring-emerald-500/20 md:flex-row">
          <div>
            <h3 className="text-2xl font-semibold text-white">Ready to take control of your spending?</h3>
            <p className="mt-1 text-gray-300">Join thousands of teams who track, forecast, and grow with ExpenseTracker AI.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/sign-in" className="inline-flex items-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Talk to sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
