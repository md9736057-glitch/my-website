import { SectionHeading } from '@/components/section-heading'

const disciplines = [
  {
    numeral: 'I',
    title: 'Raw Sensor Calibration',
    body: 'Every capture is profiled against an X-Rite ColorChecker target before a single pixel is touched. Lens cast, vignetting and chromatic aberration are corrected at the raw level.',
    specs: [
      ['Input', 'IIQ · CR3 · NEF · ARW'],
      ['Profile', 'Custom ICC per session'],
      ['Bit depth', '16-Bit linear'],
    ],
  },
  {
    numeral: 'II',
    title: 'Structural Symmetry',
    body: 'Ghost mannequin composites are rebuilt on a measured centre axis. Collars, plackets, hems and sleeves are aligned to sub-pixel tolerance while preserving the natural drape of cloth.',
    specs: [
      ['Axis', 'Sub-pixel centre lock'],
      ['Composite', 'Front, neck & inner joint'],
      ['Masking', 'Hand-drawn pen paths'],
    ],
  },
  {
    numeral: 'III',
    title: 'Colorimetry Master Standards',
    body: 'Garment colour is matched to physical swatches and Pantone references under D50 viewing conditions, then delivered with soft-proofs for every target output.',
    specs: [
      ['Tolerance', 'ΔE 2000 < 1.5'],
      ['Spaces', 'ProPhoto · Adobe RGB · sRGB'],
      ['Display', 'Eizo CG, calibrated weekly'],
    ],
  },
]

const ethos = [
  ['100%', 'Non-destructive', 'Smart objects, adjustment layers and named groups. Nothing is flattened until you approve.'],
  ['0', 'Plastic skin', 'Frequency separation and dodge & burn only. Pores, freckles and fine lines stay.'],
  ['48h', 'Standard turnaround', 'Volume programmes scheduled with dedicated retouchers per brand.'],
  ['NDA', 'Confidential by default', 'Encrypted transfer, embargo-safe handling and private review galleries.'],
]

export function Workflow() {
  return (
    <section id="ethos" className="scroll-mt-20 bg-ink text-ink-foreground">
      <div className="section-y mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          inverted
          index="03"
          eyebrow="Post-Production & Atelier Ethos"
          title="A Discipline of Invisible Precision"
          description="The finest retouching is never seen. Our workflow is engineered to make every intervention measurable, reversible and faithful to the garment."
        />

        <div className="mt-24 grid border-t hairline border-ink-foreground/20 md:mt-32 md:grid-cols-3">
          {disciplines.map((item) => (
            <article
              key={item.numeral}
              className="flex flex-col border-b hairline border-ink-foreground/20 py-14 md:border-b-0 md:border-l md:px-10 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
            >
              <p className="font-serif text-[17px] italic text-ink-foreground/55">No. {item.numeral}</p>
              <h3 className="mt-8 text-[2.1rem] leading-[1.08] text-balance">{item.title}</h3>
              <p className="mt-6 text-[15px] font-light leading-[1.75] text-ink-foreground/65">{item.body}</p>
              <dl className="mt-10 space-y-4 border-t hairline border-ink-foreground/20 pt-7">
                {item.specs.map(([term, value]) => (
                  <div key={term} className="flex items-baseline justify-between gap-4">
                    <dt className="caption text-ink-foreground/45">{term}</dt>
                    <dd className="text-right text-[12px] font-light tracking-wide">{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <ul className="mt-28 grid border-t hairline border-ink-foreground/20 sm:grid-cols-2 lg:grid-cols-4">
          {ethos.map(([value, label, body]) => (
            <li
              key={label}
              className="border-b hairline border-ink-foreground/20 py-12 sm:px-8 sm:odd:pl-0 lg:border-b-0 lg:border-l lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
            >
              <p className="font-serif text-6xl font-light">{value}</p>
              <p className="eyebrow mt-6">{label}</p>
              <p className="mt-4 text-sm font-light leading-[1.75] text-ink-foreground/60">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
