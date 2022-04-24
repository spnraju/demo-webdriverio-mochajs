module.exports = {
  root: true,
  plugins: ['wdio'],
  extends: ['eslint:recommended', 'eslint-config-prettier'],
  env: {
    node: true,
    es6: true,
    mocha: true,
  },
  globals: {
    browser: true,
    $: true,
    $$: true,
  },
  rules: {},
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
};
