### Image 图片
用于渲染图片的组件：


### 基础用法
适用广泛的条形码

:::demo 使用`sourceCode`属性来定义 条形码数值。

```html
<template>
  <div >
	  <w-image src="https://pic.imgdb.cn/item/63919df3b1fccdcd36c4ff26.jpg" class="image"></w-image>
  </div>
</template>
<style>
.image { 
  width: 200px;
}
</style>
:::

### 图片读取失败

:::demo 当图片读取失败, 会显示默认图片

```html
<template>
  <div >
	  <w-image class="image"></w-image>
  </div>
</template>
<style>
.image { 
  width: 200px;
}
</style>
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| src | 图片路径   | string  |         |        |

