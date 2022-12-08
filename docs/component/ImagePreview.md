### ImagePreview 图片预览
用于预览图片的组件：


### 基础用法

:::demo

```html
<template>
  <div >
    <el-button type="primary" @click="onImagePreviewClick">图片预览</el-button>
    <w-image-preview
      v-model="visible"
      :imageUrl="imageUrl"
    ></w-image-preview>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      imageUrl: 'https://pic.imgdb.cn/item/63919df3b1fccdcd36c4ff26.jpg'
    }
  },
  methods: {
    onImagePreviewClick () {
      this.visible = true
    }
  }
}
</script>
:::

### 禁用删除/更换图片

:::demo

```html
<template>
  <div >
    <el-button type="primary" @click="onImagePreviewClick">图片预览</el-button>
    <w-image-preview
      v-model="visible"
      :imageUrl="imageUrl"
      disabled
    ></w-image-preview>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      imageUrl: 'https://pic.imgdb.cn/item/63919df3b1fccdcd36c4ff26.jpg'
    }
  },
  methods: {
    onImagePreviewClick () {
      this.visible = true
    }
  }
}
</script>
:::



### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| visible | 是否显示图片预览窗口   | boolean  |         |    false    |
| imageUrl | 图片路径   | string  |         |        |
| deleteText | 删除图片提示文本   | string  |    | 确认后，附件内容将被删除，确认是否删除？   |
| fileSize | 上传图片的大小限制   | number  |    | 1 (M)   |
| disabled | 是否禁用更换图片,和删除图片   | boolean  |    | false   |

