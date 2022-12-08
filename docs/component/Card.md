::: demo 此处放置代码示例的描述信息，支持 `Markdown` 语法，**描述信息只支持单行**
```html
<template>
  <div class="red-center-text">
	<p>{{ message }}</p>
	<input v-model="message" placeholder="Input something..."/>
	<w-app-container direction="row">
		<el-button size="mini" type="primary">test-btn</el-button>
		<el-button size="mini" type="primary">test-btn</el-button>
		<el-button size="mini" type="primary">test-btn</el-button>
		<el-button size="mini" type="primary">test-btn</el-button>
	</w-app-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello Vue'
    }
  }
}
</script>
<style>
.red-center-text { 
  color: #ff7875;
  text-align: center;
}
</style>
` ` `  <= 删除左侧空格
:::