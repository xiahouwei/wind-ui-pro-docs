### Icon 图标
用于渲染icon的组件

### 基础用法

::: demo
```html
<w-icon
  width="40px"
  height="40px"
  type="auth-setting"
></w-icon>
<w-icon
  width="40px"
  height="40px"
  type="connect-employee"
></w-icon>
```
:::

### 可点击

::: demo
```html
<template>
  <w-icon
    type="star"
    pointer
    width="40px"
    height="40px"
    @click="onIconClick"
  ></w-icon>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    onIconClick () {
      this.$fxMessage.success('点击了')
    }
  }
}
</script>
```
:::

### 禁止状态

::: demo
```html
<w-icon
  disabled
  width="40px"
  height="40px"
  type="file-type-word"
></w-icon>
```
:::

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----|-----|------|-------|------ |
| imgUrl | 需要展示icon的地址 | require() | — | — |
| width | 宽度 | string | — | — |
| height | 高度 | string | — | — |
| size | 尺寸 | string | normal / mini | normal |
| stop | 点击是否阻止冒泡 | boolean | — | — |
| pointer | 是否开启可点击状态 | boolean | — | — |
| verticalAlign | 是否开启垂直居中展示 | boolean | — | — |
| disabled | 是否禁止点击 | boolean | — | — |

### Events
| 事件名称 | 说明 | 回调参数 |
|--------|------|--------|
| click | 点击时触发 | — |
