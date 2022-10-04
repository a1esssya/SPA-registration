module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'default-param-last': 0,
  },
};
