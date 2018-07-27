module.exports = {
  "extends": 'tslint:recommended',

  'rules': {
    'no-console': false,
    'no-empty': false,
    'object-literal-sort-keys': false,
    // 定义函数时如果用到了覆写，则必须将覆写的函数写到一起
    'adjacent-overload-signatures': true,
    // 禁用指定类型
    'ban-types': false,
    // 必须指定类的成员的可访问性
    'member-access': false,
    // 禁止定义接口空的接口
    'no-empty-interface': false,
    // 禁止对函数的参数重新赋值
    'no-parameter-reassignment': true,
    // 接口名称必须已 I 开头
    'interface-name': false,
    // import 必须排序
    'ordered-imports': false,
    // 禁止使用 var b = require('b'); 来引入模块
    // 有时需要动态引入，还是需要用 require
    'no-var-requires': false,
    // 必须使用箭头函数，除非是单独的函数声明或是命名函数
    'only-arrow-functions': [
      true,
      'allow-declarations',
      'allow-named-functions'
    ],
    // 必须使用 for of 循环替代 for 循环
    'prefer-for-of': false,
    // 类型定义的冒号前面必须没有空格，后面必须有一个空格
    'typedef-whitespace': [
      true,
      {
        'call-signature': 'nospace',
        'index-signature': 'nospace',
        'parameter': 'nospace',
        'property-declaration': 'nospace',
        'variable-declaration': 'nospace'
      },
      {
        'call-signature': 'onespace',
        'index-signature': 'onespace',
        'parameter': 'onespace',
        'property-declaration': 'onespace',
        'variable-declaration': 'onespace'
      }
    ],
    // if 后面必须有 {，除非是单行 if
    'curly': [
      true,
      'ignore-same-line'
    ],
    // 禁止对 array 使用 for in 循环
    'no-for-in-array': true,
    // 禁止没必要的 return await
    'no-return-await': true,
    // 禁止在数组中出现连续的逗号，如 let foo = [,,]
    'no-sparse-arrays': true,
    // switch 的 case 必须 return 或 break
    'no-switch-case-fall-through': true,
    // 禁止 finally 内出现 return, continue, break, throw 等
    // finally 会比 catch 先执行
    'no-unsafe-finally': true,
    // 禁止无用的表达式
    'no-unused-expression': true,

    // 变量必须先定义后使用
    'no-use-before-declare': true,
    // 禁止使用 var
    'no-var-keyword': true,
    // parseInt 必须传入第二个参数
    'radix': true,
    // 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
    'triple-equals': [
      true,
      'allow-null-check'
    ],
    'cyclomatic-complexity': [
      true,
      20
    ],
    // 行尾必做有分号
    'semicolon': false,
    // 文件最后一行必须要多一行
    "eofline": false,
    // 禁止使用废弃（被标识了 @deprecated）的 API
    'deprecation': true,
    // 一个缩进必须用2个空格替代
    "indent": [true, "spaces", 2],
    // 禁止出现重复的 import
    'no-duplicate-imports': true,
    // 禁止一个文件中出现多个相同的 namespace
    'no-mergeable-namespace': true,
    'align': false,
    // 限制必须使用 T[] 或 Array<T> 之中的一种来定义数组的类型
    'array-type': false,
    // 箭头函数的参数必须有小括号
    'arrow-parens': false,
    // 箭头函数的函数体只有 return 语句的时候，必须简写
    'arrow-return-shorthand': false,
    // 类名与接口名必须为驼峰式
    'class-name': true,
    // 限制单行注释的规则
    'comment-format': false,
    // 类、函数、方法、属性必须写注释
    'completed-docs': false,
    // 文件类型必须时 utf-8
    'encoding': true,
    // 注释必须符合 JSDoc 规范
    'jsdoc-format': false,
    // new 后面只必须有一个空格
    'new-parens': true,
    // 禁止连续超过三行空行
    'no-consecutive-blank-lines': [
      true,
      5
    ],
    // 定义过的变量必做使用
    'no-unused-variable': false,
    // 禁止行尾有空格
    'no-trailing-whitespace': false,
    // 对象的 key 必须用引号包起来
    'object-literal-key-quotes': false,
    // 变量申明必须每行一个，for 循环的初始条件中除外
    'one-variable-per-declaration': [
      true,
      'ignore-for-loop'
    ],
    // if 后的 { 禁止换行
    'one-line': true,
    // 必须使用单引号，jsx 中必须使用双引号
    'quotemark': [
      true,
      'single',
      'jsx-double',
      'avoid-template',
      'avoid-escape'
    ],
    // 函数名前必须有空格
    'space-before-function-paren': [
      true,
      'asyncArrow'
    ],
    // 括号内首尾禁止有空格
    'space-within-parens': [
      true,
      0
    ],
    'whitespace': [
      true,
      'check-branch',
      'check-decl',
      'check-operator',
      'check-module',
      'check-separator',
      'check-rest-spread',
      'check-type',
      'check-typecast',
      'check-type-operator',
      'check-preblock'
    ]
  }
};
