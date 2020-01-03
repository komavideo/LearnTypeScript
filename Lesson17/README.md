类的定义与使用
=============

## 知识点

* 类的定义
* 类的使用

## 实战演习

### 类的定义

~~~js
class classname {
    property_name1:type;
    property_name2:type;
    //...

    // 构造函数
    constructor(param1:type, param2:type, ...) {
        // 构造函数内容
    }

    // 类方法
    method1(param1:type, param2:type, ...):return_type {
        // 函数内容
    }
    // method2, method3, ...
}
~~~

### 类的使用

~~~js
class Person {
    name: string;
    sex: number; // 0:女;1:男

    constructor(name: string, sex: number) {
        this.name = name;
        this.sex = sex;
    }

    sayHelo() {
        console.log(`${this.name}, 你好！`);
    }
}

let koma = new Person("小马", 1);
koma.sayHelo();

// console.log(koma.name);
// console.log(koma.sex);
~~~

## 课程文件

https://github.com/komavideo/LearnTypeScript

## 小马视频频道

http://komavideo.com
