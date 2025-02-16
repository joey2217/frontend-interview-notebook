---
slug: high-order-combinedFetcher
title: 实现高阶函数combinedFetcher
authors:
  - joey
---

## 问题描述

`A fetcher is`

```js
function fetcher(arg, cb){
    let res = fetch(arg);
    cb(res);
}
```

Write a higher-order function combinedFetcher, using callback to get all the fetched data.

```js
const fetchFruitsAndDrinks = combinedFetcher("fruits", "drinks");
fetchFruitsAndDrinks(console.log);
```

<!--truncate-->

## 参考实现

```js
function fetch(arg) {
  return `response with: ${arg}`;
}
function fetcher(arg, cb){
    let res = fetch(arg);
    cb(res);
}
function combinedFetcher(...args) {
  const len = args.length;
  let cnt = 0;
  const res  = [];
  function innerCB(r, cb) {
    cnt++;
    res.push(r)
    if(cnt === len) cb(res);
  }

  return cb => args.forEach(arg => fetcher(arg, r => innerCB(r, cb)));
}

const fetchFruitsAndDrinks = combinedFetcher("fruits", "drinks");
fetchFruitsAndDrinks(console.log)
```