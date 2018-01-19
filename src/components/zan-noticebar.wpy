<style lang="scss">
.zan-noticebar {
  color: #f60;
  padding: 9px 10px;
  font-size: 12px;
  line-height: 1.5;
  background-color: #fff7cc;
}
</style>
<template>
  <view class="zan-noticebar">
    <view
      id="{{ componentId }}__content-wrap"
      style="height: 18px; overflow: hidden; position: relative;"
    >
      <view
        animation="{{ animationData }}"
        id="{{ componentId }}__content"
        style="position: absolute; white-space: nowrap;"
      >
        {{ text }}
      </view>
    </view>
  </view>
</template>
<script>
import wepy from 'wepy'

export default class zanNoticebar extends wepy.component {
  props = {
    componentId: String,
    text: String
  }
  data = {
    animationData: {},
    currentComponent: {}
  }
  methods = {
    initZanNoticeBarScroll() {
      let componentId = this.componentId
      let currentComponent = {
        width: undefined,
        wrapWidth: undefined,
        animation: null,
        resetAnimation: null
      }
      wx
        .createSelectorQuery()
        .select(`#${componentId}__content`)
        .boundingClientRect(rect => {
          if (rect.width) {
            currentComponent.width = rect.width
            wx
              .createSelectorQuery()
              .select(`#${componentId}__content-wrap`)
              .boundingClientRect(rect => {
                currentComponent.wrapWidth = rect.width
                if (currentComponent.wrapWidth < currentComponent.width) {
                  let mstime = currentComponent.width / 40 * 1000
                  currentComponent.animation = wx.createAnimation({
                    duration: mstime,
                    timingFunction: 'linear'
                  })
                  currentComponent.resetAnimation = wx.createAnimation({
                    duration: 0,
                    timingFunction: 'linear'
                  })
                  this.currentComponent = currentComponent
                  this.methods.scrollZanNoticeBar.call(this, componentId, mstime)
                }
              })
              .exec()
          } else {
            console.warn('页面缺少 noticebar 元素')
          }
        })
        .exec()
    },

    scrollZanNoticeBar(componentId, mstime) {
      let currentComponent = this.currentComponent
      let resetAnimationData = currentComponent.resetAnimation.translateX(currentComponent.wrapWidth).step()
      this.animationData = resetAnimationData.export()
      this.$apply()
      let aninationData = currentComponent.animation.translateX(-mstime * 40 / 1000).step()
      setTimeout(() => {
        this.animationData = aninationData.export()
        this.$apply()
      }, 100)

      setTimeout(() => {
        this.methods.scrollZanNoticeBar.call(this, componentId, mstime)
      }, mstime)
    }
  }
}
</script>
