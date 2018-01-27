# ZanUI in WePY

[ZanUI](https://github.com/youzan/zanui-weapp) 有赞移动 Web UI 规范 ZanUI 的小程序现实版本，结合了微信的视觉规范，为用户提供更加统一的使用感受。

这里是 ZanUI 在 WePY 中的移植。

## 体验步骤

### 1. 安装 wepy
本项目基于wepy开发，[参考这里](https://github.com/wepyjs/wepy)
```bash
yarn global add wepy-cli
```

### 2. 下载源代码
```bash
git clone https://github.com/brucx/wepy-zanui-demo.git
```

### 3. 安装开发依赖
```bash
cd wepy-zanui-demo
yarn
```

### 4. 编译源代码
```bash
wepy build
```

### 5.导入至开发者工具

编译完成后会生成`dist`目录，开发者工具本地开发目录指向`dist`目录。

**切记： 取消勾选`项目-->开启ES6转ES5`，否则代码运行报错。**

# ZanUI-Wepy 组件的使用说明

目前 ZanUI-Wepy 一共有23个组件，分为纯样式组件、封装样式组件、内部交互组件、外部交互组件。具体组件接口可以参考 `example` 目录下的示例。

## 纯样式组件

纯样式组件只需引入相应的 .SCSS 样式文件，然后在项目中引用相应的样式类即可。

包含的组件有：Badge、Button、Card、Cell、Helper、Icon、Layout、Panel、Tag

以"Badge 徽章"为例：

复制 `zanui/badge.scss` 文件至项目目录

页面中如下方式使用

```Vue
<style lang="css">
@import '/zanui/badge.wxss';
</style>

<template>
<view class="zan-badge">
  <view class="zan-badge__count">99+</view>
</view>
</template>
```

## 封装样式组件

封装样式组件需要引入 .WPY 组件文件，通过 Props 传入参数即可。

包含的组件有：Capsule、Loadmore、Steps

以"Capsule 胶囊"为例：

复制 `components/zan-capsule.wpy` 文件至项目目录

页面中如下方式使用

```Vue
<template>
  <zanCapsule :options="zanCapsule" />
</template>

<script>
import wepy from 'wepy'
import zanCapsule from '../components/zan-capsule'

export default class Capsule extends wepy.page {
  components = {
    zanCapsule
  }
  data = {
    zanCapsule: {
      type: 'danger',
      leftText: '2折',
      rightText: '限购两份'
    }
  }
}
</script>
```

## 内部交互组件

内部交互组件需要引入 .WPY 组件文件，通过 Props 传入参数，组件通过事件向页面通信。

包含的组件有：Select、Stepper、Switch、Tab

以"Tab 标签"为例：

复制 `components/zan-tab.wpy` 文件至项目目录

页面中如下方式使用

```Vue
<template>
  <zanTab :options="tab" componentId="tab" />
</template>

<script>
import wepy from 'wepy'
import zanTab from '../components/zan-tab'

export default class Capsule extends wepy.page {
  components = {
    zanTab
  }
  data = {
    tab: {
      list: [
        {
          id: 'all',
          title: '全部'
        },
        {
          id: 'topay',
          title: '待付款'
        },
        {
          id: 'tosend',
          title: '待发货'
        },
        {
          id: 'send',
          title: '待收货'
        },
        {
          id: 'sign',
          title: '已完成'
        }
      ],
      selectedId: 'all',
      scroll: false
    }
  }
  events = {
    zanTabChange({ selectedId }, event) {
      let { componentId } = event.source
      console.log('Page Tab receive selectedId:', componentId, selectedId)
      // 此处进行业务逻辑处理...
    }
  }
</script>
```

## 外部交互组件

外部交互组件需要引入 .WPY 组件文件，通过 Props 传入参数，页面可以主动调用组件方法，组件通过事件向页面通信。

包含的组件有：Actionsheet、Dialog、Field、Noticebar、Popup、Toast、Toptips

以"Actionsheet 行动按钮"为例：

复制 `components/zan-actionsheet.wpy` 文件至项目目录

页面中如下方式使用

```Vue
<template>
  <button @tap="toggleActionsheet">
    Actionsheet
  </button>
  <zanTab :options="tab" componentId="tab" />
</template>

<script>
import wepy from 'wepy'
import zanActionsheet from '../components/zan-actionsheet'

export default class Capsule extends wepy.page {
  components = {
    zanActionsheet
  }
  methods = {
    toggleActionsheet() {
      this.$invoke('zanActionsheet', 'showZanActionsheet', {
        cancelText: '关闭 Action',
        closeOnClickOverlay: true,
        actions: [
          {
            type: 'first',
            name: '选项1',
            subname: '选项描述语1',
            className: 'action-class',
            asyncJob: function() {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve()
                }, 1500)
              }) // 可以接受一个异步任务作为参数
            }
          },
          {
            type: 'second',
            name: '选项2',
            subname: '选项描述语2',
            className: 'action-class',
          },
          {
            type: 'share',
            name: '去分享',
            openType: 'share'
          }
        ]
      })
        .then(result => {
          console.log(result.type)  // result.type 为点击选项的 type
        })
        .catch(e => {
          console.log('行动取消')
        })
    }
  }
</script>
```
