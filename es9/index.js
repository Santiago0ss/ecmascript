const obj = {
    name: 'oscar',
    age: '32',
    contry: 'mx',
};

let { contry, ...all } = obj;
console.log(all);

const obj2 = {
    name: 'oscar',
    age: '32',
}

const obj3 = {
    ...obj2,
    contry: 'mx',
}

console.log(obj3)

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout(() => resolve('Hello wolrd'), 3000)
        : reject(new Error('Test error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);