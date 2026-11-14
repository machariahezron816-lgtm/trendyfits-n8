import { SiteHeader } from '@/components/site-header'
import { About, Hero, Maker, SiteFooter } from '@/components/project-sections'

export default function Page() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Maker />
      </main>
      <SiteFooter />
    </div>
  )
}
