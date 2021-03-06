module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
    'no-use-before-define': 'off',
    'jsx-quotes': ['warn', 'prefer-single'],
    'camelcase': 'off',
    'class-methods-use-this': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-multiple-empty-lines': ['warn', { 'max': 3, 'maxEOF': 0 }],
    'quote-props': 'off',
    'quotes': 'warn',

    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],

    'react/jsx-indent': 'warn',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.tsx', '.ts'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/self-closing-comp': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',

    'import/order': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        'ts': 'never',
        'tsx': 'never',
        'js': 'never',
        'jsx': 'never',
        '': 'never',
      },
    ],
  },
};
