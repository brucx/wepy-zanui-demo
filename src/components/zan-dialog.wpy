<style lang="scss">
@import '../zanui/common';

/* 基础样式 */
.zan-dialog--container {
  position: fixed;
  top: 45%;
  left: 50%;
  width: 80%;
  height: 0;
  font-size: 16px;
  overflow: hidden;
  transition: all 0.2s linear;
  border-radius: 4px;
  background-color: #fff;
  transform: translate3d(-50%, -50%, 0);
  color: #333;
  opacity: 0;
}

.zan-dialog--mask {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  transition: 0.3s;
  display: none;
}

/* 弹出层内容 */
.zan-dialog__header {
  padding: 15px 0 0;
  text-align: center;
}

.zan-dialog__content {
  position: relative;
  padding: 15px 20px;
  line-height: 1.5;
  min-height: 40px;

  &::after {
    @include hairline;
    border-bottom-width: 1px;
  }
}

/* 在有标题时，需要减弱内容的存在感 */
.zan-dialog__content--title {
  color: #999;
  font-size: 14px;
}

.zan-dialog__footer {
  overflow: hidden;
}

.zan-dialog__button {
  line-height: 50px;
  height: 50px;
  padding: 0 5px;
  border-radius: 0;
  margin-bottom: 0;

  &::after {
    border-width: 0;
    border-radius: 0;
  }
}

/* 展示时，样式重置 */
.zan-dialog--show .zan-dialog--container {
  opacity: 1;
  height: auto;
}

.zan-dialog--show .zan-dialog--mask {
  display: block;
}

/* 水平/垂直布局 */
.zan-dialog__footer--horizon {
  display: flex;
}

.zan-dialog__footer--horizon .zan-dialog__button {
  flex: 1;

  &::after {
    border-right-width: 1px;
  }

  &:last-child::after {
    border-right-width: 0;
  }
}

.zan-dialog__footer--vertical .zan-dialog__button {
  flex: 1;

  &::after {
    border-bottom-width: 1px;
  }

  &:last-child::after {
    border-bottom-width: 0;
  }
}
</style>
<template>
  <view class="zan-dialog {{ zanDialog.show ? 'zan-dialog--show' : '' }}">
    <view class="zan-dialog--mask"></view>
    <view class="zan-dialog--container">
      <view
        wx:if="{{ zanDialog.title }}"
        class="zan-dialog__header">{{ zanDialog.title }}</view>
      <view
        class="zan-dialog__content {{ zanDialog.title ? 'zan-dialog__content--title' : '' }}">{{ zanDialog.content }}</view>
      <view
        class="zan-dialog__footer {{ zanDialog.buttonsShowVertical ? 'zan-dialog__footer--vertical' : 'zan-dialog__footer--horizon' }}">
        <block wx:for="{{ zanDialog.buttons }}" wx:key="{{ item.text }}-{{ item.type }}">
          <button
            class="zan-dialog__button zan-btn"
            data-type="{{ item.type }}"
            catchtap="handleZanDialogButtonClick"
            style="color: {{ item.color || '#333' }}">{{ item.text }}</button>
        </block>
      </view>
    </view>
  </view>
</template>
<script>
import wepy from 'wepy'

export default class zanDialog extends wepy.component {
  props = {}
  data = {
    zanDialog: {},
    animationData: {}
  }
  methods = {
    showZanDialog(options = {}, e) {
      const {
        // 自定义 btn 列表
        // { type: 按钮类型，回调时以此作为区分依据，text: 按钮文案, color: 按钮文字颜色 }
        buttons = [],
        // 标题
        title = '',
        // 内容
        content = ' ',
        // 按钮是否展示为纵向
        buttonsShowVertical = false,
        // 是否展示确定
        showConfirm = true,
        // 确认按钮文案
        confirmText = '确定',
        // 确认按钮颜色
        confirmColor = '#3CC51F',
        // 是否展示取消
        showCancel = false,
        // 取消按钮文案
        cancelText = '取消',
        // 取消按钮颜色
        cancelColor = '#333'
      } = options

      // 处理默认按钮的展示
      // 纵向排布确认按钮在上方
      let showCustomBtns = false
      if (buttons.length === 0) {
        if (showConfirm) {
          buttons.push({
            type: 'confirm',
            text: confirmText,
            color: confirmColor
          })
        }

        if (showCancel) {
          const cancelButton = {
            type: 'cancel',
            text: cancelText,
            color: cancelColor
          }
          if (buttonsShowVertical) {
            buttons.push(cancelButton)
          } else {
            buttons.unshift(cancelButton)
          }
        }
      } else {
        showCustomBtns = true
      }

      return new Promise((resolve, reject) => {
        this.zanDialog = {
          show: true,
          showCustomBtns,
          buttons,
          title,
          content,
          buttonsShowVertical,
          showConfirm,
          confirmText,
          confirmColor,
          showCancel,
          cancelText,
          cancelColor,
          // 回调钩子
          resolve,
          reject
        }
        this.$apply()
      })
    },

    handleZanDialogButtonClick(e) {
      const _f = function() {}
      const { currentTarget = {} } = e
      const { dataset = {} } = currentTarget

      // 获取当次弹出框的信息
      const zanDialogData = this.zanDialog || {}
      const { resolve = _f, reject = _f } = zanDialogData

      // 重置 zanDialog 里的内容
      this.zanDialog = Object.assign(this.zanDialog, { show: false })

      // 自定义按钮，全部 resolve 形式返回，根据 type 区分点击按钮
      if (zanDialogData.showCustomBtns) {
        resolve({
          type: dataset.type
        })
        return
      }

      // 默认按钮，确认为 resolve，取消为 reject
      if (dataset.type === 'confirm') {
        resolve({
          type: 'confirm'
        })
      } else {
        reject({
          type: 'cancel'
        })
      }
    }
  }
}
</script>
