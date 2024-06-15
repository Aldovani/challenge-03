import { ComponentProps, forwardRef, Ref } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const field = tv({
  base: 'w-full border border-gray-200 bg-white py-6 rounded-[0.625rem] placeholder:text-gray-200 px-8 outline-none',
})

type FieldProps = ComponentProps<'input'> & VariantProps<typeof field> 

export const Field= forwardRef(({ className,...props }: FieldProps,ref:Ref<HTMLInputElement> | null) =>{
  return <input ref={ref} {...props} className={field({ className })} {...props} />
}
)

Field.displayName="Field"