# Ejercicio 4, refactoriza el código

Dado los siguientes códigos, refactorízalos como consideres, si consideras que está bien, explica el motivo.

### Primer código

- Tenemos una función que saca el nombre completo del usuario con el nombre y apellido

Se han realizado las siguientes acciones al primer código:
- Se ha cambiado var usuario a const user
- Se ha corregido el nombre de la variable nombrCompleto a nombreCompleto
- Se ha mantenido el console log por encima de la funcion que ejecuta gracias al Hoisting
- Se ha modificado el metodo de concatenación de la función
- Se ha cambiado el nombre de variables y función a ingles
- Se ha añadido la función presentUser para separar la concatenación del nombre y el saludo
- Se ha modifica la función a la que llama el console log
```js
const user = { 
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  profession: "Barro man",
};

console.log(presentUser(user));

function userName(user) {
  const fullName = `${user.name} ${user.last}`;

  return fullName;
}

function presentUser(user){
  const presentation = "Hola, me llamo";
  const userFullName = userName(user);
  const fullPresentation = `${presentation} ${userFullName}`;

  return fullPresentation
}
```

### Segundo código

- Tenemos una función que calcula el salario anual y el nombre del usuario

Se han realizado las siguientes acciones al segundo código:
- Se ha separado la función userData en userName, userSalary y presentUser
- Se ha corregido un magic string a la hora de calcular el salario
- Se ha mantenido la posición del console log
- Se ha modifica la función a la que llama el console log
```js
const user = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};

function userName(user) {
  const fullName = `${user.name} ${user.last}`;

  return fullName;
}

function userSalary(user){
  const NUMBER_OF_MONTHS = 12;
  const annualSalary = user.salary * NUMBER_OF_MONTHS;

  return annualSalary;
}

function presentUser(user){
  const namePresentation = "Hola, me llamo";
  const salaryPresentation = "y mi salario es";
  const userFullName = userName(user);
  const userSalary = userSalary(user);
  const fullPresentation = `${presentation} ${userFullName} ${salaryPresentation} ${userSalary}`;

  return fullPresentation;
}

console.log(presentUser(user));
```

### Tercer código

- Si el usuario tiene 30 años y no es español, recibirá una ayuda del gobierno de 2000€

```js
const user = {
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Moroccan",
};

function isForeigner(user) {
  const LOCAL_NATIONALITY = "Spanish"
  if(user.nationality === LOCAL_NATIONALITY){
    return true;
  }
  else{
    return false;
  }
}

function hasRequiredAge(user) {
  const MINIMUM_REQUIRED_AGE = 30;
  if(user.age === MINIMUM_REQUIRED_AGE){
    return true;
  }
  else{
    return false;
  }
}

function notifyGovernmentAid(user) {
  const NOT_ELEGIBLE = "No es elegible para la ayuda del gobierno";

  function meetsRequirements(user) {
    return isForeigner(user) && hasRequiredAge(user);
  }

  if(meetsRequirements(user)){
    const fullName = `${user.name} ${user.last}`;
    const aid = 2000;
    const notification = `${fullName} se te ha concedido la ayuda de ${aid}€`

    return notification;
  }
  else{
    return NOT_ELEGIBLE;
  }
}



console.log(isForeigner(user));
```
