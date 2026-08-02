import { Clock } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const UPCOMING = [
  { label: 'Business Website', note: 'A credibility-first site for a local service business.' },
  { label: 'Lead Generation', note: 'A conversion-focused site built around discovery calls.' },
  { label: 'Portfolio', note: 'A clean showcase for a creative professional.' },
]

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Selected work
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">
              Our first projects are on the way
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
              We&apos;d rather show you real work than filler. These slots are reserved for
              projects we&apos;re preparing to share — we&apos;ll update this section the moment
              they&apos;re ready.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {UPCOMING.map((item, i) => (
            <Reveal key={item.label} delay={i * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-black/5">
                {/* Placeholder preview — swap for a project screenshot when ready */}
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-border bg-secondary">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-60 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, var(--linen) 1px, transparent 1px), linear-gradient(to bottom, var(--linen) 1px, transparent 1px)',
                      backgroundSize: '28px 28px',
                    }}
                  />
                  <span className="relative inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5">
                    <Clock className="size-4 text-primary" />
                    Coming soon
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl text-foreground">{item.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {item.note}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-2xl border border-dashed border-border bg-card px-6 py-8 text-center">
          <p className="text-base leading-relaxed text-muted-foreground text-pretty">
            Want to be one of our first featured projects?{' '}
            <a href="#contact" className="font-semibold text-primary underline-offset-4 hover:underline">
              Start a conversation
            </a>{' '}
            — early clients get our fullest attention.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
