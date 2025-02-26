<template>
  <view class="">
    <view class="font-bold text-xs">{{ title }}</view>
    <view class="mt-3">
      <slot></slot>
    </view>
  </view>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
//
</style>
