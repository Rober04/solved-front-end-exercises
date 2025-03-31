<script setup lang="ts">
import { inject } from 'vue';

const emit = defineEmits(["componentEvent"]);

const messageParent = inject("messageParent");
function componentEvent() {
  emit("componentEvent", "Hello from Child Component");
}
</script>

<template>
  <div>
    <h2>Child Component</h2>
    <p>{{ messageParent }}</p>
    <button @click="componentEvent">Send Event</button>
  </div>
</template>

<style lang="scss" scoped>

</style>
