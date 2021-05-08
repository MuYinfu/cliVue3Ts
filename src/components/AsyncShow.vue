<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'
export default defineComponent({
  name: 'asyncShow',
  // setup() {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       return resolve({
  //         msg: 789
  //       })
  //     }, 3000)
  //   })
  // }
  async setup () {
    const msg = await axios.get('https://dog.ceo/api/breeds/image/random')
    return {
      msg
    }
  }
})
</script>

<style scoped>

</style>
