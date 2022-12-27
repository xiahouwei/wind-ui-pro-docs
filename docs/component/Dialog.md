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

### 全屏高度,更多按钮
Dialog 有时需要高度占满屏幕, 并且设置一些按钮

:::demo heightFullscreen用于设置高度占满屏幕, moreBtnOption用于设置更多按钮

```html
<template>
  <div ref="container" class="container">
	<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
	<w-dialog v-model="dialogVisible" :title="dialogTitle" width="450px" heightFullscreen :moreBtnOption="moreBtnOption">
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
  computed: {
	moreBtnOption () {
		return [{
			label: '按钮1',
			click: this.onBtnClick1
		}, {
			label: '按钮2',
			click: this.onBtnClick1
		}, {
			label: '按钮3',
			click: this.onBtnClick1
		}]
	}
  },
  methods: {
	onBtnClick1 () {
		console.log('click1')
	},
	onBtnClick2 () {
		console.log('click2')
	},
	onBtnClick3 () {
		console.log('click3')
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
| value| 窗口开启/关闭   | Boolean  |   |    |
| title | 标题   |  String |  |    |
| titleClass | 标题class   |  String, Array, Object |  |    |
| titleStyle | 标题style   |  Object |  |    |
| width | 宽度   |  String |  |  50%  |
| fullscreen | 全屏   |  Boolean |  |  false  |
| heightFullscreen | 高度填充整个屏幕   |  Boolean |  |  false  |
| positionCenter | 定位居中   |  Boolean |  |  false  |
| top | 距离顶部高度   |  string |  |  15vh  |
| closeOnClickModal | 点击遮罩关闭   |  Boolean |  |  false  |
| showMoreBtn | 显示更多按钮   |  Boolean |  |  false  |
| moreBtnOption | 更多按钮设置   |  Array |  |    |
| footAlign | foot对齐方式   |  String |  |  right  |
| beforeClose | 点击X按钮关闭前回调   | Function |  |   |
| showClose | 是否显示关闭按钮   | Boolean |  | true  |
| closeOnPressEscape | 是否可以通过按下 ESC 关闭 Dialog   | Boolean |  | true  |


### Slot
| name      | 说明    |
|---------- |-------- |
| — | 内容插槽   |
| footer | 底部插槽   |
| tools | 更多-按钮栏 插槽   |


### Events
| 名称      | 说明    |
|---------- |-------- |
| close | Dialog 关闭的回调   |
| closed | Dialog 关闭动画结束时的回调  |