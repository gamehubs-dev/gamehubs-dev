module.exports = {
  root: true,
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // New feature
        'fix',      // Bug fix
        'docs',     // Documentation
        'style',    // Code style
        'refactor', // Refactoring
        'perf',     // Performance
        'test',     // Tests
        'build',    // Build
        'ci',       // CI
        'chore',    // Chores
        'revert',   // Reverts
      ],
    ],
  },
};
