function* helloWorld() {
    if (true) {
        yield 'hello, ';
    }
    if (true) {
        yield 'world';
    }
};

const generetorHello = helloWorld();
console.log(generetorHello.next().value);
console.log(generetorHello.next().value);
console.log(generetorHello.next().value);