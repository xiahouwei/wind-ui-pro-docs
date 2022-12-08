### Popover 弹出框

### 基础用法
Popover 是基于`Vue-popper`开发的，部分属性请参考 Tooltip 的文档，在此文档中不做详尽解释。

:::demo `trigger`属性用于设置何时触发 Popover，支持四种触发方式：`hover`，`click`，`focus` 和 `manual`。对于触发 Popover 的元素，使用 `slot="reference"` 的具名插槽。
```html
<template>
  <w-popover
    placement="top-start"
    title="标题"
    width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    <el-button slot="reference">hover 激活</el-button>
  </w-popover>

  <w-popover
    placement="bottom"
    title="标题"
    width="200"
    trigger="click"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    <el-button slot="reference">click 激活</el-button>
  </w-popover>

  <w-popover
    placement="right"
    title="标题"
    width="200"
    trigger="focus"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    <el-button slot="reference">focus 激活</el-button>
  </w-popover>

  <w-popover
    placement="bottom"
    title="标题"
    width="200"
    trigger="manual"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    v-model="visible">
    <el-button slot="reference" @click="visible = !visible">手动激活</el-button>
  </w-popover>
</template>

<script>
  export default {
    data() {
      return {
        visible: false
      };
    }
  };
</script>
```
:::

### 嵌套信息

可以在 Popover 中嵌套多种类型信息，以下为嵌套选择框的例子。

:::demo 利用分发取代`content`属性
```html
<template>
  <w-popover
    placement="right"
    width="400"
    trigger="click">
    <w-select
      v-model="value"
      :optionlist="optionlist"
    >
    </w-select>
    <el-button slot="reference">click 激活</el-button>
  </w-popover>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        optionlist: [{
          id: 1,
          name: '选项一'
        }, {
          id: 2,
          name: '选项二'
        }, {
          id: 3,
          name: '选项三'
        }, {
          id: 4,
          name: '选项四'
        }, {
          id: 5,
          name: '选项五'
        }]
      };
    }
  };
</script>
```
:::

### 嵌套操作

当然，你还可以嵌套操作，这相比 Dialog 更为轻量：

:::demo
```html
<template>
  <w-popover
    placement="top"
    width="160"
    v-model="visible">
    <p>这是一段内容这是一段内容确定删除吗？</p>
    <div style="text-align: right; margin: 0">
      <el-button size="mini" type="text" @click="visible = false">取消</el-button>
      <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
    </div>
    <el-button slot="reference">删除</el-button>
  </w-popover>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
      };
    }
  }
</script>
```
:::

### Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| trigger | 触发方式 | String  | click/focus/hover/manual |    click    |
|  title              | 标题 | String | — | — |
|  content        |  显示的内容，也可以通过 `slot` 传入 DOM   | String            | — | — |
|  width        |  宽度  | String, Number            | — | 最小宽度 150px |
|  placement        |  出现位置  | String | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end |  bottom |
|  disabled       |  Popover 是否可用  | Boolean           | — |  false |
|  value / v-model        |  状态是否可见  | Boolean           | — |  false |
|  offset        |  出现位置的偏移量  | Number           | — |  0 |
|  transition     |  定义渐变动画      | String             | — | fade-in-linear |
|  visible-arrow   |  是否显示 Tooltip 箭头，更多参数可见[Vue-popper](https://github.com/element-component/vue-popper) | Boolean | — | true |
|  popper-options        | [popper.js](https://popper.js.org/docs/v2/) 的参数 | Object            | 参考 [popper.js](https://popper.js.org/docs/v2/) 文档 | `{ boundariesElement: 'body', gpuAcceleration: false }` |
| popper-class | 为 popper 添加类名 | String | — | — |
| open-delay | 触发方式为 hover 时的显示延迟，单位为毫秒 | Number | — | — |
| close-delay | 触发方式为 hover 时的隐藏延迟，单位为毫秒 | number | — | 200 |
| tabindex   | Popover 组件的 [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) | number | — | 0 |
| scrollClose  | 页面滚动自动关闭 | Boolean | — | true |

### Slot
| 参数 | 说明 |
|--- | ---|
| — | Popover 内嵌 HTML 文本 |
| reference | 触发 Popover 显示的 HTML 元素 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| show | 显示时触发 | — |
| after-enter | 显示动画播放完毕后触发 | — |
| hide | 隐藏时触发 | — |
| after-leave | 隐藏动画播放完毕后触发 | — |
