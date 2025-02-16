---
sidebar_position: 1
---

# 面试题

> [高频前端面试题汇总之 HTML 篇](https://juejin.cn/post/6905294475539513352)

## JS 原型及原型链

```js
function Person() {}
Person.prototype.name = 'js'
Person.prototype.sayName = function () {
  alert(this.name)
}
var person1 = new Person()

//
person1.__proto__ == Person.prototype
String.__proto__ === Function.prototype
String.constructor == Function
```

<details>
  <summary>答案</summary>

```js
//JS 在创建对象的时候，都有一个__proto__ 的内置属性，用于指向创建它的构造函数的原型对象。
// 对象 person1 有一个 __proto__属性，创建它的构造函数是 Person，构造函数的原型对象是 Person.prototype
console.log(person1.__proto__ == Person.prototype) //true
//所有函数对象的__proto__都指向Function.prototype
String.__proto__ === Function.prototype // true
String.constructor == Function //true
```

</details>

![原型链](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/635ea06a5b6c43b1996f6f7d66b26b86~tplv-k3u1fbpfcp-watermark.awebp)

## JS 继承的几种方式

1. 原型继承

```js
function Parent() {
  this.name = 'Parent'
  this.sex = 'boy'
}
function Child() {
  this.name = 'child'
}
// 将子类的原型对象指向父类的实例
Child.prototype = new Parent()
//优：继承了父类的模板，又继承了父类的原型对象
//缺：1.无法实现多继承(因为已经指定了原型对象了)
//   2.创建子类时，无法向父类构造函数传参数
```

2. 构造函数继承

> 在子类构造函数内部使用 **call** 或 **apply** 来调用父类构造函数，复制父类的实例属性给子类。

```js
function Parent(name) {
  this.name = name
}
function Child() {
  //用.call 来改变 Parent 构造函数内的指向
  Parent.call(this, 'child')
}
//优：解决了原型链继承中子类实例共享父类引用对象的问题，实现多继承，创建子类实例时，可以向父类传递参数
//缺：构造继承只能继承父类的实例属性和方法，不能继承父类原型的属性和方法
```

3. 组合继承

> 组合继承就是将原型链继承与构造函数继承组合在一起。

- 使用原型链继承来保证子类能继承到父类原型中的属性和方法
- 使用构造继承来保证子类能继承到父类的实例属性和方法

```js
// ...
// 原型链继承
Child.prototype = new Parent()
// 构造继承
function Child() {
  Parent.call(this, ...arguments)
}
```

4. 寄生组合继承

```js
// ...
Child.prototype = Object.create(Parent.prototype)
```

5. class 继承

- **extends**
- **super**

```js
class Parent {
  constructor(name) {
    this.name = name
  }
  getName() {
    console.log(this.name)
  }
}
class Child extends Parent {
  constructor(name) {
    super(name)
    this.sex = 'boy'
  }
}
```

## [Event Loop 事件循环](https://www.ruanyifeng.com/blog/2014/10/event-loop.html)

同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；异步任务指的是，不进入主线程、而进入任务队列（task queue）的任务，只有等主线程任务执行完毕，任务队列开始通知主线程，请求执行任务，该任务才会进入主线程执行。

当某个宏任务执行完后,会查看是否有微任务队列。如果有，先执行微任务队列中的所有任务；如果没有，在执行环境栈中会读取宏任务队列中排在最前的任务；执行宏任务的过程中，遇到微任务，依次加入微任务队列。栈空后，再次读取微任务队列里的任务，依次类推。

:::note
同步（Promise）>异步（微任务（process.nextTick ，Promises.then, Promise.catch ，resove,reject,MutationObserver)>宏任务（setTimeout，setInterval，setImmediate））
:::

await 阻塞 后面的代码执行，因此跳出 async 函数执行下一个微任务
