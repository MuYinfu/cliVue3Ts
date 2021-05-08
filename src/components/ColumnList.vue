<template>
  <div class="row">
    <div v-for="(item, index) in columntList" :key="index" class="col-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="item.avatar" :alt="item.title" class="rounded-circle border border-light my-3">
          <h5 class="card-title">{{item.title}}</h5>
          <p class="card-text text-left">{{item.description}}</p>
          <a href="#" class="btn btn-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

export interface ColumnProps {
  id: number | string;
  title: string;
  avatar?: string;
  description: string;
}
/*
PropType 设定类型, 传入一个泛型
 */

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup (props) {
    const columntList = computed(() => {
      return props.list.map(item => {
        if (!item.avatar) {
          item.avatar = require('../assets/column.jpg')
        }
        return item
      })
    })
    return {
      columntList
    }
  }
})
</script>

<style scoped>
.card-body img {
  width: 50px;
  height: 50px;
}
</style>
