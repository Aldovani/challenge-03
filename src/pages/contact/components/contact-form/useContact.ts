import { z } from 'zod'
import { useForms } from '@/hooks/use-forms'
import { saveContact } from '@/stores/modules/contact'
import { delay } from '@/utils/delay'
import { useState } from 'react'
import { toast } from 'sonner'
import { useAppDispatch } from '../../../../stores'

const contactSchema = z.object({
  name: z.string().min(4),
  email: z.string().email(),
  subject: z.string().optional(),
  message: z.string().min(50),
})

type ContactSchema = z.infer<typeof contactSchema>

export function useContact() {
  const dispatch = useAppDispatch()
  const [isSaveContactIsLoading, setIsSaveContactIsLoading] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForms<ContactSchema>({ validator: contactSchema })

  async function handleSaveContact(data: ContactSchema) {
    setIsSaveContactIsLoading(true)
    await delay(2000)
    dispatch(saveContact(data))
    toast.success('Email successfully sent', { duration: 2000 })
    reset()
    setIsSaveContactIsLoading(false)
  }

  return {
    register,
    errors,
    handleSubmit,
    handleSaveContact,
    isSaveContactIsLoading,
  }
}
