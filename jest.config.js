module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{js,jsx}',
    '!./src/App.jsx',
    '!./src/index.jsx',
    '!./src/store.js',
    '!./src/coreReducer.js',
    '!./src/components/**/index.js',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
};
