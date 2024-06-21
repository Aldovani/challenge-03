import { createContext, useCallback, useEffect, useState } from 'react'
import {
  signWithEmailProvider,
  signWithFacebookProvider,
  signWithGoogleProvider,
} from '../services/firebase/auth'

import { getAuth, signOut } from 'firebase/auth'

type User = {
  displayName: string | null
  email: string | null
  phoneNumber: string | null
  photoURL: string | null
}

type AuthProviderProps = {
  children: React.ReactNode
}
type AuthContextProps = {
  signInWithGoogle: () => Promise<void>
  signInWithFacebook: () => Promise<void>
  signInWithEmail: (email: string) => Promise<void>
  singOut: () => void
  user: User | undefined
  setUserByEmail: () => void
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | undefined>(undefined)
  const auth = getAuth()

  function setUserByEmail() {
    setUser({
      displayName: '',
      email: '',
      phoneNumber: '',
      photoURL: '',
    })
  }

  const handleSignWithGoogle = useCallback(async () => {
    const user = await signWithGoogleProvider()
    setUser(user)
  }, [])

  const handleSignWithFacebook = useCallback(async () => {
    const user = await signWithFacebookProvider()
    setUser(user)
  }, [])

  const handleSignWithEmail = useCallback(async (email: string) => {
    await signWithEmailProvider(email)
  }, [])

  function singOut() {
    signOut(auth)
      .then(() => {
        setUser(undefined)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, phoneNumber, email } = user

        if (!displayName || !photoURL) {
          throw new Error('Missing information')
        }

        setUser({
          displayName,
          photoURL,
          email,
          phoneNumber,
        })
      }

      return () => {
        unsubscribe()
      }
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        setUserByEmail,
        user,
        singOut,
        signInWithEmail: handleSignWithEmail,
        signInWithFacebook: handleSignWithFacebook,
        signInWithGoogle: handleSignWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
