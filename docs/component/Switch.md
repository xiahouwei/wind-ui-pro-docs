### Switch 开关
表示两种相互对立的状态间的切换，多用于触发「开/关」。


### 基础用法
适用广泛的开关

:::demo 绑定v-model到一个Boolean类型的变量。可以使用active-color属性与inactive-color属性来设置开关的背景色。

```html
<w-switch
  v-model="value"
  :active-value='true'
  :inactive-value='false'
  active-color="#13ce66"
  inactive-color="#ff4949">
</w-switch>

<script>
  export default {
    data() {
      return {
        value: true
      }
    }
  };
</script>
:::

### 文字描述

:::demo 使用active-text属性与inactive-text属性来设置开关的文字描述。

```html
<template>
  <w-switch
    ref="switch"
    v-model="value"
    :active-value='true'
    :inactive-value='false'
    active-color="green"
    inactive-color="blue"
    active-text="多仓入库"
    inactive-text="单仓入库"
    :width="80"
  >
</w-switch>
</template>
<script>
  export default {
    data() {
      return {
        value: false
      }
    }
  };
</script>
:::

### 禁用状态

:::demo 设置disabled属性，接受一个Boolean，设置true即可禁用。

```html
<template>
  <w-switch
  v-model="value"
  :active-value='true'
  :inactive-value='false'
  disabled>
</w-switch>
</template>
<script>
  export default {
    data() {
      return {
        value: false
      }
    }
  };
</script>
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值   | string / number  | — | — |
| disabled | 禁用   | boolean  | — | false |
| width | switch 的宽度（像素）   | number  | — | 60 |
| active-text | switch 打开时的文字描述 | string  | — | — |
| inactive-text | switch 关闭时的文字描述 | string  | — | — |
| active-value | switch 打开时的值 | boolean / string / number  | — | 1 |
| inactive-value | switch 关闭时的值 | boolean / string / number  | — | 0 |
| active-color | switch 打开时的背景色 | string  | — | green |
| inactive-color | switch 关闭时的背景色 | string  | — | red |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | switch 状态发生变化时的回调函数  | 新状态的值 |

### Methods
| 方法名 | 说明 | 回调参数 |
|---------|--------|---------|
| focus | 使 Switch 获取焦点  | — |

