<script setup lang="ts">
import HeaderFooter from '~/layouts/HeaderFooter.vue';
</script>

<template>
    <HeaderFooter>
        <div>
            <h1>Home</h1>
            <p>Welcome to the home page</p>
            <NuxtLink to="/catalogo">
                <button>Catalogo</button>
            </NuxtLink>
            <NuxtLink to="/series-bonitas">
                <button>Series bonitas</button>
            </NuxtLink>
        </div>
    </HeaderFooter>
</template>

<style lang="scss" scoped>

</style>