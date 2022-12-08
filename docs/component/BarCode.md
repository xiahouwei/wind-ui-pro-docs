### BarCode 条形码
用于渲染条形码的组件：


### 基础用法
适用广泛的条形码

:::demo 使用`sourceCode`属性来定义 条形码数值。

```html
<template>
  <div >
	<w-barcode :sourceCode="barcode"></w-barcode>
  </div>
</template>
<script>
export default {
  data() {
    return {
      barcode: '0123456789'
    }
  }
}
</script>
:::

### 宽度选项

:::demo 使用`width`属性来定义 条形码宽度间隔。

```html
<template>
  <div >
	<w-barcode :sourceCode="barcode" :width="4"></w-barcode>
  </div>
</template>
<script>
export default {
  data() {
    return {
      barcode: '0123456789'
    }
  }
}
</script>
:::

### 高度选项

:::demo 使用`height`属性来定义 条形码高度。

```html
<template>
  <div >
	<w-barcode :sourceCode="barcode" :height="20"></w-barcode>
  </div>
</template>
<script>
export default {
  data() {
    return {
      barcode: '0123456789'
    }
  }
}
</script>
:::

### 字号选项

:::demo 使用`fontSize`属性来定义 条形码的字体大小。

```html
<template>
  <div >
	<w-barcode :sourceCode="barcode" :fontSize="20"></w-barcode>
  </div>
</template>
<script>
export default {
  data() {
    return {
      barcode: '0123456789'
    }
  }
}
</script>
:::

### 文本选项

:::demo 使用`displayValue`属性来定义 条形码的文本是否显示。

```html
<template>
  <div >
	<w-barcode :sourceCode="barcode" :displayValue="false"></w-barcode>
  </div>
</template>
<script>
export default {
  data() {
    return {
      barcode: '0123456789'
    }
  }
}
</script>
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| sourceCode | 条码值   | string  |         |        |
| width | 条码间隔   | number  |         |     2   |
| height | 条码高度  | number  |         |     50   |
| fontSize | 条码字体   | number  |         |   14     |
| format | 条码类型   | string  | All, CODE128 ,CODE39 ,EAN / UPC, ITF  ,MSI ,Pharmacode  |   CODE128     |
| displayValue | 条码值是否显示   | boolean  |   true/false      |    true    |

