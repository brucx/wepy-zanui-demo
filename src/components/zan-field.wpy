<style lang="scss">
@import '../zanui/cell.scss';

.zan-field {
  padding: 7px 15px;
  color: #333;
}

.zan-field--wrapped {
  margin: 0 15px;
  background-color: #fff;

  &::after {
    left: 0;
    border-width: 1px;
    border-radius: 4px;
  }
}

.zan-field--wrapped + .zan-field--wrapped {
  margin-top: 10px;
}

.zan-field--error {
  color: #f40;
}

/* 圆角输入框时，将边框也置红 */
.zan-field--wrapped.zan-field--error::after {
  border-color: #f40;
}

.zan-field__title {
  color: #333;
  min-width: 65px;
  padding-right: 10px;
}

.zan-field__input {
  flex: 1;
  line-height: 1.6;
  padding: 4px 0;
  min-height: 22px;
  height: auto;
  font-size: 14px;
}

.zan-field__placeholder {
  font-size: 14px;
}

.zan-field__input--right {
  text-align: right;
}
</style>
<template>
  <view class="zan-cell zan-field {{ options.error ? 'zan-field--error' : '' }} {{ options.mode === 'wrapped' ? 'zan-field--wrapped' : '' }}">
    <view
      wx:if="{{ options.title }}"
      class="zan-cell__hd zan-field__title">{{ options.title }}</view>
    <textarea
      wx:if="{{ options.type === 'textarea' }}"
      auto-height
      name="{{ options.name || componentId || '' }}"
      value="{{ options.value }}"
      placeholder="{{ options.placeholder }}"
      class="zan-field__input zan-cell__bd {{ options.right ? 'zan-field__input--right' : '' }}"
      placeholder-class="zan-field__placeholder"
      bindinput="handleZanFieldChange"
      bindfocus="handleZanFieldFocus"
      bindblur="handleZanFieldBlur"
      data-component-id="{{ componentId || '' }}"></textarea>
    <input
      wx:else
      type="{{ options.inputType || 'text' }}"
      name="{{ options.name || componentId || '' }}"
      value="{{ options.value }}"
      placeholder="{{ options.placeholder }}"
      class="zan-field__input zan-cell__bd {{ options.right ? 'zan-field__input--right' : '' }}"
      placeholder-class="zan-field__placeholder"
      bindinput="handleZanFieldChange"
      bindfocus="handleZanFieldFocus"
      bindblur="handleZanFieldBlur"
      data-component-id="{{ componentId || '' }}"/>
  </view>
</template>
<script>
import wepy from 'wepy'

export default class zanField extends wepy.component {
  props = {
    options: {
      type: Object,
      default: {
        right: true,
        error: true,
        name: '',
        value: '',
        type: 'textarea',
        mode: 'wrapped',
        title: '消费总额',
        inputType: 'number',
        placeholder: '询问收银员后输入'
      }
    },
    componentId: String
  }
  data = {}
  methods = {
    clear() {
      this.options.value = '  '
      this.$apply()
      this.options.value = ''
      this.$apply()
    },
    handleZanFieldChange(event) {
      event.componentId = this.componentId

      console.info('[zan:field:change]', event)

      return this.$emit('zanFieldChange', event)
    },

    handleZanFieldFocus(event) {
      event.componentId = this.componentId

      console.info('[zan:field:focus]', event)

      return this.$emit('zanFieldFocus', event)
    },

    handleZanFieldBlur(event) {
      event.componentId = this.componentId

      console.info('[zan:field:blur]', event)

      return this.$emit('zanFieldBlur', event)
    }
  }
}
</script>
