<script setup lang="ts">
defineProps<{ propTitle: string }>()
</script>

<template>
  <div>
    <h2>{{ propTitle }}</h2>
  </div>
</template>

<style scoped>
h2 {
  color: rgb(21, 122, 89);
  font-size: 2em;
  border: 0.1em solid;
}
</style>
