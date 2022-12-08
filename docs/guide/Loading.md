### Loading 加载
加载数据时显示动效

### 区域加载

::: demo 为需要`loading`遮罩的元素增加`v-fx-loading`指令传递Boolean控制加载开启/关闭。
```html
<template>
  <div
    v-fx-loading="loading"
    class="loading-box"
  >
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true
    }
  }
}
</script>
<style>
.loading-box {
  width: 100%;
  height: 200px;
}
</style>
```
:::

### 自定义
可自定义加载文案和背景色

::: demo 为需要`loading`遮罩的元素增加`fx-loading-text`属性和`fx-loading-background`属性。
```html
<template>
  <div
    v-fx-loading="loading"
    fx-loading-text="加载中···"
    fx-loading-background="rgba(48, 49, 51, 0.3)"
    class="loading-box"
  >
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true
    }
  }
}
</script>
```
:::

### 整页加载
页面数据加载时显示

::: demo 当使用指令方式时，全屏遮罩需要添加`fullscreen`修饰符（遮罩会插入至 body 上），此时若需要锁定屏幕的滚动，可以使用`lock`修饰符；当使用服务方式时，遮罩默认即为全屏，无需额外设置。
```html
<template>
  <el-button
    type="primary"
    fx-loading-background="rgba(48, 49, 51, 0.3)"
    v-fx-loading.fullscreen.lock="fullscreenLoading"
    @click="openFullScreen1"
  >
    指令方式
  </el-button>
  <el-button
    type="primary"
    @click="openFullScreen2">
    服务方式
  </el-button>
  <el-button
    type="primary"
    @click="openFullScreen3">
    服务方式(圆圈模式)
  </el-button>
</template>
<script>
export default {
  data() {
    return {
      fullscreenLoading: false
    }
  },
  methods: {
    openFullScreen1() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    },
    openFullScreen2() {
      const loading = this.$fxLoadingRunning();
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
    openFullScreen3() {
      const loading = this.$fxLoadingRunning({
        loadingType: 'circle'
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    }
  }
}
</script>
```
:::

### Options
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----|-----|------|-------|------ |
| loadingType | loading图标 | circle/'' | — | '' |
| background | 遮罩背景色 | string | — | rgba(48, 49, 51, 0.3) |
| fullscreen | 是否全屏遮罩 | boolean | — | true |
