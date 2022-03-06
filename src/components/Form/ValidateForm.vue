<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @mousedown.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from '@vue/runtime-core'
import mitt from 'mitt'
type ValidateFunc = ()=>boolean
export const emitter = mitt()
export default defineComponent({
  emits: ['form-submit'],
  setup (props, context) {
    let funcArr: ValidateFunc[] = []
    const submitForm = () => {
      console.log('funcArr', funcArr)

      const result = funcArr.map(func => func()).every(bool => bool)
      // 如果是true代表验证通过，false代表验证不通过
      context.emit('form-submit', result)
    }

    const callback = (func: ValidateFunc | unknown) => {
      if (func instanceof Function) { funcArr.push(func as ValidateFunc) }
    }
    emitter.on('form-item-created', callback)
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
      funcArr = []
    })
    return {
      submitForm
    }
  }
})
</script>

<style>
.submit-area{
  display: inline-block;
}
</style>
