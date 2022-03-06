<template>
  <ColumnList :list="list"></ColumnList>
</template>

<script lang="ts">
import ColumnList from '@/components/ColumnList.vue'
import { defineComponent } from 'vue'
import { testData } from '@/testData'

export default defineComponent({
  components: {
    ColumnList
  },
  setup () {
    return {
      list: testData
    }
  }
})
</script>

<style>

</style>
