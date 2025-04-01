<script setup lang="ts">
const route = useRoute()
const categoryRoute = route.params.category
</script>

<template>
    <div>
        <h1>Aventuras</h1>
        <p>Series de la categoria: {{ categoryRoute }}</p>
        <NuxtLink to="/series-bonitas/aventuras/episodio-1-spiderman">Episodio 1 Spiderman</NuxtLink>
    </div>
</template>