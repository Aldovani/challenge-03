import { useAuth } from '@/hooks/use-auth'
import { useNavigate, useSearchParams } from 'react-router-dom'

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

  return {
    handleSignInWithGoogle,
    handleSignInWithFacebook,
  }
}
