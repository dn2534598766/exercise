var t1;
(function (t1) {
    var Person = /** @class */ (function () {
        function Person(theName) {
            this.name = theName;
        }
        Person.prototype.play = function () {
            console.log('我喜欢运动');
        };
        Person.prototype.eat = function () {
            console.log('吃吃');
        };
        return Person;
    }());
    var p1 = new Person('1243');
    p1.play();
    console.log(p1.name);
})(t1 || (t1 = {}));
//ts-node
