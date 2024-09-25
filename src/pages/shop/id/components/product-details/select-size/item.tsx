import { ComponentProps } from 'react'

type SelectItemProps = ComponentProps<'input'> & {
  sizes: string
}

export function SelectItem({ sizes, ...props }: SelectItemProps) {
  return (
    <div className="relative ">
      <input
        id={sizes}
        type="radio"
        name="size"
        className="peer absolute invisible opacity-0 "
        {...props}
      />
      <label
        htmlFor={sizes}
        className="peer-checked:bg-zinc-900 peer-checked:text-white cursor-pointer text-base border border-zinc-200  size-10 py-3 flex items-center justify-center"
      >
        {sizes.toLocaleUpperCase()}
      </label>
    </div>
  )
}
