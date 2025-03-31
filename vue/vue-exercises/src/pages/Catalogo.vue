<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import { products } from "../../data/mock.ts";
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="catalogue">
        <ProductCard v-for="product in products" :key="product.id" :product="product"></ProductCard>    
    </div>
    <RouterLink to="/">
            <button type="button">Go to home</button>
    </RouterLink>
</template>

<style lang="scss" scoped>
    .catalogue{
        display: flex;
        justify-content: center;
        width: 100%;
    }
</style>