import { getAuth, sendSignInLinkToEmail } from 'firebase/auth'
const actionCodeSettings = {
  url: 'http://localhost:5173/auth/sign',
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios',
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12',
  },
  dynamicLinkDomain: 'http://localhost:5173/auth/sign',
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
