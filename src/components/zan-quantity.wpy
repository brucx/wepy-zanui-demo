<style lang="less">
.zan-quantity {
  color: #666;
}

.zan-quantity view {
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

.zan-quantity .zan-quantity__minus {
  border-right: none;
  border-radius: 2px 0 0 2px;
}

.zan-quantity .zan-quantity__text {
  border: 1rpx solid #999;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  height: 30px;
  width: 40px;
  font-size: 12px;
  line-height: 30px;
}

.zan-quantity .zan-quantity__plus {
  border-left: none;
  border-radius: 0 2px 2px 0;
}

.zan-quantity .zan-quantity--disabled {
  background: #f8f8f8;
  color: #bbb;
  border-color: #e8e8e8;
}

.zan-quantity--small view {
  min-width: 36px;
  line-height: 18px;
}

.zan-quantity--small .zan-quantity__text {
  width: 36px;
  line-height: 28px;
  height: 28px;
}
</style>
<template>
  <view class="zan-quantity {{ size === 'small' ? 'zan-quantity--small' : '' }}">
    <view class="zan-quantity__minus {{ quantity <= min ? 'zan-quantity--disabled' : '' }}" data-component-id="{{ componentId }}" data-quantity="{{ quantity }}" data-disabled="{{ quantity <= min }}" bindtap="handleZanQuantityMinus">-</view>
    <input class="zan-quantity__text {{ min >= max ? 'zan-quantity--disabled' : '' }}" type="number" data-component-id="{{ componentId }}" data-min="{{ min }}" data-max="{{ max }}" value="{{ quantity }}" disabled="{{ min >= max }}" bindblur="handleZanQuantityBlur"></input>
    <view class="zan-quantity__plus {{ quantity >= max ? 'zan-quantity--disabled' : '' }}" data-component-id="{{ componentId }}" data-quantity="{{ quantity }}" data-disabled="{{ quantity >= max }}" bindtap="handleZanQuantityPlus">+</view>
  </view>
</template>
<script>
import wepy from 'wepy'

export default class zanQuantity extends wepy.component {
  props = {
    quantity: {
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
    size: String,
    componentId: String,
  }
  data = {}
  methods = {
    handleZanQuantityMinus(e) {
      this.handle(e, -1)
    },

    handleZanQuantityPlus(e) {
      this.handle(e, +1)
    },

    handleZanQuantityBlur(e) {
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
    let quantity = +dataset.quantity

    if (disabled) return null

    this.callback(componentId, quantity + num)
  }

  callback(componentId, quantity) {
    quantity = +quantity
    let e = { componentId, quantity }
    console.info('[zan:quantity:change]', e)

    this.$emit('zanQuantityChange', e)
  }
}

</script>
