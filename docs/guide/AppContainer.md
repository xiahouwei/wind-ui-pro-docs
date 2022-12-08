### app container
::: demo 此处放置代码示例的描述信息，支持 `Markdown` 语法123，**描述信息只支持单行**
```html
<template>
  <div class="red-center-text">
	<w-app-container direction="row">
		<el-button size="mini" type="primary">test-btn</el-button>
		<el-button size="mini" type="primary">test-btn</el-button>
		<el-button size="mini" type="primary">test-btn</el-button>
		<el-button size="mini" type="primary">test-btn</el-button>
	</w-app-container>
    <w-app-container direction="column">
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
:::