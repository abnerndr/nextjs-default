module.exports = {

    collectCoverageFrom: [
      '**/*.{js,jsx,ts,tsx}',
      '!**/*.d.ts',
      '!**/node_modules/**',
    ],
    moduleNameMapper: {
      // Handle CSS imports (with CSS modules)
      // https://jestjs.io/docs/webpack#mocking-css-modules
      '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
      "\\.(css|less|scss)$": "identity-obj-proxy",
      // Handle CSS imports (without CSS modules)
      '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
      "\\.(css)$": "<rootDir>/node_modules/jest-css-modules",
  
      // Handle image imports
      // https://jestjs.io/docs/webpack#handling-static-assets
      '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__mocks__/fileMock.js`,
  
      // Handle module aliases
      '^@/components/(.*)$': '<rootDir>/src/components/$1',
      '^@/components/comon/(.*)$': '<rootDir>/src/components/comon/$1',
      '^@/contexts/(.*)$': '<rootDir>/src/contexts/$1',
      '^@/services/(.*)$': '<rootDir>/src/services/$1',
      '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
      '^@/assets/(.*)$': '<rootDir>/src/assets/$1',
      '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
      '^@/assets/images/(.*)$' : '<rootDir>/src/assets/images/$1',
    },
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    testEnvironment: 'jsdom',
    transform: {
      // Use babel-jest to transpile tests with the next/babel preset
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
      "^.+\\.svg$": "jest-svg-transformer",
      ".+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub"
  
    },
    transformIgnorePatterns: [
      '/node_modules/',
      '^.+\\.module\\.(css|sass|scss)$',
    ],
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    moduleDirectories: ["node_modules", "src"],
  
  }
  