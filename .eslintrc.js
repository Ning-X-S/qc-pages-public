module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        // 'plugin:react/recommended',
        // "plugin:@typescript-eslint/recommended"
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react'
    // '@typescript-eslint',
    ],
    rules: {
    //Possible Errors
        'no-cond-assign': 2, //禁止条件表达式中出现赋值操作符
        'no-constant-condition': 2, //禁止在条件中使用常量表达式
        'no-control-regex':0, //正则
        'no-dupe-args': 2, //禁止函数参数同名
        'no-dupe-keys': 2, //禁止json中重复的key
        'no-duplicate-case': 2,//禁止switch同样的case条件
        'no-console': 'off', //禁止出现console
        'no-debugger': 1, //禁止出现debugger
        'no-var': 0, //禁止出现没定义的var
        'no-empty':0, //禁止出现空语句块
        'no-trailing-spaces': 0, //禁用行尾空白
        'no-empty-character-class':2, //禁止在正则表达式中使用空字符集
        'no-ex-assign':2, //禁止对 catch 子句中的异常重新赋值
        'no-extra-boolean-cast':2, //禁止不必要的布尔类型转换
        'no-extra-semi':2, //禁用不必要的分号
        'no-func-assign':2, //禁止对 function 声明重新赋值
        'no-inner-declarations':2, //禁止在嵌套的块中出现变量声明或 function 声明
        'no-irregular-whitespace':2, //禁止在字符串和注释之外不规则的空白
        'no-obj-calls':2, //禁止将全局对象当作函数进行调用
        'no-sparse-arrays':2, //禁用稀疏数组
        'use-isnan':2, //要求使用 isNaN() 检查 NaN
        'valid-typeof':2, //强制 typeof 表达式与有效的字符串进行比较
        'eol-last': 0,//要求或禁止文件末尾存在空行
        'no-unused-vars': 0, //禁止出现未使用过的变量
        'no-underscore-dangle': 1,
        'jsx-quotes': 1,//强制在 JSX 属性中一致地使用双引号或单引号
        'react/prop-types':0,
        'react/jsx-curly-spacing': [2, 'never'],
        'react/jsx-wrap-multilines': 2,
        'no-undef':0,
        'no-extra-parens':[2, 'functions'],
        'no-prototype-builtins':2,
        'no-template-curly-in-string':2,
        'no-unsafe-negation':2,

        //Best Practices
        'array-callback-return':2,
        'block-scoped-var':2,
        'class-methods-use-this':0,
        'complexity':2,
        'consistent-return':2,
        'curly':2,
        'default-case':2,
        'dot-location': [2, 'property'],
        'dot-notation':2,
        'eqeqeq': 2,
        'guard-for-in':2,
        'no-alert':2, 
        'no-caller':2,
        'no-div-regex':2,
        'no-else-return':2,
        'no-empty-function':2,
        'no-eq-null':2,
        'no-eval':2,
        'no-extend-native':2,
        'no-extra-label':2,
        'no-floating-decimal':2,
        'no-global-assign':2,
        'no-implicit-coercion':2,
        'no-implicit-globals':2,
        'no-implied-eval':2,
        'no-invalid-this':2,
        'no-iterator':2,
        'no-labels':2,
        'no-lone-blocks':2,
        'no-loop-func':2,
        'no-magic-numbers': 0,
        'no-multi-spaces':2,
        'no-multi-str':2,
        'no-new-func':2,
        'no-new-wrappers':2,
        'no-octal-escape':2,
        'no-param-reassign':2,
        'no-proto':2,
        //"no-return-assign":2,
        'no-script-url':2,
        'no-self-compare':2,
        'no-sequences':2,
        'no-throw-literal':2,
        'no-unmodified-loop-condition':2,
        'no-unused-expressions':2,
        'no-useless-concat':2,
        'no-useless-escape':2,
        'no-void':2,
        'no-warning-comments':2,
        'no-with':2,
        'radix':2,

        //variable style
        'init-declarations': ['error', 'always'],
        'no-catch-shadow': 'error',
        'no-label-var': 'error',
        'no-shadow-restricted-names': 'error',
        'no-shadow': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'error',
        // "no-use-before-define": ["error",{ "functions": false }],
        'no-use-before-define': [0],
        '@typescript-eslint/no-use-before-define': [0],


        //Stylistic
        'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
        'camelcase': 'error',
        'comma-style': ['error', 'last'],
        'consistent-this': ['error','self'],
        'indent': [2, 4],//空格数
        'linebreak-style': ['error', 'unix'],
        'max-depth': ['error', 8],
        'max-len': ['error', 240, 2],
        'max-statements-per-line': 'error',
        'new-cap': 'error',
        'new-parens': 'error',
        'no-bitwise': 'error',
        'no-continue': 'error',
        'no-lonely-if': 'error',
        'no-negated-condition': 'error',
        'object-property-newline': ['error', { 'allowMultiplePropertiesPerLine': true }],
        'operator-linebreak': 'error',
        'quotes': [2, 'single'], //单双引号
        'semi': [2, 'always'],
    },
};
