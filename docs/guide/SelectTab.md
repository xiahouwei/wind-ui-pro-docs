### SelectTab 分页选择框
当选项分页时，使用tab分页下拉菜单展示并选择内容。

### 基础用法
适用广泛的基础单选

::: demo `v-model`的值为当前被选中的`选项`的 id 属性值。
```html
<template>
  <w-select-tab
    v-model="value"
    :optionlist="optionlist"
  >
  </w-select-tab>
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
    this.optionlist = Array.from({length: 3}, (item,index) => {
      const listData = Array.from({length: 10}, (_item,_index) => {
        return {
          id: _index + '' + index,
          name: '分页' + (index + 1) + '-' + '选项' + (_index + 1)
        }
      })
      return {
        id: index + '',
        name: '分页' + (index + 1),
        listData
      }
    })
  }
}
</script>
```
:::

### 有禁用选项

::: demo 在`选项`中，设定`disabled`值为 true，即可禁用该选项。
```html
<template>
  <w-select-tab
    v-model="value"
    :optionlist="optionlist"
  >
  </w-select-tab>
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
    this.optionlist = Array.from({length: 3}, (item,index) => {
      const listData = Array.from({length: 10}, (_item,_index) => {
        return {
          id: _index + '' + index,
          name: '分页' + (index + 1) + '-' + '选项' + (_index + 1),
          disabled: !!(_index % 2)
        }
      })
      return {
        id: index + '',
        name: '分页' + (index + 1),
        listData
      }
    })
  }
}
</script>
```
:::

### 有隐藏选项

::: demo 在`选项`中，设定`visibleFlag`值为 false，即可隐藏该选项。
```html
<template>
  <w-select-tab
    v-model="value"
    :optionlist="optionlist"
  >
  </w-select-tab>
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
    this.optionlist = Array.from({length: 3}, (item,index) => {
      const listData = Array.from({length: 10}, (_item,_index) => {
        return {
          id: _index + '' + index,
          name: '分页' + (index + 1) + '-' + '选项' + (_index + 1),
          visibleFlag: !!(_index % 2)
        }
      })
      return {
        id: index + '',
        name: '分页' + (index + 1),
        listData
      }
    })
  }
}
</script>
```
:::

### 禁用状态
选择器不可用状态

::: demo 为`w-select-tab`设置`disabled`属性，则整个选择框不可用。
```html
<template>
  <w-select-tab
    v-model="value"
    disabled
    :optionlist="optionlist"
  >
  </w-select-tab>
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
    this.optionlist = Array.from({length: 3}, (item,index) => {
      const listData = Array.from({length: 10}, (_item,_index) => {
        return {
          id: _index + '' + index,
          name: '分页' + (index + 1) + '-' + '选项' + (_index + 1)
        }
      })
      return {
        id: index + '',
        name: '分页' + (index + 1),
        listData
      }
    })
  }
}
</script>
```
:::

### 可清空单选
包含清空按钮，可将选择器清空为初始状态

::: demo 为`w-select-tab`设置`clearable`属性，则可将选择器清空。
```html
<template>
  <w-select-tab
    v-model="value"
    clearable
    :optionlist="optionlist"
  >
  </w-select-tab>
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
    this.optionlist = Array.from({length: 3}, (item,index) => {
      const listData = Array.from({length: 10}, (_item,_index) => {
        return {
          id: _index + '' + index,
          name: '分页' + (index + 1) + '-' + '选项' + (_index + 1)
        }
      })
      return {
        id: index + '',
        name: '分页' + (index + 1),
        listData
      }
    })
  }
}
</script>
```
:::

### 自定义模板
可以自定义备选项

