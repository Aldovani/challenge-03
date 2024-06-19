import { z } from 'zod'
import { useForms } from '../../hooks/use-forms'

const contactSchema = z.object({
  name: z.string().min(4),
  email: z.string().email(),
  subject: z.string().optional(),
  message: z.string().min(50),
})

type ContactSchema = z.infer<typeof contactSchema>

export function useContact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForms<ContactSchema>({ validator: contactSchema })

  return { register, errors, handleSubmit }
}
