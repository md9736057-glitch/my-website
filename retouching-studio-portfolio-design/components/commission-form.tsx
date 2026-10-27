'use client'

import { useActionState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { submitCommission, type CommissionState } from '@/app/actions'

const initialState: CommissionState = { status: 'idle', message: '' }

const selects = [
  {
    name: 'projectType',
    label: 'Project Type',
    options: [
      ['ghost-mannequin', 'Ghost Mannequin'],
      ['editorial', 'Editorial Fashion'],
      ['jewelry', 'Fine Jewelry'],
      ['beauty', 'Commercial Beauty'],
      ['still-life', 'Still Life & Accessories'],
    ],
  },
  {
    name: 'volume',
    label: 'Garment Volume',
    options: [
      ['1-25', '1 – 25 plates'],
      ['26-100', '26 – 100 plates'],
      ['101-500', '101 – 500 plates'],
      ['500+', '500+ plates / season'],
    ],
  },
  {
    name: 'colorSpace',
    label: 'Target Color Space',
    options: [
      ['srgb', 'sRGB — Web & E-commerce'],
      ['adobe-rgb', 'Adobe RGB (1998)'],
      ['prophoto', 'ProPhoto RGB — Archival'],
      ['cmyk', 'CMYK — Print / FOGRA39'],
    ],
  },
  {
    name: 'treatment',
    label: 'Treatment Preference',
    options: [
      ['natural', 'Natural — texture forward'],
      ['refined', 'Refined — editorial polish'],
      ['high-gloss', 'High-Gloss — campaign finish'],
    ],
  },
] as const

const fieldClass =
  'w-full border-0 border-b-[0.5px] border-foreground/30 bg-transparent px-0 py-3.5 font-serif text-xl font-light text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none focus:ring-0'
const labelClass = 'eyebrow text-muted-foreground'

export function CommissionForm() {
  const [state, formAction, pending] = useActionState(submitCommission, initialState)

  if (state.status === 'success') {
    return (
      <div className="flex h-full flex-col justify-center border border-border bg-card p-10" role="status">
        <p className={labelClass}>Brief received · Ref. {state.reference}</p>
        <p className="mt-6 font-serif text-4xl leading-tight">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="grid gap-x-12 gap-y-14 sm:grid-cols-2" noValidate>
<input type="hidden" name="access_key" value="af6d291f-3c8e-4ad6-97f9-2b376a9653d5" />
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className={labelClass}>
          Full Name
        </label>
        <input id="name" name="name" required autoComplete="name" placeholder="Creative director" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className={labelClass}>
          Studio Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="name@maison.com"
          className={fieldClass}
        />
      </div>
      <div className="flex flex-col gap-1 sm:col-span-2">
        <label htmlFor="company" className={labelClass}>
          House / Agency
        </label>
        <input id="company" name="company" autoComplete="organization" placeholder="Optional" className={fieldClass} />
      </div>

      {selects.map((select) => (
        <div key={select.name} className="flex flex-col gap-1">
          <label htmlFor={select.name} className={labelClass}>
            {select.label}
          </label>
          <div className="relative">
            <select id={select.name} name={select.name} required defaultValue="" className={`${fieldClass} appearance-none pr-8`}>
              <option value="" disabled>
                Select
              </option>
              {select.options.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-0 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
          </div>
        </div>
      ))}

      <div className="flex flex-col gap-1 sm:col-span-2">
        <label htmlFor="brief" className={labelClass}>
          Creative Brief
        </label>
        <textarea
          id="brief"
          name="brief"
          rows={4}
          maxLength={4000}
          placeholder="Collection, deadlines, reference imagery, brand color standards…"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p aria-live="polite" className="text-sm text-destructive">
          {state.status === 'error' ? state.message : ''}
        </p>
        <button
          type="submit"
          disabled={pending}
          className="eyebrow group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-9 py-4 text-primary-foreground transition-colors hover:bg-accent disabled:opacity-60"
        >
          {pending ? 'Submitting…' : 'Submit Commission Brief'}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </button>
      </div>
    </form>
  )
}
