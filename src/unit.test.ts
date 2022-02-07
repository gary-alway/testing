import { addNumbers, someDeprecatedFunction, pluralizeWithValue } from './unit'

describe('unit testing', () => {
  describe('add', () => {
    it('add two numbers', () => {
      expect(addNumbers(2, 2)).toEqual(4)
    })

    it('deprecated', () => {
      expect(someDeprecatedFunction()).toEqual('this is here for backwards compatibility only')
    })
  })

  describe('pluralizeWithValue', () => {
    test.each<number>([0, 2, 5])('pluralizes a string when count = %s', (count) => {
      expect(pluralizeWithValue(count, 'person', 'people')).toBe(`${count} people`)
    })

    it('does not pluralize a string when count = 1', () => {
      expect(pluralizeWithValue(1, 'person', 'people')).toBe('1 person')
    })
  })
})
