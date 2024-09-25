import { setupWorker } from 'msw/browser'
import { getAddressByCEPMock } from './cep'

const worker = setupWorker(getAddressByCEPMock)

export async function enableMSW() {
  if (import.meta.env.MODE !== 'test') {
    return
  }

  await worker.start()
}
