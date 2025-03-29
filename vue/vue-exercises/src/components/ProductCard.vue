<script setup lang="ts">
    import { products } from "../../data/mock.ts";
</script>

<template>
    <div v-for="product in products" :key="product.id" class="product__card">
        <h2 class="product__title">{{ product.title }}</h2>
        <img :src="product.image" alt="image" class="product__image">
        <p class="product__description">{{ product.description }}</p>
        <span class="product__price">{{ product.price }}</span>
        <button type="button" class="product__button">Add to cart</button>
    </div>
</template>

<style lang="scss" scoped>
    h2{
        color: rgb(21, 122, 89);
    }
    .product{
        &__card{
            border: 0.1em solid;
            padding: 1em;
            margin: 1em;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #f4f4f4;
        }
        &__title{
            font-size: 1.5em;
        }
        &__image{
            width: 15em;
        }
        &__description{
            font-size: 1.2em;
        }
        &__price{
            font-size: 1.2em;
            color: rgb(170, 0, 0);
        }
        &__button{
            font-size: 1.2em;
            margin: 1em;
        }
    }
</style>