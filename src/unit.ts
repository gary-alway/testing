export const addNumbers = (a: number, b: number): number => a + b

export const sayHello = (name: string) => `hello ${name}`

/**
 * @deprecated put instructions here for the alternative
 */
export const someDeprecatedFunction = () => 'this is here for backwards compatibility only'

const pluralize = (count: number, singular: string, plural: string): string => {
  return count === 1 ? singular : plural
}

export const pluralizeWithValue = (count: number, singular: string, plural: string): string => {
  return `${count} ${pluralize(count, singular, plural)}`
}
