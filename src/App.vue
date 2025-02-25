<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'

onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
/* stylelint-disable selector-type-no-unknown */

button::after {
  border: none;
}

swiper,
scroll-view {
  flex: 1;
  height: 100%;
  overflow: hidden;
}

image {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

// 单行省略，优先使用 unocss: text-ellipsis
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

// 两行省略
.ellipsis-2 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

// 三行省略
.ellipsis-3 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.card--active {
  background-color: var(--wot-input-disabled-color);
}

.wd-cell,
.wd-input.is-cell,
.wd-picker__cell {
  background-color: transparent !important;
}

:root,
page {
  --wot-color-theme: #2c8d3a !important;
  --wot-tabbar-height: 50px;
  --wot-color-border-light: #e8e8e8;
  /* 文字颜色（默认浅色背景下 */
  --wot-color-title: #000; // 模块标题/重要正文 000
  --wot-color-content: #262626; // 普通正文 262626
  --wot-color-secondary: #595959; // 次要信息，注释/补充/正文 595959
  --wot-color-aid: #8c8c8c; // 辅助文字字号，弱化信息，引导性/不可点文字 8c8c8c
  --wot-color-tip: #bfbfbf; // 失效、默认提示文字 bfbfbf
  --wot-color-border: #d9d9d9; // 控件边框线 d9d9d9
  --wot-color-bg: #f5f5f5; // 背景色、禁用填充色 f5f5f5
  --wot-color-bg-bg: #d7d7d7; // 背景色、禁用填充色 f5f5f5
  --wot-input-disabled-color: #d9d9d9; // 输入框禁用颜色
}
</style>
