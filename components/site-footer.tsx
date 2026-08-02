import { Logo } from '@/components/logo'

const NAV = {
  Studio: [
    { label: 'What we build', href: '#what-we-build' },
    { label: 'How we work', href: '#process' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
  ],
  Connect: [
    // TODO: replace # with your real profile URLs
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'X (Twitter)', href: '#' },
    { label: 'WhatsApp', href: '#' },
  ],
}

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="surface-obsidian border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo variant="chalk" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
              A client-first website design &amp; development studio. Guided, not just built.
            </p>
            <p className="mt-4 font-serif text-lg italic text-foreground">
              Peace of mind, engineered.
            </p>
          </div>

          {Object.entries(NAV).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-foreground">{heading}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {year} SI Devs. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            {/* TODO: add your contact email once ready */}
            connect.sidevs@gmail.com
          </p>
        </div>
      </div>
    </footer>
  )
}
