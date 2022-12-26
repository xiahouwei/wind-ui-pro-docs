### ScrollBar 滚动条
滚动条容器


:::demo

```html
<template>
  <div class="container">
	<w-scroll-bar class="scroll-container">
		<div class="scroll-item">巴西，他们曾在1958、1962、1970、1994和2002年夺冠。</div>
		<div class="scroll-item">德国是4次夺冠，在1954、1974、1990和2014年夺冠。</div>
		<div class="scroll-item">意大利4次夺冠, 在1934、1938、1982和2006夺冠。</div>
		<div class="scroll-item">法国队2次夺冠，时间是1998年和2018年。</div>
		<div class="scroll-item">乌拉圭次夺冠，1930年和1950年。</div>
		<div class="scroll-item">英格兰1次夺冠，是1966年。</div>
		<div class="scroll-item">西班牙1次夺冠，是2010年。</div>
	</w-scroll-bar>
	</br>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  }
}
</script>
<style>
.container {
	height: 200px;
}
.scroll-item {
	height: 50px;
	line-height: 50px;
	width: 900px
}
</style>
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| height | scroll-bar高度   | string  |   |  100%      |
| flex | 是否为flex布局   | boolean  |   | false  |
| wrapClass | wrap类名   | string  |   |  |
