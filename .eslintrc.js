module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    globals: {
        Ext: 'readonly',
        EmptyApp: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'script'
    },
    rules: {
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        'no-undef': 'error',
        camelcase: 'warn',
        eqeqeq: ['error', 'always'],
        quotes: ['error', 'single', { avoidEscape: true }],
        semi: ['error', 'always'],
        indent: ['error', 4, { SwitchCase: 1 }],
        'comma-dangle': ['error', 'never'],
        'no-trailing-spaces': 'error',
        'max-len': ['warn', { code: 120 }]
    }
};
