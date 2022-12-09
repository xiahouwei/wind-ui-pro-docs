### Link 文字链接

文字超链接

### 基础用法
基础的文字链接用法。
:::demo
```html
<div>
  <w-link href="https://xiahouwei.gitee.io/wind-ui-pro-docs/" target="_blank">默认链接</w-link>
  <w-link type="primary">主要链接</w-link>
  <w-link type="success">成功链接</w-link>
  <w-link type="danger">危险链接</w-link>
</div>
```
:::

### 禁用状态
文字链接不可用状态。
:::demo
```html
<div>
  <w-link disabled>默认链接</w-link>
  <w-link type="primary" disabled>主要链接</w-link>
  <w-link type="success" disabled>成功链接</w-link>
  <w-link type="danger" disabled>危险链接</w-link>
</div>
```
:::


### 图标

带图标的文字链接可增强辨识度。
:::demo
```html
<div>
  <w-link icon="auth-setting">编辑</w-link>
  <w-link icon="carry-forward-process">定位</w-link>
  <w-link icon="connect-employee">用户</w-link>
  <w-link icon="details-list-empty">信息</w-link>
  <w-link icon="file-type-word">文档</w-link>
</div>
```
:::

### Attributes

| 参数           | 说明                           | 类型      | 可选值                               | 默认值  |
| -------------- | ------------------------------ | --------- | ------------------------------------ | ------- |
| type           | 类型                   | string  | primary / success  / danger  |   primary
| disabled       | 是否禁用状态                       | boolean | —                                    | false   |
| href           | 原生 href 属性                     | string  | —                                    | -       |
| icon           | 图标类名                       | string  | —                                    | -       |
| target           | 跳转方式                       | string  | —                                    |  _self     |
