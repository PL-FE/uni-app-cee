<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '立即填报',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="">
    <cTopContainer class="absolute top w-full z-1"></cTopContainer>
    <view
      class="absolute top w-full z-0"
      :style="{
        paddingTop: safeTop + 'px',
        height: '300rpx',
        background: '#d7d7d7',
      }"
    ></view>
    <view class="relative z-1" :style="{ paddingTop: safeTop + 'px' }">
      <view class="text-center">AI模拟填志愿，冲稳保梯度0风险</view>
      <view class="flex justify-around mx-10 mt-3">
        <wd-tag round plain type="primary">精准预测</wd-tag>
        <wd-tag round plain type="primary">AI防滑档</wd-tag>
        <wd-tag round plain type="primary">百万数据支撑</wd-tag>
      </view>
      <view class="bg-[var(--wot-color-bg)] m-5 rounded-5">
        <wd-form ref="formRef" :model="model" errorType="toast">
          <wd-picker :columns="columns" label="单列选项" v-model="model.val1" />
          <wd-picker :columns="columns" label="高考年份" v-model="model.val2" />
          <wd-cell title="选择科目(6选3)" vertical>
            <cListSelect v-model="model.val6" :list="list" :max="3" />
          </wd-cell>
          <wd-input type="text" label="考试分数" v-model="model.val3" placeholder="请输入..." />
          <wd-input type="text" label="我的位次" v-model="model.val4" placeholder="请输入..." />
          <wd-cell title="考生性别" center>
            <wd-segmented :options="['男', '女']" v-model:value="model.val5"></wd-segmented>
          </wd-cell>
        </wd-form>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import cTopContainer from '@/components/c-top-container/index.vue'
import cListSelect from '@/components/c-list-select/index.vue'

const { safeTop } = useTopInfo()

const columns = ref(['选项1', '选项2', '选项3', '选项4', '选项5', '选项6', '选项7'])
const list = ['物理', '历史', '化学', '生物', '政治', '地理'].map((a, i) => {
  return {
    text: a,
    value: i,
  }
})

const model = reactive({
  val1: '',
  val2: '',
  val3: '',
  val4: '',
  val5: '',
  val6: [],
})

const formRef = ref()

function handleSubmit() {
  formRef.value
    .validate()
    .then(({ valid, errors }) => {
      if (valid) {
      }
    })
    .catch((error) => {
      console.log(error, 'error')
    })
}
</script>

<style lang="scss" scoped>
//
</style>
