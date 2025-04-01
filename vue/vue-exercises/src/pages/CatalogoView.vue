<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import { products } from "../../data/mock";
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="product">
        <ProductCard v-for="product in products" :key="product.id" v-bind="product"></ProductCard>
    </div>
    <RouterLink to="/">
            <button type="button">Go to home</button>
    </RouterLink>
</template>

<style lang="scss" scoped>
    .product{
        display: flex;
        justify-content: center;
        width: 100%;
    }
</style>
