# Exercise 11 Vue

## ¿Qué es un linter?

Es una herramienta de estandirización de código

## ¿Qué es Husky?

Una herramienta para la automatización de procesos

## ¿Qué es la reactividad?

La capacidad de permitir al usuario hacer y visualizar cambios en tiempo real

## ¿Desde dónde hay que crear todas las ramas para los desarrollos?

Desde la main

## ¿Cuándo se puede utilizar la rama main?

Nunca

## ¿Qué son las custom properties?

Variables de CSS

## Diferencias entre v-if y v-show

La diferencia principal es que v-if puede eliminar el contenido del DOM mientras que v-show solo le aplica "display: none"

## ¿Cuáles son los valores de falsy?

NULL, undefined, false, 0, -0, 0n, "", document.all

## ¿Qué es Nullish Coalescing Operator?

Le indica a la variable que, en caso de ser NULL, adquiera un valor por defecto ```const variable1 = variable2 ?? ''```

## ¿Para que se utiliza TypeScript?

Para definir tipos en JavaScript, lo que asegura que los valores de las variables empleadas son del tipo correcto

# Ejercicio 15

En estos fragmentos de código puede que encuentres algún error, solucionalos y justifica el cambio.

1.

```ts
// composables/useCounter.ts
import { ref } from "vue";

export function useCounter() {
  const count = ref(0);

  function increment() {
    count.value++;
  }
}
```

2.

```vue
<script setup lang="ts">
import { ref } from "vue";

const items = ref(["Apple", "Banana", "Cherry"]);
</script>
<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item }}
    </li>
  </ul>
</template>
```

3.

```vue
<template>
  <ul>
    <TheComponent v-for="item in items" :key="item.id" v-bind="item" />
  </ul>
</template>
```

4.

```vue
<script setup lang="ts">
import TheTitle from "@/components/TheTitle.vue";
import TheButton from "@/components/TheButton.vue";
import { computed, toRefs } from "vue";
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
const { count, message, incrementCounter, decrementCounter } = toRefs(counterStore);

const doubleCounter = computed(() =>{return count.value * 2});
</script>
<template>
  <TheTitle :class="count === 10 ? 'active' : 'inactive'"
>Contador: {{ count }}, {{ message }}</TheTitle
  >
  <TheTitle>Contador doble: {{ doubleCounter }}</TheTitle>

  <TheButton
    v-if="count < 10"
    aria-label="Incrementar contador"
    @click="incrementCounter"
    >Increase</TheButton
  >
  <TheButton
    v-if="count > 0"
    aria-label="Decrementar contador"
    @click="decrementCounter"
    >Decrease</TheButton
  >
</template>
<style setup lang="scss"{
    .active{
        color: green;
    }
    .red{
        color: red;
    }
}
```
