import { z } from 'zod'
import { useForms } from '../../../hooks/useForms'

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

type SignInSchema = z.infer<typeof signInSchema>

export function useSignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForms<SignInSchema>({ validator: signInSchema })

  return { register, handleSubmit, errors }
}
