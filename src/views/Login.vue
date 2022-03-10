<template>
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
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import ValidateForm from '@/components/Form/ValidateForm.vue'
import ValidateInput, { RulesProp } from '@/components/Form/ValidateInput.vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    const inputRef = ref<any>()
    const emailValue = ref('')
    const emailRules:RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const passedValue = ref('')
    const passedRules:RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ]
    const onSubmit = (result:boolean) => {
      console.log(result)
      if (result) {
        router.push('/')
        store.commit('login')
      }
    }
    return {
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

</style>
