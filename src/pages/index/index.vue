<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  layout: 'tabbar',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
}
</route>
<template>
  <view class="relative">
    <cTopContainer class="absolute top w-full">
      <template #left>
        <view class="text-[10px] text-center pl-2">
          <view>距离高考</view>
          <view>110天</view>
        </view>
      </template>
      <template #right>
        <view class="px-2">
          <uv-input
            placeholder="搜索学校/专业"
            border="surround"
            readonly
            shape="circle"
            v-model="searchText"
            :fontSize="12"
            :customStyle="{ padding: '2px 6px' }"
          ></uv-input>
        </view>
      </template>
    </cTopContainer>
    <view
      class="center"
      :style="{
        paddingTop: safeTop + 'px',
        height: '480rpx',
        background: 'var(--wot-color-bg)',
        borderBottomLeftRadius: '100rpx',
        borderBottomRightRadius: '100rpx',
      }"
    >
      <view class="text-3xl">
        大数据透视千校
        <br />
        AI定制志愿方案
      </view>
    </view>
    <view class="relative">
      <view class="absolute! left-[50%] translate-x-[-50%] top-0 translate-y-[-50%]">
        <wd-button
          custom-class="custom-shadow"
          @click="hadnleEntry"
          style="min-width: 10px !important"
          :customStyle="{
            width: '4.5rem',
            minWidth: '4.5rem',
            height: '4.5rem',
          }"
        >
          <view class="leading-normal">
            <view>立即</view>
            <view>填报</view>
          </view>
        </wd-button>
      </view>

      <view class="px-3 gap-3 flex flex-col pt-3">
        <view class="flex gap-3">
          <view class="box-style" hover-class="card--active">
            <view class="p-3">
              <view class="font-bold text-xl leading-loose">AI模拟投档</view>
              <view class="text-sm text-[var(--wot-color-secondary)]">AI防止滑档！</view>
              <view class="text-sm text-[var(--wot-color-secondary)]">冲志愿更敢</view>
            </view>
          </view>
          <view class="flex flex-1 gap-3 flex-col">
            <view class="box-style box-height" hover-class="card--active">
              <view class="p-3">
                <view class="font-bold text-xl leading-loose">一分一段表</view>
                <view class="text-sm text-[var(--wot-color-secondary)]">知分知位！</view>
                <view class="text-sm text-[var(--wot-color-secondary)]">我的排名我知道</view>
              </view>
            </view>
            <view class="box-style box-height" hover-class="card--active">
              <view class="p-3">
                <view class="font-bold text-xl leading-loose">查专业</view>
                <view class="text-sm text-[var(--wot-color-secondary)]">冷门!=差专业</view>
                <view class="text-sm text-[var(--wot-color-secondary)]">专业多维数据透视</view>
              </view>
            </view>
          </view>
        </view>
        <view class="flex gap-3">
          <view class="box-style box-height" hover-class="card--active">
            <view class="p-3">
              <view class="font-bold text-xl leading-loose">查大学</view>
              <view class="text-sm text-[var(--wot-color-secondary)]">你的理想大学</view>
              <view class="text-sm text-[var(--wot-color-secondary)]">这里都有</view>
            </view>
          </view>
          <view class="box-style box-height" hover-class="card--active">
            <view class="p-3">
              <view class="font-bold text-xl leading-loose">MBIT性格测试</view>
              <view class="text-sm text-[var(--wot-color-secondary)]">你的性格</view>
              <view class="text-sm text-[var(--wot-color-secondary)]">本该学这个</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import cTopContainer from '@/components/c-top-container/index.vue'
import useTopInfo from '@/hooks/useTopInfo'
defineOptions({
  name: 'Home',
})

const searchText = ref('')

const { safeTop } = useTopInfo()

const hadnleEntry = () => {
  uni.navigateTo({
    url: '/pages/enter-info/index',
  })
}
</script>

<style lang="scss" scoped>
.box-style {
  flex: 1;
  background-color: var(--wot-color-bg);
}
.box-height {
  min-height: 200rpx;
}

.card--active {
  background-color: var(--wot-input-disabled-color);
}
</style>
