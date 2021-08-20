module.exports = {
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!**/node_modules/**",
  ],
  moduleNameMapper: {
    "@/components/(.*)": "<rootDir>/src/components/$1",
    "@/lib/(.*)": "<rootDir>/src/lib/$1",
    "@/utils/(.*)": "<rootDir>/src/utils/$1",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  },
  modulePathIgnorePatterns: ["<rootDir>/.k8s"],
  setupFilesAfterEnv: ["<rootDir>/config/jest/setup.js"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/.socialgouv/"],
  transform: {
    "\\.yml$": "yaml-jest",
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
}
