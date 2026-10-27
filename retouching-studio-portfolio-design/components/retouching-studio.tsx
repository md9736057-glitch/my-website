'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const stages = [
  {
    id: 'raw',
    label: 'Raw Capture',
    src: '/images/shirt-raw.jpg',
    filter: 'none',
    note: 'Straight from camera: grey sweep, mannequin visible, loose collar and placket.',
  },
  {
    id: 'calibrated',
    label: 'Calibrated',
    src: '/images/shirt-raw.jpg',
    filter: 'brightness(1.08) contrast(1.04) saturate(1.05)',
    note: 'Neutralised against ColorChecker target. White point locked.',
  },
  {
    id: 'final',
    label: 'Final Master',
    src: '/images/shirt-final.jpg',
    filter: 'none',
    note: 'Ghost mannequin, pure white ground, print and collar reshaped to spec.',
  },
] as const

type StageId = (typeof stages)[number]['id']

export function RetouchingStudio() {
  const [position, setPosition] = useState(50)
  const [baseStage, setBaseStage] = useState<StageId>('raw')
  const base = stages.find((s) => s.id === baseStage) ?? stages[0]

  return (
    <section aria-label="Interactive retouching studio" className="border-b hairline border-border bg-card">
      <div className="section-y mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          index="02"
          eyebrow="Interactive Retouching Studio"
          title="From Raw to Final Master"
          description="Drag the divider to compare a capture against its delivered master. Every adjustment is reversible and documented in the layer stack."
        />

        <div className="mt-24 grid gap-16 md:mt-32 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-9">
            <div className="relative mx-auto aspect-[4/5] max-w-2xl select-none overflow-hidden bg-muted">
              <Image
                src={stages[2].src}
                alt="Final retouched ghost-mannequin image of a white shirt with a pale blue floral print on pure white"
                fill
                sizes="(min-width: 1024px) 672px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
                <Image
                  src={base.src}
                  alt="Raw capture of the same floral shirt on a white mannequin against a grey studio backdrop"
                  fill
                  sizes="(min-width: 1024px) 672px, 100vw"
                  className="object-cover"
                  style={{ filter: base.filter }}
                />
              </div>

              <div
                className="pointer-events-none absolute inset-y-0 w-px bg-background"
                style={{ left: `${position}%` }}
                aria-hidden="true"
              >
                <div className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-background bg-foreground/70 text-[10px] tracking-widest text-background backdrop-blur">
                  {'‹ ›'}
                </div>
              </div>

              <span className="caption absolute left-5 top-5 bg-background/90 px-3 py-1.5">
                {base.label}
              </span>
              <span className="caption absolute right-5 top-5 bg-foreground px-3 py-1.5 text-background">
                Final Master
              </span>

              <label htmlFor="compare-range" className="sr-only">
                Comparison divider position
              </label>
              <input
                id="compare-range"
                type="range"
                min={0}
                max={100}
                value={position}
                onChange={(e) => setPosition(Number(e.target.value))}
                className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
              />
            </div>
            <p className="caption mx-auto mt-5 max-w-2xl border-t hairline border-foreground/25 pt-3 text-muted-foreground">
              Study No. VII — Floral Jersey Shirt · SS27-52637 · Ghost Mannequin · Capture One → Photoshop
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:col-span-3">
            <p className="eyebrow text-muted-foreground">Compare stage</p>
            <div role="radiogroup" aria-label="Comparison base stage" className="flex flex-col">
              {stages
                .filter((s) => s.id !== 'final')
                .map((stage, i) => (
                  <button
                    key={stage.id}
                    type="button"
                    role="radio"
                    aria-checked={baseStage === stage.id}
                    onClick={() => setBaseStage(stage.id)}
                    className={cn(
                      'border-t hairline border-foreground/20 py-7 text-left transition-colors last:border-b',
                      baseStage === stage.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-serif text-sm italic">0{i + 1}</span>
                      <span className="font-serif text-[1.65rem] font-light">{stage.label}</span>
                    </span>
                    <span className="mt-3 block text-sm font-light leading-[1.7]">{stage.note}</span>
                  </button>
                ))}
            </div>
            <div className="mt-auto border hairline border-foreground/25 p-6">
              <p className="caption text-muted-foreground">Delivered</p>
              <p className="mt-3 font-serif text-xl font-light italic leading-snug">{stages[2].note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
