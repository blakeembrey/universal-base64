export function decode (str: string): string {
  return Buffer.from(str, 'base64').toString('latin1')
}

export function encode (str: string): string {
  return Buffer.from(str, 'latin1').toString('base64')
}
