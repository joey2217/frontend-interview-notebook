---
slug: debounce-decorator
title: Debounce装饰器
authors: [joey]
tags: [debounce, decorator]
---

## 问题描述

实现一个`debounce`装饰器

<!--truncate-->

## 参考实现

```ts
/**
 * 装饰器的debounce
 * @param {Number} delay
 */
export function debounce(delay: number): Function {
  return (
    target: Function,
    propertyKey: string,
    propertyDesciptor: PropertyDescriptor
  ) => {
    const method = propertyDesciptor.value
    let timer = null
    propertyDesciptor.value = (...args) => {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      timer = setTimeout(() => method(...args), delay)
    }
    return propertyDesciptor
  }
}
```

## 单元测试

```ts
import { debounce } from './index'

jest.useFakeTimers()

let a: any
let mockFunc: jest.Mock
beforeEach(() => {
  mockFunc = jest.fn()
  class Test {
    @debounce(1000)
    sayHi() {
      mockFunc()
    }
  }
  a = new Test()
})

describe('debounce:', () => {
  test('debounced function should be called after the delay time', () => {
    a.sayHi()
    expect(mockFunc).toHaveBeenCalledTimes(0)
    jest.advanceTimersByTime(1000)
    expect(mockFunc).toHaveBeenCalledTimes(1)
  })

  test('debounced function should not be called before the delay time', () => {
    a.sayHi()
    expect(mockFunc).toHaveBeenCalledTimes(0)
    let count = 100
    while (count--) {
      a.sayHi()
    }
    expect(mockFunc).toHaveBeenCalledTimes(0)

    count = 100
    while (count--) {
      jest.advanceTimersByTime(999)
      a.sayHi()
    }
    expect(mockFunc).toHaveBeenCalledTimes(0)
  })
})
```
