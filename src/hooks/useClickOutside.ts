import { ref, onMounted, onUnmounted, Ref } from 'vue'

const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutside = ref(false)
  // 当点击的组件是指定标签时切换状态
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = false
      } else {
        isClickOutside.value = true
      }
    }
  }

  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.addEventListener('click', handler)
  })

  return {
    isClickOutside
  }
}

export default useClickOutside
