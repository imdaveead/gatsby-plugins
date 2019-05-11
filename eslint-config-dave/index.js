module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'indent': [
      'error',
      2,
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'no-unused-vars': 'warn',
    'max-len': [
      'warn',
      {
        'code': 100,
        'tabWidth': 2,
        'comments': 100,
        'ignoreComments': false,
        'ignoreTrailingComments': false,
        'ignoreStrings': false,
        'ignoreUrls': false,
        'ignoreTemplateLiterals': false,
        'ignoreRegExpLiterals': false,
      },
    ],
    'comma-style': 'error',
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'ignore',
    }],
    'comma-spacing': ['error', {
      after: true,
      before: false,
    }],
    'eol-last': ['error', 'always'],
    'eqeqeq': [2, 'smart'],
    'no-else-return': 2,
    'no-eq-null': 2,
    'no-floating-decimal': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-redeclare': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-with': 2,
    'yoda': [2, 'never', { 'exceptRange': true, 'onlyEquality': true }],
    'no-new-require': 2,
    'no-cond-assign': [2, 'always'],
    'no-console': 2,
    'no-constant-condition': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'all'],
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-invalid-regexp': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-typeof': 2,
    'no-unexpected-multiline': 2,
    'block-scoped-var': 2,
    'curly': [2],
    'default-case': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-undef-init': 2,
    'no-undefined': 2,
    'no-use-before-define': [2],
    'array-bracket-spacing': [
      2,
      'never',
    ],
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    'no-array-constructor': 2,
    'no-continue': 2,
    'no-inline-comments': 2,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
    'no-multiple-empty-lines': [2, { 'max': 3 }],
    'no-new-object': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': [2, { 'skipBlankLines': true }],
    'no-underscore-dangle': 2,
    'no-unneeded-ternary': 2,
    'operator-assignment': [2, 'always'],
    'operator-linebreak': [2, 'before'],
    'padded-blocks': [2, 'never'],
    'sort-vars': [2, { 'ignoreCase': true }],
    'space-before-blocks': [2, 'always'],
    'space-in-parens': [2, 'never', {}],
    'space-unary-ops': [2, { 'words': true }],
    'spaced-comment': [2, 'always', {}],
    'wrap-regex': 2,
    'arrow-parens': [2, 'always'],
    'arrow-spacing': [2, { 'before': true, 'after': true }],
    'constructor-super': 2,
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-this-before-super': 2,
    'no-var': 2,
    'prefer-const': 2,
    'prefer-spread': 2,
  },
};
