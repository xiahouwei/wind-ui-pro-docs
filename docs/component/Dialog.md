### Dialog 对话框
在保留当前页面状态的情况下，告知用户并承载相关操作。

### 基础用法
Dialog 弹出一个对话框，适合需要定制性更大的场景。

:::demo 需要设置v-model属性，它接收Boolean，当为true时显示 Dialog。Dialog 分为两个部分：body和footer，footer需要具名为footer的slot。title属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了before-close的用法。

```html
<template>
  <div ref="container" class="container">
	<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
	<w-dialog v-model="dialogVisible" :title="dialogTitle" width="450px" :beforeClose="handleClose">
		<w-scroll-bar class="scroll-container">
			<div v-for="item in list" :key="item.id" :id="item.id" class="scroll-item">{{item.text}}</div>
		</w-scroll-bar>
		 <span slot="footer" class="dialog-footer">
			<el-button @click="dialogVisible = false">取 消</el-button>
			<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		</span>
	</w-dialog>
	</br>
  </div>
</template>
<script>
export default {
  data() {
    return {
		dialogVisible: false,
		dialogTitle: '标题',
		list: [{
			id: '1',
			text: '巴西，他们曾在1958、1962、1970、1994和2002年夺冠。'
		}, {
			id: '2',
			text: '德国是4次夺冠，在1954、1974、1990和2014年夺冠。'
		}, {
			id: '3',
			text: '意大利4次夺冠, 在1934、1938、1982和2006夺冠。'
		}, {
			id: '4',
			text: '阿根廷3次夺冠, 在1978、1986、2022夺冠。'
		}, {
			id: '5',
			text: '法国队2次夺冠，时间是1998年和2018年。'
		}, {
			id: '6',
			text: '乌拉圭2次夺冠，1930年和1950年。'
		}, {
			id: '7',
			text: '英格兰1次夺冠，是1966年。'
		}, {
			id: '8',
			text: '西班牙1次夺冠，是2010年。'
		}]
    }
  },
  methods: {	
	handleClose(done) {
		this.$fxConfirm('确认关闭？')
			.then(_ => {
			done();
			})
			.catch(_ => {});
		}
	}
}
</script>
<style>
.container {
	height: 50px;
}
.scroll-item {
	height: 50px;
	line-height: 50px;
}
</style>
:::


:::demo 需要设置v-model属性，它接收Boolean，当为true时显示 Dialog。Dialog 分为两个部分：body和footer，footer需要具名为footer的slot。title属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了before-close的用法。

```html
<template>
  <div ref="container" class="container">
	<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
	<w-dialog v-model="dialogVisible" :title="dialogTitle" width="450px" :beforeClose="handleClose" heightFullscreen showMoreBtn>
		<w-scroll-bar class="scroll-container">
			<div v-for="item in list" :key="item.id" :id="item.id" class="scroll-item">{{item.text}}</div>
		</w-scroll-bar>
		 <span slot="footer" class="dialog-footer">
			<el-button @click="dialogVisible = false">取 消</el-button>
			<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		</span>
	</w-dialog>
	</br>
  </div>
</template>
<script>
export default {
  data() {
    return {
		dialogVisible: false,
		dialogTitle: '标题',
		list: [{
			id: '1',
			text: '巴西，他们曾在1958、1962、1970、1994和2002年夺冠。'
		}, {
			id: '2',
			text: '德国是4次夺冠，在1954、1974、1990和2014年夺冠。'
		}, {
			id: '3',
			text: '意大利4次夺冠, 在1934、1938、1982和2006夺冠。'
		}, {
			id: '4',
			text: '阿根廷3次夺冠, 在1978、1986、2022夺冠。'
		}, {
			id: '5',
			text: '法国队2次夺冠，时间是1998年和2018年。'
		}, {
			id: '6',
			text: '乌拉圭2次夺冠，1930年和1950年。'
		}, {
			id: '7',
			text: '英格兰1次夺冠，是1966年。'
		}, {
			id: '8',
			text: '西班牙1次夺冠，是2010年。'
		}]
    }
  },
  methods: {	
	handleClose(done) {
		this.$fxConfirm('确认关闭？')
			.then(_ => {
			done();
			})
			.catch(_ => {});
		}
	}
}
</script>
<style>
.container {
	height: 50px;
}
.scroll-item {
	height: 50px;
	line-height: 50px;
}
</style>
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| this.$fxContextMenu.init(el, options) | 创建自定义菜单   | Function  |   |    |
| el | 自定义菜单所在dom元素   |  dom |  |    |
| options.menuList | 自定义菜单列表  | array  |   |    |
| options.menuList.label | 自定义菜单标题 |  string |   |    |
| options.menuList.click | 点击自定义菜单回调 |  Funciton |   |    |
| options.beforeShow | 显示自定义菜单前回调 | Function  | 返回真值则显示, 返回假值则不显示  |    |