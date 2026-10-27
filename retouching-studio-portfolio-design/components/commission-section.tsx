import { SectionHeading } from '@/components/section-heading'
import { CommissionForm } from '@/components/commission-form'

const protocols = [
  ['01', 'Test Plate', 'Every new house receives a complimentary test plate before any volume commitment.'],
  ['02', 'Layered Delivery', 'Masters returned as layered PSB/TIFF with named groups, plus flattened outputs.'],
  ['03', 'Two Revision Rounds', 'Included on every plate. Revision notes are tracked against each layer.'],
  ['04', 'Secure Transfer', 'Encrypted upload, NDA on request, and files purged 90 days after delivery.'],
]

export function CommissionSection() {
  return (
    <section id="commission" className="scroll-mt-20 border-b hairline border-border">
      <div className="section-y mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          index="04"
          eyebrow="Commission Brief"
          title="Initiate an Atelier Commission"
          description="Share the essentials of your production. A senior retoucher reviews every brief personally and replies with a tailored proposal."
        />

        <div className="mt-24 grid gap-20 md:mt-32 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <CommissionForm />
          </div>

          <aside className="lg:col-span-5" aria-labelledby="protocols-heading">
            <div className="border hairline border-foreground/25 bg-card p-10 lg:sticky lg:top-32">
              <h3 id="protocols-heading" className="text-[2.1rem] leading-tight">
                Studio Service Protocols
              </h3>
              <ol className="mt-10 flex flex-col">
                {protocols.map(([n, title, body]) => (
                  <li key={n} className="grid grid-cols-[2.75rem_1fr] gap-2 border-t hairline border-foreground/20 py-6">
                    <span className="font-serif text-base italic text-muted-foreground">{n}</span>
                    <div>
                      <p className="eyebrow">{title}</p>
                      <p className="mt-3 text-sm font-light leading-[1.75] text-muted-foreground">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="caption border-t hairline border-foreground/20 pt-6 text-muted-foreground">
                Reply within one business day · GMT+6
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
