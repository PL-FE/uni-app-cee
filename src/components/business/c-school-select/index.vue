<template>
  <view class="flex flex-col absolute inset-0">
    <wd-search
      v-model="searchText"
      @search="search"
      placeholder-left
      hide-cancel
      placeholder="输入要查询的院校"
    />
    <view v-show="searchText" class="flex-1 overflow-auto pb-2">
      <wd-status-tip image="search" tip="当前搜索无结果" v-if="!universitiesFilter.length" />

      <wd-checkbox-group v-else v-model="allSelect">
        <view class="flex flex-col gap-3 px-3">
          <view
            v-for="(item, index) in universitiesFilter"
            :key="index"
            class="flex justify-between items-center"
          >
            <view class="flex gap-2">
              <wd-img
                :width="45"
                :height="45"
                src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
              />
              <view class="h-45px flex flex-col justify-between">
                <view>{{ item.text }}</view>
                <view class="flex gap-2">
                  <wd-tag
                    v-for="(tag, index) in item.tags"
                    :key="tag"
                    customStyle="padding: 2px 6px"
                  >
                    {{ tag }}
                  </wd-tag>
                </view>
              </view>
            </view>
            <wd-checkbox :modelValue="item.text"></wd-checkbox>
          </view>
        </view>
      </wd-checkbox-group>
    </view>
    <!-- =========== 内容区start -->
    <wd-tabs v-model="tab" slidable="always" v-if="!searchText">
      <wd-tab title="院校位置"></wd-tab>
      <wd-tab title="院校类型"></wd-tab>
    </wd-tabs>

    <view class="flex w-full flex-1 overflow-auto" v-if="!searchText">
      <view class="p-3 w-[inherit]">
        <cListSelectGrid v-model="allSelect" :list="list" v-show="tab === 0" />
        <view v-show="tab === 1" class="flex flex-col gap-4">
          <cCell title="办学性质">
            <cListSelectGrid v-model="allSelect" :list="list2" />
          </cCell>
          <cCell title="大学类型">
            <cListSelectGrid v-model="allSelect" :list="categories" />
          </cCell>
        </view>
      </view>
    </view>
    <!-- =========== 内容区end -->

    <view
      class="h-15 flex items-center justify-between px-3"
      :style="{ borderTop: '1px solid var(--wot-color-border)' }"
    >
      <view @click="allSelect.length && (showSelect = true)">
        已选
        <text class="text-primary">{{ allSelect.length }}</text>
        个
      </view>
      <view class="flex gap-4">
        <wd-button plain @click="clearAll">清空已选</wd-button>
        <wd-button>确定</wd-button>
      </view>
    </view>

    <wd-action-sheet v-model="showSelect" title="已选">
      <view>
        <cListSelectGrid
          v-model="allSelect"
          :list="
            allSelect.map((a, i) => {
              return {
                text: a,
                value: a,
              }
            })
          "
        />
      </view>
    </wd-action-sheet>
  </view>
</template>

<script lang="ts" setup>
import cListSelectGrid from '@/components/c-list-select-grid/index.vue'
import cCell from '@/components/c-cell/index.vue'

const searchText = ref('')
const tab = ref(0)
const showSelect = ref(false)
const search = () => {}
const clearAll = () => {
  allSelect.value = []
}
const allSelect = ref([])

const provinces = [
  '北京市',
  '天津市',
  '河北省',
  '山西省',
  '内蒙古自治区',
  '辽宁省',
  '吉林省',
  '黑龙江省',
  '上海市',
  '江苏省',
  '浙江省',
  '安徽省',
  '福建省',
  '江西省',
  '山东省',
  '河南省',
  '湖北省',
  '湖南省',
  '广东省',
  '广西壮族自治区',
  '海南省',
  '重庆市',
  '四川省',
  '贵州省',
  '云南省',
  '西藏自治区',
  '陕西省',
  '甘肃省',
  '青海省',
  '宁夏回族自治区',
  '新疆维吾尔自治区',
  '香港特别行政区',
  '澳门特别行政区',
  '台湾省',
]
const list = provinces.map((a, i) => {
  return {
    text: a,
    value: a,
  }
})

const list2 = ['公办', '民办', '中外合作', '内地与港澳台地区合作办学'].map((a, i) => {
  return {
    text: a,
    value: a,
  }
})
const categories = [
  '综合',
  '理工',
  '农林',
  '医药',
  '语言',
  '财经',
  '政法',
  '体育',
  '艺术',
  '民族',
  '军事',
  '师范',
  '其他',
].map((a, i) => {
  return {
    text: a,
    value: a,
  }
})

const universities = [
  '清华大学',
  '北京大学',
  '复旦大学',
  '上海交通大学',
  '浙江大学',
  '南京大学',
  '中国科学技术大学',
  '哈尔滨工业大学',
  '西安交通大学',
  '华中科技大学',
  '武汉大学',
  '中山大学',
  '北京航空航天大学',
  '北京理工大学',
  '南开大学',
  '天津大学',
  '东南大学',
  '四川大学',
  '山东大学',
  '同济大学',
].map((a, i) => {
  return {
    text: a,
    value: a,
    tags: ['公办', '综合', '211', '双一流'],
  }
})

const universitiesFilter = computed(() => {
  return universities.filter((a) => a.text.includes(searchText.value))
})
</script>

<style lang="scss">
.custom-tabs {
  height: 300px;
}
</style>
