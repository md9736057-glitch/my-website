import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

type Plate = {
  numeral: string
  title: string
  category: string
  src: string
  alt: string
  specs: string[]
  fit?: 'cover' | 'contain'
  offset?: boolean
}

const plates: Plate[] = [
  {
    numeral: 'I',
    title: 'Chocolate Pinstripe Blazer',
    category: 'Ghost Mannequin',
    src: '/images/work-blazer.jpg',
    alt: 'Ghost mannequin composite of a brown pinstripe double-breasted blazer with peak lapels and interior label visible',
    specs: ['XVI Layers', 'Stripe Alignment', 'Symmetry Lock'],
  },
  {
    numeral: 'II',
    title: 'Constellation, Diptych',
    category: 'Editorial Jewelry',
    src: '/images/work-constellation.jpg',
    alt: 'Editorial diptych of gold diamond constellation necklace and stacked rings worn against black pinstripe, with white hydrangeas',
    specs: ['16-Bit', 'Skin & Metal', 'Dodge & Burn'],
    fit: 'contain',
    offset: true,
  },
  {
    numeral: 'III',
    title: 'Heart Pendant & Trinity Band',
    category: 'Fine Jewelry',
    src: '/images/work-pendant-ring.jpg',
    alt: 'Silver heart pendant with blue topaz stone beside a tri-colour gold pavé ring on white',
    specs: ['Sub-Pixel', 'Reflection Control', 'Pure White'],
    fit: 'contain',
  },
  {
    numeral: 'IV',
    title: 'Crushed Velvet Corset',
    category: 'Ghost Mannequin',
    src: '/images/work-velvet-corset.jpg',
    alt: 'Ghost mannequin composite of a burgundy crushed velvet corset with sweetheart cups, boning seams and pink ribbon ties',
    specs: ['Pile Texture', 'Colour Fidelity', 'Seam Cleanup'],
    fit: 'contain',
  },
  {
    numeral: 'V',
    title: 'Paisley Silk Shirt',
    category: 'Ghost Mannequin',
    src: '/images/work-paisley-shirt.jpg',
    alt: 'Ghost mannequin composite of a violet and teal paisley print button-up shirt',
    specs: ['XII Layers', 'Print Matching', 'Sub-Pixel Mask'],
    offset: true,
  },
  {
    numeral: 'VI',
    title: 'Raffia & Leather Crossbody',
    category: 'Still Life',
    src: '/images/work-raffia-bag.jpg',
    alt: 'Woven raffia crossbody bag with tan leather trim, tab closure and gold chain strap on white',
    specs: ['Weave Detail', 'Hardware Polish', 'Pure White'],
    fit: 'contain',
  },
]

export function PlatesGallery() {
  return (
    <section id="plates" className="scroll-mt-20 border-b hairline border-border">
      <div className="section-y mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          index="01"
          eyebrow="Plates & Lookbook"
          title="Selected Retouching Studies"
          description="An archival selection of commissioned plates. Each study is delivered as a layered master with full technical provenance."
        />

        <ol className="mt-24 grid gap-x-10 gap-y-24 sm:grid-cols-2 md:mt-32 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-32">
          {plates.map((plate) => (
            <li key={plate.numeral} className={plate.offset ? 'lg:mt-32' : undefined}>
              <article className="group">
                <div className="mb-5 flex items-baseline justify-between border-b hairline border-foreground/30 pb-3">
                  <p className="font-serif text-[17px] italic">Plate No. {plate.numeral}</p>
                  <p className="caption text-muted-foreground">{plate.category}</p>
                </div>
                <div
                  className={`relative aspect-[4/5] overflow-hidden ${plate.fit === 'contain' ? 'bg-white' : 'bg-muted'}`}
                >
                  <Image
                    src={plate.src}
                    alt={plate.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                    className={`${plate.fit === 'contain' ? 'object-contain' : 'object-cover'} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
                  />
                </div>
                <h3 className="mt-7 text-[1.75rem] leading-[1.1] text-balance">{plate.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technical specifications">
                  {plate.specs.map((spec) => (
                    <li
                      key={spec}
                      className="caption border hairline border-foreground/25 px-2.5 py-1 text-muted-foreground"
                    >
                      {spec}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