::: demo 为`w-select-tab`传入`optionRender`渲染函数(返回JSX)，则可自定义备选项。
```html
<template>
  <w-select-tab
    v-model="value"
    :optionRender="optionRender"
    :optionlist="optionlist"
  >
  </w-select-tab>
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
    this.optionlist = Array.from({length: 3}, (item,index) => {
      const listData = Array.from({length: 10}, (_item,_index) => {
        return {
          id: _index + '' + index,
          name: '分页' + (index + 1) + '-' + '选项' + (_index + 1)
        }
      })
      return {
        id: index + '',
        name: '分页' + (index + 1),
        listData
      }
    })
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

### 自定义分页模板
可以自定义分页Title

::: demo 为`w-select-tab`传入`paneRender`渲染函数(返回JSX)，则可自定义分页Title。
```html
<template>
  <w-select-tab
    v-model="value"
    :paneRender="paneRender"
    :optionlist="optionlist"
  >
  </w-select-tab>
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
    this.optionlist = Array.from({length: 3}, (item,index) => {
      const listData = Array.from({length: 10}, (_item,_index) => {
        return {
          id: _index + '' + index,
          name: '分页' + (index + 1) + '-' + '选项' + (_index + 1)
        }
      })
      return {
        id: index + '',
        name: '分页' + (index + 1),
        listData
      }
    })
  },
  methods: {
    paneRender (h, { item }) {
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

::: demo 为`w-select-tab`传入`filterKeys`属性，根据`filterKeys`数组中的字段模糊搜索选项。
```html
<template>
  <w-select-tab
    v-model="value"
    :filterKeys="filterKeys"
    :optionlist="optionlist"
  >
  </w-select-tab>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      optionlist: [],
      filterKeys:['name']
    }
  },
  mounted() {
    this.optionlist = Array.from({length: 3}, (item,index) => {
      const listData = Array.from({length: 10}, (_item,_index) => {
        return {
          id: _index + '' + index,
          name: '分页' + (index + 1) + '-' + '选项' + (_index + 1)
        }
      })
      return {
        id: index + '',
        name: '分页' + (index + 1),
        listData
      }
    })
  }
}
</script>
```
:::

### 可展示类别
每个tab下面还能左右分开展示，左侧类别，右侧选项

::: demo 在分页数据中加上`typeListDate`数据，即可展示左侧类别数据。`typeFilter`属性提供点击左侧类别数据后，对于右侧数据筛选功能。
```html
<template>
  <w-select-tab
    v-model="value"
    :optionlist="optionlist"
    :typeFilter="typeFilter"
  >
  </w-select-tab>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      optionlist: [],
      filterKeys:['name']
    }
  },
  mounted() {
    this.optionlist = Array.from({length: 5}, (item,index) => {
      const listData = Array.from({length: 10}, (_item,_index) => {
        return {
          id: _index + '' + index,
          name: '分页' + (index + 1) + '-' + '选项' + (_index + 1),
          typeId: (_index + 1) % 4
        }
      })
      let typeListDate = []
      if (!(index % 2)) {
        typeListDate = [{
          id: 1,
          name: '类别1'
        }, {
          id: 2,
          name: '类别2'
        }, {
          id: 3,
          name: '类别3'
        }]
      }
      return {
        id: index + '',
        name: '分页' + (index + 1),
        listData,
        typeListDate
      }
    })
  },
  methods: {
    typeFilter (selectedTypeData, item) {
      return selectedTypeData.id === item.typeId
    }
  }
}
</script>
```
:::

### 大数据量渲染
可渲染大数据量选项

:::demo 为`w-select-tab`传入`virtual`属性，默认开启，传入false可关闭。
```html
<template>
  <w-select-tab
    v-model="value"
    :optionlist="optionlist"
  >
  </w-select-tab>
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
    this.optionlist = Array.from({length: 3}, (item,index) => {
      const listData = Array.from({length: 10000}, (_item,_index) => {
        return {
          id: _index + '' + index,
          name: '分页' + (index + 1) + '-' + '选项' + (_index + 1)
        }
      })
      return {
        id: index + '',
        name: '分页' + (index + 1),
        listData
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
| filterKeys | 筛选keys | array | — | ['name', 'code', 'pinYin', 'pinYinList'] |
| optionlist | 选项集合 | array | — | — |
| optionProp | 选项取值字段 | object | — | — |
| optionProp.tabName | 选项分页name取值字段 | string | — | 'name' |
| optionProp.name | 选项name取值字段 | string | — | 'name' |
| optionProp.disabled | 选项是否禁用取值字段 | string | — | 'disabled' |
| optionProp.visibleFlag | 选项是否显示取值字段 | string | — | 'visibleFlag' |
| typeOptionProp | 类别选项取值字段 | object | — | — |
| typeOptionProp.name | 类别选项name取值字段 | string | — | 'name' |
| typeOptionProp.disabled | 类别选项是否禁用取值字段 | string | — | 'disabled' |
| typeOptionProp.visibleFlag | 类别选项是否显示取值字段 | string | — | 'visibleFlag' |
| noDataText | 无选项时展示文本 | string | — | '无数据' |
| defaultText | 没有匹配选项时输入框显示的文本 | string | — | — |
| poperClass | 下拉框类名 | string | — | — |
| loading | 是否展示loading状态 | boolean | — | — |
| loadingText | loading状态下展示文本 | string | — | '加载中' |
| dropdownWidth | 下拉框宽度 | string | — | '380px' |
| scrollClose | 滚动自动关闭 | boolean | — | true |
| activeTagKey | 默认选中的Tag页Id，不传默认为第一页 | string | — | — |
| optionRender | 选项渲染函数 | function | — | 参数(h, { item })，item为当前选项数据，需要return JSX |
| paneRender | 分页标签渲染函数 | function | — | 参数(h, { item })，item为当前分页数据，需要return JSX |
| typeOptionRender | 左侧类别选项渲染函数 | function | — | 参数(h, { item })，item为当前类别数据，需要return JSX |
| typeFilter | 点击左侧类别数据后，对于右侧数据筛选的回调函数 | function | — | 参数(selectedTypeData, item)，selectedTypeData为当前选择的类别数据，item为右侧每一项数据，需要return Boolean |
| showAllTypeOption | 左侧类别数据，是否显示 “全部” 选项 | boolean | — | true |
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