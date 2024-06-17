import { cepApi } from '../../../libs/axios'
import { delay } from '../../../utils/delay'

type GetAddressByCEPResponse = {
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
  erro?: boolean
}

export async function getAddressByCEP(cep: string) {
  if (cep.length < 8) return
  await delay(1000)
  const data = await cepApi.get<GetAddressByCEPResponse>(`/${cep}/json`)

  return data
}
