import {
  Building2,
  MagnetIcon as Magnet,
  UserRound,
  Sparkles,
  MousePointerClick,
  BookOpen,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const TYPES = [
  {
    icon: Building2,
    title: 'Business Websites',
    description:
      'Professional sites that build credibility and clearly communicate what you do — for local businesses, agencies, studios and consultants.',
  },
  {
    icon: Magnet,
    title: 'Lead Generation',
    description:
      'Sites shaped around one goal: turning visitors into qualified enquiries, bookings, quote requests and discovery calls.',
  },
  {
    icon: UserRound,
    title: 'Portfolio Websites',
    description:
      'Clean, confident showcases for designers, developers, photographers, architects and freelancers who let their work speak.',
  },
  {
    icon: Sparkles,
    title: 'Personal Brand',
    description:
      'Authority-building sites for coaches, speakers, authors and consultants who want to be taken seriously.',
  },
  {
    icon: MousePointerClick,
    title: 'Landing Pages',
    description:
      'Focused single-page sites built around one objective — a launch, campaign, event, webinar or lead magnet.',
  },
  {
    icon: BookOpen,
    title: 'Informational Sites',
    description:
      'Content-first websites that educate and inform, for organisations, NGOs, communities and associations.',
  },
]

export function WhatWeBuild() {
  return (
    <section id="what-we-build" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            What we build
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">
            Websites built around your business goals
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            We build high-performance websites and integrate proven platforms for everything
            else — so you get modern functionality without the cost or fragility of custom
            software.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {TYPES.map((type, i) => (
            <Reveal key={type.title} delay={(i % 3) * 80}>
              <article className="group h-full bg-card p-8 transition-colors duration-300 hover:bg-secondary">
                <div className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-primary group-hover:text-primary-foreground">
                  <type.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-serif text-xl text-foreground">{type.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {type.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
