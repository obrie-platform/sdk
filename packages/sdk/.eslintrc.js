module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        "no-implied-eval": "error",
        "no-alert": "error",
        "no-proto": "error",
        "no-script-url": "error",
        "no-unused-vars": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error"
    }
};