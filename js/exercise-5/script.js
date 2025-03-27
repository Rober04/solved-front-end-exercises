class KeyError extends Error{
    constructor(message){
        super(message);
        this.name = "KeyError";
    }
}

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

function showKey(map, key){
    try{
        const checkKey = hasKey(map, key);
        if(checkKey === true){
            return key;
        }
        else{
            throw new KeyError("Key not found");
        }
    }
    catch(KeyError){
        return KeyError;
    }
}

function hasKey(map, key){
    const keyStatus = map.has(key);
    return keyStatus;
}

function showSize(map){
    const mapSize = map.size;
    return mapSize;
}

function deleteElement(map, key){
    const checkKey = hasKey(map, key);
    try{
        if(checkKey === true){
            map.delete(key);
            return `Element with key ${key} has been succesfully deleted`;
        }
        else{
            throw new KeyError("Key not found");
        }
    }
    catch(KeyError){
        return KeyError;
    }
}

function clearMap(map){
    map.clear();
    return "Map cleared succesfully";
}

const showKeyMoroso = showKey(testMap, "moroso");
const hasKeyHola = hasKey(testMap, "hola");
const totalMapSize = showSize(testMap);

console.log("testMap with foreach: ")
testMap.forEach((value, key) => {
    if(value instanceof Object){
        const object = JSON.stringify(value);
        console.log(`${key}: ${object}`);
    }
    else{
        console.log(`${key}: ${value}`);
    }
  })

const deleteAgarradoElement = deleteElement(testMap, "agarrado");
const clearTestMap = clearMap(testMap);

console.log(`Mostrar key moroso: ${showKeyMoroso}`);
console.log(`Comprobar key hola: ${hasKeyHola}`);
console.log(`Mostrar tamaño total del mapa: ${totalMapSize}`);
console.log(`Borrar elemento con key agarrado: ${deleteAgarradoElement}`);
console.log(`Limpiar mapa: ${clearTestMap}`);