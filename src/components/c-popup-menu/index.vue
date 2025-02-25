<template>
  <view class="c-popup-menu-container">
    <view class="flex items-center justify-around">
      <view
        v-for="(item, index) in menus"
        :key="index"
        class="c-popup-menu-item flex items-center gap-1"
        :class="{ 'c-popup-menu-item-active': item?.active }"
        @click="onSelect(item, index)"
      >
        <view class="text-xs">{{ item.name }}</view>
        <view>
          <wd-icon :name="item.active ? 'caret-up-small' : 'caret-down-small'"></wd-icon>
        </view>
      </view>
    </view>

    <wd-popup
      @close="popupClose()"
      v-model="popupShow"
      position="bottom"
      safe-area-inset-bottom
      custom-style="border-radius:32rpx;"
    >
      <view v-for="item in menus" :key="item.id">
        <view
          v-if="item.active"
          class="h-[80vh] max-h-[80vh] min-h-[600px] overflow-hidden flex flex-col"
        >
          <view class="flex justify-between p-5 pb-0">
            <text class="text-xl font-bold">选择{{ item.name }}</text>
            <wd-icon name="close"></wd-icon>
          </view>
          <view class="text-[var(--wot-color-aid)] px-5">
            您可以选择您的意向院校信息，筛选可填报志愿
          </view>
          <view class="flex-1 relative">
            <slot :name="item.id" :data="item"></slot>
          </view>
        </view>
      </view>
    </wd-popup>
  </view>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    modelValue: { name: string; active: boolean; id: string }[]
  }>(),
  {
    modelValue: () => [],
  },
)

const emits = defineEmits(['select', 'update:modelValue'])

const menus = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emits('update:modelValue', val)
  },
})
const popupShow = ref(false)
const curFIlterActive = ref()

const onSelect = (item, index) => {
  item.active = true
  popupShow.value = true
  curFIlterActive.value = item.name
  emits('select', item, index)
}

const curFileerActiveItem = computed(() => {
  return menus.value.find((item) => item.name === curFIlterActive.value)
})

const popupClose = () => {
  popupShow.value = false
  curFileerActiveItem.value.active = false
}
</script>

<style lang="scss" scoped>
//
.c-popup-menu-item-active {
  color: $uni-color-primary;
}
</style>
