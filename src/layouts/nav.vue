<template>
  <wd-config-provider :themeVars="themeVars" class="h-full">
    <view class="fixed inset-0 flex flex-col">
      <uv-status-bar></uv-status-bar>
      <wd-navbar :title="title" left-text="" left-arrow @click-left="handleClickLeft"></wd-navbar>

      <view class="flex-1"><slot /></view>
      <uv-safe-bottom></uv-safe-bottom>
    </view>
    <wd-toast />
    <wd-message-box />
  </wd-config-provider>
</template>

<script lang="ts" setup>
import type { ConfigProviderThemeVars } from 'wot-design-uni'
import pagesJson from '@/pages.json'
const handleClickLeft = () => {
  uni.navigateBack()
}

const title = computed(() => {
  const pages = getCurrentPages()
  const currentPage = pages[pages.length - 1]
  return pagesJson.pages.find((a) => a.path === currentPage.route)?.style?.navigationBarTitleText
})

const themeVars: ConfigProviderThemeVars = {
  // colorTheme: 'red',
  // buttonPrimaryBgColor: '#07c160',
  // buttonPrimaryColor: '#07c160',
}
</script>
