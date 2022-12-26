### IndexList 索引列表
自动根据索引分组显示list


:::demo

```html
<template>
  <div>
	<w-index-list
		:listData="indexListData"
		class="index-list"
		@on-list-click="onListClick"
	></w-index-list>
	</br>
  </div>
</template>
<script>
export default {
  data() {
    return {
      indexListData: [{
		name: 'item-a-1',
		alphaIndex: 'a',
		id: '1-1',
		itemId: '1-1'
	  }, {
		name: 'item-a-2',
		alphaIndex: 'a',
		id: '1-2',
		itemId: '1-2'
	  }, {
		name: 'item-b-1',
		alphaIndex: 'b',
		id: '2-1',
		itemId: '2-1'
	  }, {
		name: 'item-b-2',
		alphaIndex: 'b',
		id: '2-2',
		itemId: '2-2'
	  }, {
		name: 'item-j-1',
		alphaIndex: 'j',
		id: '3-1',
		itemId: '3-1'
	  }, {
		name: 'item-z-1',
		alphaIndex: 'z',
		id: '4-1',
		itemId: '4-1'
	  }, {
		name: 'item-a-3',
		alphaIndex: 'a',
		id: '1-3',
		itemId: '1-3'
	  }]
    }
  },
  methods: {
	onListClick (item) {
		console.log(item)
	}
  }
}
</script>
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| listData | 列表数据   | array  |   |        |
| defaultProps | 默认参数   | object  |   | {name: 'name',alphaIndex: 'alphaIndex'}  |
| letterListShow | 是否显示索引   | boolean  |   | true |
| formatter | 自定义label文本   | Function  |   |  |
| customerLetter | 是否开启自定义索引   | boolean  | false(不开启则显示a-z#)/true(开启则根据listData来生成索引)  | false |

### Events
| 事件名称 | 说明 | 回调参数 |
|--------|------|--------|
| on-list-click | 点击list元素时触发 | — |