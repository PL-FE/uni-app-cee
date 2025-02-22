export default function () {
  const menuButtonInfo = uni?.getMenuButtonBoundingClientRect?.()

  const statusBarHeight = uni?.getSystemInfoSync?.()?.statusBarHeight || 0 // 系统信息里的状态栏高度

  const menuButtonPadding = menuButtonInfo ? menuButtonInfo.top - statusBarHeight : 0
  const menuButtonHeight = menuButtonInfo?.height || 60

  return {
    menuButtonInfo,
    safeTop: statusBarHeight + menuButtonHeight + menuButtonPadding * 2,
  }
}
