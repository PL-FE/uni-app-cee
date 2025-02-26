<template>
  <view class="flex flex-col absolute inset-0">
    <wd-search
      v-model="searchText"
      @search="search"
      placeholder-left
      hide-cancel
      placeholder="输入要查询的院校"
    />

    <view class="w-1/2">
      <wd-tabs v-model="tab">
        <wd-tab :title="`标签${item}`" v-for="item in 2" :key="item"></wd-tab>
      </wd-tabs>
    </view>

    <view class="flex w-full flex-1 bg-var-bg overflow-hidden">
      <wd-sidebar v-model="active" @change="handleChange">
        <wd-sidebar-item
          v-for="(item, index) in categories"
          :key="index"
          :value="index"
          :label="item.label"
          :disabled="item.disabled"
          :customStyle="{
            fontSize: '24rpx',
          }"
        />
      </wd-sidebar>
      <view class="h-full flex-1" :style="`transform: translateY(-${active * 100}%)`">
        <scroll-view
          v-for="(item, index) in categories"
          :key="index"
          class="h-full!"
          scroll-y
          scroll-with-animation
          :show-scrollbar="false"
          :scroll-top="scrollTop"
          :throttle="false"
        >
          <wd-cell-group :title="item.title" border>
            <wd-cell
              v-for="(cell, index) in item.items"
              :key="index"
              :title="cell.title"
              :label="cell.label"
              :customStyle="{}"
            >
              <wd-icon name="github-filled" size="24px"></wd-icon>
            </wd-cell>
          </wd-cell-group>
        </scroll-view>
      </view>
    </view>
    <view class="h-15">底部</view>

    <uv-safe-bottom></uv-safe-bottom>
  </view>
</template>

<script lang="ts" setup>
const searchText = ref('')
const tab = ref(0)
const search = () => {}

const active = ref<number>(1)
const scrollTop = ref<number>(0)
const subCategories = new Array(24).fill({ title: '标题文字', label: '这是描述这是描述' }, 0, 24)
const categories = ref([
  {
    label: '分类一',
    title: '标题一',
    icon: 'thumb-up',
    items: subCategories,
    disabled: false,
  },
  {
    label: '分类二',
    title: '标题二',
    icon: 'thumb-up',
    items: subCategories,
    disabled: false,
  },
  {
    label: '分类三',
    title: '标题三',
    icon: 'thumb-up',
    items: subCategories.slice(0, 18),
    disabled: false,
  },
  {
    label: '分类四',
    title: '标题四',
    icon: 'thumb-up',
    items: subCategories.slice(0, 21),
    disabled: false,
  },
  {
    label: '分类五',
    title: '标题五',
    icon: 'thumb-up',
    items: subCategories,
    disabled: false,
  },
  {
    label: '分类六',
    title: '标题六',
    icon: 'thumb-up',
    items: subCategories.slice(0, 18),
    disabled: false,
  },
  {
    label: '分类七',
    title: '标题七',
    icon: 'thumb-up',
    items: subCategories,
    disabled: true,
  },
])

function handleChange({ value }) {
  active.value = value
  scrollTop.value = -1
  nextTick(() => {
    scrollTop.value = 0
  })
}
</script>

<style lang="scss" scoped></style>
