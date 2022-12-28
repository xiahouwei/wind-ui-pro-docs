### InputPassword 密码输入框
用于对输入的密码进行位数和数值显示保护。


### 基础用法

:::demo 要使用它，只需要使用v-model绑定变量即可，变量的初始值即为默认值。

```html
<template>
  <w-password-input
    v-model="value"
  ></w-password-input>
</template>
<script>
  export default {
    data() {
      return {
        value: '1234567890'
      }
    }
  };
</script>
```
:::

### 禁用状态

:::demo disabled属性接受一个Boolean，设置为true即可禁用整个组件。

```html
<template>
  <w-password-input
    v-model="value"
    disabled
  >
  ></w-password-input>
</template>
<script>
  export default {
    data() {
      return {
        value: '1234567890'
      }
    }
  };
</script>
```
:::

### 重置密码保护状态

:::demo 提供refresh方法用来重置密码的保护装填。

```html
<template>
  <w-password-input
    ref="passwordInput"
    v-model="value"
  >
  ></w-password-input>

  <el-button class="refresh-btn" @click="onRefreshClick">还原密码</el-button>
</template>
<script>
  export default {
    data() {
      return {
        value: '1234567890'
      }
    },
    methods: {
      onRefreshClick () {
        this.$refs.passwordInput.refresh()
      }
    }
  };
</script>
<style>
.refresh-btn {
  margin-top: 20px;
}
</style>
```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值   | string / number  | — | — |
| disabled | 禁用   | boolean | — | false |

### Methods
| 方法名 | 说明 | 回调参数 |
|---------|--------|---------|
| focus | 使 input 获取焦点  | — |
| refresh | 重置密码  | — |
