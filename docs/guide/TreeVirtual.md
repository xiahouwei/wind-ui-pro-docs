### TreeVirtual 虚拟渲染树
用于渲染虚拟渲染树的组件：


### 基础用法

:::demo 

```html
<template>
  <div >
	  <div class="tree">
			<w-tree-virtual
				ref="organTree"
				:data="currentTreeData"
				highlight-current
        @node-click="onTreeItemClick"
			>
			</w-tree-virtual>
		</div>
  </div>
</template>
<script>
export default {
  data() {
    const currentTreeData = []
		for (let i = 0; i < 20; i++) {
			const children = []
			for (let k = 0; k < 5; k++) {
				const _children = []
				for (let j = 0; j < 3; j++) {
					_children.push({
						id: `${i}-${k + 1}-${j + 1}`,
						name: `${i}-${k + 1}-${j + 1}`
					})
				}
				children.push({
					id: `${i}-${k + 1}`,
					name: `${i}-${k + 1}`,
					children: _children
				})
			}
			currentTreeData.push({
				id: i + 1,
				name: i + 1,
				children
			})
		}
    return {
      currentTreeData
    }
  },
  methods: {
    onTreeItemClick (treeItem) {
      console.log('onTreeItemClick', treeItem)
    }
  }
}
</script>
<style>
.tree {
	height: 400px;
	width: 250px;
	border: 1px solid #eee;
}
</style>
:::

### 插槽渲染 

:::demo 通过插槽自定义渲染内容。

```html
<template>
  <div >
	  <div class="tree">
			<w-tree-virtual
				ref="organTree"
				:data="currentTreeData"
				highlight-current
			>
      <span  slot-scope="{ data, activeTreeItemId }">自定义内容{{data.name}}</span>
			</w-tree-virtual>
		</div>
  </div>
</template>
<script>
export default {
  data() {
    const currentTreeData = []
		for (let i = 0; i < 20; i++) {
			const children = []
			for (let k = 0; k < 5; k++) {
				const _children = []
				for (let j = 0; j < 3; j++) {
					_children.push({
						id: `${i}-${k + 1}-${j + 1}`,
						name: `${i}-${k + 1}-${j + 1}`
					})
				}
				children.push({
					id: `${i}-${k + 1}`,
					name: `${i}-${k + 1}`,
					children: _children
				})
			}
			currentTreeData.push({
				id: i + 1,
				name: i + 1,
				children
			})
		}
    return {
      currentTreeData
    }
  }
}
</script>
<style>
.tree {
	height: 400px;
	width: 250px;
	border: 1px solid #eee;
}
</style>
:::



### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| data | 展示数据   | array  |         |       |
| nodeKey | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的   | string  |         |     id   |
| props | 配置选项   | object  |         | {children: 'children',label: 'name',related: 'related'}   |
| emptyText | 容为空的时候展示的文本   | string  |         |     当前数据为空   |
| highlightCurrent | 是否高亮当前选中节点   | boolean  |         |     false   |
| defaultExpandAll | 是否默认展开所有节点   | boolean  |         |     false   |
| checkOnClickNode | 是否在点击节点的时候选中节点   | boolean  |         |     false   |
| defaultExpandedKeys | 默认展开的子节点   | Array  |         |       |




### Events
| 事件名称 | 说明 | 回调参数 |
|--------|------|--------|
| node-click | 点击树节点触发 | treeItem|

