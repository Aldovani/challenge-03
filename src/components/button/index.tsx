import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { Spinner } from '../spinner'

const button = tv({
  base: 'w-full py-3  uppercase font-medium ',
  variants: {
    variants: {
      outline:
        'border border-zinc-200   hover:bg-emerald-700 transition-colors text-zinc-400  hover:border-emerald-700 hover:text-white',
      primary:
        ' bg-emerald-700 text-white  hover:bg-emerald-600 transition-colors',
    },
    isLoading: {
      true: 'text-white gap-2 bg-emerald-700 flex items-center justify-center border-emerald-700',
    },
  },
  defaultVariants: {
    variants: 'primary',
  },
})

type ButtonProps = { children: ReactNode } & ComponentProps<'button'> &
  VariantProps<typeof button>

export function Button({
  className,
  variants,
  children,
  isLoading,
  ...props
}: ButtonProps) {
  return (
    <button className={button({ className, variants, isLoading })} {...props}>
      {!isLoading && children}
      {isLoading && (
        <>
          <Spinner colors="white" /> <span>loading...</span>
        </>
      )}
    </button>
  )
}
