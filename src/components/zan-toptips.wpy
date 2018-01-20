<style lang="scss">
.zan-toptips {
  display: block;
  position: fixed;
  transform: translateY(-100%);
  width: 100%;
  min-height: 32px; /* 至少有一行的高度，保证第一次动画显示正常 */
  top: 0;
  line-height: 2.3;
  font-size: 14px;
  text-align: center;
  color: #fff;
  background-color: #e64340;
  z-index: 110;
}
</style>
<template>
  <view animation="{{animationData}}" class="zan-toptips"> {{ topTips.content }} </view>
</template>
<script>
import wepy from 'wepy'

export default class zanToptips extends wepy.component {
  props = {}
  data = {
    topTips: {},
    animationData: {}
  }
  methods = {
    showZanTopTips({ content = '', options = {} }, event) {
      console.log('showZanTopTips', content, options)
      let topTips = this.topTips || {}
      // 如果已经有一个计时器在了，就清理掉先
      if (topTips.timer) {
        clearTimeout(topTips.timer)
        topTips.timer = undefined
      }

      if (typeof options === 'number') {
        options = {
          duration: options
        }
      }

      // options参数默认参数扩展
      options = Object.assign(
        {
          duration: 3000
        },
        options
      )

      // 原生动画
      let animation = wepy.createAnimation({
        duration: 400,
        timingFunction: 'ease'
      })
      this.animation = animation

      const toggle = () => {
        wx
          .createSelectorQuery()
          .select('.zan-toptips')
          .boundingClientRect(rect => {
            this.topTips.show ? animation.translateY().step() : animation.translateY(-rect.height).step()
            this.animationData = animation.export()
            this.$apply()
          })
          .exec()
      }

      // 设置定时器，定时关闭topTips
      let timer = setTimeout(() => {
        this.topTips.show = false
        this.topTips.timer = undefined
        toggle()
      }, options.duration)

      // 展示出topTips
      this.topTips = {
        show: true,
        content,
        timer
      }
      toggle()
    }
  }
}
</script>
