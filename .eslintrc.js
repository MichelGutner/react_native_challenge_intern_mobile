module.exports = {
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // uses typescript-specific linting rules
    'google',
    'plugin:react-native/all',
    'prettier',
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
    'react-native',
    '@typescript-eslint',
    'prettier',
    'eslint-plugin-prettier',
  ],
  rules: {
    'linebreak-style': 0,
    'require-jsdoc': 0,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    'object-curly-spacing': [2, 'always'],
    'react-native/sort-styles': [
      'error',
      'asc',
      { ignoreClassNames: false, ignoreStyleProperties: false },
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js', 'ts', 'tsx'],
      },
    ],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'prettier/prettier': 'error',
    'import/imports-first': 0,
  },
};
