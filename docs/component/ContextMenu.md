### ContextMenu 右键自定义菜单
右键自定义菜单

:::demo 通过this.$fxContextMenu.init创建右键自定义菜单

```html
<template>
  <div ref="container" class="container">
	<w-scroll-bar class="scroll-container">
		<div v-for="item in list" :key="item.id" :id="item.id" class="scroll-item">{{item.text}}</div>
	</w-scroll-bar>
	</br>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
  mounted () {
	this.$fxContextMenu.init(this.$refs.container, {
		menuList: [{
			label: '关闭',
			click: (contextEvent) => {
				const id = contextEvent.target.id
				const index = this.list.findIndex(item => item.id === id)
				if (~index) {
					this.list.splice(index, 1)
				}
			}
		}, {
			label: '关闭上方',
			click: (contextEvent) => {
				const id = contextEvent.target.id
				const index = this.list.findIndex(item => item.id === id)
				if (~index) {
					this.list.splice(0, index)
				}
			}
		}, {
			label: '关闭下方',
			click: (contextEvent) => {
				const id = contextEvent.target.id
				const index = this.list.findIndex(item => item.id === id)
				if (~index) {
					this.list.splice(index + 1, this.list.length)
				}
			}
		}],
		beforeShow: (contextEvent) => {
			const id = contextEvent.target.id
			const index = this.list.findIndex(item => item.id === id)
			return ~index
		}
	})
  }
}
</script>
<style>
.container {
	height: 200px;
}
.scroll-item {
	height: 50px;
	line-height: 50px;
	width: 900px
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