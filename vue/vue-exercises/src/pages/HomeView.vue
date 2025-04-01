<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import TheCounter from '@/components/TheCounter.vue';
    import TheTitle from '@/components/TheTitle.vue';
    import TheIcon from '@/components/TheIcon.vue';
import ParentComponent from '@/components/ParentComponent.vue';
</script>

<template>
    <div class="home">
        <TheTitle></TheTitle>
        <TheIcon></TheIcon>
        <TheCounter></TheCounter>
        <ParentComponent></ParentComponent>
        <RouterLink to="/catalogo">
            <button type="button" class="home__button">Go to catalog</button>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
  .home__button{
    margin: 1em;
  }
  .home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60em;
  }
</style>
