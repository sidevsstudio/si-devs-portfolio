import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { WhatWeBuild } from '@/components/what-we-build'
import { Process } from '@/components/process'
import { Services } from '@/components/services'
import { Work } from '@/components/work'
import { WhyUs } from '@/components/why-us'
import { Faq } from '@/components/faq'
import { ContactCta } from '@/components/contact-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <WhatWeBuild />
        <Process />
        <Services />
        <Work />
        <WhyUs />
        <Faq />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  )
}
