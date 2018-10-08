import { decode, encode } from './browser'

describe('node', () => {
  it('should base64 encode', () => {
    expect(encode('test')).toEqual('dGVzdA==')
  })

  it('should base64 decode', () => {
    expect(decode('dGVzdA==')).toEqual('test')
  })
})
