看到不该看的东西
===============

如何看到class中定义的private属性的内容呢？

## 知识点

* getter
* setter

## 实战演习

~~~js
class Database {
    private dbname: string;

    constructor(dbname: string) {
        this.dbname = dbname;
    }

    // get name(): string {
    //     return this.dbname;
    // }

    // set name(val: string) {
    //     this.dbname = val;
    // }
}

let db = new Database("oracle is good.");
// console.log(db.dbname);
// console.log(db.name);

// db.name = "mysql is good too.";
// console.log(db.name);
~~~

## 课程文件

https://github.com/komavideo/LearnTypeScript

## 小马视频频道

http://komavideo.com
