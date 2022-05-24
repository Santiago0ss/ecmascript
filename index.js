function newFuntion(name, age, contry) {
    var name = name || "Santiago";
    var age = age || "21";
    var contry = contry || "Colombia";
    console.log(name, age, contry);
}

// es6

function newFuntion2(name = "santiago", age = "21", contry = "Colombia"){
    console.log(name, age, contry)
};

newFuntion2();
newFuntion2("Ricardo", "23", "MX")

let hello = "Hello";
let world = "World";
let epicPharse = hello + ' ' + world;
console.log(epicPharse);
let epicPharse2 = `${hello} ${world}`;
console.log(epicPharse2)

let lorem = "Aqui escribo una frase epica \n"
+ "otra frase muy epica que necesitamos."

// es6
let lorem2 = `Una frase aun mas epica
ahora otra frase epica
`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'Santiago',
    'age': 21,
    'contry': 'COL'
}

console.log(person.name, person.age);
let {name, age} = person;
console.log(name, age);

let team1 = ['Oscar', 'Ricardo', 'santiago'];
let team2 = ['valeria', 'camila', 'Flor'];

let education = ['david', ...team1, ...team2];

console.log(education);

const names = [
    {name: 'oscar', age: 32},
    {name: 'yesica', age: 27}
]

let listOfnames = names.map(function (item) {
    console.log(item.name);
})

let listOfnames2 = names.map(item => console.log(item.name));

const listOfnames3 = (name, age, contry) => {
    ...
}

const listOfnames4 = name

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('hey!!');
        } else {
            reject('ups!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));

class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(2, 2));