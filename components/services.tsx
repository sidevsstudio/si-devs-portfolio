import {
  MessageCircle,
  CalendarClock,
  MapPin,
  Star,
  Images,
  Search,
  BarChart3,
  FileText,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const CAPABILITIES = [
  {
    icon: MessageCircle,
    title: 'Contact & enquiries',
    description:
      'Contact forms, WhatsApp, click-to-call and click-to-email, plus multi-step lead and quote forms where they help.',
  },
  {
    icon: CalendarClock,
    title: 'Booking & scheduling',
    description:
      'Let clients book you directly with trusted tools like Calendly and Google Calendar appointments.',
  },
  {
    icon: MapPin,
    title: 'Maps & location',
    description:
      'Google Maps embeds, business location and directions so people can find you without friction.',
  },
  {
    icon: Star,
    title: 'Reviews & testimonials',
    description:
      'Google Reviews, written and video testimonials, and success stories that build trust quickly.',
  },
  {
    icon: Images,
    title: 'Media & galleries',
    description:
      'Image and project galleries, before-and-after sections, and team profiles that show your work.',
  },
  {
    icon: Search,
    title: 'SEO foundations',
    description:
      'Semantic HTML, meta tags, Open Graph, sitemaps and clean URLs included on every build.',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description:
      'Google Analytics, Search Console and basic conversion tracking so you can see what is working.',
  },
  {
    icon: FileText,
    title: 'Documents & payments',
    description:
      'Brochures and PDF embeds, plus hosted payment links via Razorpay or Stripe where relevant.',
  },
]

const INTEGRATIONS = [
  'WhatsApp',
  'Calendly',
  'Google Maps',
  'Google Analytics',
  'Tally',
  'Formspree',
  'YouTube',
  'Instagram',
  'LinkedIn',
  'Razorpay',
  'Stripe Links',
  'Search Console',
]

export function Services() {
  return (
    <section id="services" className="surface-obsidian scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            What&apos;s included
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">
            Enterprise-grade features, without the complexity
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            Our philosophy is simple: build only what adds value, and integrate proven platforms
            for everything else. You get modern capabilities on a fast, secure, low-maintenance
            site.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.title} delay={(i % 4) * 80} className="group">
              <div className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-primary group-hover:text-primary-foreground">
                <cap.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-serif text-lg text-foreground">{cap.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {cap.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 rounded-2xl border border-border bg-card p-8">
          <p className="text-sm font-medium text-muted-foreground">
            We integrate the platforms you already trust
          </p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {INTEGRATIONS.map((name) => (
              <li
                key={name}
                className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground transition-colors duration-300 hover:border-primary/50 hover:bg-secondary"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
