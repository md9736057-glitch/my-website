import CommissionForm from './commission-form'

export default function CommissionSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light mb-12">Commission Brief</h2>
        <CommissionForm />
      </div>
    </section>
  )
}