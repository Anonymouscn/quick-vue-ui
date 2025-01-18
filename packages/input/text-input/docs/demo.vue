
<template>
  <text-input v-model="val"/>
</template>

<script setup>
import {ref} from "vue";

// 双向绑定输入值
const val = ref('')
</script>