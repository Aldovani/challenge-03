import Room1 from '@/assets/room-1.png'
import Room2 from '@/assets/room-2.png'
import Room3 from '@/assets/room-3.png'
import Room4 from '@/assets/room-4.png'

export function Rooms() {
  return (
    <section>
      <header className="mx-auto container flex flex-col md:flex-row px-8 xl:px-0 sm:gap-0 gap-6 justify-between md:items-center mt-20">
        <div>
          <span className="text-zinc-400 md:text-base text-sm">Rooms</span>
          <h2 className="font-medium lg:text-3.5xl text-2xl text-zinc-900">
            Browse The Range
          </h2>
          <p className="text-zinc-500 lg:text-xl max-lg:max-w-64 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <p className="lg:max-w-[33.125rem] max-w-[22.5rem] text-zinc-400 lg:text-base md:text-sm text-xs">
          Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
      </header>
      <div className="mt-16 grid justify-center  lg:grid-cols-[repeat(4,400px)] grid-cols-4 sm:gap-8 gap-2  overflow-hidden">
        <img
          src={Room1}
          alt="room 1"
          className="object-cover sm:h-auto h-[200px]"
        />
        <img
          src={Room2}
          alt="room 2"
          className=" object-cover sm:h-auto h-[200px]"
        />
        <img
          src={Room3}
          alt="room 3"
          className=" object-cover sm:h-auto h-[200px]"
        />
        <img
          src={Room4}
          alt="room 4"
          className="object-cover sm:h-auto h-[200px]"
        />
      </div>
    </section>
  )
}
