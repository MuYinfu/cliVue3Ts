<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <div class="w-100 mx-auto navbar">
      <router-link class="navbar-brand" to="/">者也专栏</router-link>
      <ul v-if="!user.isLogin" class="list-inline mb-0">
        <li class="list-inline-item">
          <router-link to="/login" class="btn btn-outline-light my-2">登陆</router-link>
        </li>
        <li class="list-inline-item">
          <router-link to="/signup" class="btn btn-outline-light my-2">注册</router-link>
        </li>
      </ul>
      <ul v-else class="list-inline mb-0">
        <li class="list-inline-item">
          <dropdown :title="`你好 ${user.nickName}`">
            <dropdown-item>
              <router-link to="/create" class="dropdown-item">新建文章</router-link>
            </dropdown-item>
            <dropdown-item>
              <router-link :to="`/column/${user.column}`" class="dropdown-item">我的专栏</router-link>
            </dropdown-item>
            <dropdown-item disabled><a href="#" class="dropdown-item">编辑资料</a></dropdown-item>
            <dropdown-item><a href="#" class="dropdown-item" @click.prevent="handleLogout">退出登录</a></dropdown-item>
          </dropdown>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Dropdown from '@/base/Dropdown.vue'
import DropdownItem from '@/base/DropdownItem.vue'

export interface UserProps {
  isLogin: boolean;
  nickName?: string;
  id?: number;
}

export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>
    }
  },
  components: {
    Dropdown,
    DropdownItem
  },
  setup () {
    const handleLogout = () => {
      console.log(123)
    }

    return {
      handleLogout
    }
  }

})
</script>

<style scoped>

</style>
