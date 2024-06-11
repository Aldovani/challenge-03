type BannerProps = {
  page: string
}

export function Banner({ page }: BannerProps) {
  return (
    <div className="bg-[url(/banner.png)] h-[19.75rem]  flex flex-col items-center justify-center">
      <h2 className="text-5xl font-medium">{page}</h2>
      <div className="flex items-center gap-2 mt-1">
        <span>Home</span>
        <img src="/arrow-down.svg" alt="" />
        <span>{page}</span>
      </div>
    </div>
  )
}
