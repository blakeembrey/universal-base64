import { decode, encode } from './index'

describe('node', () => {
  it('should base64 encode', () => {
    expect(encode('test')).toEqual('dGVzdA==')
  })

  it('should base64 decode', () => {
    expect(decode('dGVzdA==')).toEqual('test')
  })
})
