import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'
import { tv, VariantProps } from 'tailwind-variants'

const link = tv({
  base: ' flex   justify-center   py-3 px-20 font-semibold',
  variants: {
    variants: {
      filled: 'bg-primary-500 text-white',
      outline:
        ' border border-primary-500 text-primary-500  transition-colors hover:text-white hover:bg-primary-500',
    },
  },
  defaultVariants: {
    variants: 'filled',
  },
})

type LinkProps = RouterLinkProps & VariantProps<typeof link>

export function Link({ className, children, variants, ...props }: LinkProps) {
  return (
    <RouterLink {...props} className={link({ className, variants })}>
      {children}
    </RouterLink>
  )
}
