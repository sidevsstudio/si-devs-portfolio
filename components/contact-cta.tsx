'use client'

import { useEffect } from 'react'
import { ArrowUpRight, CalendarCheck, MessageCircle, FormInput } from 'lucide-react'
import { Reveal } from '@/components/reveal'

/**
 * QUICK CONTACT LINKS — replace the href placeholders below with your real details:
 *  - Calendly (or Google Calendar) booking link
 *  - WhatsApp: https://wa.me/<your-number-in-international-format>
 */
const CHANNELS = [
  {
    icon: CalendarCheck,
    title: 'Book a discovery call',
    description: 'A relaxed, no-pressure chat about your goals and whether we\u2019re a good fit.',
    action: 'Choose a time',
    href: '#', // TODO: replace with your Calendly link
  },
  {
    icon: MessageCircle,
    title: 'Message on WhatsApp',
    description: 'Prefer to type? Send a quick message and we\u2019ll reply thoughtfully.',
    action: 'Open WhatsApp',
    href: '#', // TODO: replace with https://wa.me/<number>
  },
]

/**
 * TALLY FORM — replace TALLY_FORM_ID with the ID from your Tally form.
 * In Tally: Share > Embed > copy the ID from the embed URL
 * (e.g. https://tally.so/embed/wABC12 -> the ID is "wABC12").
 */
const TALLY_FORM_ID = 'TALLY_FORM_ID'
const IS_FORM_CONFIGURED = TALLY_FORM_ID !== 'TALLY_FORM_ID'

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void }
  }
}

export function ContactCta() {
  useEffect(() => {
    if (!IS_FORM_CONFIGURED) return

    const SRC = 'https://tally.so/widgets/embed.js'

    const load = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds()
        return
      }
    }

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SRC}"]`)
    if (existing) {
      load()
      return
    }

    const script = document.createElement('script')
    script.src = SRC
    script.async = true
    script.onload = load
    document.body.appendChild(script)
  }, [])

  return (
    <section id="contact" className="surface-obsidian scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Let&apos;s talk
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">
            Start with a calm conversation
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            No hard sell, no obligation. Share a few details below and we&apos;ll get back to you
            honestly — with how we can help and exactly what happens next.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl items-start gap-6 lg:grid-cols-5">
          {/* Tally form — primary way to reach us */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h3 className="font-serif text-xl text-foreground">Tell us about your project</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                A couple of minutes is all it takes. The more you share, the more useful our first
                reply will be.
              </p>
              <div className="mt-6">
                {IS_FORM_CONFIGURED ? (
                  <iframe
                    data-tally-src={`https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
                    loading="lazy"
                    width="100%"
                    height="420"
                    title="SI Devs project enquiry form"
                    className="w-full"
                  />
                ) : (
                  /* Placeholder shown until TALLY_FORM_ID is set. Replace the ID above to go live. */
                  <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-secondary/50 px-6 py-14 text-center">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                      <FormInput className="size-6" />
                    </div>
                    <p className="mt-4 font-serif text-lg text-foreground">
                      Enquiry form goes here
                    </p>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
                      Your Tally form will appear in this space. Add your form ID in{' '}
                      <code className="rounded bg-background px-1.5 py-0.5 text-xs text-foreground">
                        components/contact-cta.tsx
                      </code>{' '}
                      to make it live.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          {/* Quick alternatives */}
          <div className="grid gap-6 lg:col-span-2">
            {CHANNELS.map((channel, i) => (
              <Reveal key={channel.title} delay={i * 90}>
                <a
                  href={channel.href}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-black/20"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <channel.icon className="size-5" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl text-foreground">{channel.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {channel.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    {channel.action}
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
