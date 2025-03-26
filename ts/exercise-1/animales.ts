interface Animal{
    name: string,
    canEat: boolean,
    canDrink: boolean,
    canSleep: boolean,
    canFly: boolean
};

type Bird = Animal;

type Dog = Animal &{
    race: string,
    age: number
}

const bird: Bird = {
    name: "Quasimodo",
    canEat: true,
    canDrink: true,
    canSleep: true,
    canFly: true
}

const dog: Dog = {
    name: "Tobias",
    canEat: true,
    canDrink: true,
    canSleep: true,
    canFly: false,
    race: "Dalmata",
    age: 3
}

console.log(bird);
console.log(dog);