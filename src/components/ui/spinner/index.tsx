import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const spinner = tv({
  base: 'relative ',
})
const spinnerItem = tv({
  base: 'block animate-spin   top-0 left-0 w-6 h-6    rounded-full border-4 border-gray-400',
})

type SpinnerProps = ComponentProps<'div'> & VariantProps<typeof spinnerItem>

export function Spinner({ className }: SpinnerProps) {
  return (
    <div className={spinner({ className })}>
      <span
        data-testid="spinner-test-id"
        className={`border-t-transparent  invert  ${spinnerItem({})}`}
      ></span>
      <span
        className={`opacity-50 absolute invert   ${spinnerItem({})}`}
      ></span>
    </div>
  )
}
