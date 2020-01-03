class Person {
    name: string;
    sex: number; // 0:女;1:男

    constructor(name: string, sex: number) {
        this.name = name;
        this.sex = sex;
    }

    sayHelo() {
        console.log(`${this.name}, 你好！${this.sex}`);
    }
}

let koma = new Person("小马", 1);
koma.sayHelo();

console.log(koma.name);
console.log(koma.sex);
