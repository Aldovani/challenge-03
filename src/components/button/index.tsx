import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { Spinner } from '../spinner'

const button = tv({
  base: 'w-full py-3 rounded-[0.3125rem] ',
  variants: {
    variants: {
      outline:
        'border  rounded-2xl hover:bg-primary-500 transition-colors hover:border-primary-500 hover:text-white',
      primary: ' bg-primary-500 text-white  hover:bg-opacity-80',
    },
    isLoading: {
      true: 'text-white gap-2 bg-primary-500 flex items-center justify-center border-primary-500',
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
