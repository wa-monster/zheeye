<template>
  <div class="container">
    <GlobalHeader :user="currentUser"></GlobalHeader>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
const testData:ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1的专栏，有一段非常有意思的简介，可以更新一下哦',
    avatar: 'https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/assets/thumb/39.jpg'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2的专栏，有一段非常有意思的简介，可以更新一下哦',
    avatar: 'https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/assets/thumb/39.jpg'
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是test3的专栏，有一段非常有意思的简介，可以更新一下哦'
    // avatar: 'https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/assets/thumb/39.jpg'
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是test4的专栏，有一段非常有意思的简介，可以更新一下哦',
    avatar: 'https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/assets/thumb/39.jpg'
  },
  {
    id: 5,
    title: 'test5的专栏',
    description: '这是test5的专栏，有一段非常有意思的简介，可以更新一下哦',
    avatar: 'https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/assets/thumb/39.jpg'
  },
  {
    id: 6,
    title: 'test6的专栏',
    description: '这是test6的专栏，有一段非常有意思的简介，可以更新一下哦',
    avatar: 'https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/assets/thumb/39.jpg'
  }
]
const currentUser:UserProps = {
  isLogin: true,
  name: '杨肥肥'
}
export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    ColumnList
  },
  setup () {
    return {
      list: testData,
      currentUser
    }
  }
})
</script>

<style>
#app {
}
</style>
