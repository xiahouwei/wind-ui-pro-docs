### Tag 标签
用于渲染条标签的组件：


### 基础用法

:::demo 

```html
<template>
  <div >
	  <w-tag>未审核</w-tag>
  </div>
</template>
:::

### 关闭选项

:::demo 使用`closable`属性来开启关闭按钮。

```html
<template>
  <div >
	  <w-tag closable>已审核</w-tag>
  </div>
</template>
:::




### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| closable | 是否可关闭   | boolean  |         |     false   |
| disabled | 是否禁用   | boolean  |         |     false   |
| maxWidth | 条码间隔   | 100  |         |     最大宽度   |
| showTitle | 是否显示title   | boolean  |         |     true   |



### Events
| 事件名称 | 说明 | 回调参数 |
|--------|------|--------|
| close | 点击关闭按钮触发 ||
| click | 点击触发 ||

