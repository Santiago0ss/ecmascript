const data = {
    frontend: 'oscar',
    backend: 'laura',
    desing: 'ana'
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const string = 'Hello';
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, ' -----'))

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout(() => resolve('Hello world'), 3000)
        : reject(new Error('Test error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const otherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};
otherFunction();