---
id: event-loop
title: Event Loop
sidebar_label: Event Loop
---

> JavaScript 是一个单线程的语言。(不能两个线程同时操作DOM)

## Event Loop 执行过程

1. 一开始整个脚本 script 作为一个宏任务执行
2. 执行过程中，同步代码 直接执行，宏任务 进入宏任务队列，微任务 进入微任务队列。
3. 当前宏任务执行完出队，检查微任务列表，有则依次执行，直到全部执行完毕。
4. 执行浏览器 UI 线程的渲染工作。
5. 检查是否有 Web Worker 任务，有则执行。
6. 执行完本轮的宏任务，回到步骤 2，依次循环，直到宏任务和微任务队列为空。

> 宏任务队列可以有多个，微任务队列只有一个。

- 宏任务

  - `script`
  - `setTimeout`
  - `setInterval`
  - `setImmediate`
  - `I/O`
  - `UI rendering`

- 微任务

  - `MutationObserver`
  - `Promise.then()/catch()`
  - 以 `Promise` 为基础开发的其他技术，例如 `fetch API`
  - V8 的垃圾回收过程
  - Node 独有的 process.nextTick

## requestAnimationFrame

> window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行

## Web Workers

> 通过使用Web Workers，Web应用程序可以在独立于主线程的后台线程中，运行一个脚本操作。这样做的好处是可以在独立线程中执行费时的处理任务，从而允许主线程（通常是UI线程）不会因此被阻塞/放慢。