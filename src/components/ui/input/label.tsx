import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const label = tv({
  base: 'w-full ',
})

type LabelProps = {
  children: ReactNode
  name?: string
} & ComponentProps<'label'> &
  VariantProps<typeof label>

export function Label({ children, className, name, ...props }: LabelProps) {
  return (
    <div className={label({ className })}>
      <label className="font-medium text-zinc-600" {...props}>
        {name}
      </label>
      {children}
    </div>
  )
}
