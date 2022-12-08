### QrCode 二维码
用于渲染二维码的组件：


### 基础用法
适用广泛的二维码

:::demo 使用`sourceText`属性来定义 二维码数值。

```html
<template>
  <div >
	  <w-qr-code :sourceText="qrCodeText" class="qr-code__content"></w-qr-code>
  </div>
</template>
<script>
export default {
  data() {
    return {
      qrCodeText: '1234567890123456789'
    }
  }
}
</script>
:::

### 宽度选项

:::demo 使用`width`属性来定义 二维码的大小。

```html
<template>
  <div >
	   <w-qr-code :sourceText="qrCodeText" :width="400" class="qr-code__content"></w-qr-code>
  </div>
</template>
<script>
export default {
  data() {
    return {
      qrCodeText: '1234567890123456789'
    }
  }
}
</script>
:::




### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| qrCodeText | 条码值   | string  |         |        |
| width | 条码间隔   | number  |         |     200   |

