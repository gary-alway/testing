import { myFunc } from './unit'

describe('unit', () => {
  it('myFunc adds two numbers', () => {
    expect(myFunc(2, 2)).toEqual(4)
  })
})
