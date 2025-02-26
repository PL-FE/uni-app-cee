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
  <view class="ai-school-select-container">
    <cTopContainer class="absolute top w-full z-2">
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

    <view
      class="absolute z-1 inset-0 flex flex-col"
      :style="{
        paddingBottom: 'env(safe-area-inset-bottom)',
      }"
    >
      <view
        class="filterTabs"
        :style="{ paddingTop: safeTop + 'px', backgroundColor: 'var(--wot-color-bg-bg)' }"
      >
        <wd-tabs v-model="tabIndex" :lineWidth="0">
          <block v-for="item in 4" :key="item">
            <wd-tab :title="`标签${item}`"></wd-tab>
          </block>
        </wd-tabs>
      </view>
      <view class="flex-1 flex flex-col bg-var-bg">
        <!-- 列表筛选 -->
        <view class="flex flex-col">
          <view class="mx-5 bg-var-bg-bg py-1 rounded-2xl my-2">
            <c-popup-menu v-model="menus" @select="handleSelectMenu">
              <template #a1>
                <cSchoolSelect />
              </template>
              <template #a2><cSchoolSelect /></template>
              <template #a3>a3</template>
              <template #a4>a4</template>
            </c-popup-menu>
          </view>

          <view class="flex items-center px-5">
            <view class="flex gap-2 items-center text-xs">
              <text>推荐分数</text>
              <view>
                <wd-icon name="error-circle"></wd-icon>
              </view>
            </view>
            <view class="flex-1 px-5">
              <wd-slider hide-min-max v-model="slider" change="handleSliderChange"></wd-slider>
            </view>
          </view>
        </view>

        <!-- 内容列表 -->
        <view class="flex-1 flex list-container">
          <scroll-view :scroll-y="true">
            <view v-for="item in 20" :key="item" class="h-15">{{ item }}</view>
          </scroll-view>
        </view>
      </view>
      <view class="h-15">底部</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import cTopContainer from '@/components/c-top-container/index.vue'
import cPopupMenu from '@/components/c-popup-menu/index.vue'
import { getCurrentInstance } from 'vue'
import cSchoolSelect from '@/components/business/c-school-select/index.vue'
const instance = getCurrentInstance()

// list: ['未付款', '待评价', '已付款'],
// 				current: 1
const { safeTop } = useTopInfo()
const listHeight = ref(0)
onMounted(() => {
  const query = uni.createSelectorQuery().in(instance.proxy)
  query
    .select('.list-container')
    .boundingClientRect((data) => {
      if (data) {
        console.log(data)
        listHeight.value = data.height
      } else {
        console.log('元素未找到')
      }
    })
    .exec()
})

const list = ['院校优先', '专业优先']
const menus = ref([
  {
    name: '院校',
    active: false,
    id: 'a1',
  },
  {
    name: '专业',
    active: false,
    id: 'a2',
  },
  {
    name: '职业',
    active: false,
    id: 'a3',
  },
  {
    name: '排序',
    active: false,
    id: 'a4',
  },
])
const pageIndex = ref(1)
const tabIndex = ref(0)
const slider = ref([10, 30])
const pageChange = (index) => {
  pageIndex.value = index
}

const handleSelectMenu = (filterItem) => {
  const { name, active } = filterItem
}

function handleResize(detail: Record<string, string | number>) {
  const { height, width, top, right, bottom, left } = detail
  console.log(height, width, top, right, bottom, left)
}
</script>

<style lang="scss" scoped>
//
::v-deep(.ai-school-select-container) {
  .wd-slider__label {
    bottom: 4px !important;
    font-size: 12px !important;
  }
  .wd-slider__has-label {
    padding-top: 0 !important;
  }
  .filterTabs {
    .wd-tabs__nav-item.is-active {
      background-color: var(--wot-color-bg);
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    .wd-tabs__nav {
      background-color: var(--wot-color-bg-bg) !important;
      --wot-tabs-nav-height: 30px;
    }
  }
}
</style>
