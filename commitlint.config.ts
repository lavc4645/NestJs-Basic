module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'refactor',
        'test',
        'testing', // ✅ added this
        'chore',
        'ci',
        'build',
      ],
    ],
  },
};
