module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential'
        // 'plugin:prettier/recommended' // 添加 prettier 插件  
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    parser: 'vue-eslint-parser',
    plugins: ['vue'],
    rules: {
        'vue/multi-word-component-names': 0
    }
}