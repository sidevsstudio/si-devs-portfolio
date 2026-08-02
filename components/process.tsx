import { Reveal } from '@/components/reveal'

const PHASES = [
  {
    step: '01',
    title: 'Understand',
    description:
      'We start with your business, not the pixels. We learn what you do, who you serve, and what a successful website actually needs to achieve.',
    deliverable: 'A shared brief you approve before anything is designed.',
  },
  {
    step: '02',
    title: 'Plan',
    description:
      'We map the pages, structure and integrations, and agree the scope and timeline in plain language — so there are no surprises later.',
    deliverable: 'A clear scope, sitemap and timeline with review checkpoints.',
  },
  {
    step: '03',
    title: 'Design & Build',
    description:
      'We design and develop your site with regular checkpoints. You review, we refine — you are never left wondering where things stand.',
    deliverable: 'Two review rounds, so the result feels right, not rushed.',
  },
  {
    step: '04',
    title: 'Launch & Hand Over',
    description:
      'We test, optimise and deploy — then hand over documentation and support so you feel confident running your site.',
    deliverable: 'A live site, source code, and a calm handover.',
  },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              How we work
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">
              A calm, structured process
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
              Every project moves through the same clear phases. At each step you know what is
              happening, why it matters, and what comes next. That is what we mean by peace of
              mind.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              No chasing for updates. No vague timelines. No decisions made behind your back.
            </p>
          </Reveal>

          <ol className="relative border-l border-border pl-8">
            {PHASES.map((phase, i) => (
              <Reveal as="li" key={phase.step} delay={i * 90} className="relative block pb-12 last:pb-0">
                <span className="absolute -left-[41px] flex size-5 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <span className="size-1.5 rounded-full bg-primary" />
                </span>
                <span className="font-serif text-sm text-primary">{phase.step}</span>
                <h3 className="mt-1 font-serif text-2xl text-foreground">{phase.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">
                  {phase.description}
                </p>
                <p className="mt-3 rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground transition-colors duration-300 hover:border-primary/40">
                  {phase.deliverable}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
