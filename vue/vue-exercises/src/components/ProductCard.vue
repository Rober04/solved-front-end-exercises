<script setup lang="ts">
  import type { Product } from '../../data/mock';
  defineProps<Product>();
</script>

<template>
    <div class="product__card">
        <h2 class="product__title">{{ $props.title }}</h2>
        <img :src="$props.image" alt="image" class="product__image">
        <p class="product__description">{{ $props.description }}</p>
        <span class="product__price">{{ $props.price }}</span>
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
            width: 15em;
            border-radius: 1em;
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
            border-radius: 0.5em;
            color: rgb(21, 122, 89);
            font-size: 1.2em;
            margin: 1em;
        }
    }
</style>