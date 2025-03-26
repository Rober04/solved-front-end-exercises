const testMap = new Map();
const user = {
    name: "user"
};
const user2 = {
    name: "user2"
};
const color = "morado";

function findAnimal(){
    return true;
}

testMap.set("moroso", user);
testMap.set("agarrado", user);
testMap.set("generoso", user2);
testMap.set("funcion", findAnimal.name);
testMap.set("color", "morado");

console.log(testMap);

const REQUIRED_KEY = "moroso";
testMap.forEach((value, key) => {
    if(key === REQUIRED_KEY){
        console.log(`Mostrar llave: ${key}`);
        console.log(`Comprobar si existe la key hola: `)
    }
  });