import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { Spinner } from '../spinner'

const button = tv({
  base: 'w-full py-3  uppercase font-medium transition-colors ',
  variants: {
    variants: {
      primary: ' bg-zinc-950 text-white hover:bg-zinc-800',
      secondary: ' bg-white text-black hover:bg-zinc-100 ',
      outline:
        'border border-zinc-200   hover:bg-zinc-900 text-zinc-400  hover:border-zinc-900 hover:text-white',
    },
    isLoading: {
      true: ' gap-2  flex items-center justify-center ',
    },
  },
  defaultVariants: {
    variants: 'primary',
    isLoading: false,
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
          <Spinner /> <span>loading...</span>
        </>
      )}
    </button>
  )
}
