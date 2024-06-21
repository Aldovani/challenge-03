import { getAuth, sendSignInLinkToEmail } from 'firebase/auth'
const actionCodeSettings = {
  url: 'http://localhost:5173/shop',
  handleCodeInApp: true,
}

export async function signWithEmailProvider(email: string) {
  const auth = getAuth()
  try {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings)
    window.localStorage.setItem('emailForSignIn', email)
  } catch (error) {
    console.log('Error: ' + error)
  }
}
