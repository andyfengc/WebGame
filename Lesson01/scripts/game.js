var Person = (function () {
    function Person() {
    }
    Person.prototype.walks = function () {
        console.log("hello walk");
    };

    Person.prototype.sayHello = function () {
        console.log("how are you?");
    };
    return Person;
})();

function init() {
    var john = new Person();
    john.sayHello();
}
//# sourceMappingURL=game.js.map
