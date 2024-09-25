import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'
import { useSignForm } from './useSignInForm'

export function SignInForm() {
  const { errors, handleSubmit, register, handleSignInWithEmail } =
    useSignForm()
  return (
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

      <div className="flex justify-between items-center mt-6  max-sm:gap-2">
        <div className=" flex items-center gap-4">
          <input
            type="checkbox"
            value="Remember"
            id="Remember"
            className=" peer opacity-0 invisible w-0 h-0 absolute"
          />

          <span className="size-5 block peer-checked:bg-zinc-900  peer-checked:border-zinc-900 border border-gray-200  relative "></span>

          <label
            className="peer-checked:text-zinc-900 cursor-pointer   peer-checked:font-normal text-zinc-400  font-medium"
            htmlFor="Remember"
          >
            Remember me
          </label>
        </div>

        <Link
          className="text-zinc-400 hover:text-zinc-900"
          to="/forget-password"
        >
          Forgot password?
        </Link>
      </div>

      <Button type="submit" className="mt-8">
        Sign-in
      </Button>

      <p className="mt-6 text-center text-zinc-400">
        I dont have any account{' '}
        <Link to="/register" className="mt-8 text-zinc-800 font-semibold">
          Sign-in
        </Link>
      </p>
    </form>
  )
}
