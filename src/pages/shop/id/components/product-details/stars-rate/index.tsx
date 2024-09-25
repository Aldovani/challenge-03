import { Star, StarHalf } from 'lucide-react'
type StarsRateProps = {
  rate: number
}

export function StarsRate({ rate }: StarsRateProps) {
  const numberOfStarFilled = Number(rate.toFixed(0))
  const isStarHalf = rate - 5 >= 0.5

  const arrayOfStars = new Array(numberOfStarFilled).fill(() =>
    Math.random().toString(),
  )

  return (
    <>
      <div className="flex gap-1.5">
        {arrayOfStars.map((_, index) => (
          <Star key={index} className="fill-amber-300 stroke-amber-300" />
        ))}
        {isStarHalf && <StarHalf className="fill-amber-300 stroke-amber-300" />}
      </div>
      <span className="h-[37px] w-[1px] bg-gray-200"></span>
      <span className="text-[0.8125rem]  text-gray-200">5 Customer Review</span>
    </>
  )
}
