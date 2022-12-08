### SelectCycle 周期选择框
当需要选择周期数据时使用的选择框

### 基础用法

::: demo `v-model`的值为当前被选择填写的数据对象`{ cycleWay, cycleDay }`。`actionLabel`为自定义展示文本。
```html
<template>
  <w-select-cycle
    v-model="cycleData"
    actionLabel="采购"
  ></w-select-cycle>
</template>
<script>
export default {
  data() {
    return {
      cycleData: {
        cycleWay: '',
        cycleDay: ''
      }
    }
  },
  watch: {
    'cycleData.cycleWay' () {
      console.log(this.cycleData)
    },
    'cycleData.cycleDay' () {
      console.log(this.cycleData)
    }
  }
}
</script>
```
:::

### 禁用状态

::: demo 为`w-select-cycle`设置`disabled`属性，则整个选择框不可用。
```html
<template>
  <w-select-cycle
    v-model="cycleData"
    actionLabel="采购"
    disabled
    class="select-cycle"
  ></w-select-cycle>
</template>
<script>
export default {
  data() {
    return {
      cycleData: {
        cycleWay: '',
        cycleDay: ''
      }
    }
  }
}
</script>
```
:::

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----|-----|------|-------|------ |
| value/v-model | 绑定值 | object | — | — |
| disabled | 是否禁用 | boolean | — | false |
| actionLabel | 自定义展示文本 | string | — | — |

### 绑定值字段说明
| 参数 | 值 | 说明 |
|-----|-----|-----|
| cycleWay | 1 | 每天 - actionLabel |
| cycleWay | 2 | 每周固定日 - actionLabel |
| cycleWay | 3 | 每月固定日 - actionLabel |
| cycleWay | 4 | 月末 - actionLabel |
| cycleWay | 5 | 隔天 - actionLabel |

### Methods
| 方法名 | 说明 | 参数 |
|--------|------|--------|
| focus | 使选择框 input 获取焦点 | — |