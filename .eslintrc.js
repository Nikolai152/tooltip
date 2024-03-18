module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'prettier',
      'plugin:compat/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
    ],
    overrides: [],
    ignorePatterns: [
      '*.min.js',
      'build/',
      'node_modules/',
      'src/graphql/generated/generated.ts',
      'src/react-app-env.d.ts',
      'i18next-parser.config.js',
      'craco.config.js',
      '.eslintrc.js',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      polyfills: ['fetch', 'Promise'],
    },
    plugins: [
      'react',
      '@typescript-eslint',
      'simple-import-sort',
      'import',
      'compat',
      'unicorn',
    ],
    rules: {
      'array-callback-return': 'error',
      'brace-style': 'error',
      'comma-spacing': ['error', { before: false, after: true }],
      curly: 'error',
      'default-param-last': ['error'],
      'default-case-last': 'error',
      'default-case': ['error', { commentPattern: '^skip\\sdefault' }],
      indent: 'off', //handled by prettier
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-array-index-key': 'error',
      'react/no-children-prop': 'error',
      'react/no-danger-with-children': 'error',
      'react/jsx-no-bind': 'off', //read carrefully
      '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'sort-imports': 'off', // handled by simple-import-sort/sort
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      'no-console': 'error',
      'compat/compat': 'error',
      'constructor-super': 'error',
      complexity: ['error', 10],
      eqeqeq: 'error',
      'func-name-matching': ['error', 'always'],
      'guard-for-in': 'error',
      'lines-between-class-members': ['error', 'always'],
      'max-depth': ['error', 4],
      'max-len': [
        'error',
        {
          code: 80,
          comments: 80,
          ignoreStrings: true,
          ignorePattern: '// eslint-disable',
          ignoreComments: true,
          ignoreTrailingComments: true,
          ignoreUrls: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],
      'max-lines': ['error', { max: 600, skipBlankLines: true }],
      'max-lines-per-function': [
        'error',
        { max: 200, skipBlankLines: true, skipComments: true },
      ],
      'max-nested-callbacks': ['error', 4],
      'max-params': ['error', 12],
      'no-alert': 'error',
      'no-await-in-loop': 'error',
      'no-bitwise': 'error',
      'no-dupe-class-members': 'error',
      'no-caller': 'error',
      'no-confusing-arrow': 'error',
      'no-constant-binary-expression': 'error',
      'no-constructor-return': 'error',
      'no-continue': 'error',
      'no-debugger': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-else-return': 'error',
      'no-empty': 'error',
      'no-empty-function': 'error',
      'no-fallthrough': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-parens': 'off', // handled by prettier,
      'no-floating-decimal': 'error',
      'no-invalid-this': ['error', { capIsConstructor: false }],
      'no-labels': ['error', { allowSwitch: true }],
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-loop-func': 'error',
      'no-magic-numbers': [
        'error',
        {
          ignore: [-1, 0, 1],
          ignoreArrayIndexes: true,
          ignoreDefaultValues: true,
          ignoreClassFieldInitialValues: true,
          enforceConst: true,
        },
      ],
      'no-new-wrappers': 'error',
      'no-param-reassign': 'error',
      'no-plusplus': 'error',
      'no-promise-executor-return': 'error',
      'no-restricted-imports': ['error', 'rxjs/Rx'],
      'no-return-assign': 'error',
      'no-return-await': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ["error"],
      'no-shadow-restricted-names': 'error',
      'no-template-curly-in-string': 'error',
      'no-throw-literal': 'error',
      'no-undefined': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable': 'error',
      'no-unsafe-finally': 'error',
      'no-use-before-define': 'error',
      'no-unused-expressions': [
        'error',
        { allowShortCircuit: true, allowTernary: true },
      ],
      'no-unused-labels': 'error',
      'no-useless-catch': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
      ],
      'prefer-const': 'error',
      'prefer-object-spread': 'error',
      'prefer-spread': 'error',
      'prefer-promise-reject-errors': 'error',
      'prettier/prettier': 'error',
      radix: 'error',
      'require-atomic-updates': 'error',
      'require-await': 'error',
      'spaced-comment': ['error', 'always'],
      yoda: ['error', 'never'],
      'import/no-anonymous-default-export': [
        'error',
        {
          allowArray: false,
          allowArrowFunction: false,
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowCallExpression: true, // The true value here is for backward compatibility
          allowNew: false,
          allowLiteral: false,
          allowObject: false,
        },
      ],
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
        },
      ],
    },
  };
  