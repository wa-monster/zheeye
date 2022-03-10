<template>
  <div class="create-post-page">
    <h4>新建文章</h4>
    <ValidateForm @form-submit="onFormSubmit">
      <div class="mb-3">
        <label for="form-label">文章标题：</label>
        <ValidateInput :rules="titleRules" v-model="titleVal" placeholder="请输入文章标题" type="text">

        </ValidateInput>
      </div>
      <div class="mb-3">
         <label for="form-label">文章详情：</label>
        <ValidateInput type="text"
          tag="textarea"
          rows="10"
          placeholder="请输入文章详情"
          :rules="contentRules"
          v-model="contentVal"
        ></ValidateInput>
      </div>
      <template>
        <button class="btn btn-parmary btn-large">发表文章</button>
      </template>
    </ValidateForm>
</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateForm from '@/components/Form/ValidateForm.vue'
import ValidateInput from '@/components/Form/ValidateInput.vue'
import { useRouter } from 'vue-router'
import { storeKey, useStore } from 'vuex'
import { GlobalDataProps, PostProps } from '../store'

export default defineComponent({
  name: 'CreatePost',
  components: { ValidateForm, ValidateInput },
  setup () {
    const store = useStore<GlobalDataProps>()
    const router = useRouter()
    const onFormSubmit = (result:boolean) => {
      if (result) {
        const { columnId } = store.state.user
        const newPost:PostProps = {
          id: new Date().getTime(),
          title: titleVal.value,
          content: contentVal.value,
          columnId,
          createdAt: new Date().toLocaleString()
        }
        store.commit('createPost', newPost)
        router.push({ name: 'column', params: { id: columnId } })
      }
    }
    const titleRules = ref([])
    const titleVal = ref('')

    const contentRules = ref([])
    const contentVal = ref('')
    return {
      titleRules,
      titleVal,
      contentRules,
      contentVal,
      onFormSubmit
    }
  }

})
</script>
<style>
</style>
