export function atob (str: string): string {
  return Buffer.from(str, 'base64').toString('latin1')
}

export function btoa (str: string): string {
  return Buffer.from(str, 'latin1').toString('base64')
}
