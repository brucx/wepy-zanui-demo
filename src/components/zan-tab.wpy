<style lang="scss">
.zan-tab {
  height: 45px;
}
.zan-tab__bd {
  width: 750rpx;
  display: flex;
  flex-direction: row;
  border-bottom: 1rpx solid #e5e5e5;
  background: #fff;
}
.zan-tab__bd--fixed {
  position: fixed;
  top: 0;
  z-index: 2;
}
.zan-tab__item {
  flex: 1;
  display: inline-block;
  padding: 0 10px;
  line-height: 0;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
}

.zan-tab__title {
  display: inline-block;
  max-width: 100%;
  height: 44px;
  line-height: 44px;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  word-break: keep-all;
  font-size: 14px;
  color: #666;
}

.zan-tab__item--selected .zan-tab__title {
  color: #f44;
  border-bottom: 2px solid #f44;
}

.zan-tab__bd--scroll {
  display: block;
  white-space: nowrap;
}
.zan-tab__bd--scroll .zan-tab__item {
  min-width: 80px;
}
</style>
<template>
  <view class="zan-tab">
    <block wx:if="{{tab.scroll}}">
      <scroll-view class="zan-tab__bd zan-tab__bd--scroll {{ fixed ? 'zan-tab__bd--fixed' : '' }}" scroll-x="true" style="height: {{ tab.height ? tab.height + 'px' : 'auto' }}">
        <view wx:for="{{tab.list}}" wx:key="id" class="zan-tab__item {{tab.selectedId == item.id ? 'zan-tab__item--selected' : ''}}" data-component-id="{{componentId}}" data-item-id="{{item.id}}" @tap="handleZanTabChange">
          <view class="zan-tab__title">{{item.title}}</view>
        </view>
      </scroll-view>
    </block>
    <block wx:else>
      <view class="zan-tab__bd {{fixed ? 'zan-tab__bd--fixed' : ''}}">
        <view wx:for="{{tab.list}}" wx:key="id" class="zan-tab__item {{tab.selectedId == item.id ? 'zan-tab__item--selected' : ''}}" data-component-id="{{componentId}}" data-item-id="{{item.id}}" @tap="handleZanTabChange">
          <view class="zan-tab__title">{{item.title}}</view>
        </view>
      </view>
    </block>
  </view>
</template>
<script>
import wepy from 'wepy'

export default class zanTab extends wepy.component {
  props = {
    tab: Object,
    componentId: String
  }
  data = {}
  methods = {
    handleZanTabChange(e) {
      let { componentId, itemId: selectedId } = e.currentTarget.dataset
      console.info('[zan:tab:change]', { componentId, selectedId })
      this.$emit('zanTabChange', selectedId)
    }
  }
}
</script>
