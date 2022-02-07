import '@testing-library/jest-dom/extend-expect'

const toMatchUser = (actual: any, expected: any) => {
  return {
    pass: actual.name === expected.name,
    message: () => `actual: [${actual.name}], expected: [${expected.name}]`,
  }
}

expect.extend({ toMatchUser })
