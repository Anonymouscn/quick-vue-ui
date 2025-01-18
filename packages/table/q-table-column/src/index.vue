<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: () => [{'text': 1}, {'text': 2}, {'text': 3}, {'text': 4}],
  },
  align: {
    type: String,
    default: 'left',
  }
})

const align = props.align === 'center' ?
    'center' :
    (props.align === 'right' ? 'flex-end' : 'flex-start')
</script>

<template>
  <div class="q-table-column">
    <div
        class="q-table-column-item center--flex"
        v-for="item in data"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<style scoped>
.q-table-column {
  display: inline-flex;
  flex-direction: column;
}

.q-table-column-item {
  display: inline-flex;
  justify-content: v-bind(align);
  min-width: 4rem;
  min-height: 2rem;

  border: 1px solid #dfe2e5;
  margin-bottom: -1px;
  margin-left: -1px;

  padding: 0.2rem 0.4rem;
}
</style>