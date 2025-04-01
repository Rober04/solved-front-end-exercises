import { defineStore } from "pinia";
import { computed, ref, watch } from 'vue'
export const useCounterStore = defineStore("counter", () => {

    const counter = ref(0);

    function incrementCounter(){
      counter.value++;
    }
    function decrementCounter(){
      counter.value--;
    }
    const message = ref("");
    watch(counter, (newCounter) => {
      switch (newCounter) {
        case 0:
          message.value = "Estas en el valor minimo"
          break;
        case 10:
          message.value = "Estas en el valor maximo"
          break;

        default:
          message.value = "Estas en los parámetros adecuados"
          break;
      }
    },
    { immediate: true });

    const counterMultiplier = computed(() => {return counter.value * 2});

    return { counter, incrementCounter, decrementCounter, message, counterMultiplier };
});
