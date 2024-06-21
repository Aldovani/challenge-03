import { z } from 'zod'
import { useForms } from '../../../hooks/use-forms'
import { useAuth } from '../../../hooks/use-auth'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'

const signInSchema = z.object({
  email: z.string().email(),
})

type SignInSchema = z.infer<typeof signInSchema>

export function useSignIn() {
  const {
    signInWithGoogle,
    signInWithFacebook,
    signInWithEmail,
    setUserByEmail,
  } = useAuth()
  const navigation = useNavigate()
  const [searchParams] = useSearchParams()

  const redirectUrl = searchParams.get('redirectUrl') || '/shop'

  async function handleSignInWithGoogle() {
    await signInWithGoogle()
    navigation(redirectUrl)
  }
  async function handleSignInWithFacebook() {
    await signInWithFacebook()
    navigation(redirectUrl)
  }
  async function handleSignInWithEmail(email: string) {
    await signInWithEmail(email)
  }

  useEffect(() => {
    const apiKey = searchParams.get('apiKey') || ''

    if (apiKey) {
      setUserByEmail()
      navigation('/shop')
    }
  }, [navigation, searchParams])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForms<SignInSchema>({ validator: signInSchema })

  return {
    register,
    handleSubmit,
    errors,
    handleSignInWithFacebook,
    handleSignInWithGoogle,
    handleSignInWithEmail,
  }
}
