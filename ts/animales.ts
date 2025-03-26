interface Animal{
    name: string,
    canEat: boolean,
    canDrink: boolean,
    canSleep: boolean,
};

type Bird = Animal &{
    canFly: boolean;
};

type Dog = Animal &{
    race: "Husky" | "Labrador" | "Chucho",
    age: number
}

type Cat = Pick<Animal, "name" | "canSleep"> &{
    color: string
};

type Snake = Pick<Animal, "canEat" | "canDrink" | "canSleep">;

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
    race: "Husky",
    age: 3
}

const cat: Cat = {
    name: "Eustaquio",
    color: "Naranja",
    canSleep: true
}

const snake: Snake = {
    canEat: true,
    canDrink: true,
    canSleep: true
}

console.log(bird);
console.log(dog);
console.log(cat);
console.log(snake);