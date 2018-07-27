# 为什么使用 tslint

`ts` 项目本身具备很强的静态错误检查能力，配合 `tslint` 工具，更可以避免一些写法上的常见错误及统一代码风格，增加项目可读性、可维护性，在运行前减少一些不必要的错误，提升整体代码质量。

tslint 更多详细介绍 [https://github.com/palantir/tslint](https://github.com/palantir/tslint)

# tslint-config-info

`tslint-config-info` 在 `tslint:recommended` 推荐的静态错误检查及代码风格上做了相应的增减，适合团队使用。

其中 `tslint:recommended` 中默认开启的配置如下：

[https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts](https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts)

在此基础上增加的相关配置如下：

``` javascript
{
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
}
```

tslint-react 更多详细介绍 [https://github.com/palantir/tslint-react](https://github.com/palantir/tslint-react)

# 如何使用

## 安装

```
npm install --save-dev tslint-config-info
```

## 配置文件

在项目根目录中新建文件 `tslint.json` 配置文件 

### 普通 ts 项目

``` javascript
// tslint.json
{
  "root": true,
  "extends": "tslint-config-info",
  "rules": {
    //这里可根据项目实际需求，添加和覆盖相应的规则
    // ...
  }
}
```

### typescript + react 项目

``` javascript
// tslint.json
{
  "root": true,
  "extends": "tslint-config-info/react",
  "rules": {
    //这里可根据项目实际需求，添加和覆盖相应的规则
    // ...
  }
}
```

其中对于 `JSX` 的检测添加了 `tslint-react` 插件支持，默认开启的配置如下：

``` javascript
{
  rules: {
    "jsx-alignment": true,
    "jsx-boolean-value": true,
    "jsx-curly-spacing": [true, "never"],
    "jsx-equals-spacing": [true, "never"],
    "jsx-key": true,
    "jsx-no-bind": true,
    "jsx-no-lambda": true,
    "jsx-no-multiline-js": true,
    "jsx-no-string-ref": true,
    "jsx-self-close": true,
    "jsx-wrap-multiline": true
  }
}
```

### 非 ts 项目，可以使用 eslint-config-info

具体使用详见 [https://github.com/zhangchen2397/eslint-config-info](https://github.com/zhangchen2397/eslint-config-info)


## 执行脚本

``` 
// 在 package.json script 中添加
// 需要先在项目根目录下配置好 tsconfig.json 配置文件
"lint": "tslint -p tsconfig.json src/**/*.{ts,tsx}"

// 或者
"lint": "tslint -c tslint.json src/**/*.{ts,tsx}"
```

![tips](http://3gimg.qq.com/wap30/qb-rnc/ts-tips.jpeg)

## 临时屏蔽规则

``` javascript
// tslint:disable-next-line no-var-keyword
var tslint = 'tslint';
```

# 配合编辑器高亮提示

`vscode`, `webstorm` 都有相应的插件，当项目配置了相应的 `tslint.json` 配置文件时，会即可高亮提示，非常方便。

由于 `vscode` 和 `typescript` 都是由 `Microsost` 开发，`vscode` 对 `ts` 的支持非常友好。

![tips](http://3gimg.qq.com/wap30/qb-rnc/vsc-code-tips.jpeg)

# 几种常见错误检测举例

``` javascript
// no-cond-assign 禁止条件表达式中出现赋值操作符
// Check the user's job title
if (user.jobTitle = "manager") {
  // user.jobTitle is now incorrect
}

// no-constant-condition 禁止在条件中使用常量表达式
if (false) {
  doSomethingUnfinished();
}
	
// no-unmodified-loop-condition 禁用一成不变的循环条件
while (node) {
  doSomething(node);
}
node = other;

for (var j = 0; j < items.length; ++i) {
  doSomething(items[j]);
}

while (node !== root) {
  doSomething(node);
}

// radix 强制在parseInt()使用基数参数
var num = parseInt("071");   // 57

// no-return-await 禁止没必要的 return await
async function foo() {
  return await bar();
}

// eqeqeq 要求使用 === 和 !==
if (x == 42) { }
if ("" == text) { }
if (obj.getStuff() != undefined) { }
```

# 集成至开发流程及工具中

如果强制要求，可以把检测过程添加到 `git` 流程中，检测到有 `error` 时，不允许提交。
