<script setup lang="ts">
import defineNuxtRouteMiddleware from '../middleware/Redirect';
definePageMeta({
    middleware: defineNuxtRouteMiddleware
})
</script>

<template>
    <div>
        <p>Redirigiendo a la página de inicio...</p>
    </div>
</template>

<style lang="scss" scoped>

</style>