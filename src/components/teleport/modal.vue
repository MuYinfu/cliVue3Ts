<template>
  <teleport to="#teleport">
    <div class="modal" @click.stop.prevent="btnClick">
      {{msg}}
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'modal',
  props: ['msg'],
  emits: {
    close: null
  },
  // emits: ['close'],
  setup (props, context) {
    console.log(props)

    const btnClick = () => {
      context.emit('close', false)
    }

    return {
      btnClick
    }
  }
})
</script>

<style scoped>

.modal {
  width: 200px;
  height: 200px;
  text-align: center;
  background: red;
  line-height: 200px;
  margin: 0 auto;
}

</style>
