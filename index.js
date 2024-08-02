class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    func() {
        console.log(`my name is ${this.name}! age is${this.age}`);
    }
}

const person = new Person('John', 23);
const person2 = new Person('John', 23);
const person3 = new Person('John', 23);
person.func();
person2.func();
person3.func();
