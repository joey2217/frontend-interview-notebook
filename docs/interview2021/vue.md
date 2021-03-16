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