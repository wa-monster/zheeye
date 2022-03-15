<template>
  <teleport to="#back">
  <div :style="{backgroundColor:background || ''}" class="d-flex justify-content-center align-items-center h-100 loading-container">
    <div class="loading-cntent">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">{{text || 'loading'}}</span>
      </div>
      <p v-if="text" class="text-primary samll">{{text }}</p>
    </div>
  </div>
  </teleport>

</template>
<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String
    },
    background: {
      type: String
    }
  },
  setup () {
    const node = document.createElement('div')
    node.id = 'back'
    document.body.appendChild(node)
    onUnmounted(() => {
      document.body.removeChild(node)
    })
    return {}
  }
})
</script>

<style>
.loading-container{
  background-color: rgba(255,255,255,.5);
  z-index: 1000;
  position: fixed;
  width: 100%;
  height:100%;
  top: 0;
  left: 0;
}
.loading-cntent{
  text-align: center;
}
</style>
