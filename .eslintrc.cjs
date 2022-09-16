module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: [2, 'never'],
    'no-var': 'error',
    indent: ['error', 2],
    quotes: [2, 'single'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': ['off', 'windows'],
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'react/state-in-constructor': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-no-bind': 'off',
    'no-const-assign': 'off',
    'arrow-body-style': 'off',
    'prefer-const': 'off',
    'consistent-return': 'off',
    'react/self-closing-comp': 'off',
    'import/no-named-as-default': 'off',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'comma-dangle': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'array-callback-return': 'off',
    'react/no-unknown-property': 'off',
    'react/prop-types': 'off',
    'react/no-unstable-nested-components': 'off',
    'no-constant-condition': 'off',
    camelcase: 'off'
  },
}
