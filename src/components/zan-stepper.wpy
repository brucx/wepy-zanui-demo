<style lang="less">
.zan-stepper {
  color: #666;
}

.zan-stepper view {
  display: inline-block;
  line-height: 20px;
  padding: 5px 0;
  text-align: center;
  min-width: 40px;
  box-sizing: border-box;
  vertical-align: middle;
  font-size: 12px;
  border: 1rpx solid #999;
}

.zan-stepper .zan-stepper__minus {
  border-right: none;
  border-radius: 2px 0 0 2px;
}

.zan-stepper .zan-stepper__text {
  border: 1rpx solid #999;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  height: 30px;
  width: 40px;
  font-size: 12px;
  line-height: 30px;
}

.zan-stepper .zan-stepper__plus {
  border-left: none;
  border-radius: 0 2px 2px 0;
}

.zan-stepper .zan-stepper--disabled {
  background: #f8f8f8;
  color: #bbb;
  border-color: #e8e8e8;
}

.zan-stepper--small view {
  min-width: 36px;
  line-height: 18px;
}

.zan-stepper--small .zan-stepper__text {
  width: 36px;
  line-height: 28px;
  height: 28px;
}
</style>
<template>
  <view class="zan-stepper {{ size === 'small' ? 'zan-stepper--small' : '' }}">
    <view class="zan-stepper__minus {{ stepper <= min ? 'zan-stepper--disabled' : '' }}" data-component-id="{{ componentId }}" data-stepper="{{ stepper }}" data-disabled="{{ stepper <= min }}" bindtap="handleZanStepperMinus">-</view>
    <input class="zan-stepper__text {{ min >= max ? 'zan-stepper--disabled' : '' }}" type="number" data-component-id="{{ componentId }}" data-min="{{ min }}" data-max="{{ max }}" value="{{ stepper }}" disabled="{{ min >= max }}" bindblur="handleZanStepperBlur"></input>
    <view class="zan-stepper__plus {{ stepper >= max ? 'zan-stepper--disabled' : '' }}" data-component-id="{{ componentId }}" data-stepper="{{ stepper }}" data-disabled="{{ stepper >= max }}" bindtap="handleZanStepperPlus">+</view>
  </view>
</template>
<script>
import wepy from 'wepy'

export default class zanStepper extends wepy.component {
  props = {
    stepper: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: ''
    },
    componentId: String
  }
  data = {}
  methods = {
    handleZanStepperMinus(e) {
      this.handle(e, -1)
    },

    handleZanStepperPlus(e) {
      this.handle(e, +1)
    },

    handleZanStepperBlur(e) {
      let dataset = e.currentTarget.dataset
      let componentId = dataset.componentId
      let max = +dataset.max
      let min = +dataset.min
      let value = e.detail.value

      if (!value) {
        setTimeout(() => {
          this.callback(componentId, min)
        }, 16)
        this.callback(componentId, value)
        return '' + value
      }

      value = +value
      if (value > max) {
        value = max
      } else if (value < min) {
        value = min
      }

      this.callback(componentId, value)

      return '' + value
    }
  }

  handle(e, num) {
    let dataset = e.currentTarget.dataset
    let componentId = dataset.componentId
    let disabled = dataset.disabled
    let stepper = +dataset.stepper

    if (disabled) return null

    this.callback(componentId, stepper + num)
  }

  callback(componentId, stepper) {
    stepper = +stepper
    let e = { componentId, stepper }
    console.info('[zan:stepper:change]', e)

    this.$emit('zanStepperChange', e)
  }
}
</script>
