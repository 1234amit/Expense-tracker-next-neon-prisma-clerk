import Link from 'next/link'
import { ShieldCheck, LineChart, Wallet, TrendingUp, Sparkles, Users, Cpu, Database, Gauge } from 'lucide-react'

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/20">
      {children}
    </span>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0b1220] text-gray-100">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_20%_-10%,rgba(16,185,129,0.18),transparent),radial-gradient(50rem_30rem_at_80%_-10%,rgba(16,185,129,0.08),transparent)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <Pill>About ExpenseTracker AI</Pill>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">Clarity and control for modern spending</h1>
            <p className="mt-4 text-base leading-relaxed text-gray-300">ExpenseTracker AI helps individuals and teams track spending, forecast cash flow, and uncover savings opportunities. Built with a privacy-first architecture and a clean, focused experience.</p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="inline-flex items-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600">Contact us</Link>
              <Link href="/sign-in" className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Get started</Link>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-5">
              <Stat value="12k+" label="Active users" />
              <Stat value="$2.4B" label="Tracked volume" />
              <Stat value="98%" label="Satisfaction" />
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#0f1624]/70 p-6 ring-1 ring-emerald-500/10">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30"><Wallet className="h-5 w-5 text-emerald-400" /></div>
                <div className="text-sm font-semibold text-white">Unified accounts</div>
                <div className="mt-1 text-xs text-gray-300">Banks, cards, wallets in one view</div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30"><LineChart className="h-5 w-5 text-emerald-400" /></div>
                <div className="text-sm font-semibold text-white">Forecasting</div>
                <div className="mt-1 text-xs text-gray-300">Cash flow and runway insights</div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30"><TrendingUp className="h-5 w-5 text-emerald-400" /></div>
                <div className="text-sm font-semibold text-white">Savings radar</div>
                <div className="mt-1 text-xs text-gray-300">Duplicate and waste detection</div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30"><ShieldCheck className="h-5 w-5 text-emerald-400" /></div>
                <div className="text-sm font-semibold text-white">Security first</div>
                <div className="mt-1 text-xs text-gray-300">Encryption, roles, audit trails</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-emerald-400">Mission</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Make financial decisions effortless</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-300">We believe everyone deserves real-time clarity. Our mission is to remove friction from tracking, bring context to every transaction, and surface actions that improve financial health.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/5 bg-[#0f1624]/60 p-6">
            <Sparkles className="h-6 w-6 text-emerald-400" />
            <h3 className="mt-3 text-lg font-semibold text-white">Design with focus</h3>
            <p className="mt-2 text-sm text-gray-300">A clean interface that highlights what matters and stays out of the way.</p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-[#0f1624]/60 p-6">
            <Users className="h-6 w-6 text-emerald-400" />
            <h3 className="mt-3 text-lg font-semibold text-white">Built for teams</h3>
            <p className="mt-2 text-sm text-gray-300">Invite collaborators with roles, see shared budgets, and keep everyone aligned.</p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-[#0f1624]/60 p-6">
            <Gauge className="h-6 w-6 text-emerald-400" />
            <h3 className="mt-3 text-lg font-semibold text-white">Performance first</h3>
            <p className="mt-2 text-sm text-gray-300">Fast loads, smooth interactions, and reliable syncing for a delightful workflow.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-emerald-400">Technology</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Modern stack, privacy-first architecture</h2>
          <p className="mt-3 text-base leading-relaxed text-gray-300">A robust foundation to keep your data safe and your experience fast.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-4">
          <div className="rounded-xl border border-white/5 bg-[#0f1624]/60 p-4 text-center">
            <Cpu className="mx-auto h-5 w-5 text-emerald-400" />
            <div className="mt-2 text-sm font-semibold text-white">Next.js + TypeScript</div>
            <div className="text-xs text-gray-400">App Router, server actions</div>
          </div>
          <div className="rounded-xl border border-white/5 bg-[#0f1624]/60 p-4 text-center">
            <Database className="mx-auto h-5 w-5 text-emerald-400" />
            <div className="mt-2 text-sm font-semibold text-white">Prisma ORM</div>
            <div className="text-xs text-gray-400">PostgreSQL on Neon</div>
          </div>
          <div className="rounded-xl border border-white/5 bg-[#0f1624]/60 p-4 text-center">
            <ShieldCheck className="mx-auto h-5 w-5 text-emerald-400" />
            <div className="mt-2 text-sm font-semibold text-white">Authentication</div>
            <div className="text-xs text-gray-400">Clerk, role policies</div>
          </div>
          <div className="rounded-xl border border-white/5 bg-[#0f1624]/60 p-4 text-center">
            <Sparkles className="mx-auto h-5 w-5 text-emerald-400" />
            <div className="mt-2 text-sm font-semibold text-white">AI Categorization</div>
            <div className="text-xs text-gray-400">Vendor and label intelligence</div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-transparent p-8 ring-1 ring-emerald-500/20 md:flex-row">
          <div>
            <h3 className="text-2xl font-semibold text-white">Join thousands tracking smarter</h3>
            <p className="mt-1 text-gray-300">Start free and upgrade anytime. Your data stays private and under your control.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/sign-in" className="inline-flex items-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600">Create account</Link>
            <Link href="/contact" className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Talk to sales</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
