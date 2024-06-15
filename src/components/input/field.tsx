import { ComponentProps, forwardRef, Ref } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const field = tv({
  base: 'w-full border border-gray-200 bg-white py-6 rounded-[0.625rem] placeholder:text-gray-200 px-8 outline-none',
  variants: {
    isError: { true: 'border-action-error' },
  },
  defaultVariants: {
    isError: false,
  },
})

type FieldProps = ComponentProps<'input'> & VariantProps<typeof field>

export const Field = forwardRef(
  (
    { className, isError, ...props }: FieldProps,
    ref: Ref<HTMLInputElement> | null,
  ) => {
    return (
      <input
        ref={ref}
        {...props}
        className={field({ className, isError })}
        {...props}
      />
    )
  },
)

Field.displayName = 'Field'
