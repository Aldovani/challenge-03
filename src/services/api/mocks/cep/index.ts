import { http, HttpResponse } from 'msw'

export const getAddressByCEPMock = http.get(
  'https://viacep.com.br/ws/:cep/json',
  async () => {
    return new HttpResponse(
      JSON.stringify({
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
      }),
    )
  },
)
