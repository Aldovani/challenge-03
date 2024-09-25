import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import ContactBanner from '@/assets/banner-contact-page.png'
import { Banner } from '@/components/ui/banner'
import { ContactForm } from './components/contact-form'

export function ContactPage() {
  return (
    <main className=" w-full   pt-[6.25rem] ">
      <Banner
        page="Contact"
        bannerUrl={ContactBanner}
        className="bg-bottom bg-cover"
      />

      <div className=" grid  lg:mt-20 mt-12 grid-cols-1 lg:gap-y-20 gap-y-12  px-8 lg:grid-cols-2 container mx-auto  pb-16 max-sm:px-6 ">
        <div className="flex flex-col ">
          <header>
            <span className="font-extrabold text-zinc-400 tracking-[3px]">
              contact us
            </span>
            <h1 className="font-medium font-lato italic xl:max-w-[24rem] md:max-w-[23rem]  lg:leading-[4.125rem] md:text-5xl text-4xl lg:text-[4rem] ">
              Get In Touch With Us
            </h1>
            <p className="max-w-[25rem] text-zinc-400 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </header>

          <section className="lg:mt-12 mt-8">
            <h5 className="text-zinc-400 font-semibold">Follow us</h5>
            <ul className="flex gap-4 mt-3 text-zinc-400 ">
              <li className="hover:text-zinc-900">
                <a
                  href="https://facebook.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook />
                </a>
              </li>
              <li className="hover:text-zinc-900">
                <a
                  href="https://linkedin.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin />
                </a>
              </li>
              <li className="hover:text-zinc-900">
                <a
                  href="https://instagram.com.br"
                  target="_parent"
                  rel="noreferrer"
                >
                  <Instagram />
                </a>
              </li>
              <li className="hover:text-zinc-900">
                <a href="https://x.com" target="_blank" rel="noreferrer">
                  <Twitter />
                </a>
              </li>
            </ul>
          </section>

          <section className="flex flex-col lg:mt-20 mt-12 gap-8">
            <div className="flex items-start flex-col gap-2">
              <h5 className="text-base text-zinc-400 font-medium ">Address</h5>
              <p className=" text-zinc-500">
                236 5th SE Avenue, New York <br />
                NY10000, United States
              </p>
            </div>
            <div className="flex items-start flex-col gap-2">
              <h5 className="text-base text-zinc-400 font-medium">Phone</h5>
              <ul className="text-zinc-500">
                <li>Mobile: +(84) 546-6789</li>
                <li>Hotline: +(84) 456-6789</li>
              </ul>
            </div>
            <div className="flex items-start flex-col gap-2">
              <h5 className="text-base text-zinc-400 font-medium">
                Working Time
              </h5>
              <ul className="text-zinc-500">
                <li>Monday-Friday: 9:00 - 22:00</li>
                <li>Saturday-Sunday: 9:00 - 21:00</li>
              </ul>
            </div>
          </section>
        </div>

        <ContactForm />
      </div>
    </main>
  )
}
