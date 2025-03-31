<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import TheCounter from '@/components/TheCounter.vue';
    import TheTitle from '@/components/TheTitle.vue';
import ParentComponent from '@/components/ParentComponent.vue';
</script>

<template>
    <div>
        <TheTitle></TheTitle>
        <TheCounter></TheCounter>
        <ParentComponent></ParentComponent>
        <RouterLink to="/catalogo">
            <button type="button">Go to catalog</button>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
  button{
    margin: 1em;
  }
</style>