module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{js,jsx}',
    // "src/pages/Page1*.{js,jsx}",
    // "src/components/*.{js,jsx}",
    '!./src/App.jsx',
    '!./src/index.jsx',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
};
