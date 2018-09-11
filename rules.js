module.exports = {
    rules: {
        'class-methods-use-this': 'off',
        'consistent-return': 'off',
        'func-names': [
            'error',
            'never',
        ],
        'func-style': [
            'off',
            'declaration',
        ],
        'import/extensions': 'ignorePackages',
        'import/no-extraneous-dependencies': ['error', {
            'devDependencies': ['**/*.test.js', '**/*.spec.js', 'test/*.js', '**/test/*.mjs'],
            'optionalDependencies': false,
            'peerDependencies': false
        }],
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1
            }
        ],
        'no-await-in-loop': 'off',
        'no-else-return': 'off',
        'no-multiple-empty-lines': 'off',
        'no-restricted-syntax': ['error', {
            selector: 'ForInStatement',
            message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        }, {
            selector: 'LabeledStatement',
            message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        }, {
            selector: 'WithStatement',
            message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        }],
        'no-shadow': ['error', {
            'builtinGlobals': false,
            'hoist': 'functions',
            'allow': [
                'section',
            ],
        }],
        'no-underscore-dangle': ['error', {
            allowAfterThis: true,
        }],
        'padded-blocks': 'off',
        'space-before-function-paren': [
            'error',
            'never',
        ],
    },
};
