import type { Config } from 'jest';

const config: Config = {
  collectCoverage: true,
  collectCoverageFrom: [
    'server/modules/users/application/use-cases/**/*.ts',
    '<rootDir>/server/**/*.ts',
    '!<rootDir>/**/*.module.ts',
    '!<rootDir>/**/index.ts',
    '!<rootDir>/**/*.consumer.ts',
    '!<rootDir>/server/main.ts',
    '!<rootDir>/**/*.mock.ts',
    '!<rootDir>/**/*.interface.ts',
    '!<rootDir>/**/*.dto.ts',
    '!<rootDir>/**/*.constants.ts',
  ],
  coverageDirectory: './coverage',
  rootDir: './', // diretorio raiz
  coverageThreshold: {
    global: {
      branches: 78,
      functions: 90,
      lines: 80,
      statements: 90,
    },
  },
  roots: ['<rootDir>', 'server'],
  displayName: 'root-tests',
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '@server/(.*)': '<rootDir>/server/$1',
    '@test/(.*)': '<rootDir>/test/$1',
  },
  moduleDirectories: ['node_modules', 'server'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  preset: 'ts-jest', // compilar o jest
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  testEnvironment: 'node',
  clearMocks: true, // limpar os mocks por padrao
  testMatch: ['**/?(*.)+(spec|test|e2e).[t]s?(x)'], // quais pastas vao estar os testes
  verbose: false,
  watchPlugins: [],
  bail: 0,
  testPathIgnorePatterns: ['/node_modules/'],
};

export default config;
