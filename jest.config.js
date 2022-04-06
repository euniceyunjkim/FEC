module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.js?(x)",
  ],
  modulePathIgnorePatterns: [
    "<rootDir>/node_modules/", "<rootDir>/dist/*"
  ]
};
