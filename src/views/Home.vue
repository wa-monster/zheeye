<template>
  <ColumnList :list="list"></ColumnList>
  {{bigColLen}}
</template>

<script lang="ts">
import ColumnList from '@/components/ColumnList.vue'
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'
export default defineComponent({
  components: {
    ColumnList
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    const list = computed(() => store.state.columns)
    const bigColLen = computed(() => store.getters.biggerColumnsLen)
    return {
      list,
      bigColLen
    }
  }
})
</script>

<style>

</style>
