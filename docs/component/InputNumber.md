### InputNumber 数字输入框
仅允许输入标准的数字值，可定义范围。


### 基础用法

:::demo 要使用它，只需要使用v-model绑定变量即可，变量的初始值即为默认值。

```html
<template>
  <w-input-number
	v-model="value"
	placeholder="请输入"
  >
</w-input-number>
</template>
<script>
  export default {
    data() {
      return {
        value: ''
      }
    }
  };
</script>
```
:::

### 禁用状态

:::demo disabled属性接受一个Boolean，设置为true即可禁用整个组件。

```html
<template>
  <w-input-number
	v-model="value"
	placeholder="请输入"
	disabled
  >
</w-input-number>
</template>
<script>
  export default {
    data() {
      return {
        value: 1
      }
    }
  };
</script>
```
:::

### 输入范围

:::demo 如果你只需要控制数值在某一范围内，可以设置min属性和max属性。

```html
<template>
  <w-input-number 
    :max="50"
    :min="10"
	v-model="value"
	placeholder="请输入"
  >
</w-input-number>
</template>
<script>
  export default {
    data() {
      return {
        value: 50
      }
    }
  };
</script>
```
:::

### 精度

:::demo intLength 属性可以控制整数位 pointSize 属性可以控制小数位。

```html
<template>
  <w-input-number
	v-model="value"
	placeholder="请输入"
    intLength="4"
    pointSize="2"
  >
</w-input-number>
</template>
<script>
  export default {
    data() {
      return {
        value: 1000.01
      }
    }
  };
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值   | string / number  | — | — |
| integer | 是否整数  | boolean | — | false |
| max | 设置允许的最大值  | string / number  | — | — |
| min | 设置允许的最小值 | string / number  | — | — |
| intLength | 设置整数位数 | string / number  | — | 8 |
| pointSize | 设置小数位数 | string / number  | — | 4 |
| size  | 尺寸  | string  | 	large, small | mini |
| disabled | 禁用   | boolean | — | false |
| defaultValue | 默认值 | string / number  | — | — |
| placeholder | 输入框默认 | 	string  | — | 请输入 |
| asyncChange | 是否异步更新(手动) | Boolean  | — | false |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 绑定值被改变时触发 | currentValue, oldValue |
| blur | 在组件 Input 失去焦点时触发 | (event: Event) |
| focus | 在组件 Input 获得焦点时触发 | (event: Event) |

### Methods
| 方法名 | 说明 | 回调参数 |
|---------|--------|---------|
| blur | 使 input 失去焦点  | — |
| focus | 使 input 获取焦点  | — |
