import { Link } from 'react-router-dom'
import { Button } from '../../../components/button'
import { Input } from '../../../components/input'
import { useSignIn } from './use-sign-in'
import { ICONS } from '../../../assets/icons'

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
        <img src={ICONS.logo} alt="Logo Furniro" className="w-32" />
      </Link>

      <div className="mt-10">
        <h1 className="sm:text-64 text-4xl font-eb-garamond font-bold  text-gray-500">
          Welcome back
        </h1>
        <p className="mt-2 text-gray-200 max-w-96  ">
          Browse our wide selection of comfortable and stylish sofas.
        </p>
      </div>

      <form
        className="mt-12"
        onSubmit={handleSubmit((data) => handleSignInWithEmail(data.email))}
      >
        <Input.Label name="Email" htmlFor="email">
          <Input.Field
            id="email"
            placeholder="abc@exemple.com"
            className="mt-5"
            isError={!!errors.email}
            type="email"
            {...register('email')}
          />
          <Input.MessageError error={errors.email?.message} />
        </Input.Label>

        <Button type="submit" className="mt-4">
          Sign-in
        </Button>
      </form>

      <div className="flex gap-3 items-center mt-6 ">
        <span className="h-[1px] w-full block bg-gray-100"> </span>
        <span className="text-gray-200">Or </span>
        <span className="h-[1px] w-full bg-gray-100 block"> </span>
      </div>

      <div className="flex flex-col gap-4 mt-8">
        <Button variants="outline" onClick={handleSignInWithGoogle}>
          Sign-in with Google
        </Button>
        <Button variants="outline" onClick={handleSignInWithFacebook}>
          Sign-in with Facebook
        </Button>
      </div>
    </main>
  )
}
