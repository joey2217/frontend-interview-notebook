---
id: js-prototype
title: 原型和继承
sidebar_label: 原型和继承
---

## 原型和继承

```js
function myNew(constructor, ...args) {
  const obj = {};
  obj.__proto__ = constructor.prototype;
  const ret = constructor.call(obj, ...args);
  return ret instanceof Object ? ret : obj;
}

function Fn() {}
var obj = new Fn();
console.log(obj.__proto__ === Fn.prototype);
// -> true
console.log(obj.__proto__.__proto__=== Object.prototype);
// -> true
console.log(obj.__proto__.__proto__.__proto__ === null);
// -> true
```