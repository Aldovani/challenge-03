import { Link } from 'react-router-dom'
import { Button } from '../../../components/button'
import { Input } from '../../../components/input'
import { useSignIn } from './use-sign-in'
import GreenLogo from '../../../assets/logo-green.svg'
import FacebookIcon from '../../../assets/facebook-icon.svg'
import GoogleIcon from '../../../assets/google-icon.svg'

export function SignInPage() {
  const {
    errors,
    handleSubmit,
    register,
    handleSignInWithFacebook,
    handleSignInWithGoogle,
    handleSignInWithEmail,
  } = useSignIn()

  return (
    <main className="flex flex-col py-8  sm:py-10 px-8 sm:px-20">
      <Link to="/">
        <img src={GreenLogo} alt="Logo Furniro" className="w-32" />
      </Link>

      <div className="xl:px-16 mt-10">
        <header className="mt-10">
          <h1 className="sm:text-64 text-4xl font-lato font-medium italic text-emerald-700 max-w-[250px] leading-[120%] ">
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

        <form
          className="mt-8"
          onSubmit={handleSubmit((data) => handleSignInWithEmail(data.email))}
        >
          <Input.Label name="Email" htmlFor="email">
            <Input.Field
              id="email"
              className="mt-2"
              placeholder="email@exempla.com"
              isError={!!errors.email}
              type="email"
              {...register('email')}
            />
            <Input.MessageError error={errors.email?.message} />
          </Input.Label>
          <Input.Label name="Password" htmlFor="email" className="mt-4">
            <Input.Field
              id="email"
              className="mt-2"
              placeholder="••••••••••••"
              isError={!!errors.email}
              type="email"
              {...register('email')}
            />
            <Input.MessageError error={errors.email?.message} />
          </Input.Label>

          <div className="flex justify-between items-center mt-6 max-sm:flex-col max-sm:gap-2">
            <div className=" flex items-center gap-4">
              <input
                type="checkbox"
                value="Remember"
                id="Remember"
                className="peer opacity-0 invisible w-0 h-0 absolute"
              />
              <span className="size-5 peer-checked:bg-emerald-700  peer-checked:border-emerald-700 border border-gray-200  relative after:block after:size-2 after:top-1/2 after:left-1/2 after:rounded-sm after:bg-white after:translate-x-1/2 after:translate-y-1/2"></span>

              <label
                className="peer-checked:text-emerald-700   peer-checked:font-normal text-zinc-400  font-medium"
                htmlFor="Remember"
              >
                Remember me
              </label>
            </div>

            <Link
              className="text-zinc-400 hover:text-emerald-600"
              to="/forget-password"
            >
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="mt-8">
            Sign-in
          </Button>
        </form>
      </div>
    </main>
  )
}
