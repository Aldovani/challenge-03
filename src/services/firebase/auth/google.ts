import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

export async function signWithGoogleProvider() {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()

  try {
    const result = await signInWithPopup(auth, provider)

    const credential = GoogleAuthProvider.credentialFromResult(result)

    if (!credential) return

    const user = result.user

    return user
  } catch (error) {
    console.log('Error:' + error)
  }
}
