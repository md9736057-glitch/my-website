import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: string
  description?: string
  inverted?: boolean
}

export function SectionHeading({ index, eyebrow, title, description, inverted }: SectionHeadingProps) {
  return (
    <header>
      <div
        className={cn(
          'flex items-baseline justify-between border-t hairline pt-5',
          inverted ? 'border-ink-foreground/25 text-ink-foreground/55' : 'border-foreground/25 text-muted-foreground',
        )}
      >
        <p className="eyebrow">{eyebrow}</p>
        <p className="font-serif text-base italic">{`§ ${index}`}</p>
      </div>

      <div className="mt-14 flex flex-col gap-10 md:mt-20 lg:flex-row lg:items-end lg:justify-between lg:gap-20">
        <h2 className="max-w-3xl text-5xl leading-[0.98] text-balance md:text-7xl xl:text-[5.75rem]">{title}</h2>
        {description && (
          <p
            className={cn(
              'max-w-sm text-[15px] font-light leading-[1.75] text-pretty lg:pb-3',
              inverted ? 'text-ink-foreground/65' : 'text-muted-foreground',
            )}
          >
            {description}
          </p>
        )}
      </div>
    </header>
  )
}
