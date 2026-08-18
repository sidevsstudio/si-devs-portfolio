'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export type Project = {
  name: string
  type: string
  segment: string
  location: string
  description: string
  image: string
  imageAlt: string
  url: string | null
  futureUrl: string
  status: 'concept'
}

export const PROJECTS: Project[] = [
  {
    name: 'Udaan Academy',
    type: 'Lead Generation',
    segment: 'Coaching Classes',
    location: 'Pune, India',
    description:
      'A credibility-first website for a JEE/NEET coaching institute, built to help parents and students explore programs, results, faculty and admission options.',
    image: '/work/udaan-academy.webp',
    imageAlt: 'Udaan Academy coaching website concept',
    url: null,
    futureUrl: 'https://udaan.sidevs.in',
    status: 'concept',
  },
  {
    name: 'Loomi & Co.',
    type: 'Landing Page',
    segment: 'Instagram Business',
    location: 'Jaipur, India',
    description:
      'A warm digital storefront for a handmade jewellery brand, turning an Instagram-first business into a more established and effortless buying experience.',
    image: '/work/loomi-and-co.webp',
    imageAlt: 'Loomi & Co. jewellery website concept',
    url: null,
    futureUrl: 'https://loomi.sidevs.in',
    status: 'concept',
  },
  {
    name: 'The Lumière Room',
    type: 'Booking Website',
    segment: 'Hair & Beauty Salon',
    location: 'Mumbai, India',
    description:
      'An editorial-style salon website designed to showcase premium services, build trust through visual proof and make appointment booking effortless.',
    image: '/work/lumiere-room.webp',
    imageAlt: 'The Lumière Room salon website concept',
    url: null,
    futureUrl: 'https://lumiere.sidevs.in',
    status: 'concept',
  },
  {
    name: 'Marcus Ito',
    type: 'Personal Brand',
    segment: 'Fitness & Wellness',
    location: 'Austin, USA',
    description:
      'A personal brand website for an online strength and mobility coach, built around credibility, coaching results and two clear paths to conversion.',
    image: '/work/marcus-ito.webp',
    imageAlt: 'Marcus Ito fitness coaching website concept',
    url: null,
    futureUrl: 'https://marcus.sidevs.in',
    status: 'concept',
  },
  {
    name: 'Eleanor Voss',
    type: 'Booking Website',
    segment: 'Therapy & Counselling',
    location: 'London, UK',
    description:
      'A calm, trust-first website for an independent therapist, designed to answer important questions and make booking a first session feel simple.',
    image: '/work/eleanor-voss.webp',
    imageAlt: 'Eleanor Voss therapy website concept',
    url: null,
    futureUrl: 'https://eleanor.sidevs.in',
    status: 'concept',
  },
  {
    name: 'Saanjh Celebrations',
    type: 'Business Website',
    segment: 'Event Management & Invitations',
    location: 'Jaipur, India',
    description:
      'A high-production event website showcasing weddings, celebrations and digital invitations while giving prospective clients a clear path to enquire.',
    image: '/work/saanjh-celebrations.webp',
    imageAlt: 'Saanjh Celebrations event website concept',
    url: null,
    futureUrl: 'https://saanjh.sidevs.in',
    status: 'concept',
  },
]

function ProjectPreview({ project }: { project: Project }) {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-secondary/60">
      {/* Mock Browser Top Bar */}
      <div className="relative z-10 flex h-7 items-center justify-between border-b border-border/70 bg-card/90 px-3 backdrop-blur-sm">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-border" />
          <span className="size-2 rounded-full bg-border" />
          <span className="size-2 rounded-full bg-border" />
        </div>
        <span className="truncate font-mono text-[10px] text-muted-foreground/60">
          {project.futureUrl.replace('https://', '')}
        </span>
        <span className="w-8" aria-hidden="true" />
      </div>

      {/* Actual Image (when available in /public/work/) */}
      {!hasError && (
        <img
          src={project.image}
          alt={project.imageAlt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            'absolute inset-0 top-7 h-[calc(100%-1.75rem)] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105',
            !isLoaded && 'opacity-0',
            isLoaded && 'opacity-100'
          )}
        />
      )}

      {/* Refined Branded Concept Fallback */}
      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 top-7 flex flex-col justify-between p-6 transition-transform duration-500 group-hover:scale-[1.02]">
          {/* Subtle decorative geometric background pattern */}
          <div
            className="absolute inset-0 opacity-40"
            aria-hidden="true"
            style={{
              backgroundImage:
                'radial-gradient(var(--border) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          <div className="relative z-10 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/80 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground backdrop-blur-xs">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              Concept Preview
            </span>
            <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground/70">
              {project.type}
            </span>
          </div>

          <div className="relative z-10 my-auto py-2">
            <p className="font-serif text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              {project.name}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {project.segment} &middot; {project.location}
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-between border-t border-border/40 pt-3 text-[11px] text-muted-foreground/80">
            <span>SI Devs Concept Build</span>
            <span className="font-mono text-[10px]">{project.futureUrl.replace('https://', '')}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Selected work
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">
            Websites built around the business, not a template.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            Six concept projects exploring how thoughtful strategy, design and development can
            shape a clearer digital presence for different kinds of businesses.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-10">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={(i % 2) * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-black/5">
                <ProjectPreview project={project} />
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {project.type}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-foreground md:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {project.description}
                  </p>
                  <p className="mt-5 text-xs font-medium text-muted-foreground/80">
                    {project.segment} &middot; {project.location}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-sm">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                      <span className="size-1.5 rounded-full bg-primary/70" aria-hidden="true" />
                      Concept Project
                    </span>

                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-primary transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        View live site
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ) : (
                      <span className="text-xs font-medium text-muted-foreground/70">
                        Live site coming soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
