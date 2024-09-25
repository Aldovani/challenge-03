import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useContact } from './useContact'

export function ContactForm() {
  const {
    errors,
    register,
    handleSubmit,
    handleSaveContact,
    isSaveContactIsLoading,
  } = useContact()
  return (
    <form
      onSubmit={handleSubmit(handleSaveContact)}
      className="flex flex-col gap-9"
    >
      <Input.Label htmlFor="name" name="Your name">
        <Input.Field
          className="mt-2"
          id="name"
          placeholder="Abc"
          {...register('name')}
          isError={!!errors.name}
        />
        <Input.MessageError error={errors.name?.message} />
      </Input.Label>
      <Input.Label htmlFor="email" name="Email address">
        <Input.Field
          id="email"
          className="mt-2"
          placeholder="Abc@def.com"
          {...register('email')}
          isError={!!errors.email}
        />
        <Input.MessageError error={errors.email?.message} />
      </Input.Label>
      <Input.Label htmlFor="subject" name="Subject">
        <Input.Field
          id="subject"
          className="mt-2"
          placeholder="This is an optional"
          {...register('subject')}
          isError={!!errors.subject}
        />
        <Input.MessageError error={errors.subject?.message} />
      </Input.Label>
      <Input.Label htmlFor="Message" name="Message">
        <Input.Textarea
          id="Message"
          className="mt-2 min-h-[12rem]"
          placeholder="Hi! i’d like to ask about"
          {...register('message')}
          isError={!!errors.message}
        />
        <Input.MessageError error={errors.message?.message} />
      </Input.Label>
      <Button
        type="submit"
        className="sm:max-w-[14.8125rem] ml-auto"
        isLoading={isSaveContactIsLoading}
      >
        Submit
      </Button>
    </form>
  )
}
