---
id: proxy
title: Proxy 和 Reflect
sidebar_label: Proxy 和 Reflect
---

## Proxy

### 定义

> Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

### 语法

```js
let proxy = new Proxy(target, handler);
```

- `target` —— 是要包装的对象，可以是任何东西，包括函数。
- `handler` —— 代理配置：带有“钩子”（“traps”，即拦截操作的方法）的对象。比如 get 钩子用于读取 target 属性，set 钩子写入 target 属性等等。

:::tip
如果 handler 为空，则透明地将操作转发给 target。(直接访问 target)
:::

### handler 对象的方法(trap)

|        内部方法         |       Handler 方法       |                                           何时触发                                            |
| :---------------------: | :----------------------: | :-------------------------------------------------------------------------------------------: |
|        `[[Get]]`        |           get            |                                           读取属性                                            |
|        `[[Set]]`        |           set            |                                           写入属性                                            |
|    `[[HasProperty]]`    |          hasin           |                                            运算符                                             |
|      `[[Delete]]`       |          delete          |                                      Propertydelete 操作                                      |
|       `[[Call]]`        |          apply           |                                   proxy 对象作为函数被调用                                    |
|     `[[Construct]]`     |        construct         |                                           new 操作                                            |
|  `[[GetPrototypeOf]]`   |      getPrototypeOf      |                                     Object.getPrototypeOf                                     |
|  `[[SetPrototypeOf]]`   |      setPrototypeOf      |                                     Object.setPrototypeOf                                     |
|   `[[IsExtensible]]`    |       isExtensible       |                                      Object.isExtensible                                      |
| `[[PreventExtensions]]` |    preventExtensions     |                                   Object.preventExtensions                                    |
| `[[DefineOwnProperty]]` |      defineProperty      |                        Object.defineProperty, Object.defineProperties                         |
|  `[[GetOwnProperty]]`   | getOwnPropertyDescriptor |             Object.getOwnPropertyDescriptor, for..in, Object.keys/values/entries              |
|  `[[OwnPropertyKeys]]`  |         ownKeys          | Object.getOwnPropertyNames, Object.getOwnPropertySymbols, for..in, Object/keys/values/entries |

### handler.get()

> handler.get() 方法用于拦截对象的读取属性操作。

```js
let proxy = new Proxy(target, {
  get: function (target, property, receiver) {},
});
```

- `target`-目标对象。
- `property`-被获取的属性名。
- `receiver`-Proxy 或者继承 Proxy 的对象。

#### 拦截

该方法会拦截目标对象的以下操作:

- 访问属性: proxy[foo]和 proxy.bar
- 访问原型链上的属性: Object.create(proxy)[foo]
- Reflect.get()

### handler.set()

> handler.set() 方法是设置属性值操作的捕获器。

```js
const p = new Proxy(target, {
  set: function (target, property, value, receiver) {},
});
```

- `target`-目标对象。
- `property`-将被设置的属性名或 Symbol。
- `value`-新属性值。
- `receiver`-最初被调用的对象。通常是 proxy 本身，但 handler 的 set 方法也有可能在原型链上，或以其他方式被间接地调用（因此不一定是 proxy 本身）。

#### 返回

set() 方法应当返回一个布尔值。

- 返回 true 代表属性设置成功。
- 在严格模式下，如果 set() 方法返回 false，那么会抛出一个 TypeError 异常。

#### 拦截

该方法会拦截目标对象的以下操作:

- 指定属性值：proxy[foo] = bar 和 proxy.foo = bar
- 指定继承者的属性值：Object.create(proxy)[foo] = bar
- Reflect.set()

## Reflect

> Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与 proxy handlers 的方法相同。Reflect 不是一个函数对象，因此它是不可构造的。

### 静态方法

|       操作        |           Reflect 调用            |   内部方法    |
| :---------------: | :-------------------------------: | :-----------: |
|     obj[prop]     |      Reflect.get(obj, prop)       |    [[Get]]    |
| obj[prop] = value |   Reflect.set(obj, prop, value)   |    [[Set]]    |
| delete obj[prop]  | Reflect.deleteProperty(obj, prop) |  [[Delete]]   |
|   new F(value)    |    Reflect.construct(F, value)    | [[Construct]] |

## Object.defineProperty()

> Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

### 语法

```js
Object.defineProperty(obj, prop, descriptor)
```

- `obj` - 要定义属性的对象。
- `prop` - 要定义或修改的属性的名称或 Symbol 。
- `descriptor` - 要定义或修改的属性描述符。

### 返回值

被传递给函数的对象。

### descriptor

共享以下可选键值

- `configurable` 当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
- `enumerable` 当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。默认为 false。

数据描述符还具有以下可选键值：

- `value` 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
- `writable` 当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算符改变。默认为 false。

存取描述符还具有以下可选键值：

- `get` 属性的 getter 函数，如果没有 getter，则为 undefined。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 this 对象（由于继承关系，这里的this并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。默认为 undefined。
- `set` 属性的 setter 函数，如果没有 setter，则为 undefined。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 this 对象。
默认为 undefined。 
