# Ejercicio 2, Hoisting

Que devuelve por consola cada uno de los siguientes `console.log`

---

```js
console.log(a); // undefined
var a = "hola";
```

---

```js
console.log(b); // ReferenceError: b is not defined
let b = "hola"; 
```

---

```js 
console.log(c); // ReferenceError: c is not defined
const c = "hola"; 
```

---

```js
sayHi(); // Hola desde sayHi!

function sayHi() {
  console.log("Hola desde sayHi!");
}
```

---

```js
function sayBye() {
  console.log("Adios desde sayBye!");
}

sayBye(); // Adios desde sayBye!
```
