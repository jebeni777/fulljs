module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: ['eslint:recommend', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jxs: true,
        },
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'react/prop-types': ['off']
    },
};