module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'next',
    'next/core-web-vitals',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Custom rules
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
