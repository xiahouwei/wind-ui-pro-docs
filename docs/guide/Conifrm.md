### Confirm 确认框
用于提示用户确认框的组件：


### 确认用法

:::demo

```html
<template>
  <div >
	  <el-button @click="onConfirmClick">Confirm</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    onConfirmClick () {
      this.$fxConfirm('是否确认').then(() => {
        console.log('confirm')
      })
    }
  }
}
</script>

:::

### 提示用法

:::demo 

```html
<template>
  <div >
	  <el-button @click="onAlertClick">Alert</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    onAlertClick (treeItem) {
      this.$fxAlert('确认内容').then(() => {
        console.log('alert')
      })
    },
    // onConfirmClick (treeItem) {
    //   this.$fxPrompt('是否确认')
    // }
  }
}
</script>
:::

### 输入内容用法

:::demo 

```html
<template>
  <div >
	  <el-button @click="onPromptClick">Prompt</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    onPromptClick (treeItem) {
      this.$fxPrompt('是否确认').then((res) => {
        console.log('prompt', res)
      })
    }
  }
}
</script>
:::


### Options

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题 | string | — | — |
| message | 消息正文内容 | string / VNode | — | — |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理 | boolean | — | false |
| type | 消息类型，用于显示图标 | string | success / info / warning / error | — |
| iconClass | 自定义图标的类名，会覆盖 `type` | string | — | — |
| customClass | 自定义类名 | string | — | — |
| showClose | 是否显示右上角关闭按钮 | boolean | — | true |
| distinguishCancelAndClose | 是否将取消（点击取消按钮）与关闭（点击关闭按钮或遮罩层、按下 ESC 键）进行区分 | boolean | — | false |
| lockScroll | 是否在 Confirm 出现时将 body 滚动锁定 | boolean | — | true |
| showCancelButton | 是否显示取消按钮 | boolean | — | false（以 confirm 和 prompt 方式调用时为 true） |
| showConfirmButton | 是否显示确定按钮 | boolean | — | true |
| cancelButtonText | 取消按钮的文本内容 | string | — | 取消 |
| confirmButtonText | 确定按钮的文本内容 | string | — | 确定 |
| cancelButtonClass | 取消按钮的自定义类名 | string | — | — |
| confirmButtonClass | 确定按钮的自定义类名 | string | — | — |
| closeOnClickModal | 是否可通过点击遮罩关闭 Confirm | boolean | — | true（以 alert 方式调用时为 false） |
| closeOnPressEscape | 是否可通过按下 ESC 键关闭 Confirm | boolean | — | true（以 alert 方式调用时为 false） |
| inputPlaceholder | 输入框的占位符 | string | — | — |
| inputType | 输入框的类型 | string | — | text |
| inputValue | 输入框的初始文本 | string | — | — |
| inputPattern | 输入框的校验表达式 | regexp | — | — |
| inputValidator | 输入框的校验函数。可以返回布尔值或字符串，若返回一个字符串, 则返回结果会被赋值给 inputErrorMessage | function | — | — |
| inputErrorMessage | 校验未通过时的提示文本 | string | — | 输入的数据不合法! |
| center | 是否居中布局 | boolean | — | false |
| roundButton | 是否使用圆角按钮 | boolean | — | false |


