### Select 选择框
当选项过多时，使用下拉菜单展示并选择内容。

### 基础用法

适用广泛的基础单选

::: demo `v-model`的值为当前被选中的`option`的 id 属性值。
```html
<template>
  <w-select
    v-model="value"
    :optionlist="optionlist"
    class="select-input"
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
:::

### 有禁用选项

::: demo 在`option`中，设定`disabled`值为 true，即可禁用该选项。
```html
<template>
  <w-select
    v-model="value"
    :optionlist="optionlist"
    class="select-input"
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
:::

### 有隐藏选项

::: demo 在`option`中，设定`visibleFlag`值为 false，即可隐藏该选项。
```html
<template>
  <w-select
    v-model="value"
    :optionlist="optionlist"
    class="select-input"
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
    class="select-input"
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
    class="select-input"
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
    class="select-input"
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
:::

### 可搜索
可以利用搜索功能快速查找选项

::: demo 为`w-select`传入`filterKeys`属性，根据`filterKeys`。
```html
<template>
  <w-select
    v-model="value"
    :optionlist="optionlist"
    class="select-input"
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
:::