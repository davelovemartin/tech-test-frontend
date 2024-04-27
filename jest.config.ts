import type { Config } from 'jest';

const config: Config = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/components/**/*.{ts,tsx}'],
  coverageDirectory: '<rootDir>/coverage/',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$': 'identity-obj-proxy',
  },
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/node_modules/@testing-library/jest-dom/', '<rootDir>/node_modules/jest-axe/extend-expect'],
  testEnvironment: 'jsdom',
  transform: {
    '\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  testRegex: '(/__tests__/.*.(test|spec)).(jsx?|tsx?)$',
  verbose: true,
};

export default config;
