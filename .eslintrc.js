module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    semi: 0,
    'no-unused-vars': 1,
    'arrow-parens': 0,
  },
}
