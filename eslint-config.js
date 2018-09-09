module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        './rules.js',
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        strict: 'error',
    },
};
