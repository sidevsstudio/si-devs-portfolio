import { ArrowRight, Compass } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* subtle brand grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--linen) 1px, transparent 1px), linear-gradient(to bottom, var(--linen) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="animate-enter inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
          <Compass className="size-4 text-primary" />
          Website Design &amp; Development Studio
        </div>

        <h1
          className="animate-enter mt-6 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-balance md:text-7xl"
          style={{ animationDelay: '80ms' }}
        >
          Guided, <span className="italic text-primary">not just</span> built.
        </h1>

        <p
          className="animate-enter mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
          style={{ animationDelay: '160ms' }}
        >
          We help businesses establish a digital presence they can be proud of — turning real
          goals into fast, trustworthy websites. No jargon, no chasing, no guesswork. Just clear
          steps and peace of mind.
        </p>

        <div
          className="animate-enter mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: '240ms' }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
          >
            Book a discovery call
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#process"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-base font-semibold text-foreground transition-colors duration-300 hover:bg-secondary"
          >
            See how we work
          </a>
        </div>

        <dl
          className="animate-enter mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 sm:grid-cols-4"
          style={{ animationDelay: '320ms' }}
        >
          {[
            { value: 'Clarity', label: 'You always know what happens next' },
            { value: 'Transparency', label: 'Honest scope, honest timelines' },
            { value: 'Performance', label: 'Fast, secure, SEO-ready builds' },
            { value: 'Partnership', label: 'A studio that stays in your corner' },
          ].map((item) => (
            <div key={item.value}>
              <dt className="font-serif text-xl text-foreground">{item.value}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
