import { atob, btoa } from './browser'

describe('node', () => {
  it('should base64 encode', () => {
    expect(btoa('test')).toEqual('dGVzdA==')
  })

  it('should base64 decode', () => {
    expect(atob('dGVzdA==')).toEqual('test')
  })
})
