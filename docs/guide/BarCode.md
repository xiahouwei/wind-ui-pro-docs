### BarCode 条形码
用于渲染条形码的组件：

:::demo 使用`barcode`属性来定义 条形码数值。

```html
<template>
  <div>
	<w-barcode :sourceCode="barcode"></w-barcode>
	<w-select></w-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      barcode: '0123456789'
    }
  },
  methods: {
	onClickBtn () {
		this.$fxConfirm('确定关闭？').then(() => {
			console.log('close')
		})
	}
  }
}
</script>
<style>

</style>
:::