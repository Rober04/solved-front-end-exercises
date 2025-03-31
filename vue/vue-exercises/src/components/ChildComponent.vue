<script setup lang="ts">
const emit = defineEmits(["componentEvent"]);

function componentEvent() {
  emit("componentEvent", "Hello from Child Component");
}
</script>

<template>
  <div>
    <h2>Child Component</h2>
    <button @click="componentEvent">Send Event</button>
  </div>
</template>

<style lang="scss" scoped>

</style>