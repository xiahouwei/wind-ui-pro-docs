### Upload 上传文件预
用于上传文件的组件：


### 基础用法

:::demo

```html
<template>
  <div >
    <w-upload
			ref="upload"
      :fileList="fileList"
			@on-file-click="onFileClick"
			@on-change="onFileChange"
		></w-upload>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileList: ['https://pic.imgdb.cn/item/63919df3b1fccdcd36c4ff26.jpg']
    }
  },
  methods: {
    onFileClick (item, index, type) {
      window.open(item)
    },
    onFileChange (fileList) {
      console.log(fileList)
    }
  }
}
</script>
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| fileList | 文件数组   | Array  |         |       |
| fileSize | 上传文件的大小限制   | number  |    | 1 (M)   |
| limit | 最大上传数量   | boolean  |    | 3   |
| disabled | 是否禁用上传功能   | boolean  |    | false   |
| type | 上传文件类型   | boolean  |    | file   |


### Events
| 事件名称 | 说明 | 回调参数 |
|--------|------|--------|
| on-file-click | 点击文件时触发 | item文件地址, index文件索引, type文件类型 |
| on-change | 删除/上传文件后触发 | 文件数组 |
