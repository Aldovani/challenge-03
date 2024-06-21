import { ICONS } from '../../assets/icons.js'
import { Banner } from '../../components/banner/index.js'
import { Benefits } from '../../components/benefits/index.js'
import { Button } from '../../components/button/index.js'
import { Input } from '../../components/input/index.js'
import { useContact } from './useContact.js'

export function ContactPage() {
  const {
    errors,
    register,
    handleSubmit,
    handleSaveContact,
    isSaveContactIsLoading,
  } = useContact()
  return (
    <main className=" w-full   pt-[6.25rem] ">
      <Banner page="Contact" />
      <div className="mt-16 container mx-auto pt-24 pb-16 max-sm:px-6 ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-semibold text-4xl text-center">
            Get In Touch With Us
          </h1>
          <p className="max-w-[644px] text-gray-200 text-center mt-2">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        <div className="max-w-[953px] mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 mt-28">
          <div className="flex flex-col gap-11">
            <div className="flex items-start gap-8">
              <img src={ICONS.location} alt="location icon" />
              <div>
                <h5 className="text-2xl font-medium ">Address</h5>
                <p className="max-w-[13.25rem]">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex items-start gap-8">
              <img src={ICONS.phone} alt="phone icon" />

              <div>
                <h5 className="text-2xl font-medium">Phone</h5>
                <ul>
                  <li>Mobile: +(84) 546-6789</li>
                  <li>Hotline: +(84) 456-6789</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-8">
              <img src={ICONS['clock-fill']} alt=" clock icon" />

              <div>
                <h5 className="text-2xl font-medium">Working Time</h5>
                <ul>
                  <li>Monday-Friday: 9:00 - 22:00</li>
                  <li>Saturday-Sunday: 9:00 - 21:00</li>
                </ul>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(handleSaveContact)}
            className="flex flex-col gap-9"
          >
            <Input.Label htmlFor="name" name="Your name">
              <Input.Field
                className="mt-5"
                id="name"
                placeholder="Abc"
                {...register('name')}
              />
              <Input.MessageError error={errors.name?.message} />
            </Input.Label>
            <Input.Label htmlFor="email" name="Email address">
              <Input.Field
                id="email"
                className="mt-5"
                placeholder="Abc@def.com"
                {...register('email')}
              />
              <Input.MessageError error={errors.email?.message} />
            </Input.Label>
            <Input.Label htmlFor="subject" name="Subject">
              <Input.Field
                id="subject"
                className="mt-5"
                placeholder="This is an optional"
                {...register('subject')}
              />
              <Input.MessageError error={errors.subject?.message} />
            </Input.Label>
            <Input.Label htmlFor="Message" name="Message">
              <Input.Textarea
                id="Message"
                className="mt-5"
                placeholder="Hi! i’d like to ask about"
                {...register('message')}
              />
              <Input.MessageError error={errors.message?.message} />
            </Input.Label>
            <Button
              type="submit"
              className="max-w-[14.8125rem]"
              isLoading={isSaveContactIsLoading}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
      <Benefits />
    </main>
  )
}
