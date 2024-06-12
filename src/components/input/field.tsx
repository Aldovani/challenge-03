import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const field = tv({
  base: 'w-full border border-gray-200 bg-white py-6 rounded-[0.625rem] placeholder:text-gray-200 px-8 outline-none',
})

type FieldProps = ComponentProps<'input'> & VariantProps<typeof field>

export function Field({ className, ...props }: FieldProps) {
  return <input className={field({ className })} {...props} />
}
