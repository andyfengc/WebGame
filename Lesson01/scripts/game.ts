class Person {
    constructor() {

    }

    public walks() {
        console.log("hello walk");
    }

    public sayHello() {
        console.log("how are you?");
    }
}



function init() {
    var john = new Person();
    john.sayHello();
}