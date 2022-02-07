import { addNumbers, someDeprecatedFunction } from './unit'

describe('unit testing', () => {
  it('add two numbers', () => {
    expect(addNumbers(2, 2)).toEqual(4)
  })

  it('deprecated', () => {
    expect(someDeprecatedFunction()).toEqual('this is here for backwards compatibility only')
  })
})
