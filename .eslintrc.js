const { eslint } = require('@powerfulyang/lint');

module.exports = {
  ...eslint,
  rules: {
    ...eslint.rules,
    'import/no-extraneous-dependencies': 'off',
  },
};
