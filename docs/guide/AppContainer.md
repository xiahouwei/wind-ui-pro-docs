### AppContainer 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

:::demo 使用`direction`属性来定义 布局 的垂直, 居中。

```html
<template>
  <div>
	<w-app-container direction="row">
		<div class="context-1">row context</div>
		<div class="context-2">row context</div>
		<div class="context-1">row context</div>
		<div class="context-2">row context</div>
	</w-app-container>
	</br>
	</br>
	</br>
    <w-app-container direction="column">
		<div class="context-1">row context</div>
		<div class="context-2">row context</div>
		<div class="context-1">row context</div>
		<div class="context-2">row context</div>
	</w-app-container>
  </div>
</template>
<style>
.context-1 {
	flex: 1;
	background-color:#d3dce6;
  	text-align: center;
	height: 50px;
	line-height: 50px;
}
.context-2 {
	flex: 1;
	background-color:#e9eef3;
  	text-align: center;
	height: 50px;
	line-height: 50px;
}
</style>
:::






### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| direction | 垂直/居中   | string  |   row / column            |    column     |
