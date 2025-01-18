<script setup>
  const props = defineProps({
    data: {
      type: Array,
      default: () => []
    }
  })
</script>

<template>
  <div class="q-table">
    <q-table-column></q-table-column>
    <q-table-column></q-table-column>
    <q-table-column></q-table-column>
    <q-table-column></q-table-column>
  </div>
</template>

<style scoped>

</style>