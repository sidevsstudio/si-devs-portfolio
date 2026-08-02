import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const FAQS = [
  {
    q: 'What kind of websites do you build?',
    a: 'We build high-performance static websites — business sites, lead-generation sites, portfolios, personal brand sites, landing pages and informational sites. For advanced functionality, we integrate trusted platforms rather than building fragile custom systems.',
  },
  {
    q: 'Do you build custom apps, dashboards or e-commerce platforms?',
    a: 'Not at this stage. We intentionally focus on what we do exceptionally well. For features like scheduling, payments or forms, we integrate proven third-party tools. If your project needs a large custom application, we\u2019ll tell you honestly and point you in the right direction.',
  },
  {
    q: 'How does the process work?',
    a: 'Four clear phases: Understand, Plan, Design & Build, and Launch & Hand Over. You approve the brief and scope up front, review the work at set checkpoints, and receive a calm handover with documentation at the end.',
  },
  {
    q: 'How long does a project take?',
    a: 'It depends on scope, and we agree a realistic timeline before we begin. A focused site can move quickly; larger sites take longer. What we promise is transparency — you\u2019ll always know the timeline and where things stand.',
  },
  {
    q: 'Will I be able to find things and get updates easily?',
    a: 'Yes. Clear communication is core to how we work. Every update ties back to a phase and a next step, so you never have to chase us for information.',
  },
  {
    q: 'What do I receive at the end?',
    a: 'Depending on scope: a fully responsive website, source code, deployment, basic SEO setup, third-party integrations, performance optimisation, documentation and handover support.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Questions, answered
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">
            Clear answers, no fine print
          </h2>
        </Reveal>

        <Reveal className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {FAQS.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-secondary [&::-webkit-details-marker]:hidden">
                <span className="font-serif text-lg text-foreground">{item.q}</span>
                <Plus className="size-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <div className="px-6 pb-5 text-base leading-relaxed text-muted-foreground text-pretty">
                {item.a}
              </div>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
