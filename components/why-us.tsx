import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const PRINCIPLES = [
  {
    title: 'We understand before we propose',
    description:
      'No template pitch. We learn your business first, then recommend what genuinely serves it.',
  },
  {
    title: 'We explain in plain language',
    description:
      'Technology in business terms. We educate rather than impress, and recommend rather than pressure.',
  },
  {
    title: 'We keep communication clear',
    description:
      'Every update ties back to a phase, a next step, and a decision you own. You are never left guessing.',
  },
  {
    title: 'We build for the long term',
    description:
      'We prefer lasting partnerships over one-time transactions — and we build sites that stay maintainable.',
  },
]

export function WhyUs() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Why SI Devs
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">
              A partner, not a production line
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
              We don&apos;t compete on being the cheapest or the fastest. We compete on
              understanding, quality, and a relationship you can rely on. You&apos;re buying trust,
              credibility and a smoother path — technology is just the tool we use to get there.
            </p>

            <blockquote className="mt-8 border-l-2 border-primary pl-5">
              <p className="font-serif text-2xl leading-snug text-foreground text-pretty">
                &ldquo;A website should be a valuable business asset — not just an online
                brochure.&rdquo;
              </p>
            </blockquote>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {PRINCIPLES.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-black/5">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                      <Check className="size-3.5" />
                    </span>
                    <div>
                      <h3 className="font-serif text-lg text-foreground">{p.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
