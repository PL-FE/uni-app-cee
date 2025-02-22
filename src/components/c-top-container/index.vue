<template>
  <view>
    <view :style="{ height: `${statusBarHeight}px` }"></view>
    <view
      class="px-3 box-border flex items-center flex-row justify-between"
      :style="{
        height: `${menuButtonHeight + menuButtonPadding * 2}px`,
        width: menuButtonInfo?.left ? `${menuButtonInfo.left}px` : 'auto',
        padding: `${menuButtonPadding}px 0`,
      }"
    >
      <view class="">
        <slot name="left">
          <view class="px-3"><wd-icon name="thin-arrow-left" size="16px"></wd-icon></view>
        </slot>
      </view>
      <view class="flex-1" v-if="$slots.mid">
        <slot name="mid"></slot>
      </view>
      <view class="flex-1" v-if="$slots.right">
        <slot name="right"></slot>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
const menuButtonInfo = uni?.getMenuButtonBoundingClientRect?.()
const statusBarHeight = uni?.getSystemInfoSync?.()?.statusBarHeight || 0 // 系统信息里的状态栏高度

const menuButtonPadding = menuButtonInfo ? menuButtonInfo.top - statusBarHeight : 0
const menuButtonHeight = menuButtonInfo?.height || 60
</script>

<style lang="scss" scoped>
//
</style>
