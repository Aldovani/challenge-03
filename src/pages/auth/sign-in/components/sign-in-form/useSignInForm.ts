import { useAuth } from '@/hooks/use-auth'
import { useForms } from '@/hooks/use-forms'
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { z } from 'zod'

const signInSchema = z.object({
  email: z.string().email(),
})

type SignInSchema = z.infer<typeof signInSchema>

export function useSignForm() {
  const { signInWithEmail, setUserByEmail } = useAuth()
  const navigation = useNavigate()
  const [searchParams] = useSearchParams()

  const redirectUrl = searchParams.get('redirectUrl') || '/shop'

  async function handleSignInWithEmail(email: string) {
    await signInWithEmail(email)
  }

  useEffect(() => {
    const apiKey = searchParams.get('apiKey') || ''

    if (apiKey) {
      setUserByEmail()
      navigation(redirectUrl)
    }
  }, [navigation, redirectUrl, searchParams, setUserByEmail])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForms<SignInSchema>({ validator: signInSchema })

  return {
    errors,
    handleSubmit,
    register,
    handleSignInWithEmail,
  }
}
