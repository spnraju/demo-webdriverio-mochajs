module.exports = {
  '*.{js,md,yaml}': 'prettier --write',
  '*.{js}': ['eslint --fix'],
};
