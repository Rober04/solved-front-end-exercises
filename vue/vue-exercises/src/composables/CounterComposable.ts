import { computed, ref, watch } from 'vue'
const counter = ref(0);

function incrementCounter(){
  counter.value++;
}
function decrementCounter(){
  counter.value--;
}
let message = "";
watch(counter, (newCounter) => {
  switch (newCounter) {
    case 0:
      message = "Estas en el valor minimo"
      break;
    case 10:
      message = "Estas en el valor maximo"
      break;

    default:
      message = "Estas en los parámetros adecuados"
      break;
  }
},
{ immediate: true });

const counterMultiplier = computed(() => {return counter.value * 2});

export { counter, incrementCounter, decrementCounter, message, counterMultiplier };
