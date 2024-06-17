export function FormateMoney(currency: number) {
  const currencyConverted = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(currency)
  return currencyConverted
}
