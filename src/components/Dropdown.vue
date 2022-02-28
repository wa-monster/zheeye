<template>
  <div class="dropdown" ref="dropdownRef">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click="toggleOpen">{{title}}</a>
    <ul class="dropdown-menu" :style="{display: isOpen?'block':'none'}">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from '@vue/runtime-core'
export default defineComponent({
  name: 'Dropdown',
  components: {
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup () {
    const dropdownRef = ref<null | HTMLElement>(null)
    const isOpen = ref(false)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    const handler = (e:MouseEvent) => {
      if (dropdownRef.value) {
        console.log(!dropdownRef.value.contains(e.target as Node))
        if (!dropdownRef.value.contains(e.target as Node)) {
          isOpen.value = false
        }
      }
    }
    onMounted(() => {
      document.addEventListener('click', handler)
    })
    onUnmounted(() => {
      document.removeEventListener('click', handler)
    })
    return {
      isOpen,
      toggleOpen,
      dropdownRef
    }
  }
})
</script>

<style>

</style>
