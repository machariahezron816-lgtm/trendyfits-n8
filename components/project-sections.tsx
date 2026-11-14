import { ArrowUpRight } from 'lucide-react'
import { TIKTOK_HANDLE, TIKTOK_URL } from '@/lib/project'

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 pt-20 md:pt-28">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
        Online fashion store
      </p>
      <h1 className="mt-5 max-w-3xl text-balance font-serif text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
  Trendyfits Fashion
  </h1>
  <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">Now on GitHub</p>

      <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
        An online store dedicated to satisfying the fashion hunger in trendy styles.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href={TIKTOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          See it on TikTok
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
        <a
          href="#about"
          className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary"
        >
          Learn more
        </a>
      </div>
    </section>
  )
}

const details = [
  {
    label: 'What it is',
    body: 'An online store dedicated to satisfying the fashion hunger in trendy styles.',
  },
  {
    label: 'Why it matters',
    body: 'Committed to raising the bar in the fashion industry.',
  },
]

export function About() {
  return (
    <section id="about" className="border-t border-border bg-muted/50">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-2">
        {details.map((item, index) => (
          <article key={item.label}>
            <span className="font-serif text-sm text-primary">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight">
              {item.label}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Maker() {
  return (
    <section id="maker" className="mx-auto max-w-5xl px-6 py-20">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Made by</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Hezron Macharia
          </h2>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Where to see it</p>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 font-serif text-2xl font-semibold text-primary underline-offset-4 hover:underline"
          >
            {TIKTOK_HANDLE} on TikTok
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm sm:flex-row sm:justify-between">
        <p className="font-serif font-semibold">Trendyfits Fashion</p>
        <p>By Hezron Macharia</p>
      </div>
    </footer>
  )
}
