<route lang="json5" type="page">
{
  layout: 'nav',
  style: {
    navigationBarTitleText: '登录',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="login-container relative h-full">
    <image src="/static/logo.svg" alt="" class="w-24 h-24 block mx-auto pt-25" />
    <view class="text-center text-2xl mt-2 mb-8">高考指南</view>
    <view class="px-10 w-full">
      <wd-button type="primary" @click="login">手机号快捷登录</wd-button>
    </view>

    <view class="absolute bottom-5 h-30 w-full flex flex-col justify-between items-center">
      <view class="flex flex-col items-center gap-5">
        <view class="text-xs">其他登录方式</view>
        <view class="">
          <wd-icon name="phone" size="22px" @click="switchLoginMethod"></wd-icon>
        </view>
      </view>
      <view class="text-xs">阅读并同意</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
const switchLoginMethod = () => {
  uni.navigateTo({
    url: '/pages/login/phone',
  })
}

const login = () => {
  uni.switchTab({
    url: '/pages/index/index',
  })
}
</script>

<style lang="scss" scoped>
//
uni-page-body {
  height: 100%;
}
</style>
