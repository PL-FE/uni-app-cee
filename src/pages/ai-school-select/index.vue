<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: 'AI智能选校',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="">
    <cTopContainer class="absolute top w-full">
      <template #right>
        <view class="center">
          <view class="px-2 w-40">
            <uv-subsection
              :list="list"
              :current="pageIndex"
              custom-style="height: 60rpx;border-radius: 30rpx;"
              custom-item-style="border-radius: 30rpx;"
              @change="pageChange"
            ></uv-subsection>
          </view>
        </view>
      </template>
    </cTopContainer>
  </view>
</template>

<script lang="ts" setup>
import cTopContainer from '@/components/c-top-container/index.vue'

// list: ['未付款', '待评价', '已付款'],
// 				current: 1

const list = ['院校优先', '专业优先']
const pageIndex = ref(1)

const pageChange = (index) => {
  pageIndex.value = index
}
</script>

<style lang="scss" scoped>
//
</style>
