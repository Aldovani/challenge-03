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
        className="peer-checked:bg-primary-500 peer-checked:text-white  rounded-[0.3125rem] cursor-pointer text-[0.8125rem] bg-primary-200 size-[1.875rem] flex items-center justify-center"
      >
        {sizes.toLocaleUpperCase()}
      </label>
    </div>
  )
}
