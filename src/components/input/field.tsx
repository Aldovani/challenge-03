import { ComponentProps, forwardRef, Ref } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { Spinner } from '../spinner'

const field = tv({
  base: 'w-full border border-gray-200 bg-white py-6 rounded-[0.625rem] placeholder:text-gray-200 px-8 outline-none disabled:opacity-50',
  variants: {
    isError: { true: 'border-action-error' },
  },
  defaultVariants: {
    isError: false,
    isLoading: false,
  },
})

type FieldProps = ComponentProps<'input'> &
  VariantProps<typeof field> & {
    isLoading?: boolean
  }

export const Field = forwardRef(
  (
    { className, isLoading = false, isError, ...props }: FieldProps,
    ref: Ref<HTMLInputElement> | null,
  ) => {
    return (
      <div className="relative">
        <input
          ref={ref}
          {...props}
          className={field({ className, isError })}
          {...props}
        />
        {isLoading && <Spinner className="absolute right-4 top-1/2" />}
      </div>
    )
  },
)

Field.displayName = 'Field'
