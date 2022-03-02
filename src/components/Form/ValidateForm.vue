<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/runtime-core'
import mitt from 'mitt'
export const emitter = mitt()
export default defineComponent({
  emits: ['form-submit'],
  setup (props, context) {
    const submitForm = () => {
      context.emit('form-submit')
    }
    const callback = (test:string | unknown) => {
      console.log(test)
    }
    emitter.on('form-item-created', callback)
    return {
      submitForm
    }
  }
})
</script>

<style>

</style>
