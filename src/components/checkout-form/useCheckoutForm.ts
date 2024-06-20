import { useSelector } from 'react-redux'
import { IState } from '../../stores'
import { ICartItem } from '../../stores/modules/cart/types'
import { CalcTotal } from '../../utils/calc-total'
import { useForms } from '../../hooks/use-forms'
import { z } from 'zod'
import { getAddressByCEP } from '../../services/api/cep'
import { useState } from 'react'
import { delay } from '../../utils/delay'
import { useNavigate } from 'react-router-dom'

const checkoutSchema = z.object({
  name: z.string().min(4),
  lastName: z.string().min(4),
  company: z.string().optional(),
  zipCode: z.string().min(9),
  country: z.string().min(4),
  street: z.string().min(4),
  town: z.string().min(4),
  province: z.string().min(2),
  address: z.string().min(4),
  email: z.string().email(),
  complement: z.string().optional(),
  paymentMethod: z.enum(['cash', 'bank'], {
    message: 'Select a payment method',
  }),
})

type CheckoutSchema = z.infer<typeof checkoutSchema>

type Address = {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}
export function useCheckoutForm() {
  const products = useSelector<IState, ICartItem[]>((state) => state.cart.items)
  const navigation = useNavigate()

  const { total } = CalcTotal(products)
  const [isZipcodeLoading, setIsZipcodeLoading] = useState(false)
  const [address, setAddress] = useState<Address | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    setFocus,
    reset,
    formState: { errors },
  } = useForms<CheckoutSchema>({ validator: checkoutSchema })

  async function handleChangeZipCodeInput(value: string) {
    if (value.replace(/\D/g, '').length < 8) return
    try {
      setIsZipcodeLoading(true)

      const result = await getAddressByCEP(value)

      setAddress(result?.data)

      if (result?.data?.erro) {
        throw Error('')
      }

      setValue('country', 'Brasil')
      setValue('address', result?.data.logradouro || '')
      setValue('street', result?.data.complemento || '')
      setValue('province', result?.data.uf || '')
      setValue('town', result?.data.localidade || '')

      clearErrors('zipCode')
    } catch (err) {
      setError('zipCode', { message: 'zip code invalid ' })
      setValue('country', '')
      setValue('address', '')
      setValue('street', '')
      setValue('province', '')
      setValue('town', '')

      setFocus('zipCode')
    } finally {
      setIsZipcodeLoading(false)
    }
  }

  async function handleSubmitCheckoutForm(payload: CheckoutSchema) {
    setIsLoading(true)
    await delay(2000)
    reset()
    setIsLoading(false)

    sessionStorage.setItem(
      'finishedCart',
      JSON.stringify({
        items: [...products],
        orderData: new Date(),
        orderID: new Date().getTime().toString().slice(0, 6),
        paymentMethod: payload.paymentMethod,
      }),
    )

    navigation('/check-out/success')
  }

  return {
    products,
    total,
    register,
    errors,
    handleSubmit,
    address,
    handleChangeZipCodeInput,
    isZipcodeLoading,
    handleSubmitCheckoutForm,
    isLoading,
  }
}
