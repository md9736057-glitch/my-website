const columns = [
  {
    title: 'Atelier',
    items: [
      ['Overview', '#overview'],
      ['Plates & Lookbook', '#plates'],
      ['Atelier Ethos', '#ethos'],
      ['Commission Brief', '#commission'],
    ],
  },
  {
    title: 'Client Inquiries',
    items: [
      ['studio@nabirislamrasel.com', 'mailto:studio@nabirislamrasel.com'],
      ['Request a test plate', '#commission'],
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-28 md:pt-36 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="font-serif text-5xl font-light leading-[0.95] tracking-tight md:text-7xl">
              Nabir Islam Rasel
              <br />
              <em className="italic text-accent">Designs</em>
            </p>
            <p className="mt-8 max-w-sm text-[15px] font-light leading-[1.75] text-muted-foreground">
              Luxury apparel and fashion retouching for houses, studios and agencies worldwide.
            </p>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title} className="lg:col-span-3">
              <p className="eyebrow border-b hairline border-foreground/25 pb-3 text-muted-foreground">{col.title}</p>
              <ul className="mt-6 flex flex-col gap-3.5">
                {col.items.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="font-serif text-lg font-light transition-colors hover:text-accent">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="caption mt-28 flex flex-col gap-3 border-t hairline border-foreground/25 pt-6 text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Nabir Islam Rasel Designs. All rights reserved.</p>
          <p>Retouching Atelier · Dhaka — Worldwide</p>
        </div>
      </div>
    </footer>
  )
}
