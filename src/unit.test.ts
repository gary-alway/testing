import { addNumbers } from './unit'

describe('unit testing', () => {
  it('add two numbers', () => {
    expect(addNumbers(2, 2)).toEqual(4)
  })
})
