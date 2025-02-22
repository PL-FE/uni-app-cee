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
    <view class="px-10 flex flex-col gap-2">
      <!-- <uv-button type="primary" text="手机号快捷登录" shape="circle"></uv-button> -->
      <uv-input
        placeholder="手机号"
        type="number "
        border="surround"
        clearable
        shape="circle"
      ></uv-input>
      <uv-input placeholder="验证码" shape="circle">
        <!-- vue3模式下必须使用v-slot:suffix -->
        <template v-slot:suffix>
          <uv-code
            ref="uCode"
            seconds="20"
            @change="(val) => (codeText = val)"
            changeText="X秒重新获取"
          ></uv-code>
          <uv-button
            @click="getCode"
            :text="codeText"
            type="primary"
            shape="circle"
            size="mini"
          ></uv-button>
        </template>
      </uv-input>
    </view>
    <view class="px-10">
      <wd-button type="primary" @click="login" block>登录</wd-button>
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
import { useToast } from 'wot-design-uni'

const toast = useToast()

const uCode = ref()
const codeText = ref('')
const getCode = () => {
  if (uCode.value.canGetCode) {
    // 模拟向后端请求验证码
    uni.showLoading({
      title: '正在获取验证码',
    })
    setTimeout(() => {
      uni.hideLoading()
      // 这里此提示会被this.start()方法中的提示覆盖
      toast.show({
        position: 'bottom',
        msg: '验证码已发送',
      })
      // 通知验证码组件内部开始倒计时
      uCode.value.start()
    }, 2000)
  } else {
    toast.show({
      position: 'bottom',
      msg: '倒计时结束后再发送',
    })
  }
}

const login = () => {
  uni.switchTab({
    url: '/pages/index/index',
  })
}

const switchLoginMethod = () => {
  uni.navigateTo({
    url: '/pages/login/index',
  })
}
</script>

<style lang="scss" scoped>
//
uni-page-body {
  height: 100%;
}
</style>
