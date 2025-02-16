---
id: vue
title: vue
sidebar_label: vue
---

## 面试题

1. v-show 和 v-if 的区别

- v-show 通过 CSS display 控制显示和隐藏
- v-if 组件真正的渲染和摧毁,而不是显示和隐藏
- 频繁切换显示状态用 v-show ,否则用 v-if

2. 为何在 v-for 中用 key

- 必须同 key ,且不能是 index 和 random
- diff 算法中通过 tag 和 key 来判断, 是否是sameNode
- 减少渲染次数,提高渲染性能

3. Vue组件如何通讯

- 父子组件 props 和 this.$emit
- 自定义事件 event.$on event.$emit event.$off
- vuex

4. 组件渲染和更新的过程

![组件渲染和更新的过程](https://cn.vuejs.org/images/data.png)

5. MVVM的理解

![MVVM](../../static/docs/mvvm.png)

6. 为何组件 data 必须是一个函数

[官方文档](https://cn.vuejs.org/v2/guide/components.html#data-%E5%BF%85%E9%A1%BB%E6%98%AF%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0)

7. Vue 常见性能优化方式

- 合理使用v-show 和 v-if
- 合理使用 computed
- v-for 时加key , 以及避免和 v-if 同时使用
- 自定义事件,DOM 事件及时销毁
- 合理使用异步组件
- 合理使用 keep-alive
- data 层级不要太深