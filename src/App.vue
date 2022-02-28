<template>
  <div class="container">
    <GlobalHeader :user="currentUser"></GlobalHeader>
    <ColumnList :list="list" v-if="false"></ColumnList>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          v-model="emailRef.val"
          @blur="validateEmail"
        />
        <div class="form-text" v-if="emailRef.error">
          {{ emailRef.message }}
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1的专栏，有一段非常有意思的简介，可以更新一下哦',
    avatar:
      'https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/assets/thumb/39.jpg'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2的专栏，有一段非常有意思的简介，可以更新一下哦',
    avatar:
      'https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/assets/thumb/39.jpg'
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
    avatar:
      'https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/assets/thumb/39.jpg'
  },
  {
    id: 5,
    title: 'test5的专栏',
    description: '这是test5的专栏，有一段非常有意思的简介，可以更新一下哦',
    avatar:
      'https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/assets/thumb/39.jpg'
  },
  {
    id: 6,
    title: 'test6的专栏',
    description: '这是test6的专栏，有一段非常有意思的简介，可以更新一下哦',
    avatar:
      'https://cdn.jsdelivr.net/npm/typecho-joe-next@6.0.0/assets/thumb/39.jpg'
  }
]
const currentUser: UserProps = {
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
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateEmail = () => {
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = '不能为空'
      }
    }
    return {
      list: testData,
      currentUser,
      emailRef,
      validateEmail
    }
  }
})
</script>

<style>
#app {
}
</style>
