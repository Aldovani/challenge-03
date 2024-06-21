import { describe, expect, it } from 'vitest'
import { getAddressByCEP } from '.'

describe('Fetch CEP', () => {
  it('should be able fetch the CEP', async () => {
    const response = await getAddressByCEP('15980000')

    expect(response?.data).toMatchObject({
      cep: '15980-000',
      logradouro: '',
      complemento: '',
      bairro: '',
      localidade: 'Dobrada',
      uf: 'SP',
      ibge: '3514007',
      gia: '2884',
      ddd: '16',
      siafi: '6381',
    })
  })

  it('should not be able fetch with 7 characters', async () => {
    const response = await getAddressByCEP('159800')

    expect(response).toBe(undefined)
  })
})
