import { z } from 'zod'
import { useForms } from '../../../hooks/useForms'
import { useAuth } from '../../../hooks/useAuth'
import { useNavigate, useSearchParams } from 'react-router-dom'

const signInSchema = z.object({
  email: z.string().email(),
})

type SignInSchema = z.infer<typeof signInSchema>

export function useSignIn() {
  const { signInWithGoogle, signInWithFacebook } = useAuth()
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
  }
}
