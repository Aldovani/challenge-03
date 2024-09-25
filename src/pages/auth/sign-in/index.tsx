import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useSignIn } from './use-sign-in'
import FacebookIcon from '@/assets/facebook-icon.svg'
import GoogleIcon from '@/assets/google-icon.svg'
import { SignInForm } from './components/sign-in-form'
import { Logo } from '@/components/ui/logo'

export function SignInPage() {
  const { handleSignInWithFacebook, handleSignInWithGoogle } = useSignIn()

  return (
    <main className="flex flex-col py-8  sm:py-10 px-8 sm:px-20">
      <Link to="/">
        <Logo variants="black" />
      </Link>

      <div className="xl:px-16 mt-8">
        <header className="mt-10">
          <h1 className="sm:text-64 text-4xl font-manrope font-medium  text-zinc-900 max-w-[280px] leading-[120%] ">
            Welcome back to Furniro Login
          </h1>
          <p className="mt-2 text-zinc-400  ">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </header>

        <div className="flex flex-col gap-4 mt-8">
          <Button
            variants="outline"
            className="flex gap-3 py-4  justify-center "
            onClick={handleSignInWithGoogle}
          >
            <img src={GoogleIcon} alt="google icon" /> Sign-in with Google
          </Button>
          <Button
            variants="outline"
            className="flex gap-3 py-4  justify-center"
            onClick={handleSignInWithFacebook}
          >
            <img src={FacebookIcon} alt="facebook icon" /> Sign-in with Facebook
          </Button>
        </div>

        <div className="flex gap-3 items-center mt-6 ">
          <span className="h-[1px] w-full block bg-zinc-200"> </span>
          <span className="text-zinc-400">Or </span>
          <span className="h-[1px] w-full bg-zinc-200 block"> </span>
        </div>

        <SignInForm />
      </div>
    </main>
  )
}
