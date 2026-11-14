import { TIKTOK_URL } from '@/lib/project'

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-serif text-xl font-semibold tracking-tight">
          Trendyfits<span className="text-primary">.</span>
        </a>
        <nav aria-label="Main">
          <ul className="flex items-center gap-6 text-sm">
            <li className="hidden sm:block">
              <a href="#about" className="text-muted-foreground hover:text-foreground">
                About
              </a>
            </li>
            <li className="hidden sm:block">
              <a href="#maker" className="text-muted-foreground hover:text-foreground">
                Maker
              </a>
            </li>
            <li>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground hover:bg-primary/90"
              >
                TikTok
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
