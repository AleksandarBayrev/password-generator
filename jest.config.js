module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  testMatch: [
    "**/?(*.)+(spec|test).[t]s?(x)"
  ]
};