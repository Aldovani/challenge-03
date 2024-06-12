import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const textarea = tv({
  base: 'w-full border border-gray-200 bg-white py-6 rounded-[0.625rem] placeholder:text-gray-200 px-8 outline-none',
})

type TextareaProps = ComponentProps<'textarea'> & VariantProps<typeof textarea>

export function Textarea({ className, ...props }: TextareaProps) {
  return <textarea className={textarea({ className })} {...props}></textarea>
}
