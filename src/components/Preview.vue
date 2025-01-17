<script setup>
import {nextTick, onMounted, ref} from "vue";
import "../assets/prism.css"
import Prism from "prismjs"

const props = defineProps({
  /** 组件名称 */
  compName: {
    type: String,
    default: '',
    require: true,
  },
  /** 要显示代码的组件 */
  demoName: {
    type: String,
    default: '',
    require: true,
  },
})

const sourceCode = ref('')
const isDev = import.meta.env.MODE === 'development';

onMounted(async () => {
  if (isDev) {
    sourceCode.value = (
        await import(/* @vite-ignore */ `../../packages/${props.compName}/docs/${props.demoName}.vue?raw`)
    ).default;
  } else {
    sourceCode.value = await
        fetch(`/packages/${props.compName}/docs/${props.demoName}.vue`).then((res) => res.text());
  }
  await nextTick(); // 确保在源码都渲染好了以后再执行高亮
  Prism.highlightAll();
})
</script>

<template>
  <pre class="language-html" tabindex="4">
    <code class="language-html" tabindex="4">{{ sourceCode }}</code>
  </pre>
</template>

<style scoped>

</style>