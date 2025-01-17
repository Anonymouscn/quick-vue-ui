<script setup>

const props = defineProps({
  text: {
    type: String,
    default: 'button'
  },
  // width: {
  //   type: String,
  //   default: '2rem'
  // },
  // height: {
  //   type: String,
  //   default: '1rem'
  // }
})

</script>

<template>
  <a class="a-button" @click="console.log('click')">{{ props.text }}</a>
</template>

<style scoped>
.a-button {
  background-color: #888;
  color: #fff;
  width: 4rem;
  height: 2rem;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
}
</style>