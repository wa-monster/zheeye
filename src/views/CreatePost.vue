<template>
  <div class="create-post-page">
    <h4>新建文章</h4>
    <ValidateForm @form-submit="onFormSubmit">
      <div class="mb-3">
        <label for="form-label">文章标题：</label>
        <ValidateInput :rules="titleRules" v-model="titleVal">

        </ValidateInput>
      </div>
    </ValidateForm>
</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateForm from '@/components/Form/ValidateForm.vue'
import ValidateInput from '@/components/Form/ValidateInput.vue'
export default defineComponent({
  name: 'CreatePost',
  components: { ValidateForm, ValidateInput },
  setup () {
    const onFormSubmit = () => {}
    const titleRules = ref({})
    const titleVal = ref('')
    return {
      titleRules,
      onFormSubmit
    }
  }

})
</script>
<style>
</style>
