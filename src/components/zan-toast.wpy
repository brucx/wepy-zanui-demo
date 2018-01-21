<style lang="less">
.zan-toast {
  position: fixed;
  top: 35%;
  left: 20%;
  transform: translateZ(0) translateY(-100%);
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 14px;
  width: 60%;
  line-height: 1.5em;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
  z-index: 100;
}
</style>
<template>
  <view class="zan-toast" wx:if="{{ zanToast.show }}" @tap="clearZanToast">
    {{ zanToast.title }}</view>
</template>
<script>
import wepy from 'wepy'

export default class zanToast extends wepy.component {
  props = {}
  data = {
    zanToast: {}
  }
  methods = {
    showZanToast({title, timeout}) {
      var zanToast = this.zanToast || {}
      clearTimeout(zanToast.timer)

      // 弹层设置~
      this.zanToast = {
        show: true,
        title
      }
      this.$apply()

      var timer = setTimeout(() => {
        this.methods.clearZanToast.call(this)
      }, timeout || 3000)

      this.zanToast.timer = timer
      this.$apply()
    },
    clearZanToast() {
      var zanToast = this.zanToast || {}
      clearTimeout(zanToast.timer)

      this.zanToast.show = false
      this.$apply()
    }
  }
}
</script>
