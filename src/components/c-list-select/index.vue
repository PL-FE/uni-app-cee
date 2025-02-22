<template>
  <view class="flex flex-wrap gap-2">
    <uv-tags
      v-for="item in list"
      :plain="!selectList.includes(item.value)"
      :key="item.value"
      :text="item.text"
      @click="onselect(item)"
      :type="onMax && !selectList.includes(item.value) ? 'info' : 'primary'"
    ></uv-tags>
  </view>
</template>

<script lang="ts" setup>
const selectList = ref([])

// 实现v-model语法糖
const props = defineProps(<{ list: any; modelValue: any; max: any }>{
  modelValue: {
    type: Array,
    default: () => [],
  },
  list: {
    type: Array,
    default: () => [],
  },
  max: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['update:modelValue'])

watch(
  () => props.modelValue,
  (newValue) => {
    selectList.value = newValue || []
  },
  {
    immediate: true,
  },
)

watch(selectList, (newValue) => {
  emit('update:modelValue', newValue)
})

const onMax = computed(() => {
  return props.max && selectList.value.length >= props.max
})

const onselect = (item: any) => {
  if (selectList.value.includes(item.value)) {
    selectList.value = selectList.value.filter((v) => v !== item.value)
  } else {
    if (onMax.value) {
      return
    }
    selectList.value.push(item.value)
  }
}
</script>

<style lang="scss" scoped>
//
</style>
