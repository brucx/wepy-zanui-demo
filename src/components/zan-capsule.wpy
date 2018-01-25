<style lang="scss">
.zan-capsule {
  display: inline-block;
  font-size: 12px;
  vertical-align: middle;
  line-height: 19px;
  transform: scale(0.83);
}
.zan-capsule__left,
.zan-capsule__right {
  display: inline-block;
  line-height: 17px;
  height: 19px;
  vertical-align: middle;
  box-sizing: border-box;
}
.zan-capsule__left {
  padding: 0 2px;
  color: #fff;
  background: #999;
  border-radius: 2px 0 0 2px;
  border: 1rpx solid #999;
}
.zan-capsule__right {
  padding: 0 5px;
  color: #999;
  border-radius: 0 2px 2px 0;
  border: 1rpx solid #999;
}

.zan-capsule--danger .zan-capsule__left {
  color: #fff;
  background: #f24544;
  border-color: #f24544;
}

.zan-capsule--danger .zan-capsule__right {
  color: #f24544;
  border-color: #f24544;
}
</style>
<template name="capsule">
  <view class="zan-capsule zan-capsule--{{options.type}}">
    <block wx:if="{{options.color}}">
      <view class="zan-capsule__left" style="background: {{ options.color }}; border-color: {{ options.color }}">{{ options.leftText }}</view>
      <view class="zan-capsule__right" style="color: {{ options.color }}; border-color: {{ options.color }}">{{ options.rightText }}</view>
    </block>
    <block wx:else>
      <view class="zan-capsule__left">{{ options.leftText }}</view>
      <view class="zan-capsule__right">{{ options.rightText }}</view>
    </block>
  </view>
</template>
<script>
import wepy from 'wepy'

export default class zanCapsule extends wepy.component {
  props = {
    options: {
      type: Object,
      default: {
        type: '',
        color: '',
        leftText: '',
        rightText: ''
      }
    }
  }
  data = {}
  methods = {}
}
</script>
