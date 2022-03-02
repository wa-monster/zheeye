<template>
  <div class="container">
    <GlobalHeader :user="currentUser"></GlobalHeader>
    <ColumnList :list="list" v-if="false"></ColumnList>
    <ValidateForm @formSubmit="onSubmit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <ValidateInput
          :key="1"
          ref="inputRef"
          type="email"
          v-model="emailValue"
          :rules="emailRules"
          placeholder="请输入邮箱地址"
        >
        </ValidateInput>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <ValidateInput
          :key="2"
          ref="inputRef2"
          type="password"
          v-model="passedValue"
          :rules="passedRules"
          placeholder="请输入密码"
        >
        </ValidateInput>
      </div>
      <template #submit>
        <span class="btn btn-danger">提交</span>
      </template>
    </ValidateForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from '@/components/Form/ValidateInput.vue'
import ValidateForm from '@/components/Form/ValidateForm.vue'
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
    ColumnList,
    ValidateInput,
    ValidateForm
  },
  setup (props, context) {
    const inputRef = ref<any>()
    const emailValue = ref('123@123.com')
    const emailRules:RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const passedValue = ref('123')
    const passedRules:RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ]
    const onSubmit = () => {
      inputRef.value.validateInput()
    }
    return {
      list: testData,
      currentUser,
      emailValue,
      emailRules,
      passedValue,
      passedRules,
      inputRef,
      onSubmit
    }
  }
})
</script>

<style>
#app {
}
</style>
