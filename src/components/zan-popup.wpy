<style lang="scss">
.zan-popup {
  visibility: hidden;
}
.zan-popup--show {
  visibility: visible;
}
.zan-popup__mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
  display: none;
}
.zan-popup__container {
  position: fixed;
  left: 50%;
  top: 50%;
  background: #fff;
  transform: translate3d(-50%, -50%, 0);
  transform-origin: center;
  transition: all 0.4s ease;
  z-index: 11;
  opacity: 0;
}
.zan-popup--show .zan-popup__container {
  opacity: 1;
}
.zan-popup--show .zan-popup__mask {
  display: block;
}

/* 左侧popup */
.zan-popup--left .zan-popup__container {
  left: 0;
  top: auto;
  transform: translate3d(-100%, 0, 0);
}
.zan-popup--show.zan-popup--left .zan-popup__container {
  transform: translate3d(0, 0, 0);
}

/* 右侧popup */
.zan-popup--right .zan-popup__container {
  right: 0;
  top: auto;
  left: auto;
  transform: translate3d(100%, 0, 0);
}
.zan-popup--show.zan-popup--right .zan-popup__container {
  transform: translate3d(0, 0, 0);
}

/* 底部popup */
.zan-popup--bottom .zan-popup__container {
  top: auto;
  left: auto;
  bottom: 0;
  transform: translate3d(0, 100%, 0);
}
.zan-popup--show.zan-popup--bottom .zan-popup__container {
  transform: translate3d(0, 0, 0);
}

/* 顶部popup */
.zan-popup--top .zan-popup__container {
  top: 0;
  left: auto;
  transform: translate3d(0, -100%, 0);
}
.zan-popup--show.zan-popup--top .zan-popup__container {
  transform: translate3d(0, 0, 0);
}

.popup-example--center {
  border-radius: 4px;
}

.popup-example--right .zan-popup__container {
  top: 0;
  bottom: 0;
}

.popup-example--left .zan-popup__container {
  top: 0;
  bottom: 0;
}

.popup-example--top .zan-popup__container {
  left: 0;
  right: 0;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 16px;
}
.popup-example--top .zan-popup__mask {
  opacity: 0;
}

.popup-example--bottom .zan-popup__container {
  left: 0;
  right: 0;
}
</style>
<template>
  <view class="zan-popup {{direction ? 'popup-example--' + direction + ' zan-popup--' + direction : ''}} {{ showPopup ? 'zan-popup--show' : ''}}">
    <view class="zan-popup__mask" bindtap="togglePopup"></view>
    <view class="zan-popup__container {{direction ? '' : 'popup-example--center'}}">
      <slot></slot>
    </view>
  </view>
</template>
<script>
import wepy from 'wepy'

export default class zanToast extends wepy.component {
  props = {
    direction: {
      type: String,
      default: ''
    }
  }
  data = {
    showPopup: false
  }
  methods = {
    togglePopup() {
      this.showPopup = !this.showPopup
      this.$apply()
    }
  }
}
</script>
