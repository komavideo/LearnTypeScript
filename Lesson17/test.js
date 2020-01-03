var Person = /** @class */ (function () {
    function Person(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    Person.prototype.sayHelo = function () {
        console.log(this.name + ", \u4F60\u597D\uFF01" + this.sex);
    };
    return Person;
}());
var koma = new Person("小马", 1);
koma.sayHelo();
console.log(koma.name);
console.log(koma.sex);
