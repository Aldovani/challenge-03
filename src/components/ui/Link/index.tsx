import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'
import { tv, VariantProps } from 'tailwind-variants'

const link = tv({
  base: ' flex whitespace-nowrap  justify-center   py-3 px-20 font-semibold',
  variants: {
    variants: {
      primary: 'bg-black text-white hover:bg-opacity-80',
      secondary: 'bg-white text-black   transition-colors hover:bg-gray-100 ',
      outline:
        'border border-zinc-200   hover:bg-zinc-900 transition-colors text-zinc-400  hover:border-zinc-900 hover:text-white',
    },
  },
  defaultVariants: {
    variants: 'primary',
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
