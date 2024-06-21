import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const spinner = tv({
  base: 'block animate-spin  top-0 left-0 w-6 h-6    rounded-full border-4 border-gray-100',
  variants: {
    colors: {
      white: 'border-white',
    },
  },
})

type SpinnerProps = ComponentProps<'div'> & VariantProps<typeof spinner>

export function Spinner({ className, colors }: SpinnerProps) {
  return (
    <div className={className}>
      <span
        data-testid="spinner-test-id"
        className={`${spinner({ colors })} border-primary-500 border-t-transparent`}
      ></span>
      <span className={`${spinner({ colors })}  opacity-50 absolute`}></span>
    </div>
  )
}
