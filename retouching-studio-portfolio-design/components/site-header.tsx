'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#overview', label: 'Overview' },
  { href: '#plates', label: 'Plates & Lookbook' },
  { href: '#ethos', label: 'Atelier Ethos' },
  { href: '#commission', label: 'Commission Brief' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b hairline border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:h-24 lg:px-12">
        <a href="#overview" className="flex flex-col leading-none" aria-label="Nabir Islam Rasel Designs — home">
          <span className="font-serif text-xl font-light tracking-tight md:text-[1.6rem]">Nabir Islam Rasel</span>
          <span className="caption mt-1.5 text-muted-foreground">Designs · Atelier</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-11 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="eyebrow text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#commission"
            className="eyebrow rounded-full border hairline border-foreground px-6 py-3 transition-colors hover:bg-foreground hover:text-background"
          >
            Commission Project
          </a>
        </nav>

        <button
          type="button"
          className="flex size-10 items-center justify-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-background px-6 pb-8 pt-4 lg:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href} className="border-b border-border">
                <a href={link.href} onClick={() => setOpen(false)} className="block py-4 font-serif text-2xl">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#commission"
            onClick={() => setOpen(false)}
            className="mt-6 block rounded-full bg-primary px-6 py-4 text-center text-[11px] font-medium uppercase tracking-[0.22em] text-primary-foreground"
          >
            Commission Project
          </a>
        </nav>
      )}
    </header>
  )
}
