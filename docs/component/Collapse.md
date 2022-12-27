### Collapse 折叠面板
通过折叠面板收纳内容区域

### 基础用法
可同时展开多个面板，面板之间不影响

:::demo

```html
<template>
  <div>
	<w-collapse v-model="collapseVisible1" title="一致性 Consistency">
		<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    	<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
	</w-collapse>
	</br>
	<w-collapse v-model="collapseVisible2" title="反馈 Feedback">
		<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    	<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
	</w-collapse>
	</br>
	<w-collapse v-model="collapseVisible3" title="效率 Efficiency">
		<div>简化流程：设计简洁直观的操作流程；</div>
		<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
		<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
	</w-collapse>
	</br>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collapseVisible1: true,
      collapseVisible2: false,
      collapseVisible3: false
    }
  }
}
</script>
:::


### 自定义面板标题
除了可以通过 title 属性以外，还可以通过具名 slot 来实现自定义面板的标题内容，以实现增加图标等效果。

:::demo

```html
<template>
  <div>
	<w-collapse v-model="collapseVisible1">
		<template slot="title-slot">
			<span class="title-span">一致性 Consistency</span><w-icon type="auth-setting" class="title-icon"></w-icon>
		</template>
		<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    	<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
	</w-collapse>
	</br>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collapseVisible1: true
    }
  }
}
</script>
<style>
.title-span {
	margin-left: 20px;
}
.title-icon {
	margin-left: 10px;
}
</style>
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 当前激活的面板   | boolean  |   true / false  |        |
| title | 面板标题   | string  |  —   |    —    |
| disabled | 是否禁用   | boolean  |  true / false   |    false    |
| showArrow | 是否显示箭头   | boolean  |  true / false   |    true    |


### Slot
| name      | 说明    |
|---------- |-------- |
| — | 折叠面板内容   |
| title-slot | 折叠面板标题   |