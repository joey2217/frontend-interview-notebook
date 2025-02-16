---
id: equality-comparisons-and-sameness
title: 相等性判断
sidebar_label: 相等性判断
---

ES2015 中有四种相等算法：

- 非严格相等比较 (==)
- 严格相等比较 (===): 用于 `Array.prototype.indexOf`, `Array.prototype.lastIndexOf`, 和 `case-matching`
- 同值零: 用于 `TypedArray` 和 `ArrayBuffer` 构造函数、以及`Map`和`Set`操作, 并将用于 `ES2016/ES7` 中的`String.prototype.includes`
- 同值: 用于所有其他地方

JavaScript 提供三种不同的值比较操作：

- 严格相等 ("triple equals" 或 "identity")，使用 ===
- 宽松相等 ("double equals") ，使用 ==
- Object.is （ECMAScript 2015/ ES6 新特性）

选择使用哪个操作取决于你需要什么样的比较。

简而言之，在比较两件事情时，双等号将执行类型转换; 三等号将进行相同的比较，而不进行类型转换 (如果类型不同, 只是总会返回 `false` ); 而`Object.is`的行为方式与三等号相同，但是对于`NaN`和`-0`和`+0`进行特殊处理，所以最后两个不相同，而`Object.is（NaN，NaN）`将为 `true`。(通常使用双等号或三等号将 NaN 与 NaN 进行比较，结果为`false`，因为`IEEE 754`如是说.) 请注意，所有这些之间的区别都与其处理原语有关; 这三个运算符的原语中，没有一个会比较两个变量是否结构上概念类似。对于任意两个不同的非原始对象，即便他们有相同的结构， 以上三个运算符都会计算得到 `false` 。

## 判等

|         X         |         Y         | `==`  | `===` | `Object.is` |
| :---------------: | :---------------: | :---: | :---: | :---------: |
|     undefined     |     undefined     | true  | true  |    true     |
|       null        |       null        | true  | true  |    true     |
|       true        |       true        | true  | true  |    true     |
|       false       |       false       | true  | true  |    true     |
|       "foo"       |       "foo"       | true  | true  |    true     |
|         0         |         0         | true  | true  |    true     |
|        +0         |        -0         | true  | true  |    false    |
|         0         |       false       | true  | false |    false    |
|        ""         |       false       | true  | false |    false    |
|        ""         |         0         | true  | false |    false    |
|        "0"        |         0         | true  | false |    false    |
|       "17"        |        17         | true  | false |    false    |
|       [1,2]       |       "1,2"       | true  | false |    false    |
| new String("foo") |       "foo"       | true  | false |    false    |
|       null        |     undefined     | true  | false |    false    |
|       null        |       false       | false | false |    false    |
|     undefined     |       false       | false | false |    false    |
| `{ foo: "bar" } ` | `{ foo: "bar" }`  | false | false |    false    |
| new String("foo") | new String("foo") | false | false |    false    |
|         0         |       null        | false | false |    false    |
|         0         |        NaN        | false | false |    false    |
|       "foo"       |        NaN        | false | false |    false    |
|        NaN        |        NaN        | false | false |    true     |
