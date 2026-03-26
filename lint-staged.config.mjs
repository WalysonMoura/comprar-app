/** @type {import("lint-staged").Configuration} */
const config = {
  '*.{ts,tsx,js,jsx}': ['eslint --fix', 'eslint', 'prettier --write'],
  '**/*.ts?(x)': () => 'npm run type-check',
  '**/*.test.ts': ['jest'],
  '*.{json,yaml}': ['prettier --write'],
}

export default config
