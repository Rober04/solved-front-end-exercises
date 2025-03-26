interface Animal{
    name: string,
    canEat: boolean,
    canDrink: boolean,
    canSleep: boolean,
    canFly: boolean
};

type Bird = Animal;

type Dog = Animal &{
    race: "Husky" | "Labrador" | "Chucho",
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
    race: "Husky",
    age: 3
}

console.log(bird);
console.log(dog);