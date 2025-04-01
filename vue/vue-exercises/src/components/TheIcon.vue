<script setup lang="ts">
import { ref } from 'vue';
import IconFacebook from './icons/IconFacebook.vue';
import IconTwitter from './icons/IconTwitter.vue';

const socialIcons = ref([
  { name: "facebook", component: IconFacebook },
  { name: "twitter", component: IconTwitter },
]);
</script>

<template>
  <div class="home__icon icon">
    <component v-for="icon in socialIcons" :key="icon.component.name" :is="icon.component" :class="'icon__'+icon.name"></component>
  </div>
</template>

<style scoped lang="scss">
  .icon{
    display: inline;

    &__facebook{
      width: 2em;
      height: 2em;
    }
    &__twitter{
      width: 2em;
      height: 2em;
    }
  }
</style>
