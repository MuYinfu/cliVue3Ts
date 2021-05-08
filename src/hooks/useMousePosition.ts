import { ref, onMounted, onUnmounted, reactive, toRefs } from 'vue'

function useMousePosition () {
  const data = reactive({
    x: 0,
    y: 0
  })

  const updateMouse = (e: MouseEvent) => {
    data.x = e.pageX
    data.y = e.pageY
  }

  onMounted(() => {
    document.addEventListener('click', updateMouse, true)
  })

  onUnmounted(() => {
    document.removeEventListener('click', updateMouse, true)
  })

  return {
    ...toRefs(data)
  }
}

export default useMousePosition
