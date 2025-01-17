<!--
组件库 - 组件列表
-->

<script setup>
import ComponentList from '../../packages/menu.json';
import { reactive } from 'vue'

const data = reactive({
  links: ComponentList.map(item => ({
    path: `/components/${item.compName}`,
    name: item.compZhName
  }))
})
</script>

<template>
  <div class="doc-container">
    <aside>
      <router-link
          v-for="(link, index) in data.links"
          :key="index"
          :to="link.path"
      >
        {{ link.name }}
      </router-link>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.doc-container {
  display: flex;
  min-height: 100vh;
}

.doc-container aside {
  width: 200px;
  padding: 15px;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
  overflow-y: auto;
}

.doc-container main {
  width: 100%;
  flex: 1;
  padding: 15px;
}
</style>