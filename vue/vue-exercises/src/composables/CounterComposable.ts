import { ref } from 'vue'
const counter = ref(0);

function incrementCounter(){
  counter.value++;
}
function decrementCounter(){
  counter.value--;
}

export { counter, incrementCounter, decrementCounter };
