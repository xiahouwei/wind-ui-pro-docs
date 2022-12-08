### Input 输入框

通过鼠标或键盘输入字符

:::warning
Input 为受控组件，它**总会显示 Vue 绑定值**。

通常情况下，应当处理 `input` 事件，并更新组件的绑定值（或使用`v-model`）。否则，输入框内显示的值将不会改变。

不支持 `v-model` 修饰符。
:::

### 基础用法

:::demo
```html
<w-input v-model="input" placeholder="请输入内容"></w-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
<style>
.el-input {
	width: 180px;
}
</style>
```
:::


### 禁用状态

:::demo 通过 `disabled` 属性指定是否禁用 input 组件
```html
<w-input
  placeholder="请输入内容"
  v-model="input"
  :disabled="true">
</w-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::

### 可清空

:::demo 使用`clearable`属性即可得到一个可清空的输入框

```html
<w-input
  placeholder="请输入内容"
  v-model="input"
  clearable>
</w-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```
:::

### 密码框

:::demo 使用`show-password`属性即可得到一个可切换显示隐藏的密码框

```html
<w-input placeholder="请输入密码" v-model="input" show-password></w-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
```
:::

### 带 icon 的输入框

带有图标标记输入类型

:::demo 可以通过 `prefix-icon` 和 `suffix-icon` 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。
```html
<div class="demo-input-suffix">
  属性方式：
  <w-input
    placeholder="请选择日期"
    suffix-icon="el-icon-date"
    v-model="input1">
  </w-input>
  <w-input
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    v-model="input2">
  </w-input>
</div>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: ''
    }
  }
}
</script>
```
:::

### 文本域

用于输入多行文本信息，通过将 `type` 属性的值指定为 textarea。

:::demo 文本域高度可通过 `rows` 属性控制
```html
<w-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="textarea">
</w-input>

<script>
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
</script>
```
:::

### 可自适应文本高度的文本域

通过设置 `autosize` 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 `autosize` 还可以设定为一个对象，指定最小行数和最大行数。

:::demo
```html
<w-input
  type="textarea"
  autosize
  placeholder="请输入内容"
  v-model="textarea1">
</w-input>
<div style="margin: 20px 0;"></div>
<w-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="请输入内容"
  v-model="textarea2">
</w-input>

<script>
export default {
  data() {
    return {
      textarea1: '',
      textarea2: ''
    }
  }
}
</script>
```
:::

### 尺寸

:::demo 可通过 `size` 属性指定输入框的尺寸，提供了 medium、small 和 mini 三种尺寸。
```html
<div class="demo-input-size">
  <w-input
    size="medium"
    placeholder="请输入内容"
    suffix-icon="el-icon-date"
    v-model="input1">
  </w-input>
  <w-input
    size="small"
    placeholder="请输入内容"
    suffix-icon="el-icon-date"
    v-model="input2">
  </w-input>
  <w-input
    size="mini"
    placeholder="请输入内容"
    suffix-icon="el-icon-date"
    v-model="input3">
  </w-input>
</div>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: ''
    }
  }
}
</script>
```
:::

### 输入长度限制

:::demo  `maxlength` 用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。
```html
<w-input
  type="text"
  placeholder="请输入内容"
  v-model="text"
  :maxlength="10"
>
</w-input>
<div style="margin: 20px 0;"></div>
<w-input
  type="textarea"
  placeholder="请输入内容"
  v-model="textarea"
  :maxlength="30"
>
</w-input>

<script>
export default {
  data() {
    return {
      text: '',
      textarea: ''
    }
  }
}
</script>
```
:::

### 输入类型限制

:::demo  `regType` 用来限制输入框的字符类型，可填一种或多种`english,chinese,number,punctCH,punct`。
```html
<div style="margin-bottom:10px;">
	只能输入数字
	<w-input
		placeholder="请输入内容"
		v-model="text1"
		regType="number"
	>
	</w-input>
</div>
<div style="margin-bottom:10px;">
	只能输入中文
	<w-input
		placeholder="请输入内容"
		v-model="text2"
		regType="chinese"
	>
	</w-input>
</div>
<div>
	只能输入数字和英文
	<w-input
		placeholder="请输入内容"
		v-model="text3"
		regType="english,number"
	>
	</w-input>
</div>

<script>
export default {
  data() {
    return {
      text1: '',
      text2: '',
      text3: ''
    }
  }
}
</script>
```
:::

### Input Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type         | 类型   | string  | text，textarea 和其他 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text |
| value / v-model | 绑定值           | string / number  | — | — |
| maxlength     | 最大输入长度      | number          |  —  | — |
| placeholder   | 输入框占位文本    | string          | — | — |
| clearable     | 是否可清空        | boolean         | — | false |
| show-password | 是否显示切换密码图标| boolean         | — | false |
| disabled      | 禁用            | boolean         | — | false   |
| size          | 输入框尺寸，只在 `type!="textarea"` 时有效      | string          | medium / small / mini  | mini |
| prefix-icon   | 输入框头部图标    | string          | — | — |
| suffix-icon   | 输入框尾部图标    | string          | — | — |
| rows          | 输入框行数，只对 `type="textarea"` 有效  |  number | — |  2   |
| readonly | 原生属性，是否只读 | boolean | — | false |
| resize | 控制是否能被用户缩放 | string | none, both, horizontal, vertical | — |
| regType | 控制输入字符类型 | string | english,chinese,number,punctCH,punct | — |

### Input Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| change | 仅在输入框失去焦点或用户按下回车时触发 | (value: string \| number) |

### Input Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | — |
| blur | 使 input 失去焦点 | — |
