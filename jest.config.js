module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/*.spec.(ts|tsx)'],
  testPathIgnorePatterns: ['./node_modules/', './dist/'],
  setupFiles: ['./jest.setup.js'],
  setupFilesAfterEnv: ['./.jest/jest.config.ts'],
  testEnvironment: 'node',
};
