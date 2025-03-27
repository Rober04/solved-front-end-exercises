# Ejercicio 15 Vue, Soluciona los errores

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
<script setup>
import { ref } from "vue";

const items = ref(["Apple", "Banana", "Cherry"]);
</script>
<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      {{ item }}
    </li>
  </ul>
</template>
```

3.

```vue
<template>
  <ul>
    <TheComponent v-for="item in items" :key="item.id" :dataUser="item" />
  </ul>
</template>
```

4.

```vue
<script setup lang="ts">
import TheTitle from "@/components/TheTitle.vue";
import TheButton from "@/components/TheButton.vue";
import { useCounterStore } from "@/stores/counter";

const { count, message, incrementCounter, decrementCounter, doubleCounter } =
  useCounterStore();
</script>
<template>
  <TheTitle :class="count === 10 ? 'active' : 'inactive'"
    >Contador: {{ count }} - {{ message }}</TheTitle
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
```
