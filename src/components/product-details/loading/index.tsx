export function ProductLoading() {
  return (
    <div className="w-full   pt-[6.25rem] ">
      <div className="w-full h-24 bg-zinc-100 animate-pulse"></div>

      <div className="container mx-auto flex gap-20 mt-8 pb-16">
        <div className="grid grid-cols-[80px_480px] gap-10 ">
          <div className="flex flex-col gap-3 ">
            <span className="size-20 block bg-zinc-100 animate-pulse"></span>
            <span className="size-20 block  bg-zinc-100 animate-pulse"></span>
            <span className="size-20 block bg-zinc-100 animate-pulse"></span>
            <span className="size-20 block bg-zinc-100 animate-pulse"></span>
            <span className="size-20 block bg-zinc-100 animate-pulse"></span>
          </div>
          <div className="w-full h-[423px] bg-zinc-100 animate-pulse"></div>
        </div>
        <div className="w-full">
          <span className="block w-full max-w-96 h-20 bg-zinc-100 animate-pulse"></span>
          <span className="block w-full max-w-56 h-12 mt-4 bg-zinc-100 animate-pulse"></span>
          <span className="block w-full max-w-[400px] h-8 mt-4 bg-zinc-100 animate-pulse"></span>

          <div className="flex flex-col gap-1 mt-4">
            <span className="block w-full max-w-[400px] h-4 mt-2 bg-zinc-100 animate-pulse"></span>
            <span className="block w-full max-w-[400px] h-4 mt-2 bg-zinc-100 animate-pulse"></span>
            <span className="block w-full max-w-[400px] h-4 mt-2 bg-zinc-100 animate-pulse"></span>
          </div>
          <div className="flex  gap-2 mt-2">
            <span className="block size-8 rounded-lg mt-2 bg-zinc-100 animate-pulse"></span>
            <span className="block size-8 rounded-lg mt-2 bg-zinc-100 animate-pulse"></span>
            <span className="block size-8 rounded-lg mt-2 bg-zinc-100 animate-pulse"></span>
          </div>
          <div className="flex  gap-2 mt-2">
            <span className="block size-8 rounded-full mt-2 bg-zinc-100 animate-pulse"></span>
            <span className="block size-8 rounded-full mt-2 bg-zinc-100 animate-pulse"></span>
            <span className="block size-8 rounded-full mt-2 bg-zinc-100 animate-pulse"></span>
          </div>

          <div className="flex justify-center gap-4 max-w-[400px] mt-4">
            <div className="w-36 bg-zinc-100 animate-pulse h-16 rounded-xl"></div>
            <div className="w-full bg-zinc-100 animate-pulse h-16 rounded-xl"></div>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <div className="flex gap-3">
              <span className="block w-28 bg-zinc-100 animate-pulse h-4"></span>
              <span className="block w-40 bg-zinc-100 animate-pulse h-4"></span>
            </div>
            <div className="flex gap-3">
              <span className="block w-28 bg-zinc-100 animate-pulse h-4"></span>
              <span className="block w-40 bg-zinc-100 animate-pulse h-4"></span>
            </div>
            <div className="flex gap-3">
              <span className="block w-28 bg-zinc-100 animate-pulse h-4"></span>
              <span className="block w-40 bg-zinc-100 animate-pulse h-4"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-200  mt-8 py-16">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-10">
            <span className="h-10 w-32 block animate-pulse bg-zinc-100"></span>
            <span className="h-10 w-60 block animate-pulse bg-zinc-100"></span>
          </div>
          <div>
            <div className="flex flex-col gap-1 mt-10 max-h-[1026px] px-20">
              <span className="block w-full  h-4 mt-2 bg-zinc-100 animate-pulse"></span>
              <span className="block w-full  h-4 mt-2 bg-zinc-100 animate-pulse"></span>
              <span className="block w-full  h-4 mt-2 bg-zinc-100 animate-pulse"></span>
            </div>
            <div className="flex flex-col gap-1 mt-5 max-h-[1026px] px-20">
              <span className="block w-full  h-4 mt-2 bg-zinc-100 animate-pulse"></span>
              <span className="block w-full  h-4 mt-2 bg-zinc-100 animate-pulse"></span>
              <span className="block w-full  h-4 mt-2 bg-zinc-100 animate-pulse"></span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 mt-10">
            <div className="bg-zinc-100 w-full h-[380px]"></div>
            <div className="bg-zinc-100 w-full h-[380px]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
