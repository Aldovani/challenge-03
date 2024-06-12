import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'w-full bg-primary-500 text-white py-3 rounded-[0.3125rem] hover:bg-opacity-80',
})

type ButtonProps = { children: ReactNode } & ComponentProps<'button'> &
  VariantProps<typeof button>

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button className={button({ className })} {...props}>
      {children}
    </button>
  )
}
