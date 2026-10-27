import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

const stats = [
  { value: '16-Bit', label: 'Native pipeline' },
  { value: 'ΔE < 1.5', label: 'Color tolerance' },
  { value: '100%', label: 'Non-destructive' },
]

export function Hero() {
  return (
    <section id="overview" className="scroll-mt-20 border-b hairline border-border">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:py-28 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-36">
        <div className="flex flex-col justify-between lg:col-span-7">
          <div>
            <p className="eyebrow flex items-center gap-5 text-muted-foreground">
              <span className="h-[0.5px] w-12 bg-foreground/50" aria-hidden="true" />
              B2B Retouching Atelier · Est. Archive MMXVI
            </p>
            <h1 className="mt-14 text-6xl leading-[0.92] text-balance sm:text-7xl lg:text-[7rem]">
              Refining Images.
              <br />
              <em className="italic text-accent">Defining Vision.</em>
            </h1>
            <p className="mt-12 max-w-lg text-base font-light leading-[1.8] text-muted-foreground md:text-[17px]">
              A private post-production atelier for fashion houses, e-commerce studios and creative agencies. We
              specialise in high-end apparel retouching, precise color grading calibrated to your brand masters, and
              skin texture preservation that keeps every portrait unmistakably human.
            </p>
          </div>

          <div className="mt-16 flex flex-col gap-14">
            <a
              href="#plates"
              className="eyebrow group inline-flex w-fit items-center gap-4 border-b hairline border-foreground pb-2.5"
            >
              Explore the Portfolio
              <ArrowDown className="size-3.5 stroke-[1.25] transition-transform group-hover:translate-y-1" aria-hidden="true" />
            </a>

            <dl className="grid grid-cols-3 border-t hairline border-foreground/25 pt-7">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l hairline border-foreground/20 pl-5 first:border-l-0 first:pl-0">
                  <dt className="caption text-muted-foreground">{stat.label}</dt>
                  <dd className="mt-3 font-serif text-2xl font-light md:text-[2rem]">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <figure className="lg:col-span-5">
          <div className="relative aspect-[2/3] overflow-hidden bg-muted">
            <Image
              src="/images/hero-model.jpg"
              alt="Full-length portrait of a model in a white sleeveless V-neck top and wide-leg taupe pleated trousers"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="caption mt-5 flex items-center justify-between border-t hairline border-foreground/25 pt-3 text-muted-foreground">
            <span>Frontispiece — Plate No. 0</span>
            <span>Adobe RGB · 16-Bit TIFF</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
