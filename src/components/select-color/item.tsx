import { ComponentProps } from 'react'

type SelectItemProps = ComponentProps<'input'> & {
  color: string
  colorName: string
}

export function SelectItem({ color, colorName, ...props }: SelectItemProps) {
  return (
    <div className="relative ">
      <input
        id={colorName}
        type="radio"
        name="color"
        className="peer absolute invisible opacity-0 "
        {...props}
      />
      <label
        htmlFor={colorName}
        style={{ background: color }}
        className={`  rounded-full cursor-pointer text-[0.8125rem]  size-[1.875rem] flex items-center justify-center `}
      ></label>
    </div>
  )
}
