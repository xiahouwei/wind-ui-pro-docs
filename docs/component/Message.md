### Message 信息提示
用于提信息提示的组件：


### 信息提示用法

:::demo

```html
<template>
  <div >
	  <el-button type="primary" @click="onSuccessClick">Success</el-button>
	  <el-button type="warning" @click="onWarnClick">Warn</el-button>
	  <el-button type="danger" @click="onErrorClick">Error</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    onSuccessClick () {
      this.$fxMessage.success('成功信息')
    },
    onWarnClick () {
      this.$fxMessage.warning('警告信息')
    },
    onErrorClick () {
      this.$fxMessage.error('错误信息')
    }
  }
}
</script>

:::


### Options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| message | 消息文字 | string / VNode | — | — |
| iconClass | 自定义图标的类名，会覆盖 `type` | string | — | — |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理 | boolean | — | false |
| customClass | 自定义类名 | string | — | — |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number | — | 3000 |
| showClose | 是否显示关闭按钮 | boolean | — | false |
| center | 文字是否居中 | boolean | — | false |
| onClose | 关闭时的回调函数, 参数为被关闭的 message 实例 | function | — | — |
| offset | Message 距离窗口顶部的偏移量 | number | — | 20 |
