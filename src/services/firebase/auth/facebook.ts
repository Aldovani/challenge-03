import { FacebookAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

export async function signWithFacebookProvider() {
  const auth = getAuth()
  const provider = new FacebookAuthProvider()

  try {
    provider.addScope('public_profile')
    const result = await signInWithPopup(auth, provider)

    const credential = FacebookAuthProvider.credentialFromResult(result)
    if (!credential) return

    const user = result.user

    return user
  } catch (error) {
    console.log('Error:' + error)
  }
}
