<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">杨肥肥专栏</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item"><a  class="btn btn-outline-light my-2" @click="toLogin">登录</a></li>
      <li class="list-inline-item"><a  class="btn btn-outline-light my-2">注册</a></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <Dropdown :title="`你好 ${user.name}`">
        <DropdownItem><a class="dropdown-item" href="#">新建文章</a></DropdownItem>
        <DropdownItem :disabled="true"><a class="dropdown-item" href="#">编辑资料</a></DropdownItem>
        <DropdownItem><a class="dropdown-item" href="#">退出登录</a></DropdownItem>
      </Dropdown>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core'
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import DropdownItem from '@/components/Dropdown/DropdownItem.vue'
import { useRouter } from 'vue-router'
export interface UserProps {
  isLogin:boolean;
  name?:string;
  id?: number;

}
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    Dropdown,
    DropdownItem

  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      require: true,
      default: () => ({})
    }
  },
  setup () {
    const router = useRouter()
    const toLogin = () => {
      router.push('/login')
    }
    return {
      toLogin
    }
  }
})
</script>

<style>

</style>
