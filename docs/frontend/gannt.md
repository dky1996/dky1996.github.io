# 甘特图 vue 版（dhtmlx-gantt）

## 安装

### 一、通过包管理器下载包

:::: code-group
::: code-group-item npm

```shell
npm install dhtmlx-gantt
```

:::
::: code-group-item yarn

```shell
yarn add dhtmlx-gantt
```

:::
::: code-group-item pnpm

```shell
pnpm add dhtmlx-gantt
```

:::
::::

### 二、在项目中引入，包含 js 和 css

```javascript
import { gantt } from "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
```

### 三、初始化甘特图配置

#### 1.准备容器

```vue
<template>
  <div ref="gantt" class="container"></div>
</template>
```

#### 2.配置初始数据

```javascript
data() {
  return {
    tasks: {
      data: [
        {
          id: 1,
          text: "项目1",
          start_date: "2020-01-17",
          duration: 3,
          progress: 0.6,                                   //当前进度百分比
        },
        {
          id: 2,
          text: "项目2",
          start_date: "2020-01-20",
          duration: 3,
          progress: 0.4,
        },
      ],
      links: [{ id: 1, source: 1, target: 2, type: "0" }], //从source指向target的连接线
    },
  };
},
```

#### 3.初始化和配置甘特图参数，并通过 ref 绑定到容器上（基本配置）

```javascript
mounted() {
  gantt.config.xml_date = "%Y-%m-%d";  //参数
  gantt.init(this.$refs.gantt);        //通过ref绑定到容器上
  gantt.parse(this.tasks);             //将上方的数据传入
},
```

以上甘特图引入完毕，你应该可以看到最基本的甘特图了

## 可选配置

这里只介绍一些常用的配置，更多的配置请看[官网文档](https://docs.dhtmlx.com/gantt/desktop__task_bars.html)

### 只读模式

```javascript
gantt.config.readonly = true;
```

### 不可选取

```javascript
gantt.config.select_task = false;
```

### 左侧列表相关配置

```javascript
gantt.config.columns = [
  {
    name: "text",
    label: "名字",
    width: 280,
    template: (obj) => `名字是：${obj.text}`, //通过 template 回调可以指定返回内容值
  },
  {
    name: "start_date",
    label: "开始时间",
  },
  {
    name: "duration",
    label: "时长",
  },
];
```

### Tooltips

```js
//自定义Tooltips样式（可选）
gantt.templates.tooltip_text = (start, end, task) => {
  const t = gantt;
  const output = `
<b>里程碑：</b>
${task.text}
<br />
<b>计划开始时间：</b>
${t.templates.tooltip_date_format(start)}
<br />
<b>计划结束时间：</b>
${t.templates.tooltip_date_format(end)}`;
  return output;
}; //开启Tooltips
gantt.plugins({ tooltip: true });
```
