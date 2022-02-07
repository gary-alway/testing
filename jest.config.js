module.exports = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  collectCoverage: false,
  coverageReporters: ['json', 'html', 'text'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!<rootDir>/node_modules/'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(tsx?)$',
  coveragePathIgnorePatterns: ['<rootDir>/test/', '<rootDir>/node_modules'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file.js',
    '\\.(css)$': '<rootDir>/node_modules/jest-css-modules',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testURL: 'http://localhost/', // https://github.com/facebook/jest/issues/6769,
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setUpTests.ts'],
}
