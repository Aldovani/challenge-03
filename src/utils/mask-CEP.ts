export function MaskCEP(CEP: string) {
  if (!CEP) return ''
  CEP = CEP.replace(/\D/g, '')
  CEP = CEP.replace(/(\d{5})(\d)/, '$1-$2')
  return CEP
}
