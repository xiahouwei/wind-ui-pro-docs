### Select 选择框
当选项过多时，使用下拉菜单展示并选择内容。

### 基础用法
适用广泛的基础单选

::: demo `v-model`的值为当前被选中的`选项`的 id 属性值。
```html
<template>
  <w-select
    v-model="value"
    :optionlist="optionlist"
  >
  </w-select>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      optionlist: [{
        id: 1,
        name: '选项一'
      }, {
        id: 2,
        name: '选项二'
      }, {
        id: 3,
        name: '选项三'
      }, {
        id: 4,
        name: '选项四'
      }, {
        id: 5,
        name: '选项五'
      }]
    }
  }
}
</script>
```
:::

### 有禁用选项

::: demo 在`选项`中，设定`disabled`值为 true，即可禁用该选项。
```html
<template>
  <w-select
    v-model="value"
    :optionlist="optionlist"
  >
  </w-select>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      optionlist: [{
        id: 1,
        name: '选项一'
      }, {
        id: 2,
        name: '选项二',
        disabled: true
      }, {
        id: 3,
        name: '选项三'
      }, {
        id: 4,
        name: '选项四'
      }, {
        id: 5,
        name: '选项五'
      }]
    }
  }
}
</script>
```
:::

### 有隐藏选项

::: demo 在`选项`中，设定`visibleFlag`值为 false，即可隐藏该选项。
```html
<template>
  <w-select
    v-model="value"
    :optionlist="optionlist"
  >
  </w-select>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      optionlist: [{
        id: 1,
        name: '选项一'
      }, {
        id: 2,
        name: '选项二',
        visibleFlag: false
      }, {
        id: 3,
        name: '选项三'
      }, {
        id: 4,
        name: '选项四'
      }, {
        id: 5,
        name: '选项五'
      }]
    }
  }
}
</script>
```
:::

### 禁用状态
选择器不可用状态

::: demo 为`w-select`设置`disabled`属性，则整个选择框不可用。
```html
<template>
  <w-select
    v-model="value"
    disabled
    :optionlist="optionlist"
  >
  </w-select>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      optionlist: [{
        id: 1,
        name: '选项一'
      }, {
        id: 2,
        name: '选项二'
      }, {
        id: 3,
        name: '选项三'
      }, {
        id: 4,
        name: '选项四'
      }, {
        id: 5,
        name: '选项五'
      }]
    }
  }
}
</script>
```
:::

### 可清空单选
包含清空按钮，可将选择器清空为初始状态

::: demo 为`w-select`设置`clearable`属性，则可将选择器清空。
```html
<template>
  <w-select
    v-model="value"
    clearable
    :optionlist="optionlist"
  >
  </w-select>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      optionlist: [{
        id: 1,
        name: '选项一'
      }, {
        id: 2,
        name: '选项二'
      }, {
        id: 3,
        name: '选项三'
      }, {
        id: 4,
        name: '选项四'
      }, {
        id: 5,
        name: '选项五'
      }]
    }
  }
}
</script>
```
:::

### 自定义模板
可以自定义备选项

::: demo 为`w-select`传入`optionRender`渲染函数(返回JSX)，则可自定义备选项。
```html
<template>
  <w-select
    v-model="value"
    :optionRender="optionRender"
    :optionlist="optionlist"
  >
  </w-select>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      optionlist: [{
        id: 1,
        name: '选项一'
      }, {
        id: 2,
        name: '选项二'
      }, {
        id: 3,
        name: '选项三'
      }, {
        id: 4,
        name: '选项四'
      }, {
        id: 5,
        name: '选项五'
      }]
    }
  },
  methods: {
    optionRender (h, { item }) {
      h = this.$createElement
      return <div>
        <span>fx-</span>
        <span>{ item.name }</span>
      </div>
    }
  }
}
</script>
```
:::

### 可搜索
可以利用搜索功能快速查找选项

::: demo 为`w-select`传入`filterKeys`属性，根据`filterKeys`数组中的字段模糊搜索选项。
```html
<template>
  <w-select
    v-model="value"
    :filterKeys="filterKeys"
    :optionlist="optionlist"
  >
  </w-select>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      optionlist: [{
        id: 1,
        name: '选项一'
      }, {
        id: 2,
        name: '选项二'
      }, {
        id: 3,
        name: '选项三'
      }, {
        id: 4,
        name: '选项四'
      }, {
        id: 5,
        name: '选项五'
      }],
      filterKeys:['name']
    }
  }
}
</script>
```
:::

### 大数据量渲染
可渲染大数据量选项

:::demo 为`w-select`传入`virtual`属性，默认开启，传入false可关闭。
```html
<template>
  <w-select
    v-model="value"
    :optionlist="optionlist"
  >
  </w-select>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      optionlist: []
    }
  },
  mounted() {
    this.optionlist = Array.from({length:10000}, (item,index) => {
      return {
        id: index,
        name: '选项' + (index + 1)
      }
    })
  }
}
</script>
```
:::

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----|-----|------|-------|------ |
| value/v-model | 绑定值，对应选项数据中id值 | boolean / string / number | — | — |
| disabled | 是否禁用 | boolean | — | false |
| clearable | 是否清除功能 | boolean | — | false |
| size | 输入框尺寸 | string | medium / small / mini | mini |
| placeholder | 默认提示 | string | — | '请选择' |
| virtual | 开启虚拟渲染 | boolean | — | true |
| filterKeys | 筛选keys | array | — | ['name', 'code', 'pinYin', 'pinYinList', 'label'] |
| optionlist | 选项集合 | array | — | — |
| optionProp | 选项取值字段 | object | — | — |
| optionProp.name | 选项name取值字段 | string | — | 'name' |
| optionProp.disabled | 选项是否禁用取值字段 | string | — | 'disabled' |
| optionProp.visibleFlag | 选项是否显示取值字段 | string | — | 'visibleFlag' |
| noDataText | 无选项时展示文本 | string | — | '无数据' |
| defaultText | 没有匹配选项时输入框显示的文本 | string | — | — |
| poperClass | 下拉框类名 | string | — | — |
| loading | 是否展示loading状态 | boolean | — | — |
| loadingText | loading状态下展示文本 | string | — | '加载中' |
| dropdownWidth | 下拉框宽度 | string | — | — |
| dropdownMaxWidth | 下拉框最大宽度 | string | — | '280px' |
| scrollClose | 滚动自动关闭 | boolean | — | true |
| optionRender | 选项渲染函数 | function | — | 参数(h, { item })，item为当前选项数据，需要return JSX |
| fpBeforeSelect | 选择选项之后回调 | function | — | 参数(item)，item为当前选项数据，需要return Promise |
| fpSelectShow | 开启选择框之后回调 | function | — | 需要return Promise |

### Events
| 事件名称 | 说明 | 回调参数 |
|--------|------|--------|
| change | 选中值发生变化时触发 | 目前的选中值，选中选项的数据对象 |
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 true/隐藏则为 false |
| on-select-click | 点击选项时触发 | 目前的选中值，选中选项的数据对象，选项是否发生改变true/false |
| on-select-enter | 点击选项时触发 | 回车事件对象event，选中选项的数据对象 |
| on-scroll | 选项滚动时触发 | scroll事件对象event |
| focus | input 框聚焦时触发 | focus事件对象event |
| blur | input 框失焦时触发 | blur事件对象event |

### Methods
| 方法名 | 说明 | 参数 |
|--------|------|--------|
| focus | 使 input 获取焦点 | — |
| blur | 使 input 失去焦点，并隐藏下拉框 | — |